"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    image: "/assets/curriculum-bts.png",
    content: {
      en: {
        title: "BTS - Associate's degrees (BAC+2)",
        items: [
          { flag: "fr", text: "Tourism" },
          { flag: "fr", text: "Communication" },
        ],
      },
      fr: {
        title: "BTS - Diplômes d'associé (BAC+2)",
        items: [
          { flag: "fr", text: "Tourisme" },
          { flag: "fr", text: "Communication" },
        ],
      },
    },
  },
  {
    image: "/assets/curriculum-bachelor.png",
    content: {
      en: {
        title: "Bachelors - BAC+3",
        items: [
          { flag: "fr", text: "Hospitality Management" },
          { flag: "fr", text: "MICE Designer" },
          { flag: "fr", text: "Sustainable Tourism Development Manager" },
          { flag: "gb", text: "Hospitality Management" },
          { flag: "gb", text: "Business & Tourism" },
          { flag: "gb", text: "IT & Tourism" },
        ],
      },
      fr: {
        title: "Bachelors - BAC+3",
        items: [
          { flag: "fr", text: "Hospitality Management" },
          { flag: "fr", text: "MICE Designer" },
          { flag: "fr", text: "Responsable du développement touristique durable et digital" },
          { flag: "gb", text: "Hospitality Management" },
          { flag: "gb", text: "Business & Tourism" },
          { flag: "gb", text: "IT & Tourism" },
        ],
      },
    },
  },
  {
    image: "/assets/curriculum-master.png",
    content: {
      en: {
        title: "Masters - BAC+5",
        items: [
          { flag: "fr", text: "Tourism Strategy Manager" },
          { flag: "gb", text: "Business & Tourism" },
          { flag: "gb", text: "Hospitality Management" },
          { flag: "gb", text: "IT & Tourism" },
        ],
      },
      fr: {
        title: "Mastères - BAC+5",
        items: [
          { flag: "fr", text: "Manager en Stratégies Touristiques" },
          { flag: "gb", text: "Business & Tourism" },
          { flag: "gb", text: "Hospitality Management" },
          { flag: "gb", text: "IT & Tourism" },
        ],
      },
    },
  },
];

export default function CurriculumSlider() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => paginate(1), 5000); 
      return () => clearInterval(timer);
    }
  }, [isPaused, paginate]);

  const handleManualNav = (dir: "next" | "prev") => {
    setIsPaused(true);
    if (dir === "next") paginate(1);
    else paginate(-1);
    setTimeout(() => setIsPaused(false), 20000);
  };

  const t = {
    en: { heading: "CURRICULUM OPEN TO THE WORLD" },
    fr: { heading: "UN CURSUS OUVERT SUR LE MONDE" },
  }[lang];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="py-8 md:py-12 bg-white overflow-visible">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] relative">
        {/* Heading without Overlapping Effect */}
        <div className="relative z-30 mb-6 md:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary-red text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tighter leading-[0.9] whitespace-nowrap"
          >
            {t.heading}
          </motion.h2>
        </div>

        {/* Full-Bleed Card Layout (No Border Radius) */}
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gray-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[current].image})` }}
              />
              
              {/* Branded Red Overlay */}
              <div className="absolute inset-0 bg-primary-red/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Slide Content - Compact Typography */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-12 md:px-16 lg:px-24 pt-12 md:pt-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-2xl text-white"
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg uppercase tracking-tight leading-tight">
                      {slides[current].content[lang].title}
                    </h3>
                    <ul className="flex flex-col gap-y-1.5 md:gap-y-2">
                      {slides[current].content[lang].items.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.05, duration: 0.4 }}
                          className="flex items-center gap-3 text-sm md:text-base lg:text-lg font-bold"
                        >
                          <img src={`https://flagcdn.com/w40/${item.flag}.png`} alt={item.flag} className="w-6 h-auto flex-shrink-0 drop-shadow-md" />
                          <span className="drop-shadow-md leading-tight tracking-wide">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Red Navigation Arrows - Fixed to Card Boundaries */}
          <button
            onClick={() => handleManualNav("prev")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-1 text-primary-red hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={5} />
          </button>
          <button
            onClick={() => handleManualNav("next")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-1 text-primary-red hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={5} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const newDir = idx > current ? 1 : -1;
                  setIsPaused(true);
                  setDirection(newDir);
                  setCurrent(idx);
                  setTimeout(() => setIsPaused(false), 20000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  current === idx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
