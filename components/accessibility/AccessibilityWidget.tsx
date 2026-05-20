"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccessibility } from "@/context/AccessibilityContext";

export default function AccessibilityWidget() {
  const { settings, setSetting, resetAll, isOpen, setIsOpen } = useAccessibility();
  const [mounted, setMounted] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isMoveDropdownOpen, setIsMoveDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trap focus inside the menu when it's open for high-standard accessibility compliance
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && widgetRef.current) {
        const focusableElements = widgetRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!mounted) return null;

  const isLeft = settings.widgetPosition.endsWith("-left");
  const isTop = settings.widgetPosition.startsWith("top-");

  // Cycler helpers
  const cycleContrast = () => {
    const modes: ("normal" | "invert" | "dc" | "lc")[] = ["normal", "invert", "dc", "lc"];
    const currentIndex = modes.indexOf(settings.contrastMode as any);
    const nextIndex = (currentIndex + 1) % modes.length;
    setSetting("contrastMode", modes[nextIndex]);
  };

  const cycleFont = () => {
    setSetting("dyslexiaFont", (settings.dyslexiaFont + 1) % 3);
  };

  const cycleBiggerText = () => {
    setSetting("biggerText", (settings.biggerText + 1) % 5);
  };

  const cycleTextSpacing = () => {
    setSetting("textSpacing", (settings.textSpacing + 1) % 4);
  };

  const cycleCursor = () => {
    const styles: ("normal" | "large" | "guide" | "mask")[] = ["normal", "large", "guide", "mask"];
    const currentIndex = styles.indexOf(settings.cursorStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    setSetting("cursorStyle", styles[nextIndex]);
  };

  const cycleLineHeight = () => {
    setSetting("lineHeight", (settings.lineHeight + 1) % 4);
  };

  const cycleTextAlign = () => {
    const aligns: ("normal" | "left" | "center" | "right" | "justify")[] = [
      "normal",
      "left",
      "center",
      "right",
      "justify",
    ];
    const currentIndex = aligns.indexOf(settings.textAlign);
    const nextIndex = (currentIndex + 1) % aligns.length;
    setSetting("textAlign", aligns[nextIndex]);
  };

  const cycleSaturation = () => {
    const modes: ("normal" | "low" | "high" | "mono")[] = ["normal", "low", "high", "mono"];
    const currentIndex = modes.indexOf(settings.saturationMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setSetting("saturationMode", modes[nextIndex]);
  };

  const cyclePosition = () => {
    const positions: ("bottom-left" | "bottom-right" | "top-right" | "top-left")[] = [
      "bottom-left",
      "bottom-right",
      "top-right",
      "top-left",
    ];
    const currentIndex = positions.indexOf(settings.widgetPosition);
    const nextIndex = (currentIndex + 1) % positions.length;
    setSetting("widgetPosition", positions[nextIndex]);
  };

  // Get human readable values for cycle values
  const getBiggerTextLabel = () => {
    switch (settings.biggerText) {
      case 1:
        return "+10%";
      case 2:
        return "+20%";
      case 3:
        return "+30%";
      case 4:
        return "+40%";
      default:
        return "";
    }
  };

  const getTextSpacingLabel = () => {
    switch (settings.textSpacing) {
      case 1:
        return "Light";
      case 2:
        return "Medium";
      case 3:
        return "Heavy";
      default:
        return "";
    }
  };

  const getLineHeightLabel = () => {
    switch (settings.lineHeight) {
      case 1:
        return "1.5x";
      case 2:
        return "1.75x";
      case 3:
        return "2.0x";
      default:
        return "";
    }
  };

  const getContrastLabel = () => {
    switch (settings.contrastMode) {
      case "dc":
        return "Dark";
      case "lc":
        return "Light";
      case "invert":
        return "Invert Colors";
      default:
        return "";
    }
  };

  const getCursorLabel = () => {
    switch (settings.cursorStyle) {
      case "large":
        return "Large";
      case "guide":
        return "Guide";
      case "mask":
        return "Mask";
      default:
        return "";
    }
  };

  const getTextAlignLabel = () => {
    switch (settings.textAlign) {
      case "left":
        return "Left";
      case "center":
        return "Center";
      case "right":
        return "Right";
      case "justify":
        return "Justified";
      default:
        return "";
    }
  };

  const getSaturationLabel = () => {
    switch (settings.saturationMode) {
      case "low":
        return "Low";
      case "high":
        return "High";
      case "mono":
        return "Desaturate";
      default:
        return "";
    }
  };

  const renderProgressSegments = (current: number, total: number) => {
    return (
      <div className="flex gap-1.5 mt-2.5 w-[85%] justify-center select-none">
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = idx < current;
          return (
            <div
              key={idx}
              className={`h-[4.5px] rounded-full transition-all duration-300 ${
                isActive ? "bg-neutral-800 w-[18px]" : "bg-neutral-300 w-[12px]"
              }`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="acc-widget-container font-montserrat">
      {/* 2. SIDEBAR MODAL DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[9998] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              ref={widgetRef}
              initial={{ x: isLeft ? -400 : 400, opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLeft ? -400 : 400, opacity: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className={`fixed z-[9999] inset-y-0 ${
                isLeft ? "left-0 border-r" : "right-0 border-l"
              } w-full sm:w-[380px] ${
                settings.oversizedWidget ? "sm:w-[450px]" : "sm:w-[380px]"
              } bg-[#F2F4F8] shadow-3xl flex flex-col border-neutral-200 overflow-hidden h-screen max-h-screen`}
            >
              {/* Header */}
              <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-neutral-200">
                <div>
                  <h2 className="text-neutral-800 font-extrabold text-[16px] leading-tight flex items-center gap-1.5">
                    Accessibility Menu
                  </h2>
                  <p className="text-neutral-400 text-[11px] font-semibold mt-0.5">
                    Shortcut: <kbd className="bg-neutral-100 px-1 py-0.5 rounded text-[10px]">CTRL+U</kbd>
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
                  aria-label="Close Accessibility Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {/* How it works info box */}
                <a
                  href="https://userway.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-neutral-50 px-4 py-3 rounded-2xl shadow-sm text-neutral-800 text-[13px] font-bold cursor-pointer transition-colors border border-neutral-200/50 justify-center group"
                >
                  <div className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>How UserWay Works</span>
                </a>

                {/* Oversized Toggle */}
                <div className="flex items-center justify-between bg-white px-4 py-3.5 rounded-2xl border border-neutral-200/50 shadow-sm">
                  <span className="text-neutral-800 text-[13px] font-bold">Oversized Widget</span>
                  <button
                    onClick={() => setSetting("oversizedWidget", !settings.oversizedWidget)}
                    className={`relative w-12 h-6.5 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
                      settings.oversizedWidget ? "bg-black" : "bg-neutral-200"
                    }`}
                    role="switch"
                    aria-checked={settings.oversizedWidget}
                  >
                    <span
                      className={`absolute top-0.75 left-0.75 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-[10px] ${
                        settings.oversizedWidget ? "translate-x-5.5" : "translate-x-0"
                      }`}
                    >
                      {settings.oversizedWidget ? "✓" : "✗"}
                    </span>
                  </button>
                </div>

                {/* Features Grid (2 columns) */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* 1. Contrast */}
                  <button
                    onClick={cycleContrast}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.contrastMode !== "normal"
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.contrastMode !== "normal" && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v20A10 10 0 0 0 12 2Z" fill="currentColor" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Contrast
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {getContrastLabel() || "Normal"}
                    </span>
                  </button>

                  {/* 2. Highlight Links */}
                  <button
                    onClick={() => setSetting("highlightLinks", !settings.highlightLinks)}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.highlightLinks
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.highlightLinks && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Highlight Links
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {settings.highlightLinks ? "Active" : "Normal"}
                    </span>
                  </button>

                  {/* 3. Bigger Text */}
                  <button
                    onClick={cycleBiggerText}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.biggerText > 0
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.biggerText > 0 && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-neutral-800 mb-1"
                    >
                      <path d="M3 6V4h10v2M8 4v14M6 18h4" />
                      <path d="M14 10V8h7v2M17.5 8v10M16 18h3" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Bigger Text
                    </span>
                    {renderProgressSegments(settings.biggerText, 4)}
                  </button>

                  {/* 4. Text Spacing */}
                  <button
                    onClick={cycleTextSpacing}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.textSpacing > 0
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.textSpacing > 0 && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="w-7 h-7 text-neutral-800 mb-1"
                    >
                      <path d="M2 12h4M2 12l3-3m-3 3l3 3" />
                      <path d="M22 12h-4M22 12l-3-3m3 3l-3 3" />
                      <path d="M9 12h6" strokeDasharray="3 3" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Text Spacing
                    </span>
                    {renderProgressSegments(settings.textSpacing, 3)}
                  </button>

                  {/* 5. Pause Animations */}
                  <button
                    onClick={() => setSetting("pauseAnimations", !settings.pauseAnimations)}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.pauseAnimations
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                      <path d="M10 9v6M14 9v6" strokeWidth="2.5" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Pause Animations
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {settings.pauseAnimations ? "Paused" : "Normal"}
                    </span>
                  </button>

                  {/* 6. Hide Images */}
                  <button
                    onClick={() => setSetting("hideImages", !settings.hideImages)}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.hideImages
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <rect x="3" y="5" width="14" height="14" rx="2" />
                      <circle cx="7.5" cy="9.5" r="1.5" />
                      <path d="M17 14l-4.5-4.5L3 17" />
                      <path d="M18 4l4 4M22 4l-4 4" strokeWidth="2.5" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Hide Images
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {settings.hideImages ? "Hidden" : "Normal"}
                    </span>
                  </button>

                  {/* 7. Dyslexia Friendly */}
                  <button
                    onClick={cycleFont}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.dyslexiaFont > 0
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {/* Small Blue Info Badglet as shown in screenshot */}
                    <div className="absolute top-2.5 left-2.5 w-4.5 h-4.5 rounded-full bg-cyan-600/10 text-cyan-600 flex items-center justify-center text-[10px] font-black italic select-none">
                      i
                    </div>

                    {settings.dyslexiaFont > 0 && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}

                    <div className="text-[26px] font-black text-neutral-800 leading-none mb-1 select-none tracking-tight">
                      Df
                    </div>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      {settings.dyslexiaFont === 2 ? "Legible Fonts" : "Dyslexia Friendly"}
                    </span>
                    {renderProgressSegments(settings.dyslexiaFont, 2)}
                  </button>

                  {/* 8. Cursor */}
                  <button
                    onClick={cycleCursor}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.cursorStyle !== "normal"
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.cursorStyle !== "normal" && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <path d="M4 4l6.5 18 3.5-6.5 6.5-3.5L4 4z" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Cursor
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {getCursorLabel() || "Normal"}
                    </span>
                  </button>

                  {/* 9. Tooltips */}
                  <button
                    onClick={() => setSetting("tooltips", !settings.tooltips)}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.tooltips
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.tooltips && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M12 7v5M12 15h.01" strokeWidth="2.5" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Tooltips
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {settings.tooltips ? "Active" : "Normal"}
                    </span>
                  </button>

                  {/* 10. Line Height */}
                  <button
                    onClick={cycleLineHeight}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.lineHeight > 0
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    {settings.lineHeight > 0 && (
                      <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px] font-black select-none">
                        ✓
                      </div>
                    )}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="w-7 h-7 text-neutral-800 mb-1"
                    >
                      <path d="M8 6h12M8 12h12M8 18h12M4 6v12M2 9l2-3 2 3M2 15l2 3 2-3" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Line Height
                    </span>
                    {renderProgressSegments(settings.lineHeight, 3)}
                  </button>

                  {/* 11. Text Align */}
                  <button
                    onClick={cycleTextAlign}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.textAlign !== "normal"
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <path d="M4 6h16M6 12h12M4 18h16" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Text Align
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {getTextAlignLabel() || "Normal"}
                    </span>
                  </button>

                  {/* 12. Saturation */}
                  <button
                    onClick={cycleSaturation}
                    className={`relative h-28 bg-white hover:bg-neutral-50/50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-3 text-center border-2 transition-all cursor-pointer ${
                      settings.saturationMode !== "normal"
                        ? "border-black"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="w-7 h-7 text-neutral-800 mb-2.5"
                    >
                      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
                    </svg>
                    <span className="text-neutral-800 font-extrabold text-[12px] leading-tight">
                      Saturation
                    </span>
                    <span className="text-black font-bold text-[10px] mt-1 select-none">
                      {getSaturationLabel() || "Normal"}
                    </span>
                  </button>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetAll}
                  className="w-full py-4 px-4 bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-2xl border border-neutral-200/50 shadow-sm text-neutral-800 font-extrabold text-[13px] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-4 h-4 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <span>Reset All Accessibility Settings</span>
                </button>

                {/* Move Widget Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => setIsMoveDropdownOpen((prev) => !prev)}
                    className="w-full py-3 px-4 bg-transparent hover:bg-neutral-100 rounded-2xl text-neutral-800 font-extrabold text-[14px] transition-colors flex items-center justify-between cursor-pointer border border-neutral-300/40 mt-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-800 font-extrabold">Move Widget</span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-3.5 h-3.5 text-neutral-800 transition-transform duration-200 ${
                        isMoveDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMoveDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white rounded-2xl border border-neutral-200/50 shadow-sm p-4 mt-2 space-y-3">
                          {/* Option Left */}
                          <button
                            onClick={() => setSetting("widgetPosition", "bottom-left")}
                            className="w-full flex items-center justify-between py-2 text-left cursor-pointer border-b border-neutral-100 last:border-0"
                          >
                            <span className="text-neutral-600 font-bold text-[13px]">Left</span>
                            {isLeft ? (
                              <div className="relative w-6 h-6 flex items-center justify-center select-none">
                                <div className="w-6 h-6 rounded-full border-2 border-neutral-900 flex items-center justify-center p-[2px]">
                                  <div className="w-full h-full rounded-full border border-neutral-900 flex items-center justify-center bg-white">
                                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full border-2 border-neutral-300 bg-white" />
                            )}
                          </button>

                          {/* Option Right */}
                          <button
                            onClick={() => setSetting("widgetPosition", "bottom-right")}
                            className="w-full flex items-center justify-between py-2 text-left cursor-pointer"
                          >
                            <span className="text-neutral-600 font-bold text-[13px]">Right</span>
                            {!isLeft ? (
                              <div className="relative w-6 h-6 flex items-center justify-center select-none">
                                <div className="w-6 h-6 rounded-full border-2 border-neutral-900 flex items-center justify-center p-[2px]">
                                  <div className="w-full h-full rounded-full border border-neutral-900 flex items-center justify-center bg-white">
                                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full border-2 border-neutral-300 bg-white" />
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-white px-5 py-4 flex items-center justify-between border-t border-neutral-200">
                <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-extrabold text-[11px] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer">
                  Manage
                </button>

                {/* Logo Branding */}
                <div className="flex items-center gap-1.5 select-none">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-black">
                    A
                  </div>
                  <div className="text-[12px] font-black text-neutral-800 tracking-tight leading-none">
                    ACCESSIBILIK
                    <span className="block text-[8px] font-medium text-neutral-400 mt-0.5 leading-none">
                      by grand sud school
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
