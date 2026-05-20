"use client";

import { useEffect, useState } from "react";

export default function ReadingGuide() {
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
      className="fixed left-0 right-0 h-1 bg-black z-[9999] pointer-events-none transition-all duration-75 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
      style={{ top: `${y}px`, transform: "translateY(-50%)" }}
    />
  );
}
