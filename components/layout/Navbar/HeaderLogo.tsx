"use client";

import Link from "next/link";
import AnimatedLogoMark from "@/components/layout/AnimatedLogoMark";

interface HeaderLogoProps {
  lang: "fr" | "en";
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

const linkBaseClass =
  "group block overflow-hidden rounded-b-[10px] md:rounded-b-[12px] shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-black/10 transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.28)] hover:opacity-100";

export default function HeaderLogo({ lang, variant = "desktop", onNavigate }: HeaderLogoProps) {
  if (variant === "mobile") {
    return (
      <Link
        href={`/${lang}`}
        className={`${linkBaseClass} inline-block w-[108px]`}
        onClick={onNavigate}
      >
        <AnimatedLogoMark />
      </Link>
    );
  }

  return (
    <Link
      href={`/${lang}`}
      className={`${linkBaseClass} absolute left-6 md:left-16 lg:left-24 xl:left-[200px] top-0 z-[60] w-[132px] sm:w-[152px] min-[880px]:w-[196px]`}
      aria-label="Grand Sud — Home"
      onClick={onNavigate}
    >
      <AnimatedLogoMark />
    </Link>
  );
}

export const headerLogoSpacerClass = "w-[132px] sm:w-[152px] min-[880px]:w-[196px] shrink-0";
