"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Signpost, Home, Map } from "lucide-react";

export default function CampusToulouseLabegePage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  // Scroll zoom animation
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  // Sync language with URL path
  useEffect(() => {
    if (pathname.startsWith("/fr")) {
      setLang("fr");
    } else if (pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [pathname, setLang]);

  const t = {
    en: {
      heading: "CAMPUS TOULOUSE-\nLABEGE",
      p1: "The Toulouse-Labège campus is the new campus of the school since 2024, after several years in the center of Toulouse.",
      p2: "Exit the difficulties to park in the city center, the terraces and restaurants crowded at lunchtime, place to a larger campus, at the center of a diversified activity zone and green spaces!",
      p3: "It is ideally located, close to the city, accessible by public transport and convenient to reach by car.",
      box1: {
        title: "The campus and its surroundings",
        subtitle: "Discover the campus in detail as well as the health points around it"
      },
      box2: {
        title: "Housing close to the campus",
        subtitle: "Some addresses to help you find your future at home closer to school!"
      },
      box3: {
        title: "The city of Toulouse",
        subtitle: "Close to the campus, it is important to know some details about life in Toulouse"
      }
    },
    fr: {
      heading: "CAMPUS TOULOUSE-\nLABEGE",
      p1: "Le campus Toulouse-Labège est le nouveau campus de l'école depuis 2024, après plusieurs années en plein centre de Toulouse.",
      p2: "Fini les difficultés pour se garer en centre-ville, les terrasses et restaurants bondés le midi, place à un campus plus grand, au cœur d'une zone d'activité diversifiée et d'espaces verts !",
      p3: "Il est idéalement situé, proche de la ville, accessible en transports en commun et facile d'accès en voiture.",
      box1: {
        title: "Le campus et ses environs",
        subtitle: "Découvrez le campus en détail ainsi que les points de restauration autour"
      },
      box2: {
        title: "Se loger près du campus",
        subtitle: "Quelques adresses pour vous aider à trouver votre futur chez-vous plus près de l'école !"
      },
      box3: {
        title: "La ville de Toulouse",
        subtitle: "Proche du campus, il est important de connaître quelques détails sur la vie toulousaine"
      }
    },
  }[lang];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full relative bg-white">
      {/* Left Section - Image (Fixed width 565px) */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[400px] lg:h-auto overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/campus-toulouse.jpg"
              alt="Campus Toulouse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 565px"
              priority
            />
          </motion.div>
          {/* Red overlay to match the Apply Form style */}
          <div className="absolute inset-0 bg-[#dc4b3b]/60 pointer-events-none" />
          
          <div className="absolute left-6 md:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none">
            {/* White border bracket: bold lines with small horizontal width */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[100px]" />
            <h1 className="text-white text-[32px] md:text-[42px] lg:text-[48px] font-bold uppercase leading-[1.1] text-left tracking-tight whitespace-pre-line relative z-10">
              {t.heading}
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 px-6 pb-12 md:px-12 lg:px-20 pt-[60px] md:pt-[90px] flex flex-col items-start bg-white">
        <div className="max-w-[800px] w-full">
          {/* Top Text */}
          <div className="space-y-6 mb-12">
            <p className="text-black text-[15px] font-medium leading-relaxed">
              {t.p1}
            </p>
            <p className="text-black text-[15px] font-medium leading-relaxed">
              {t.p2}
            </p>
            <p className="text-black text-[15px] font-medium leading-relaxed">
              {t.p3}
            </p>
          </div>

          {/* Nav Boxes */}
          <div className="space-y-4">
            {/* Box 1 */}
            <Link href={lang === "fr" ? "/fr/campus/alentours" : "/en/campus/surroundings"} className="block bg-[#8B2B23] p-10 text-center text-white transition-all hover:brightness-110 group cursor-pointer">
              <Signpost size={48} strokeWidth={1} className="mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="text-[22px] font-bold mb-3">{t.box1.title}</h3>
              <p className="text-[15px] opacity-90">{t.box1.subtitle}</p>
            </Link>

            {/* Box 2 */}
            <Link href={lang === "fr" ? "/fr/campus/logement" : "/en/campus/housing"} className="block bg-[#333333] p-10 text-center text-white transition-all hover:brightness-110 group cursor-pointer">
              <Home size={48} strokeWidth={1} className="mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="text-[22px] font-bold mb-3">{t.box2.title}</h3>
              <p className="text-[15px] opacity-90">{t.box2.subtitle}</p>
            </Link>

            {/* Box 3 */}
            <Link href={lang === "fr" ? "/fr/campus/toulouse" : "/en/campus/toulouse"} className="block bg-[#8B2B23] p-10 text-center text-white transition-all hover:brightness-110 group cursor-pointer">
              <Map size={48} strokeWidth={1} className="mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="text-[22px] font-bold mb-3">{t.box3.title}</h3>
              <p className="text-[15px] opacity-90">{t.box3.subtitle}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
