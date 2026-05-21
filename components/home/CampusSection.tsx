"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const IMAGES = [
  "/campus/campus-1.jpg",
  "/campus/campus-2.jpg",
  "/campus/campus-3.jpg",
  "/campus/campus-4.jpg",
  "/campus/campus-5.jpg",
  "/campus/campus-6.jpg",
];

const content = {
  en: {
    label: "CAMPUS",
    title: ["TOULOUSE -", "LABÈGE"],
    description: [
      "EUROPE AT YOUR",
      "FINGERTIPS, THE",
      "WORLD JUST A",
      "STONE'S THROW",
      "AWAY"
    ],
    button: "APPLY",
  },
  fr: {
    label: "CAMPUS",
    title: ["TOULOUSE -", "LABÈGE"],
    description: [
      "L'EUROPE À PORTÉE",
      "DE MAIN, LE MONDE",
      "À DEUX PAS"
    ],
    button: "CANDIDATER",
  },
};

export default function CampusSection() {
  const { lang } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const t = content[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center py-4">
            <span className="text-[14px] font-[500] uppercase tracking-[0.25em] text-gray-400 mb-2 ml-1">
              {t.label}
            </span>
            
            <h2 className="text-[32px] md:text-[54px] font-bold text-primary-red leading-[1.0] tracking-tight mb-1">
              {t.title[0]} {t.title[1]}
            </h2>

            <div className="flex flex-col gap-0 mb-8">
              {t.description.map((line, idx) => (
                <h3 
                  key={idx}
                  className="text-[32px] md:text-[54px] font-bold text-[#4d1a18] leading-[1.0] uppercase tracking-tight"
                >
                  {line}
                </h3>
              ))}
            </div>

          </div>

          {/* Right Image Slider - Fixed Height to match content */}
          <div className="relative w-full h-[300px] md:h-auto min-h-[400px] overflow-hidden bg-gray-50 shadow-sm">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={IMAGES[currentIdx]}
                  alt={`Campus view ${currentIdx + 1}`}
                  fill
                sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
