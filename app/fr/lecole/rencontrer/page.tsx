"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { motion } from "framer-motion";

const sections = [
  { id: "open-doors", label: "JOURNÉES PORTES OUVERTES" },
  { id: "evenings", label: "SOIRÉES D'INFORMATION" },
  { id: "fairs", label: "SALONS ET AUTRES ÉVÉNEMENTS" },
];

export default function NousRencontrerPage() {
  const [activeSection, setActiveSection] = useState("open-doors");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white">
      <PageBanner 
        title={<>Nous <br /> rencontrer</>} 
        image="/assets/469121896_18471494152022529_2545897615371808642_n.jpg" 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Navigation Section (25%) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <button 
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-start gap-4 group w-full text-left transition-all duration-300"
                >
                  <div className={`w-4 h-4 mt-1 flex-shrink-0 transition-colors duration-300 ${activeSection === section.id ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
                  <span className={`text-[12px] font-bold uppercase tracking-wider leading-relaxed transition-colors duration-300 ${activeSection === section.id ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area (75%) */}
          <div className="lg:col-span-9">
            
            {/* Intro Text */}
            <div className="space-y-6 mb-16 text-[14px] text-black leading-relaxed font-medium">
              <p>Pour choisir la bonne formation, il est important de valider votre projet et votre envie de vous spécialiser dans le tourisme.</p>
              <p className="font-bold text-[16px]">Nous vous invitons à venir à notre rencontre lors de nos événements tout au long de l'année !</p>
              <p>Venez rencontrer :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>nos étudiants</li>
                <li>l'équipe pédagogique</li>
                <li>la direction et l'équipe de Grand Sud</li>
              </ul>
              <p>et échangez sur les programmes, la vie à l'école, nos partenaires, les stages, les métiers, les débouchés...</p>
            </div>

            <div className="flex flex-col space-y-0">
              
              {/* 1st Card: JOURNÉES PORTES OUVERTES */}
              <section id="open-doors" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/campus-toulouse.jpg" 
                      alt="Journées Portes Ouvertes" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      JOURNÉES PORTES OUVERTES
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Venez découvrir l'école, ses formations du Bac au Bac+5 et ses spécialisations métiers sur le campus.</p>
                      <p className="font-bold text-white uppercase tracking-wider">Prochaines dates (Campus Toulouse-Labège) :</p>
                      <ul className="grid grid-cols-1 gap-1 text-[13px]">
                        <li>• 11 octobre 2025 – 10h à 13h</li>
                        <li>• 15 novembre 2025 – 10h à 13h</li>
                        <li>• 13 décembre 2025 – 10h à 13h</li>
                        <li>• 17 janvier 2026 – 10h à 13h</li>
                        <li>• 14 février 2026 – 10h à 13h</li>
                        <li>• 14 mars 2026 – 10h à 13h</li>
                        <li>• 11 avril 2026 – 10h à 13h</li>
                        <li>• 30 mai 2026 – 10h à 13h</li>
                        <li>• 13 juin 2026 – 10h à 13h</li>
                        <li>• 11 juillet 2026 – 10h à 13h</li>
                        <li>• 22 août 2026 – 10h à 13h</li>
                        <li>• 12 septembre 2026 – 10h à 13h</li>
                      </ul>
                      <p className="italic text-[13px] pt-4">Note : ces événements ont lieu uniquement en présentiel</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2nd Card: SOIRÉES D'INFORMATION */}
              <section id="evenings" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row-reverse bg-[#7D1F1F] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/pexels-nafis-naim-11679666-6194135-min-1024x683.jpg" 
                      alt="Soirées d'information" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      SOIRÉES D'INFORMATION
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Disponible uniquement en soirée ? Nous vous accueillons une fois par mois !</p>
                      <p className="font-bold text-white uppercase tracking-wider">Prochaines dates (Campus Toulouse-Labège) :</p>
                      <ul className="grid grid-cols-1 gap-1 text-[13px]">
                        <li>• 15 octobre 2025 – 17h00 à 20h30</li>
                        <li>• 19 novembre 2025 – 17h00 à 20h30</li>
                        <li>• 17 décembre 2025 – 17h00 à 20h30</li>
                        <li>• 21 janvier 2026 – 17h00 à 20h30</li>
                        <li>• 18 février 2026 – 17h00 à 20h30</li>
                        <li>• 18 mars 2026 – 17h00 à 20h30</li>
                        <li>• 15 avril 2026 – 17h00 à 20h30</li>
                        <li>• 20 mai 2026 – 17h00 à 20h30</li>
                        <li>• 17 juin 2026 – 17h00 à 20h30</li>
                        <li>• 15 juillet 2026 – 17h00 à 20h30</li>
                        <li>• 26 août 2026 – 17h00 à 20h30</li>
                      </ul>
                      <p className="italic text-[13px] pt-4">Note : ces événements ont lieu uniquement en présentiel</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3rd Card: SALONS ET AUTRES ÉVÉNEMENTS */}
              <section id="fairs" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/469121856_18471685570022529_3223111676717879210_n.jpg" 
                      alt="Salons et autres événements" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      SALONS ET AUTRES ÉVÉNEMENTS
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Chaque année, nous participons à de nombreux salons et forums destinés aux jeunes en recherche de formation. C'est l'occasion de nous rencontrer et d'échanger avec nos équipes dans un cadre dynamique !</p>
                      <p className="font-bold text-white uppercase tracking-wider">Prochaines dates :</p>
                      <ul className="grid grid-cols-1 gap-3 text-[13px]">
                        <li>• 4 octobre 2025 – Salon de l'Enseignement Supérieur – Toulouse</li>
                        <li>• 8 novembre 2025 – Salon de l'Enseignement Supérieur – Toulouse</li>
                        <li>• 29 novembre 2025 – Salon de l'Étudiant et de l'Alternance – Pau</li>
                        <li>• 7 février 2026 – Salon de l'Enseignement Supérieur et de l'Alternance – Toulouse</li>
                      </ul>
                      <p className="italic text-[13px] pt-4 leading-relaxed">Note : ces événements sont organisés par des organismes tiers, ils se déroulent généralement en français et en présentiel sauf indication contraire</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
