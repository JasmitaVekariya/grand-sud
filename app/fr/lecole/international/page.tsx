"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Plane, Users, Link as LinkIcon, Train, CheckCircle2, Building2, Layers, Heart, Shield, GraduationCap, Home, Briefcase, Languages, Landmark } from "lucide-react";

export default function InternationalPage() {
  const [activeSection, setActiveSection] = useState("internationalization");

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
      const sections = ["internationalization", "mobility", "partnerships", "reference"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    title: (
      <>
        L'international avec<br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-christine-renard-198055-615060-scaled.jpg",
    intro: (
      <>
        Plus que jamais Grand Sud Formation vous fait partager le monde ! <br />
        Etudiants internationaux, mobilité internationale et partenariats aux quatre coins du monde sont autant de chances pour celles et ceux qui nous rejoignent de découvrir d&apos;autres cultures, d&apos;autres pays et de développer un réseau mondial.
      </>
    ),
  };

  const partners = [
    { name: "KES' Shroff College", location: "Inde", logo: "/assets/india.png" },
    { name: "Collège de L'ile", location: "Canada", logo: "/assets/collegedelile.png" },
    { name: "AIC Campus", location: "Sri Lanka", logo: "/assets/AIC.png" },
    { name: "Universidad de Leon", location: "Mexique", logo: "/assets/leon.png" }
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Sidebar - Navigation Section (25%) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6">
            {[
              { id: "internationalization", label: "Internationalisation des étudiants" },
              { id: "mobility", label: "Mobilité internationale" },
              { id: "partnerships", label: "Partenariats" },
              { id: "reference", label: "Sites de référence" }
            ].map((section) => (
              <button 
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-start gap-4 group w-full text-left transition-all duration-300"
              >
                <div className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-colors duration-300 ${activeSection === section.id ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
                <span className={`text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === section.id ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                  {section.label}
                </span>
              </button>
            ))}
          </aside>

          {/* Main Content Area (75%) */}
          <div className="lg:col-span-9">
            
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-[14px] text-black leading-relaxed font-medium">
                {t.intro}
              </p>
            </div>

            <div className="flex flex-col">
              
              {/* Section 1: Internationalization */}
              <section id="internationalization" className="pb-12 border-b border-gray-100">
                <h2 className="text-[24px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  Internationalisation des étudiants
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                  <div className="bg-[#333] p-8 flex flex-col items-center text-center space-y-4 min-h-[220px] justify-center">
                    <Building2 className="w-10 h-10 text-white/40" />
                    <div className="space-y-1">
                      <p className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                        15% d'étudiants internationaux
                      </p>
                      <p className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                        en moyenne chaque année
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#7D1F1F] p-8 flex flex-col items-center text-center space-y-4 min-h-[220px] justify-center">
                    <Layers className="w-10 h-10 text-white/40" />
                    <div className="space-y-1">
                      <p className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                        10 nationalités différentes
                      </p>
                      <p className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                        représentées à Grand Sud
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#333] p-8 flex flex-col items-center text-center space-y-4 min-h-[220px] justify-center">
                    <Globe className="w-10 h-10 text-white/40" />
                    <div className="space-y-1">
                      <p className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                        5 continents
                      </p>
                      <p className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                        desquels nos étudiants proviennent
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: International Mobility */}
              <section id="mobility" className="py-12">
                <h2 className="text-[24px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  Mobilité internationale
                </h2>
                <div className="flex flex-col md:flex-row bg-primary-red overflow-hidden">
                  <div className="md:w-1/2 relative h-[500px] md:h-auto overflow-hidden">
                    <motion.div 
                      initial={{ scale: 1 }}
                      whileInView={{ scale: 1.1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="relative h-full w-full"
                    >
                      <Image 
                        src="/assets/pexels-camcasey-1157255-scaled.jpg" 
                        alt="Mobilité internationale" 
                        fill
                sizes="100vw" 
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center space-y-8">
                    <div className="space-y-6">
                      <p className="text-[14px] text-white leading-relaxed font-medium italic opacity-90">
                        Oui, l&apos;apprentissage peut être synonyme de départ à l&apos;étranger !
                      </p>
                      <div className="space-y-4">
                        <p className="text-[14px] text-white leading-relaxed">
                          Le dispositif de mobilité internationale des apprentis, c&apos;est l&apos;occasion de vivre une expérience personnelle et professionnelle enrichissante.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          A Grand Sud Formation, ce dispositif est ouvert à tous les apprentis, pour une durée de 12 à 26 semaines.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Notre référent mobilité est à votre disposition pour répondre à vos interrogations sur les différentes modalités.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-[14px] text-white font-bold tracking-wider mb-2">Ses missions ?</p>
                        <p className="text-[14px] text-white leading-relaxed">favoriser la démarche d&apos;un cursus à l&apos;étranger pour les apprentis</p>
                        <p className="text-[14px] text-white leading-relaxed">accompagner les apprentis dans leur recherche d&apos;entreprise d&apos;accueil à l&apos;international</p>
                        <p className="text-[14px] text-white leading-relaxed">suivre leur cursus tout au long de la mobilité</p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <p className="text-[14px] text-white font-bold tracking-wider mb-2">
                          En pratique, si vous souhaitez profiter à plein du dispositif, il vous faut :
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">prendre contact avec notre référent mobilité</p>
                        <p className="text-[14px] text-white leading-relaxed">signer une convention de mobilité avec l&apos;entreprise partenaire,</p>
                        <p className="text-[14px] text-white leading-relaxed">détenir une carte européenne d&apos;assurance maladie ou aviser avec votre caisse en cas de mobilité hors Union Européenne,</p>
                        <p className="text-[14px] text-white leading-relaxed">étudier à l&apos;aide du référent mobilité les aides à la mobilité disponible (CFA, région, etc.).</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shrink-0">
                        <Image 
                          src="/assets/IMG_2502-e1756303121108.jpg" 
                          alt="Christophe PEOTTA" 
                          fill
                sizes="100vw" 
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xl font-extrabold text-white leading-tight uppercase tracking-tight">Christophe <br />PEOTTA</h4>
                        <p className="text-[12px] text-white/80 uppercase tracking-[0.2em] font-medium">Référent mobilité</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Partenariats */}
              <section id="partnerships" className="pt-12">
                <h2 className="text-[24px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  Partenariats
                </h2>
                
                <div className="relative w-full min-h-[400px] lg:h-[400px] flex items-center p-6 lg:p-0 overflow-hidden mb-0">
                  <Image 
                    src="/assets/pexels-kelly-2881370-scaled.jpg" 
                    alt="Partenariats Background" 
                    fill
                sizes="(max-width: 768px) 100vw, 50vw" 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative lg:absolute lg:top-1/2 lg:left-12 lg:-translate-y-1/2 max-w-[450px] w-full bg-white/90 p-6 md:p-8 shadow-xl z-10">
                    <p className="text-[14px] text-black leading-relaxed font-medium mb-4">
                      Régulièrement, Grand Sud noue des partenariats à l&apos;étranger pour faciliter la mobilité de ses étudiants.
                    </p>
                    <p className="text-[14px] text-black leading-relaxed">
                      Universités, écoles privées, institutions ou encore acteurs de la vie économique sont autant de relations importantes dans le développement international !
                    </p>
                  </div>
                </div>

                <div className="bg-[#7D1F1F] py-16 px-12">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {partners.map((partner, i) => (
                      <div key={i} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-24 h-24 bg-white p-4 flex items-center justify-center">
                          <Image 
                            src={partner.logo} 
                            alt={partner.name} 
                            width={80} 
                            height={80} 
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-[15px] font-bold text-white leading-tight">{partner.name}</h4>
                          <p className="text-[13px] text-white/80 font-medium">{partner.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 4: Sites de référence (Exact Match to Reference Image) */}
              <section id="reference" className="pt-20">
                <h2 className="text-[32px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  Sites de référence
                </h2>
                <div className="space-y-4">
                  <p className="text-[14px] text-black font-medium">
                    A destination des étudiants internationaux, voici quelques sites (en anglais) à consulter :
                  </p>
                  <ul className="list-disc pl-5 space-y-2.5 text-[14px] text-black">
                    <li>
                      <a href="https://www.inde.campusfrance.org/enjoy-student-benefits-in-france" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">Aides aux études en France</a>
                    </li>
                    <li>
                      <a href="https://www.inde.campusfrance.org/why-study-in-france" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">Pourquoi étudier en France</a>
                    </li>
                    <li>
                      <a href="https://cvec.etudiant.gouv.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">CVEC</a>
                    </li>
                    <li>
                      Logement (
                      <a href="https://www.campusfrance.org/en/student-housing-france" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">site 1</a>,{" "}
                      <a href="#" className="hover:text-primary-red underline">site 2</a>,{" "}
                      <a href="#" className="hover:text-primary-red underline">site 3</a>,{" "}
                      <a href="#" className="hover:text-primary-red underline">site 4</a>,{" "}
                      <a href="#" className="hover:text-primary-red underline">site 5</a>,{" "}
                      <a href="#" className="hover:text-primary-red underline">site 6</a>)
                    </li>
                    <li>
                      <a href="https://etudiant-etranger.ameli.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">Sécurité sociale</a>
                    </li>
                    <li>
                      <a href="https://www.fle.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red underline">Apprendre le français</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Transports en commun</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Job étudiant</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Culture</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Lutte contre les discriminations</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Discriminations liées au genre et abus sexuels</a>
                    </li>
                  </ul>
                </div>
              </section>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
