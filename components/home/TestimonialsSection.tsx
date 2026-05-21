"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "CHLOÉ",
    subtitle: "BTS Tourism",
    image: "/assets/chloe-e1754422451409.png",
    textEn: "The BTS Tourism program was an excellent springboard for me. The courses were very practical, and the work-study program allowed me to discover different aspects of the sector: it's a comprehensive program that opens many doors!",
    textFr: "Le programme BTS Tourisme a été un excellent tremplin pour moi. Les cours étaient très pratiques, et l'alternance m'a permis de découvrir différents aspects du secteur : c'est un programme complet qui ouvre de nombreuses portes !"
  },
  {
    id: 2,
    name: "MEHDI",
    subtitle: "Bachelor Sustainable and Digital Tourism Development",
    image: "/assets/medhi.png",
    textEn: "I chose this bachelor's degree because I am passionate about sustainable tourism. I loved the program's teaching approach, which combines development strategy, digital marketing, and respect for the environment. It's a program that gives you the tools you need to innovate.",
    textFr: "J'ai choisi ce bachelor parce que je suis passionné par le tourisme durable. J'ai adoré l'approche pédagogique du programme, qui allie stratégie de développement, marketing digital et respect de l'environnement. C'est un programme qui donne les outils pour innover."
  },
  {
    id: 3,
    name: "SARAH",
    subtitle: "Bachelor Hospitality Management",
    image: "/assets/sarah-e1754422877403.png",
    textEn: "Thanks to the Bachelor's degree in Hospitality Management, I was able to gain a comprehensive overview of hotel management. The lecturers are professionals in the sector, which makes the courses very enriching.",
    textFr: "Grâce au Bachelor en Management Hôtelier, j'ai pu acquérir une vision globale de la gestion hôtelière. Les intervenants sont des professionnels du secteur, ce qui rend les cours très enrichissants."
  },
  {
    id: 4,
    name: "THOMAS",
    subtitle: "Bachelor MICE Designer",
    image: "/assets/thomas-e1754422974454.png",
    textEn: "I wasn't sure what to get into, but event management appealed to me. The MICE Designer Bachelor's degree allowed me to specialize in organizing seminars, conferences, and incentives. I really liked the practical aspect of the program, especially the group projects that put us in real-life situations.",
    textFr: "Je ne savais pas trop dans quoi me lancer, mais l'événementiel m'attirait. Le Bachelor MICE Designer m'a permis de me spécialiser dans l'organisation de séminaires, congrès et incentives. J'ai beaucoup aimé l'aspect pratique du programme, notamment les projets de groupe qui nous mettent en situation réelle."
  },
  {
    id: 5,
    name: "LÉA",
    subtitle: "Mastère Manager in Tourism Strategy",
    image: "/assets/lea-e1754423064752.png",
    textEn: "After completing my bachelor's degree, I wanted to deepen my knowledge and specialize. The Master's in Tourism Strategy exceeded all my expectations!",
    textFr: "Après mon bachelor, j'ai voulu approfondir mes connaissances et me spécialiser. Le Mastère en Stratégie Touristique a dépassé toutes mes attentes !"
  }
];

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const t = {
    en: { title: "TESTIMONIALS" },
    fr: { title: "TÉMOIGNAGES" }
  }[lang];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="bg-[#F23A2E] py-8 md:py-10 overflow-hidden min-h-[466px] flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] relative w-full">
        
        {/* Heading - Less Bold */}
        <h2 className="text-white text-[28px] md:text-[36px] font-bold text-center mb-6 md:mb-8 tracking-tight uppercase">
          {t.title}
        </h2>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center min-h-[250px]">
          
          {/* Navigation Arrows - Maroon */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 text-[#7A1F1B] hover:text-[#7A1F1B]/80 transition-colors hidden md:block"
          >
            <ChevronLeft size={44} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 text-[#7A1F1B] hover:text-[#7A1F1B]/80 transition-colors hidden md:block"
          >
            <ChevronRight size={44} strokeWidth={2.5} />
          </button>

          {/* Testimonial Content - Restore to 1000px wide */}
          <div className="max-w-[1000px] w-full text-center px-4 md:px-0 mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="flex flex-col items-center"
              >
                <p className="text-white text-[12px] md:text-[16px] font-[400] italic leading-relaxed mb-6 md:mb-8">
                  "{lang === 'fr' ? TESTIMONIALS[currentIndex].textFr : TESTIMONIALS[currentIndex].textEn}"
                </p>

                <div className="flex items-center gap-5 text-left mt-4 md:mt-6">
                  <div className="relative w-[80px] h-[80px] md:w-[95px] md:h-[95px] rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                    <Image 
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      fill
                sizes="(max-width: 768px) 80px, 95px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#7A1F1B] text-[18px] md:text-[22px] font-bold uppercase tracking-tight leading-tight">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <span className="text-white/80 text-[11px] md:text-[13px] font-[500]">
                      {TESTIMONIALS[currentIndex].subtitle}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 
                ${idx === currentIndex ? 'bg-white' : 'bg-[#7A1F1B]'}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
