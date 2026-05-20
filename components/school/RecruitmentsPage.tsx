"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RecruitmentsPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

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
      title: "RECRUITMENTS",
      intro1: "At Grand Sud Formation, we believe that excellence in teaching depends on committed, inspiring, and forward-thinking individuals.",
      intro2: "Find all our current job openings on this page. Whether you are a teacher or an administrative staff member, come and put your talents to work in a meaningful mission: helping students succeed!",
      faculty: "FACULTY",
      administration: "ADMINISTRATION",
      noPositions: "No positions currently available"
    },
    fr: {
      title: "RECRUTEMENTS",
      intro1: "Chez Grand Sud Formation, nous sommes convaincus que l'excellence de l'enseignement repose sur des personnes engagées, inspirantes et tournées vers l'avenir.",
      intro2: "Retrouvez toutes nos offres d'emploi sur cette page. Que vous soyez enseignant ou membre du personnel administratif, venez mettre vos talents au service d'une mission porteuse de sens : accompagner la réussite des étudiants !",
      faculty: "CORPS ENSEIGNANT",
      administration: "ADMINISTRATION",
      noPositions: "Aucun poste disponible pour le moment"
    }
  }[lang];

  return (
    <main className="bg-white min-h-screen pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        
        {/* Red-Bracket Heading Section Centered */}
        <div className="flex justify-center w-full mb-12">
          <div className="relative py-12 px-12 w-fit">
            {/* Red border bracket outline */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-primary-red w-[80px] md:w-[100px]" />
            <h1 className="text-black text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-center tracking-tight relative z-10">
              {t.title}
            </h1>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="space-y-6 text-[14px] md:text-[15px] text-black font-medium leading-relaxed max-w-[1000px] mb-16">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </div>

        {/* Categories Section */}
        <div className="space-y-16 max-w-[800px]">
          
          {/* Faculty Section */}
          <div className="space-y-4">
            <h2 className="text-primary-red text-[26px] md:text-[32px] font-bold uppercase tracking-wide">
              {t.faculty}
            </h2>
            <p className="text-black/80 italic text-[14px] md:text-[15px]">
              {t.noPositions}
            </p>
          </div>

          {/* Administration Section */}
          <div className="space-y-4">
            <h2 className="text-primary-red text-[26px] md:text-[32px] font-bold uppercase tracking-wide">
              {t.administration}
            </h2>
            <p className="text-black/80 italic text-[14px] md:text-[15px]">
              {t.noPositions}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
