"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PRIMARY_LOGO = "/assets/logo.jpg";
const ANNIVERSARY_LOGO = "/assets/logo_35-white.png";
const DEFAULT_FLIP_INTERVAL = 5000;
const FLIP_DURATION = 0.85;

interface AnimatedLogoMarkProps {
  flipInterval?: number;
  className?: string;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AnimatedLogoMark({
  flipInterval = DEFAULT_FLIP_INTERVAL,
  className = "relative w-full aspect-square [perspective:1200px]",
}: AnimatedLogoMarkProps) {
  const [showAnniversary, setShowAnniversary] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setReduceMotion(reduced);
    if (reduced) return;

    const interval = window.setInterval(() => {
      setShowAnniversary((prev) => !prev);
    }, flipInterval);

    return () => window.clearInterval(interval);
  }, [flipInterval]);

  if (reduceMotion) {
    return (
      <img
        src={PRIMARY_LOGO}
        alt="Grand Sud Logo"
        width={881}
        height={683}
        className="block h-auto w-full"
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <div className={className}>
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: showAnniversary ? 180 : 0 }}
        transition={{ duration: FLIP_DURATION, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <img
            src={PRIMARY_LOGO}
            alt="Grand Sud Logo"
            width={881}
            height={683}
            className="block h-full w-full object-cover object-[center_18%]"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white via-white to-[#fff0ee] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={ANNIVERSARY_LOGO}
            alt="Grand Sud 35th Anniversary"
            width={704}
            height={693}
            className="block h-full w-full object-cover object-center scale-[1.03]"
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-primary-red" aria-hidden="true" />
        </div>
      </motion.div>
    </div>
  );
}
