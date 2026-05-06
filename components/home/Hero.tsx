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
      brochureHref: "/en/courses"
    },
    fr: {
      heading1: "PARTAGER LE",
      heading2: "MONDE",
      subtitle: "Rejoignez l'École Grand Sud et accédez aux métiers qui vous feront partager le monde !",
      apply: "CANDIDATER",
      brochure: "BROCHURE",
      applyHref: "/fr/candidater",
      brochureHref: "/fr/formations"
    }
  };

  const t = content[lang];

  return (
    <section className="relative w-full h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] overflow-hidden flex flex-col">
      {/* Background Video with Premium Slow Zoom */}
      <div className="absolute inset-0 z-0">
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
        {/* Advanced Overlay: Left Darker Gradient */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Main Content Area - Vertically Centered */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] relative h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95] mb-6 tracking-tight uppercase">
            {lang === "fr" ? "« " : "\""}
            {t.heading1} {t.heading2}
            {lang === "fr" ? " »" : "\""}
          </h1>
          
          <p className="text-white text-base md:text-lg lg:text-xl font-medium mb-8 max-w-2xl opacity-95 leading-relaxed tracking-wide">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Link 
              href={t.applyHref}
              className="bg-primary-red text-white font-bold px-10 py-3 rounded-full text-center text-base hover:bg-red-700 transition-all shadow-lg tracking-wide"
            >
              {t.apply}
            </Link>
            <Link 
              href={t.brochureHref}
              className="bg-primary-red text-white font-bold px-10 py-3 rounded-full text-center text-base hover:bg-red-700 transition-all shadow-lg tracking-wide"
            >
              {t.brochure}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Structured Logo Strip - Aligned to bottom RIGHT, fully visible */}
      <div className="relative z-10 pb-8 md:pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[200px]">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 lg:mr-16">
            {PARTNER_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300 group"
              >
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-1"
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
