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
        Go global with <br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-christine-renard-198055-615060-scaled.jpg",
    intro: "Grand Sud Formation has always been open to the world. We are convinced that international openness is a major asset for our students and apprentices. It allows them to develop their curiosity, their open-mindedness, and their professional skills in an increasingly globalized tourism sector."
  };

  const partners = [
    { name: "KES' Shroff College", location: "India", logo: "/assets/india.png" },
    { name: "Collège de L'ile", location: "Canada", logo: "/assets/collegedelile.png" },
    { name: "AIC Campus", location: "Sri Lanka", logo: "/assets/AIC.png" },
    { name: "Universidad de Leon", location: "Mexico", logo: "/assets/leon.png" }
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[200px] py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Sidebar - Navigation Section (25%) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6">
            {[
              { id: "internationalization", label: "Internationalization of students" },
              { id: "mobility", label: "International mobility" },
              { id: "partnerships", label: "Partnerships" },
              { id: "reference", label: "Reference sites" }
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
                  Internationalization of students
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                  <div className="bg-[#333] p-8 flex flex-col items-center text-center space-y-4 min-h-[220px] justify-center">
                    <Building2 className="w-10 h-10 text-white/40" />
                    <div className="space-y-1">
                      <p className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                        15% international students
                      </p>
                      <p className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                        on average each year
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#7D1F1F] p-8 flex flex-col items-center text-center space-y-4 min-h-[220px] justify-center">
                    <Layers className="w-10 h-10 text-white/40" />
                    <div className="space-y-1">
                      <p className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                        10 different nationalities
                      </p>
                      <p className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                        represented at Grand Sud
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
                        where our students come from
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: International Mobility */}
              <section id="mobility" className="py-12">
                <h2 className="text-[24px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  International mobility
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
                        alt="International Mobility" 
                        fill 
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center space-y-8">
                    <div className="space-y-6">
                      <p className="text-[14px] text-white leading-relaxed font-medium italic opacity-90">"Yes, apprenticeships can mean going abroad!"</p>
                      <div className="space-y-4">
                        <p className="text-[14px] text-white leading-relaxed">
                          The international mobility program for apprentices is an opportunity to enjoy an enriching personal and professional experience.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          At Grand Sud Formation, this program is open to all apprentices for a period of 12 to 26 weeks.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Our mobility advisor is available to answer any questions you may have about the various options.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-[14px] text-white font-bold uppercase tracking-wider mb-2">What does the advisor do?</p>
                        <p className="text-[14px] text-white leading-relaxed">Promotes study abroad programs for apprentices.</p>
                        <p className="text-[14px] text-white leading-relaxed">Assists apprentices in their search for an international host company.</p>
                        <p className="text-[14px] text-white leading-relaxed">Monitors their progress throughout the mobility program.</p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <p className="text-[14px] text-white font-bold uppercase tracking-wider mb-2">In practice, if you want to take full advantage of the program, you need to:</p>
                        <p className="text-[14px] text-white leading-relaxed">contact our mobility advisor</p>
                        <p className="text-[14px] text-white leading-relaxed">sign a mobility agreement with the partner company</p>
                        <p className="text-[14px] text-white leading-relaxed">have a European Health Insurance Card or notify your health insurance fund in the event of mobility outside the European Union</p>
                        <p className="text-[14px] text-white leading-relaxed">work with the mobility advisor to explore the mobility assistance available (CFA, region, etc.).</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shrink-0">
                        <Image 
                          src="/assets/IMG_2502-e1756303121108.jpg" 
                          alt="Christophe PEOTTA" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xl font-extrabold text-white leading-tight uppercase tracking-tight">Christophe <br />PEOTTA</h4>
                        <p className="text-[12px] text-white/80 uppercase tracking-[0.2em] font-medium">Mobility Advisor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Partnerships */}
              <section id="partnerships" className="pt-12">
                <h2 className="text-[24px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  Partnerships
                </h2>
                
                <div className="relative w-full h-[400px] overflow-hidden mb-0">
                  <Image 
                    src="/assets/pexels-kelly-2881370-scaled.jpg" 
                    alt="Partnerships Background" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-1/2 left-12 -translate-y-1/2 max-w-[450px] bg-white/90 p-8 shadow-xl">
                    <p className="text-[14px] text-black leading-relaxed font-medium mb-4">
                      Grand Sud regularly establishes partnerships abroad to facilitate student mobility.
                    </p>
                    <p className="text-[14px] text-black leading-relaxed">
                      Universities, private schools, institutions, and economic stakeholders are all important partners in international development!
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

              {/* Section 4: Reference sites (Exact Match to Reference Image) */}
              <section id="reference" className="pt-20">
                <h2 className="text-[32px] font-bold text-primary-red uppercase tracking-tight mb-8">
                  REFERENCE SITES
                </h2>
                <div className="space-y-4">
                  <p className="text-[14px] text-black font-medium">
                    For international students, here are some websites (in English) to check out:
                  </p>
                  <ul className="list-disc pl-5 space-y-2.5 text-[14px] text-black">
                    <li>
                      <a href="https://www.inde.campusfrance.org/enjoy-student-benefits-in-france" target="_blank" className="hover:text-primary-red underline">Financial aid for studying in France</a>
                    </li>
                    <li>
                      <a href="https://www.inde.campusfrance.org/why-study-in-france" target="_blank" className="hover:text-primary-red underline">Why study in France</a>
                    </li>
                    <li>
                      <a href="https://cvec.etudiant.gouv.fr/" target="_blank" className="hover:text-primary-red underline">CVEC</a>
                    </li>
                    <li>
                      Housing (
                      <a href="https://www.campusfrance.org/en/student-housing-france" target="_blank" className="hover:text-primary-red underline">site 1</a>, 
                      <a href="#" className="hover:text-primary-red underline ml-1">site 2</a>, 
                      <a href="#" className="hover:text-primary-red underline ml-1">Website 3</a>, 
                      <a href="#" className="hover:text-primary-red underline ml-1">Website 4</a>, 
                      <a href="#" className="hover:text-primary-red underline ml-1">Website 5</a>, 
                      <a href="#" className="hover:text-primary-red underline ml-1">Website 6</a>)
                    </li>
                    <li>
                      <a href="https://etudiant-etranger.ameli.fr/" target="_blank" className="hover:text-primary-red underline">Sécurité sociale</a>
                    </li>
                    <li>
                      <a href="https://www.fle.fr/" target="_blank" className="hover:text-primary-red underline">Französisch lernen</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Common transportation</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Student job</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Culture</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Fighting discrimination</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-red underline">Gender discrimination and sexual abuse</a>
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
