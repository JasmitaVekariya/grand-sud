"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";

export interface AccessibilitySettings {
  biggerText: number; // 0, 1, 2, 3, 4
  textSpacing: number; // 0, 1, 2, 3
  lineHeight: number; // 0, 1, 2, 3
  textAlign: "normal" | "left" | "center" | "right" | "justify";
  highlightLinks: boolean;
  contrastMode: "normal" | "hc" | "dc" | "lc" | "mono" | "invert";
  saturationMode: "normal" | "low" | "high" | "mono";
  pauseAnimations: boolean;
  hideImages: boolean;
  dyslexiaFont: number; // 0 = Normal, 1 = Dyslexia Friendly, 2 = Legible Fonts
  cursorStyle: "normal" | "large" | "guide" | "mask";
  tooltips: boolean;
  oversizedWidget: boolean;
  widgetPosition: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

const defaultSettings: AccessibilitySettings = {
  biggerText: 0,
  textSpacing: 0,
  lineHeight: 0,
  textAlign: "normal",
  highlightLinks: false,
  contrastMode: "normal",
  saturationMode: "normal",
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFont: 0,
  cursorStyle: "normal",
  tooltips: false,
  oversizedWidget: false,
  widgetPosition: "bottom-right",
};

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  setSetting: <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => void;
  resetAll: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("grand-sud-accessibility-settings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) {
          if (parsed.widgetPosition === "bottom-left") {
            parsed.widgetPosition = "bottom-right";
          }
          // Migrate old boolean dyslexiaFont value to number if loaded
          if (typeof parsed.dyslexiaFont === "boolean") {
            parsed.dyslexiaFont = parsed.dyslexiaFont ? 1 : 0;
          }
        }
        setSettings({ ...defaultSettings, ...parsed });
      }
    } catch (e) {
      console.error("Error loading accessibility settings:", e);
    }
  }, []);

  // Save to localStorage when settings change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("grand-sud-accessibility-settings", JSON.stringify(settings));
    } catch (e) {
      console.error("Error saving accessibility settings:", e);
    }
  }, [settings, mounted]);

  // Apply CSS classes to document element based on settings
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;

    // Helper to clear classes of a certain prefix
    const clearClassesByPrefix = (prefix: string) => {
      const classes = Array.from(html.classList).filter((c) => c.startsWith(prefix));
      classes.forEach((c) => html.classList.remove(c));
    };

    // 1. Bigger Text
    clearClassesByPrefix("acc-text-");
    if (settings.biggerText > 0) {
      html.classList.add(`acc-text-${settings.biggerText}`);
    }

    // 2. Text Spacing
    clearClassesByPrefix("acc-spacing-");
    if (settings.textSpacing > 0) {
      html.classList.add(`acc-spacing-${settings.textSpacing}`);
    }

    // 3. Line Height
    clearClassesByPrefix("acc-lineheight-");
    if (settings.lineHeight > 0) {
      html.classList.add(`acc-lineheight-${settings.lineHeight}`);
    }

    // 4. Text Align
    clearClassesByPrefix("acc-align-");
    if (settings.textAlign !== "normal") {
      html.classList.add(`acc-align-${settings.textAlign}`);
    }

    // 5. Highlight Links
    if (settings.highlightLinks) {
      html.classList.add("acc-highlight-links");
    } else {
      html.classList.remove("acc-highlight-links");
    }

    // 6. Contrast Mode
    clearClassesByPrefix("acc-contrast-");
    if (settings.contrastMode !== "normal") {
      html.classList.add(`acc-contrast-${settings.contrastMode}`);
    }

    // 7. Saturation Mode
    clearClassesByPrefix("acc-sat-");
    if (settings.saturationMode !== "normal") {
      html.classList.add(`acc-sat-${settings.saturationMode}`);
    }

    // 8. Pause Animations & HTML5 Videos
    if (settings.pauseAnimations) {
      html.classList.add("acc-pause-anim");
    } else {
      html.classList.remove("acc-pause-anim");
    }

    // Freeze autoplay/playing videos globally when Pause Animations is checked
    try {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => {
        if (settings.pauseAnimations) {
          video.pause();
        } else {
          if (video.hasAttribute("autoplay") || video.autoplay) {
            video.play().catch(() => {});
          }
        }
      });
    } catch (err) {
      console.warn("Could not modify video playback state:", err);
    }

    // 9. Hide Images
    if (settings.hideImages) {
      html.classList.add("acc-hide-images");
    } else {
      html.classList.remove("acc-hide-images");
    }

    // 10. Dyslexia & Legible Fonts
    clearClassesByPrefix("acc-font-");
    if (settings.dyslexiaFont === 1) {
      html.classList.add("acc-font-dyslexic");
    } else if (settings.dyslexiaFont === 2) {
      html.classList.add("acc-font-legible");
    }

    // 11. Cursor Style
    clearClassesByPrefix("acc-cursor-");
    if (settings.cursorStyle !== "normal") {
      html.classList.add(`acc-cursor-${settings.cursorStyle}`);
    }
  }, [settings, mounted]);

  // Handle CTRL+U shortcut to open/close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const setSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetAll = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider value={{ settings, setSetting, resetAll, isOpen, setIsOpen }}>
      <MotionConfig reducedMotion={settings.pauseAnimations ? "always" : "user"}>
        {children}
      </MotionConfig>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
