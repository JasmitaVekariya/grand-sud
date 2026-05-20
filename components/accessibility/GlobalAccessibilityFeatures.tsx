"use client";

import { useAccessibility } from "@/context/AccessibilityContext";
import ReadingGuide from "./ReadingGuide";
import ReadingMask from "./ReadingMask";
import AccessibleTooltips from "./AccessibleTooltips";

export default function GlobalAccessibilityFeatures() {
  const { settings } = useAccessibility();

  return (
    <>
      {settings.cursorStyle === "guide" && <ReadingGuide />}
      {settings.cursorStyle === "mask" && <ReadingMask />}
      {settings.tooltips && <AccessibleTooltips />}
    </>
  );
}
