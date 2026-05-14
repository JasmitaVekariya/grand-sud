"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const PARTNER_LOGOS = [
  { src: "/assets/logo-qualiopi.png", alt: "Qualiopi" },
  { src: "/assets/logo-atout-france.png", alt: "Atout France" },
  { src: "/assets/logo-fede.png", alt: "FEDE" },
  { src: "/assets/logo-france-competences.png", alt: "France Compétences" },
  { src: "/assets/logo-amforht.png", alt: "AMFORHT" },
];

export default function Hero() {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      heading1: "SHARING THE",
      heading2: "WORLD",
      subtitle: "Join Grand Sud and get ready for jobs all around the globe !",
      apply: "APPLY",
      brochure: "BROCHURE",
      applyHref: "/en/apply",
      brochureHref: "/en/brochure"
    },
    fr: {
      heading1: "PARTAGER LE",
      heading2: "MONDE",
      subtitle: "Rejoignez l'École Grand Sud et accédez aux métiers qui vous feront partager le monde !",
      apply: "CANDIDATER",
      brochure: "BROCHURE",
      applyHref: "/fr/candidater",
      brochureHref: "/fr/brochure"
    }
  };

  const t = content[lang];

  return (
    <section className="relative w-full h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] overflow-hidden flex flex-col">
      {/* Cinematic Split Background Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        
        {/* Left Section - Video Background with Premium Slow Zoom */}
        <div className="relative h-[400px] lg:h-full overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/background-tourism.mp4" type="video/mp4" />
            </video>
          </motion.div>
          {/* Advanced Overlay: Darker on mobile for readability */}
          <div className="absolute inset-0 bg-black/40 lg:bg-black/20" />
        </div>

        {/* Right Section - Solid Color Panel */}
        <div className="bg-primary-red h-full" />
      </div>

      {/* Main Content Area - Overlapping Both Sections */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start max-w-7xl mx-auto pointer-events-auto"
          >
            <h1 className="text-white text-center lg:text-left text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight uppercase mb-6 text-balance break-words">
              {lang === "fr" ? "« " : "\""}
              {t.heading1} {t.heading2}
              {lang === "fr" ? " »" : "\""}
            </h1>
            
            <p className="text-white text-center lg:text-left text-lg md:text-xl lg:text-2xl font-medium mb-10 max-w-2xl opacity-95 leading-relaxed tracking-wide text-balance">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link 
                href={t.applyHref}
                className="bg-white text-primary-red font-bold px-12 py-4 rounded-full text-center text-base md:text-lg hover:bg-gray-100 transition-all shadow-xl tracking-widest uppercase"
              >
                {t.apply}
              </Link>
              <Link 
                href={t.brochureHref}
                className="bg-transparent border-2 border-white text-white font-bold px-12 py-4 rounded-full text-center text-base md:text-lg hover:bg-white/10 transition-all shadow-xl tracking-widest uppercase"
              >
                {t.brochure}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Structured Logo Strip - Bottom Aligned */}
      <div className="absolute bottom-0 left-0 w-full z-30 pb-8 md:pb-12 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[200px]">
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 md:gap-6 lg:mr-16 pointer-events-auto">
            {PARTNER_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 group"
              >
                <div className="relative w-full h-full bg-white rounded-md p-2 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

