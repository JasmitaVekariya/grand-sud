"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const current = Math.floor(easeOutCubic(progress) * (end - start) + start);
        
        setCount(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, value]);

  return <div ref={ref}>{count}%</div>;
}

export default function ManagementSection() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: ["100% MANAGEMENT", "TOURISM SCHOOL", "SINCE 1991"],
      description: "Our comprehensive range of courses covers the diversity of the management & tourism sector: leisure, travel, events, tourism promotion, hospitality, business tourism, commerce, management and more. Our students can enroll in a five-year professional training program (BTS-Bachelor-Mastere) to develop their skills.",
      counters: [
        { label: "specialized" },
        { label: "professionalizing" },
        { label: "supported" },
      ],
    },
    fr: {
      title: ["L'ÉCOLE 100% MANAGEMENT", "ET TOURISME", "DEPUIS 1991"],
      description: "Notre offre complète de formations couvre la diversité du secteur du management et tourisme : loisirs, voyages, évènementiel, promotion de l'offre touristique, hôtellerie, tourisme d'affaires, commerce et management... Nos étudiants peuvent se former sur un cursus diplômant et professionnalisant en 5 ans BTS-Bachelor-Mastère, pour monter en compétences.",
      counters: [
        { label: "spécialisé" },
        { label: "professionnalisant" },
        { label: "accompagné" },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="bg-[#8B2318] text-white py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Title with Decorative Border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pl-8 py-2 md:py-4 max-w-[280px] md:max-w-xs"
          >
            {/* Standardized bracket style from ApplyPage */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[80px] md:w-[100px]" />
            
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold leading-[1.05] tracking-tight uppercase">
              {t.title.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </motion.div>

          {/* Right Side: Description and Aligned Counters */}
          <div className="flex flex-col gap-8 md:gap-10 mt-4 md:mt-0">
            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-[12px] md:text-[13px] font-[400] leading-relaxed opacity-90 max-w-xl">
                {t.description}
              </p>
            </motion.div>

            {/* Aligned Animated Counters */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {t.counters.map((counter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1.5 tracking-tighter leading-none">
                    <Counter value={100} />
                  </div>
                  <p className="text-[10px] md:text-[11px] font-[500] uppercase tracking-widest opacity-80 leading-tight">
                    {counter.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
