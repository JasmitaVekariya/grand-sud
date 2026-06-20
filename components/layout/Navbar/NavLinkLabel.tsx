"use client";

import { useLanguage } from "@/context/LanguageContext";

interface NavLinkLabelProps {
  label: string;
  isNew?: boolean;
  variant?: "mega" | "mobile";
}

export default function NavLinkLabel({ label, isNew, variant = "mega" }: NavLinkLabelProps) {
  const { lang } = useLanguage();
  const badgeText = lang === "fr" ? "Nouveauté" : "New";

  if (!isNew) {
    return <>{label}</>;
  }

  const badgeClass =
    variant === "mobile"
      ? "inline-flex items-center rounded-sm bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#3d1311] ml-2"
      : "inline-flex items-center rounded-sm bg-amber-400 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#3d1311] ml-2 shrink-0";

  return (
    <span className="inline-flex items-center flex-wrap gap-x-1">
      <span>{label}</span>
      <span className={badgeClass}>{badgeText}</span>
    </span>
  );
}
