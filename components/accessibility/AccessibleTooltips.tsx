"use client";

import { useEffect, useState } from "react";

interface TooltipState {
  text: string;
  x: number;
  y: number;
}

export default function AccessibleTooltips() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const elementWithLabel = target.closest("[aria-label], [title], [alt]") as HTMLElement;
      if (elementWithLabel && !elementWithLabel.closest(".acc-widget-container")) {
        const text =
          elementWithLabel.getAttribute("aria-label") ||
          elementWithLabel.getAttribute("title") ||
          elementWithLabel.getAttribute("alt");

        if (text && text.trim()) {
          const rect = elementWithLabel.getBoundingClientRect();
          setTooltip({
            text: text.trim(),
            x: rect.left + rect.width / 2,
            y: rect.bottom + 8 + window.scrollY,
          });
        }
      }
    };

    const handleMouseOut = () => {
      setTooltip(null);
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!tooltip) return null;

  return (
    <div
      className="absolute bg-neutral-900 text-white text-[13px] px-3.5 py-2 rounded-lg shadow-2xl z-[99999] pointer-events-none max-w-[280px] text-center border border-white/20 font-montserrat tracking-wide leading-relaxed"
      style={{
        left: `${tooltip.x}px`,
        top: `${tooltip.y}px`,
        transform: "translateX(-50%)",
      }}
    >
      {tooltip.text}
    </div>
  );
}
