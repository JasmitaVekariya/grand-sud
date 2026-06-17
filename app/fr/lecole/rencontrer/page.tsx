"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import MeetUsEventsCalendar from "@/components/school/MeetUsEventsCalendar";

const sections = [
  { id: "open-doors", label: "Portes Ouvertes" },
  { id: "evenings", label: "Soirées d'information" },
  { id: "fairs", label: "Salons et autres évènements" },
  { id: "all-events", label: "Tous nos évènements" },
];

function RegistrationButton() {
  return (
    <div className="pt-4">
      <Link
        href="/fr/candidater"
        className="inline-block whitespace-nowrap bg-[#F23A2E] text-white px-8 py-3 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-[#dc4b3b] transition-colors"
      >
        Inscription obligatoire
      </Link>
    </div>
  );
}

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
        behavior: "smooth",
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
        title={
          <>
            Nous <br /> rencontrer
          </>
        }
        image="/assets/469121896_18471494152022529_2545897615371808642_n.jpg"
        height="h-[450px]"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-start gap-4 group w-full text-left transition-all duration-300"
                >
                  <div
                    className={`w-4 h-4 mt-1 shrink-0 transition-colors duration-300 ${
                      activeSection === section.id
                        ? "bg-primary-red"
                        : "bg-gray-300 group-hover:bg-red-200"
                    }`}
                  />
                  <span
                    className={`text-[12px] font-bold tracking-wider leading-relaxed transition-colors duration-300 ${
                      activeSection === section.id
                        ? "text-primary-red"
                        : "text-gray-400 group-hover:text-red-300"
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-6 mb-16 text-[14px] text-black leading-relaxed font-medium">
              <p>
                Pour bien choisir sa formation, il est important de valider son projet et son envie de
                se spécialiser dans le tourisme.
              </p>
              <p className="font-bold text-[16px]">
                Toute l&apos;année, nous vous invitons à nos évènements !
              </p>
              <p>Venez rencontrer :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>nos étudiants</li>
                <li>l&apos;équipe pédagogique</li>
                <li>la Direction et l&apos;équipe de Grand Sud</li>
              </ul>
              <p>
                et échanger ainsi sur les cursus, la vie à l&apos;école, nos partenaires, les stages, les
                métiers, les débouchés….
              </p>
            </div>

            <div className="flex flex-col space-y-0">
              <section id="open-doors" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img
                      src="/assets/campus-toulouse.jpg"
                      alt="Portes Ouvertes"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight mb-8">
                      Portes Ouvertes
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>
                        Venez découvrir l&apos;école, ses cursus diplômants de BAC à BAC+5 et ses
                        spécialisations métiers sur le campus.
                      </p>
                      <p className="font-bold text-white tracking-wider">
                        Prochaines dates (campus Toulouse-Labège) :
                      </p>
                      <ul className="grid grid-cols-1 gap-1 text-[13px]">
                        <li>11 octobre 2025 – 10h-13h</li>
                        <li>18 novembre 2025 – 10h-19h</li>
                        <li>6 décembre 2025 – 10h-19h</li>
                        <li>17 janvier 2026 – 10h-13h</li>
                        <li>14 février 2026 – 10h-13h</li>
                        <li>14 mars 2026 – 10h-13h</li>
                        <li>11 avril 2026 – 10h-13h</li>
                        <li>30 mai 2026 – 10h-13h</li>
                        <li>13 juin 2026 – 10h-13h</li>
                        <li>11 juillet 2026 – 10h-13h</li>
                        <li>22 août 2026 – 10h-13h</li>
                        <li>12 septembre 2026 – 10h-13h</li>
                      </ul>
                      <RegistrationButton />
                    </div>
                  </div>
                </div>
              </section>

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
                    <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight mb-8">
                      Soirées d&apos;information
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Disponible en soirée uniquement ? Nous vous accueillons une fois par mois !</p>
                      <p className="font-bold text-white tracking-wider">
                        Prochaines dates (campus Toulouse-Labège) :
                      </p>
                      <ul className="grid grid-cols-1 gap-1 text-[13px]">
                        <li>15 octobre 2025 – 17h-20h30</li>
                        <li>19 novembre 2025 – 17h-20h30</li>
                        <li>17 décembre 2025 – 17h-20h30</li>
                        <li>21 janvier 2026 – 17h-20h30</li>
                        <li>18 février 2026 – 17h-20h30</li>
                        <li>18 mars 2026 – 17h-20h30</li>
                        <li>15 avril 2026 – 17h-20h30</li>
                        <li>20 mai 2026 – 17h-20h30</li>
                        <li>17 juin 2026 – 17h-20h30</li>
                        <li>15 juillet 2026 – 17h-20h30</li>
                        <li>26 août 2026 – 17h-20h30</li>
                      </ul>
                      <RegistrationButton />
                    </div>
                  </div>
                </div>
              </section>

              <section id="fairs" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img
                      src="/assets/469121856_18471685570022529_3223111676717879210_n.jpg"
                      alt="Salons et autres évènements"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight mb-8">
                      Salons et autres évènements
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>
                        Chaque année, nous participons à de nombreux salons et évènements à destinations
                        des jeunes en recherche de formation. C&apos;est l&apos;occasion de nous rencontrer et
                        d&apos;échanger avec nos équipes dans un cadre dynamique !
                      </p>
                      <p className="font-bold text-white tracking-wider">Prochaines dates :</p>
                      <ul className="grid grid-cols-1 gap-3 text-[13px]">
                        <li>4 octobre 2025 – Salon des études supérieures – Toulouse</li>
                        <li>8 novembre 2025 – Salon des études supérieures – Toulouse</li>
                        <li>29 novembre 2025 – Salon de l&apos;étudiant et de l&apos;alternance – Pau</li>
                        <li>7 février 2026 – Salon des études supérieures et de l&apos;alternance – Toulouse</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="all-events" className="scroll-mt-32 pt-16">
                <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight text-[#2B2B2B] mb-8">
                  Tous nos évènements
                </h2>
                <MeetUsEventsCalendar />
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
