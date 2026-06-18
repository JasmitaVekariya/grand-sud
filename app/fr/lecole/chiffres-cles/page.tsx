"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { motion } from "framer-motion";

const sections = [
  { id: "absence", label: "note sur l'absence de chiffres avant 2026" },
  { id: "satisfaction", label: "Taux de satisfaction" },
  { id: "obtention", label: "Taux d'obtention" },
  { id: "continuation", label: "Taux de poursuite d'études à 6 mois" },
  { id: "dropout", label: "Taux d'abandon" },
  { id: "breakup", label: "Taux DE RUPTURE DES CONTRATS EN ALTERNANCE" },
  { id: "employment", label: "Taux d'insertion dans l'emploi" },
];

export default function ChiffresClesPage() {
  const [activeSection, setActiveSection] = useState("absence");

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
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const RateGrid = ({ 
    title, 
    items, 
    height = "140px", 
    isDropout = false,
    isApprenti = false,
  }: { 
    title?: string, 
    items: { label: string, value: string, color: string }[], 
    height?: string,
    isDropout?: boolean,
    isApprenti?: boolean,
  }) => (
    <div className="mb-12">
      {title && <h3 className="text-[28px] font-bold text-black/80 mb-6">{title}</h3>}
      <div 
        className={`grid w-full overflow-hidden ${
          items.length === 4 
            ? "grid-cols-2 md:grid-cols-4" 
            : "grid-cols-1 sm:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`p-6 flex flex-col items-center text-center space-y-3 justify-center transition-transform hover:scale-[1.02] duration-300`}
            style={{ 
              backgroundColor: item.color,
              minHeight: isDropout ? "250px" : height
            }}
          >
            <span className="text-[52px] font-bold text-white leading-none mb-1">{item.value}</span>
            <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-2">{item.label}</span>
            
            {isDropout && (
              <div className="w-full text-left space-y-2 pt-2 border-t border-white/10">
                <div className="flex flex-col">
                  <p className="text-[11px] text-white/70 uppercase tracking-wider font-bold">
                    {isApprenti ? "Nombre d'apprentis :" : "Nombre d'apprenants :"}
                  </p>
                  <p className="text-[13px] text-white font-medium">—</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] text-white/70 uppercase tracking-wider font-bold">Causes des abandons :</p>
                  <p className="text-[13px] text-white font-medium">—</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <div className="w-full">
        <PageBanner 
          title={
          <>Les chiffres clés de Grand<br />
          Sud Formation
          </>
        } 
          image="/assets/pexels-goumbik-590022-scaled.jpg" 
          height="h-[450px]" 
        />
      </div>
      
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
                  <span className={`text-[12px] font-bold tracking-wider leading-relaxed transition-colors duration-300 ${activeSection === section.id ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area (75%) */}
          <div className="lg:col-span-9">
            
            {/* Intro Header */}
            <div className="space-y-6 mb-16">
              <p className="text-[14px] text-black leading-relaxed font-medium">
                Pour s&apos;assurer de la qualité de ses formations et de la satisfaction des entreprises et de ses apprenants, l&apos;école utilise des indicateurs de performances qui lui permettent de juger de ses actions.
              </p>
              <p className="text-[14px] text-black leading-relaxed font-medium">
                Ces indicateurs vous sont présentés de façon transparente car ils sont, aussi, gage de qualité pour vous !
              </p>
              <p className="text-[14px] text-gray-400 italic text-right">
                Dernière mise à jour le 01/05/2025
              </p>
            </div>

            <div className="flex flex-col space-y-24">
              
              {/* Note Section */}
              <section id="absence" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-8">
                  Note sur l'absence de chiffres avant 2026
                </h2>
                <div className="space-y-6 text-[14px] text-black leading-relaxed font-medium">
                  <p>Créée en 1991, l&apos;école a vécu une riche histoire pleine de réussites mais aussi d&apos;aléas…</p>
                  <p>
                    Malheureusement, avant l&apos;arrivée de SUPDEFORM en mai 2025 à la tête de l&apos;école, les chiffres présentés étaient datés, la dernière enquête de qualité datant de 2023 ; et il n&apos;est pas évident d&apos;élaborer un panorama clair et honnête des chiffres de l&apos;école lorsque l&apos;on n&apos;arrive qu&apos;en fin d&apos;année scolaire….
                  </p>
                  <p>
                    Nous aurions pu choisir de donner des chiffres approximatifs mais ils auraient été faussés. Notre politique étant d&apos;être transparents, la décision a donc été prise de ne communiquer que sur des chiffres concrets, vérifiables et vérifiés et donc d&apos;attendre l&apos;année 2025-2026 pour mettre à jour cette page.
                  </p>
                  <p>
                    En attendant, vous pouvez tout de même prendre connaissance des indicateurs que nous allons utiliser pour les années à venir et nous vous remercions, par avance, pour votre compréhension…
                  </p>
                </div>
              </section>

              {/* Satisfaction Rate */}
              <section id="satisfaction" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux de satisfaction
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Le taux de satisfaction correspond au pourcentage d&apos;apprenants ayant donné une note de satisfaction de la formation supérieure à 5 sur 10 lors de l&apos;entretien individuel annuel
                </p>
                
                <RateGrid 
                  title="Apprenants"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentis"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Obtention Rate */}
              <section id="obtention" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux d&apos;obtention
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Le taux d&apos;obtention correspond au pourcentage d&apos;apprenants inscrits à l&apos;examen ayant obtenu la certification.
                </p>
                
                <RateGrid 
                  title="Apprenants"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentis"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Continuation Rate */}
              <section id="continuation" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux de poursuite d'études à 6 mois
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Ce pourcentage est obtenu après enquête 6 mois après validation de la certification, et représente la poursuite d&apos;étude à Grand Sud ou ailleurs.
                </p>
                
                <RateGrid 
                  title="Apprenants"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentis"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Dropout Rate */}
              <section id="dropout" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux d'abandon
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Ce pourcentage est obtenu par rapport au nombre d&apos;apprenants présents à la rentrée en rapport avec le nombre d&apos;apprenants présents à la fin des cours.
                </p>
                
                <RateGrid 
                  title="Apprenants"
                  isDropout={true}
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentis"
                  isDropout={true}
                  isApprenti={true}
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Work-study breakup Rate */}
              <section id="breakup" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux DE RUPTURE DES CONTRATS EN ALTERNANCE
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Ce pourcentage est obtenu par rapport au nombre de contrats signés par rapport au nombre de contrats rompus.
                </p>
                <RateGrid 
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Employment Placement Rate */}
              <section id="employment" className="scroll-mt-32 pb-20">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Taux d&apos;insertion dans l&apos;emploi
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  Le taux d&apos;insertion concerne les apprenants ayant validé le titre visé.
                </p>
                <RateGrid 
                  title="Apprenants"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentis"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
