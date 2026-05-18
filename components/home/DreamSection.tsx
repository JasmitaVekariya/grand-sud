"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DreamSection() {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: ["DOES ALL THIS", "MAKE YOU", "DREAM?"],
      cards: [
        { title: "APPLY TO OUR COURSES", image: "/assets/apply-course-card.jpg" },
        { title: "MEET US", image: "/assets/meet-us-card.jpg" },
        { title: "DOWNLOAD THE BROCHURE", image: "/assets/brochure-card.jpg" }
      ]
    },
    fr: {
      title: ["TOUT CELA", "VOUS FAIT", "RÊVER ?"],
      cards: [
        { title: "POSTULEZ À NOS FORMATIONS", image: "/assets/apply-course-card.jpg" },
        { title: "RENCONTREZ-NOUS", image: "/assets/meet-us-card.jpg" },
        { title: "TÉLÉCHARGEZ LA BROCHURE", image: "/assets/brochure-card.jpg" }
      ]
    }
  }[lang];

  return (
    <section className="bg-[#efefef] py-16 md:py-24 border-t border-b border-primary-red overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side - Large Impactful Heading with Bracket */}
          <div className="relative py-8 pl-10 md:pl-16 shrink-0 w-full md:w-auto">
            {/* Standardized bracket style from ApplyPage */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-primary-red w-[80px] md:w-[100px]" />
            
            <h2 className="text-[#222] tracking-tighter">
              {t.title.map((line, idx) => (
                <span 
                  key={idx} 
                  className="block text-[32px] md:text-[48px] lg:text-[56px] font-bold uppercase leading-[0.9] whitespace-nowrap"
                >
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Right Side - Stacked CTA Cards */}
          <div className="flex flex-col gap-6 md:gap-8 w-full md:w-auto">
            {t.cards.map((card, idx) => {
              const content = (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-6 cursor-pointer group"
                >
                  {/* Rectangular Image with White Overlay on Hover */}
                  <div className="relative w-[120px] h-[80px] md:w-[150px] md:h-[100px] shrink-0 overflow-hidden shadow-md">
                    <Image 
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    {/* White Overlay on Hover */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>

                  {/* Text Beside Image with Translate Effect */}
                  <motion.h4 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-[14px] md:text-[18px] lg:text-[20px] font-bold text-[#444] uppercase tracking-tight leading-tight max-w-[200px] md:max-w-[300px] group-hover:text-primary-red transition-colors"
                  >
                    {card.title}
                  </motion.h4>
                </motion.div>
              );

              if (idx === 0) {
                const applyHref = lang === "en" ? "/en/apply" : "/fr/candidater";
                return (
                  <Link href={applyHref} key={idx}>
                    {content}
                  </Link>
                );
              }

              if (idx === 1) {
                const meetUsHref = lang === "en" ? "/en/school/meetus" : "/fr/lecole/rencontrer";
                return (
                  <Link href={meetUsHref} key={idx}>
                    {content}
                  </Link>
                );
              }

              if (idx === 2) {
                const brochureHref = lang === "en" ? "/en/brochure" : "/fr/brochure";
                return (
                  <Link href={brochureHref} key={idx}>
                    {content}
                  </Link>
                );
              }

              return content;
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
