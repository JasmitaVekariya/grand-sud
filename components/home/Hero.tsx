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
      heading: "SHARING THE WORLD",
      subtitle: "Join Grand Sud and get ready for jobs all around the globe !",
      apply: "APPLY",
      brochure: "BROCHURE",
      applyHref: "/en/apply",
      brochureHref: "/en/courses"
    },
    fr: {
      heading: "SHARING THE WORLD",
      subtitle: "Rejoignez Grand Sud et préparez-vous aux métiers du monde entier !",
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
      <div className="flex-1 container mx-auto px-4 relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-[900] leading-[0.95] mb-8 tracking-tighter uppercase">
            &quot;SHARING THE
            <br />
            WORLD&quot;
          </h1>
          
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-10 max-w-2xl opacity-95 leading-relaxed tracking-wide">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link 
              href={t.applyHref}
              className="bg-primary-red text-white font-[900] px-14 py-4 rounded-full text-center text-lg hover:bg-red-700 transition-all shadow-xl tracking-[0.1em] border-2 border-transparent hover:border-white/20"
            >
              {t.apply}
            </Link>
            <Link 
              href={t.brochureHref}
              className="bg-primary-red text-white font-[900] px-14 py-4 rounded-full text-center text-lg hover:bg-red-700 transition-all shadow-xl tracking-[0.1em] border-2 border-transparent hover:border-white/20"
            >
              {t.brochure}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Structured Logo Strip - Aligned to bottom RIGHT, fully visible */}
      <div className="relative z-10 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 lg:mr-16">
            {PARTNER_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative bg-white/95 p-2 md:p-3 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
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

      {/* Decorative Red Info Button (bottom right) */}
      <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
        <button className="w-12 h-12 bg-[#dc4b3b] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl hover:scale-110 transition-transform ring-4 ring-white/10">
          i
        </button>
      </div>
    </section>
  );
}
