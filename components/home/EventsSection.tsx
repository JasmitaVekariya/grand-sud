"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const events = [
  { day: "11", month: "JULY", time: "10:00 AM - 1:00 PM", title: "Open Days", monthFr: "JUILLET", titleFr: "Journées Portes Ouvertes" },
  { day: "17", month: "JUNE", time: "5:00 PM - 8:30 PM", title: "Information Evening", monthFr: "JUIN", titleFr: "Soirée d'information" },
  { day: "13", month: "JUNE", time: "10:00 AM - 1:00 PM", title: "Open Days", monthFr: "JUIN", titleFr: "Journées Portes Ouvertes" },
  { day: "30", month: "MAY", time: "10:00 AM - 1:00 PM", title: "Open Days", monthFr: "MAI", titleFr: "Journées Portes Ouvertes" },
  { day: "20", month: "MAY", time: "5:00 PM - 8:30 PM", title: "Information Evening", monthFr: "MAI", titleFr: "Soirée d'information" },
  { day: "15", month: "APRIL", time: "5:00 PM - 8:30 PM", title: "Information Evening", monthFr: "AVRIL", titleFr: "Soirée d'information" },
  { day: "11", month: "APRIL", time: "10:00 AM - 1:00 PM", title: "Open Days", monthFr: "AVRIL", titleFr: "Journées Portes Ouvertes" },
];

export default function EventsSection() {
  const { lang } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const scrollControls = useAnimation();
  
  // Duplicate events for seamless scrolling
  const allEvents = [...events, ...events];

  useEffect(() => {
    if (!isPaused) {
      scrollControls.start({
        y: ["0%", "-50%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      scrollControls.stop();
    }
  }, [isPaused, scrollControls]);

  const t = {
    en: {
      news: "NEWS",
      upcoming: "UPCOMING EVENTS",
      leftDate: "4 OCTOBER 2025",
      leftTitle: ["REFORM OF", "APPRENTICESHIP", "S FROM JULY 1,", "2025"]
    },
    fr: {
      news: "ACTUALITÉS",
      upcoming: "ÉVÉNEMENTS À VENIR",
      leftDate: "4 OCTOBRE 2025",
      leftTitle: ["REFORME DE", "L'APPRENTISSAGE", "DÈS LE 1 JUILLET,", "2025"]
    }
  }[lang];

  return (
    <section className="bg-[#F23A2E] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        
        {/* Section Heading */}
        <h2 className="text-white text-[40px] md:text-[56px] font-bold text-center mb-6 md:mb-10 tracking-tight uppercase">
          {t.news}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
          
          {/* Left Static Card - Height 330px, Vertically Centered */}
          <motion.div 
            className="w-full md:w-1/3 h-auto md:h-[330px] group relative bg-white rounded-[20px] overflow-hidden shadow-lg shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Full Card Medium Red Overlay on Hover */}
            <div className="absolute inset-0 bg-[#A52A25] opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-10" />

            <div className="p-5 md:p-6 flex flex-col h-full justify-between">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
                <Image 
                  src="/assets/events_planer.png"
                  alt="Events Planner"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-[600] text-[#2B2B2B]/60 uppercase tracking-widest">
                  {t.leftDate}
                </span>
                <h3 className="text-[16px] md:text-[20px] font-bold text-[#7A1F1B] leading-[1.1] uppercase">
                  {t.leftTitle.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Scrolling Events - Height 350px */}
          <div className="w-full md:w-2/3 h-[350px] flex flex-col min-w-0">
            {/* Header Bar */}
            <div className="bg-[#7A1F1B] text-white py-[14px] px-8 rounded-t-[16px] text-center shrink-0 h-[50px]">
              <h4 className="text-[15px] font-bold uppercase tracking-[0.2em]">
                {t.upcoming}
              </h4>
            </div>

            {/* Scrollable Container */}
            <div 
              className="flex-1 bg-[#F5F5F5] rounded-b-[16px] shadow-xl overflow-hidden relative border-x border-b border-[#E5E5E5]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={scrollControls}
                  className="flex flex-col p-[12px] md:p-[15px] gap-[14px]"
                >
                  {allEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 px-4 rounded-xl border-l-[6px] border-[#7A1F1B] bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer w-full h-[70px] shrink-0"
                    >
                      {/* Date Block */}
                      <div className="flex flex-col items-center justify-center bg-[#7A1F1B] text-white min-w-[50px] py-1 rounded-lg">
                        <span className="text-[18px] font-[800] leading-none">{event.day}</span>
                        <span className="text-[8px] font-[600] uppercase mt-0.5">
                          {lang === 'fr' ? event.monthFr : event.month}
                        </span>
                      </div>

                      {/* Event Info */}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-[600] text-[#2B2B2B]/50 uppercase">
                          {event.time}
                        </span>
                        <h5 className="text-[14px] md:text-[16px] font-bold text-[#7A1F1B] leading-tight mt-0.5">
                          {lang === 'fr' ? event.titleFr : event.title}
                        </h5>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
