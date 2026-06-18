"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { Briefcase, Globe, Banknote, Calendar, GraduationCap, Star, Flag, Building2 } from "lucide-react";

export default function HistoirePage() {
  const [activeSection, setActiveSection] = useState("tourism");

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
      const tourism = document.getElementById("tourism");
      const dates = document.getElementById("dates");
      
      if (tourism && dates) {
        const tourismPos = tourism.getBoundingClientRect().top;
        const datesPos = dates.getBoundingClientRect().top;

        if (datesPos < 200) {
          setActiveSection("dates");
        } else if (tourismPos < 200) {
          setActiveSection("tourism");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      date: "janvier 1991",
      title: "Grand Sud Formation est née",
      text: "Face à l'essor des voyages et des séjours, un réel besoin en personnel qualifié existe... Pour répondre à ce besoin, Danielle Chevallier fonde l'école de tourisme Grand Sud Formation, la première école de formation aux métiers du Tourisme à Toulouse. Elle prépare aux diplômes accompagnateur et d'animateur.",
      icon: <Calendar className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "septembre 1999",
      title: "Lancement du BTS Tourisme",
      text: "L'ADN de l'école, centré sur la rigueur, la professionnalisation et l'excellence est appliqué au diplôme de référence dans le secteur : le BTS, qui rejoint le catalogue de formation de Grand Sud.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "septembre 2010",
      title: "Ouverture de spécialisations métiers",
      text: "Face à une demande en compétences précises, Grand Sud Formation propose des spécialisations métiers sous forme de formations intensives et courtes pour répondre à des besoins spécifiques.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "janvier 2011",
      title: "L'école fête ses 20 ans",
      text: "En présence de près de 700 personnes, dont de nombreux professionnels du tourisme, l'école fête son 20ème anniversaire à l'occasion d'une soirée exceptionnelle.",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "octobre 2015",
      title: "Ouverture du premier Mastère de l'école",
      text: "Jusqu'à présent consacrée aux Bac+2 et Bac+3, l'école prend un nouvel élan en permettant une poursuite d'étude jusqu'en Bac+5 !",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "janvier 2019",
      title: "Le BTS Tourisme est labellisé \"formation d'excellence aux métiers du Tourisme\" par la CFET",
      text: "Preuve s'il en fallait de la qualité de nos formations, le BTS Tourisme s'est vu reconnaître par la Conférence des Formations d'Excellence au Tourisme",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "2019-2021",
      title: "L'école tient bon face au COVID-19",
      text: "Malgré des difficultés rencontrées par le secteur du tourisme, en lien avec les restrictions en place (confinement, restrictions d'ouverture et d'accès...), Grand Sud Formation a poursuivi et adaptée son activité. 80% des étudiants trouvent un stage ou une alternance, malgré un contexte morose.",
      icon: <Flag className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "juin 2024",
      title: "Le Campus de Toulouse déménage à Labège",
      text: "Après 30 ans, Grand Sud Formation quitte les allées Jean Jaurès et déménage au 21 rue du village d'entreprises à Labège. Une page se tourne pour en écrire une nouvelle, dans un cadre agréable plus adapté à la formation qui permet d'accueillir étudiants et professionnels dans des locaux qui répondent aux exigences d'aujourd'hui et de demain.",
      icon: <Building2 className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "mai 2025",
      title: "Grand Sud rejoint le groupe SUPDEFORM",
      text: "Avec ce changement, l'école se redynamise et voit une refonte complète de son fonctionnement, avec la mise en place d'une dimension résolument humaine et internationale, souhaits des dirigeants du groupe.",
      icon: <Flag className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "août 2025",
      title: "Obtention de la certification Qualiopi",
      text: "Gage de qualité, l'école a pu être certifiée Qualiopi pour ses actions de formations et de formations par apprentissage.",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "octobre 2025",
      title: "Ouverture de 6 nouveaux diplômes délivrés 100% en anglais",
      text: "",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    }
  ];

  const t = {
    title: (
      <>
L'histoire de Grand Sud <br />
Formation
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
           
          {/* Sidebar - Navigation Section */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6">
            <button 
              onClick={() => scrollToSection("tourism")}
              className="flex items-start gap-4 group w-full text-left transition-all duration-300"
            >
              <div className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-colors duration-300 ${activeSection === "tourism" ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === "tourism" ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                LE TOURISME EN FRANCE
              </span>
            </button>
            <button 
              onClick={() => scrollToSection("dates")}
              className="flex items-start gap-4 group w-full text-left transition-all duration-300"
            >
              <div className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-colors duration-300 ${activeSection === "dates" ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === "dates" ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                LES GRANDES DATES DE NOTRE HISTOIRE
              </span>
            </button>
          </aside>
 
          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-12">
             
            {/* Introduction */}
            <div className="space-y-8">
              <p className="text-[12px] text-black leading-relaxed font-medium">
                École spécialisée dans le tourisme, Grand Sud Formation a préparé depuis sa fondation plus de 5 000 personnes aux différents métiers du tourisme.
              </p>
              <div className="space-y-4">
                <p className="text-[12px] text-black font-bold uppercase tracking-wider">
                  Ses objectifs sont simples :
                </p>
                <ul className="space-y-3 pl-6">
                  {["votre réussite", "votre professionnalisation", "votre montée en compétences"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[12px] text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
 
            {/* Section: Le Tourisme en France */}
            <section id="tourism" className="space-y-8 pt-8 border-t border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-red uppercase tracking-tight">
                LE TOURISME EN FRANCE
              </h2>
              <p className="text-[12px] text-black leading-relaxed">
                Le tourisme est un secteur stratégique de l&apos;économie locale, nationale et internationale. Chaque développement de l&apos;école est intimement lié aux chiffres du tourisme et à ses évolutions.
              </p>
 
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl max-w-[820px]">
                {/* Stat 1 */}
                <div className="bg-[#333] h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Briefcase className="w-10 h-10 text-gray-400" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">2 millions</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-gray-300 px-2">
                      d&apos;emplois sur le territoire dans le secteur du tourisme (tous types d&apos;emplois confondus)
                    </p>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="bg-primary-red h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Globe className="w-10 h-10 text-white/50" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">100 millions de visiteurs internationaux</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-white/80 px-2">
                      en France en 2024, une fréquentation boostée par les Jeux Olympiques et Paralympiques
                    </p>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="bg-[#333] h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Banknote className="w-10 h-10 text-gray-400" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">7,5% du PIB français</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-gray-300 px-2">
                      provient du tourisme soit 71,3 milliards d&apos;euros de recettes internationales en 2024 (+8% par rapport à 2023)
                    </p>
                  </div>
                </div>
              </div>
            </section>
 
            {/* Section: Les Grandes Dates - Vertical Timeline */}
            <section id="dates" className="space-y-12 pt-8 border-t border-gray-100 pb-20 overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-red uppercase tracking-tight text-center mb-24">
                LES GRANDES DATES DE NOTRE HISTOIRE
              </h2>
              
              <div className="relative">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-900" />
 
                <div className="space-y-12 md:space-y-24 relative">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start w-full gap-8 md:gap-0">
                      
                      {/* Center Icon */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 top-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7D1F1F] border-4 border-white flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                      </div>
 
                      {/* Left Side Container */}
                      <div className={`w-full md:w-1/2 pl-12 pr-6 md:px-12 flex flex-col items-start md:items-end text-left md:text-right ${item.side === "left" ? "order-2 md:order-none" : "order-1 md:order-none"}`}>
                        {item.side === "right" ? (
                           <span className="text-lg md:text-xl font-black text-[#7D1F1F] uppercase tracking-tight mt-0 md:mt-2">{item.date}</span>
                        ) : (
                          <div className="relative bg-[#7D1F1F] p-6 md:p-8 shadow-xl rounded-sm w-full max-w-[400px]">
                            {/* Pointer - Top Right */}
                            <div className="hidden md:block absolute top-4 -right-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            {/* Pointer - Top Left (mobile only) */}
                            <div className="block md:hidden absolute top-4 -left-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight uppercase">{item.title}</h3>
                            {item.text && (
                              <p className="text-[12px] text-white/90 leading-relaxed">{item.text}</p>
                            )}
                          </div>
                        )}
                      </div>
 
                      {/* Right Side Container */}
                      <div className={`w-full md:w-1/2 pl-12 pr-6 md:px-12 flex flex-col items-start text-left ${item.side === "left" ? "order-1 md:order-none" : "order-2 md:order-none"}`}>
                        {item.side === "left" ? (
                           <span className="text-lg md:text-xl font-black text-[#7D1F1F] uppercase tracking-tight mt-0 md:mt-2">{item.date}</span>
                        ) : (
                          <div className="relative bg-[#7D1F1F] p-6 md:p-8 shadow-xl rounded-sm w-full max-w-[400px]">
                            {/* Pointer - Top Left */}
                            <div className="absolute top-4 -left-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight uppercase">{item.title}</h3>
                            {item.text && (
                              <p className="text-[12px] text-white/90 leading-relaxed">{item.text}</p>
                            )}
                          </div>
                        )}
                      </div>
 
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}
