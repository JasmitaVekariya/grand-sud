"use client";

import { useEffect, useState } from "react";

export default function ReadingMask() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none transition-all duration-75"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65) 0px, rgba(0,0,0,0.65) ${y - 50}px, transparent ${y - 50}px, transparent ${y + 50}px, rgba(0,0,0,0.65) ${y + 50}px, rgba(0,0,0,0.65) 100%)`,
      }}
    />
  );
}
