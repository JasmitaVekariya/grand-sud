"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const COPY = {
  en: "Celebrating 35 years .........!",
  fr: "Célébrons 35 ans .........!",
} as const;

const TIMING = {
  logoFadeIn: 400,
  logoBlink: 750,
  typewriterChar: 35,
  holdAfterText: 1200,
  fadeOut: 400,
  reducedMotionHold: 1200,
} as const;

type Phase = "idle" | "logo" | "blink" | "typewriter" | "exit" | "done";

function isHomepage(pathname: string) {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return normalized === "/en" || normalized === "/fr";
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SiteIntro() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const startedRef = useRef(false);
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText = COPY[lang];

  const finishIntro = useCallback(() => {
    setPhase("done");
    setActive(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!isHomepage(pathname)) {
      setActive(false);
      setPhase("idle");
      setTypedText("");
      document.body.style.overflow = "";
      return;
    }

    if (startedRef.current) return;
    startedRef.current = true;

    setActive(true);
    setPhase("logo");
    setTypedText("");
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [pathname]);

  useEffect(() => {
    if (!active || phase === "idle" || phase === "done" || phase === "exit") return;

    if (prefersReducedMotion()) {
      if (phase !== "logo") return;

      setTypedText(fullText);
      setPhase("typewriter");
      const timer = window.setTimeout(() => setPhase("exit"), TIMING.reducedMotionHold);
      return () => window.clearTimeout(timer);
    }

    if (phase === "logo") {
      const timer = window.setTimeout(() => setPhase("blink"), TIMING.logoFadeIn);
      return () => window.clearTimeout(timer);
    }

    if (phase === "blink") {
      const timer = window.setTimeout(() => setPhase("typewriter"), TIMING.logoBlink);
      return () => window.clearTimeout(timer);
    }

    if (phase === "typewriter") {
      if (typedText.length >= fullText.length) {
        const timer = window.setTimeout(() => setPhase("exit"), TIMING.holdAfterText);
        return () => window.clearTimeout(timer);
      }

      const timer = window.setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, TIMING.typewriterChar);
      return () => window.clearTimeout(timer);
    }
  }, [active, phase, typedText, fullText]);

  useEffect(() => {
    if (phase !== "typewriter") return;

    const interval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(finishIntro, TIMING.fadeOut);
    return () => window.clearTimeout(timer);
  }, [phase, finishIntro]);

  if (!active || phase === "done") {
    return null;
  }

  const showText = phase === "typewriter" || phase === "exit";

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label={lang === "fr" ? "Introduction Grand Sud" : "Grand Sud introduction"}
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: TIMING.fadeOut / 1000, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={
          phase === "blink"
            ? { opacity: [1, 0.35, 1, 0.35, 1], scale: 1, y: 0 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={
          phase === "blink"
            ? { duration: TIMING.logoBlink / 1000, ease: "easeInOut" }
            : { duration: TIMING.logoFadeIn / 1000, ease: "easeOut" }
        }
        className="w-[148px] sm:w-[175px] md:w-[190px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-[12px]"
      >
        <img
          src="/assets/logo.jpg"
          alt="Grand Sud Logo"
          width={881}
          height={683}
          className="block h-auto w-full"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: phase === "exit" ? 0 : 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-10 max-w-3xl text-center text-primary-red text-lg sm:text-xl md:text-2xl font-semibold tracking-wide min-h-[2.5rem]"
        >
          {typedText}
          {phase === "typewriter" && (
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
          )}
        </motion.p>
      )}
    </motion.div>
  );
}
