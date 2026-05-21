"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Handshake, Users, Accessibility, Train, Globe } from "lucide-react";

export default function CommitmentsPage() {
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
        Our <br />
        Commitments
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg",
    intro: [
      "We place individualized support, diversity, inclusion, and transparency at the heart of our teaching approach, convinced that each unique journey enriches the collective life of the school. Creating a respectful, open, and caring environment for all our students is one of our priorities!",
      "We also encourage national and international mobility in order to broaden everyone's professional and cultural horizons, thereby training responsible tourism professionals who are open to the world and focused on the future."
    ]
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
          
          {/* Sidebar - Navigation Section (25%) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6">
            {[
              { id: "personalized", label: "PERSONALIZED LEARNING PATH, TRANSPARENCY, AND QUALITY" },
              { id: "diversity", label: "DIVERSITY AND INCLUSION" },
              { id: "mobility", label: "NATIONAL AND INTERNATIONAL MOBILITY" }
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
                      alt="Personalized Learning" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    Personalized learning path, transparency, and quality
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <UserCheck className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Every journey is unique, and we see this uniqueness as a real strength: enabling everyone to reveal their potential and chart their own path to success is one of the driving forces behind what we do.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed font-medium">
                          Every student receives individualized support from the moment they are admitted.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          From assistance in finding an internship or work-study program to personal and professional development, we provide tailored support to help everyone achieve success!
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Handshake className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Transparency is at the heart of Grand Sud's commitment. This is reflected in clear communication with our students and their families, whether it concerns programs, teaching methods, or career prospects.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          By promoting trust and honesty, we create a calm environment that allows everyone to progress. This transparency is essential for building a lasting and authentic relationship, where students know that they are fully in control of their own journey!
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Handshake className="w-6 h-6 text-primary-red shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed font-bold uppercase tracking-wide">
                          The quality of our training and processes is one of our top priorities
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
                          <p className="text-[11px] text-white/80 uppercase tracking-widest font-medium">Quality certification has been awarded for the following categories of activities:</p>
                          <ul className="space-y-0.5">
                            <li className="text-[11px] text-white flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-white" /> TRAINING ACTIVITIES
                            </li>
                            <li className="text-[11px] text-white flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-white" /> TRAINING ACTIVITIES THROUGH APPRENTICESHIPS
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
                      alt="Diversity and Inclusion" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    DIVERSITY AND INCLUSION
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Users className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          We consider diversity to be an essential part of school life. Whether it be cultural diversity, gender equality, ethnic background, beliefs, or other factors, we ensure that everyone finds their place in a respectful environment.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          This plurality of backgrounds and perspectives fosters open-mindedness, encourages tolerance, and prepares our students to evolve with fairness and humanity in a tourism sector that is deeply focused on the world.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Accessibility className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed font-bold uppercase tracking-wide">
                          All persons with permanent or temporary disabilities receive support.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Each campus is accessible to persons with reduced mobility, and the accessibility register can be requested at reception.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          A dedicated system allows us to take into account the specific needs of each individual and to decide, if necessary, on educational adjustments. A disability advisor ensures that learners with disabilities are taken into account and, from your admission interview onwards, you can benefit from special arrangements.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          The disability advisor is your primary contact and will assist you with all your needs. They liaise with the teaching team and, if you are on an internship or work-study program, they will facilitate your integration into the host company.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          They will work with you to determine the accommodations you need to best pursue your training program. If you wish, they can refer you to other support structures.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed italic">
                          They are committed to respecting the confidentiality of all your exchanges and will never disclose their content without your express consent.
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
                      alt="National and International Mobility" 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                    NATIONAL AND INTERNATIONAL MOBILITY
                  </h2>
                  
                  <div className="space-y-8">
                    {/* National Mobility */}
                    <div className="flex gap-4">
                      <Train className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Grand Sud Formation encourages its students and apprentices to discover the richness of France's regions. National mobility is an opportunity to train in a variety of destinations, explore regions with strong identities, and develop a professional network throughout the country.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Each experience is a further gateway to the world of tourism, allowing students to acquire practical skills that are tailored to the realities of the field.
                        </p>
                      </div>
                    </div>

                    {/* International Mobility */}
                    <div className="flex gap-4">
                      <Globe className="w-6 h-6 text-white/50 shrink-0" />
                      <div className="space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          <strong className="text-white">International mobility offers, for example, the opportunity to spend 12 to 26 weeks immersed in a foreign country</strong>, a unique experience combining learning, cultural discovery, and personal development.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          Open to all our apprentices, it represents a real opportunity for professional and personal growth.
                        </p>
                        <p className="text-[14px] text-white leading-relaxed">
                          To find out more about the terms and conditions, the mobility advisor is available to assist you and help you prepare for this project.
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
                            <p className="text-[11px] text-white/80 uppercase tracking-widest font-medium">Mobility Advisor</p>
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
