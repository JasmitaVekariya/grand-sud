"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Handshake, Users, Accessibility, Train, Globe } from "lucide-react";

export default function EngagementsPage() {
  const [activeSection, setActiveSection] = useState("personalized");

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
      const sections = ["personalized", "diversity", "mobility"];
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
        Nos <br />
        Engagements
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg",
    intro: [
      "Nous plaçons l'accompagnement individualisé, la diversité, l'inclusion et la transparence au cœur de notre démarche pédagogique, convaincus que chaque parcours unique enrichit la vie collective de l'école. Créer un environnement respectueux, ouvert et bienveillant pour tous nos étudiants est l'une de nos priorités !",
      "Nous encourageons également la mobilité nationale et internationale afin d'élargir les horizons professionnels et culturels de chacun, formant ainsi des professionnels du tourisme responsables, ouverts sur le monde et tournés vers l'avenir."
    ]
  };

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
              { id: "personalized", label: "PARCOURS PERSONNALISÉ, TRANSPARENCE ET QUALITÉ" },
              { id: "diversity", label: "DIVERSITÉ ET INCLUSION" },
              { id: "mobility", label: "MOBILITÉ NATIONALE ET INTERNATIONALE" }
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
            <div className="space-y-4 mb-12">
              {t.intro.map((para, i) => (
                <p key={i} className="text-[14px] text-black leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </div>

            {/* Sections Container - NO SPACE BETWEEN CARTS */}
            <div className="flex flex-col">
              
              {/* Section 1: Personalized */}
              <section id="personalized" className="flex flex-col md:flex-row bg-[#333] overflow-hidden">
                <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <Image 
                      src="/assets/pexels-olly-840996-scaled-e1756303685528.jpg" 
                      alt="Parcours Personnalisé" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    Parcours personnalisé, transparence et qualité
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <UserCheck className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Chaque parcours est unique, et nous voyons cette unicité comme une véritable force : permettre à chacun de révéler son potentiel et de tracer son propre chemin vers la réussite est l'un des moteurs de notre action.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed font-medium">
                          Chaque étudiant bénéficie d'un accompagnement individualisé dès son admission.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          De l'aide à la recherche de stage ou d'alternance au développement personnel et professionnel, nous apportons un soutien sur mesure pour aider chacun à réussir !
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Handshake className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          La transparence est au cœur de l'engagement de Grand Sud. Cela se traduit par une communication claire avec nos étudiants et leurs familles, qu'il s'agisse des programmes, des méthodes pédagogiques ou des perspectives de carrière.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          En favorisant la confiance et l'honnêteté, nous créons un environnement serein qui permet à chacun de progresser. Cette transparence est essentielle pour construire une relation durable et authentique, où les étudiants savent qu'ils sont pleinement maîtres de leur propre parcours !
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Handshake className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed font-bold uppercase tracking-wide">
                          La qualité de nos formations et de nos processus est l'une de nos priorités absolues
                        </p>
                        <div className="bg-white p-4 inline-block">
                          <Image 
                            src="/assets/logo-qualiopi.png" 
                            alt="Qualiopi" 
                            width={150} 
                            height={50} 
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-white/80 uppercase tracking-widest font-medium">La certification qualité a été délivrée au titre des catégories d'actions suivantes :</p>
                          <ul className="space-y-0.5">
                            <li className="text-[11px] text-white flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-white" /> ACTIONS DE FORMATION
                            </li>
                            <li className="text-[11px] text-white flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-white" /> ACTIONS DE FORMATION PAR APPRENTISSAGE
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Diversity - Reverse Layout */}
              <section id="diversity" className="flex flex-col md:flex-row-reverse bg-[#7D1F1F] overflow-hidden">
                <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <Image 
                      src="/assets/pexels-fauxels-3184423-scaled.jpg" 
                      alt="Diversité et Inclusion" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    DIVERSITÉ ET INCLUSION
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Users className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Nous considérons la diversité comme un élément essentiel de la vie de l'école. Qu'il s'agisse de diversité culturelle, d'égalité des sexes, d'origine ethnique, de croyances ou d'autres facteurs, nous veillons à ce que chacun trouve sa place dans un environnement respectueux.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Cette pluralité de parcours et de perspectives favorise l'ouverture d'esprit, encourage la tolérance et prépare nos étudiants à évoluer avec équité et humanité dans un secteur du tourisme profondément tourné vers le monde.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Accessibility className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed font-bold uppercase tracking-wide">
                          Toutes les personnes en situation de handicap permanent ou temporaire bénéficient d'un accompagnement.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Chaque campus est accessible aux personnes à mobilité réduite, et le registre d'accessibilité peut être demandé à l'accueil.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Un dispositif dédié nous permet de prendre en compte les besoins spécifiques de chaque individu et de décider, si nécessaire, d'aménagements pédagogiques. Un référent handicap veille à la prise en compte des apprenants en situation de handicap et dès votre entretien d'admission, vous pourrez bénéficier d'aménagements particuliers.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Le référent handicap est votre interlocuteur privilégié et vous accompagnera dans tous vos besoins. Il fait le lien avec l'équipe pédagogique et, si vous êtes en stage ou en alternance, il facilitera votre intégration au sein de l'entreprise d'accueil.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Il définit avec vous les aménagements nécessaires pour suivre au mieux votre programme de formation. Si vous le souhaitez, il pourra vous orienter vers d'autres structures d'accompagnement.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed italic">
                          Il s'engage à respecter la confidentialité de tous vos échanges et ne divulguera jamais leur contenu sans votre accord exprès.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Mobility */}
              <section id="mobility" className="flex flex-col md:flex-row bg-primary-red overflow-hidden">
                <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <Image 
                      src="/assets/pexels-camcasey-1157255-scaled.jpg" 
                      alt="Mobilité Nationale et Internationale" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    MOBILITÉ NATIONALE ET INTERNATIONALE
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Mobilité Nationale */}
                    <div className="flex gap-4">
                      <Train className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Grand Sud Formation encourage ses étudiants et apprentis à découvrir la richesse des régions françaises. La mobilité nationale est une opportunité de se former dans des destinations variées, d'explorer des territoires aux identités fortes et de développer un réseau professionnel sur tout le territoire.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Chaque expérience est une porte d'entrée supplémentaire sur le monde du tourisme, permettant aux étudiants d'acquérir des compétences pratiques adaptées aux réalités du terrain.
                        </p>
                      </div>
                    </div>

                    {/* Mobilité Internationale */}
                    <div className="flex gap-4">
                      <Globe className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          <strong className="text-white">La mobilité internationale offre, par exemple, la possibilité de passer de 12 à 26 semaines en immersion dans un pays étranger</strong>, une expérience unique alliant apprentissage, découverte culturelle et épanouissement personnel.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Ouvert à tous nos apprentis, il représente une réelle opportunité d'évolution professionnelle et personnelle.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Pour en savoir plus sur les modalités, le conseiller mobilité est à votre disposition pour vous accompagner et vous aider à préparer ce projet.
                        </p>

                        {/* Advisor Profile Info - NO BOX */}
                        <div className="flex items-center gap-6 pt-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20">
                            <Image 
                              src="/assets/IMG_2502-e1756303121108.jpg" 
                              alt="Christophe PEOTTA" 
                              fill 
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-lg font-bold text-white leading-tight uppercase">Christophe PEOTTA</h4>
                            <p className="text-[11px] text-white/80 uppercase tracking-widest font-medium">Conseiller Mobilité</p>
                          </div>
                        </div>
                      </div>
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
