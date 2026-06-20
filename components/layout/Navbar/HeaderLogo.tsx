"use client";

import Link from "next/link";

interface HeaderLogoProps {
  lang: "fr" | "en";
  variant?: "desktop" | "mobile";
}

export default function HeaderLogo({ lang, variant = "desktop" }: HeaderLogoProps) {
  const logoImg = (
    <img
      src="/assets/logo.jpg"
      alt="Grand Sud Logo"
      width={881}
      height={683}
      className="block h-auto w-full"
      loading="eager"
      decoding="async"
    />
  );

  if (variant === "mobile") {
    return (
      <Link href={`/${lang}`} className="inline-block w-[100px] hover:opacity-90 transition-opacity">
        {logoImg}
      </Link>
    );
  }

  return (
    <Link
      href={`/${lang}`}
      className="absolute left-6 md:left-16 lg:left-24 xl:left-[200px] top-0 z-[60] block w-[128px] sm:w-[148px] min-[880px]:w-[190px] hover:opacity-95 transition-opacity rounded-b-[10px] md:rounded-b-[12px] overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
      aria-label="Grand Sud — Home"
    >
      {logoImg}
    </Link>
  );
}

export const headerLogoSpacerClass = "w-[128px] sm:w-[148px] min-[880px]:w-[190px] shrink-0";
