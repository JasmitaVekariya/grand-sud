"use client";

import { useState } from "react";
import {
  MessageCircle,
  Send,
  Leaf,
  Building,
  Users,
  User,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";
import { getApprenticeRegulations } from "./apprenticeRegulationsData";

interface ApprenticePageProps {
  lang: "en" | "fr";
}

type CourseItem = {
  icon: LucideIcon;
  title: string;
  qualification: string;
  rhythm: string;
  variant: "gray" | "red";
};

const btsRhythmFr =
  "en moyenne 3 jours en école pour 2 jours en entreprise, avec une disponibilité à quasi temps plein durant la période estivale";
const weekRhythmFr =
  "en moyenne 1 semaine à l'école pour 1 semaine en entreprise, avec une disponibilité à quasi temps plein durant la période estivale";

const CourseCard = ({ item }: { item: CourseItem }) => {
  const Icon = item.icon;
  const bgColor = item.variant === "red" ? "bg-[#802020]" : "bg-[#333333]";
  const iconColor = item.variant === "red" ? "text-[#f0b4ad]" : "text-white";

  return (
    <div
      className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-between text-center space-y-4 w-full h-full min-h-[320px] md:min-h-[360px]`}
    >
      <Icon size={48} strokeWidth={1} className={`${iconColor} shrink-0`} />
      <div className="space-y-3 grow flex flex-col justify-center">
        <h3 className="text-[15px] md:text-[17px] font-bold leading-tight tracking-tight">{item.title}</h3>
        <p className="text-[12px] md:text-[13px] font-bold opacity-95 leading-relaxed">{item.qualification}</p>
      </div>
      <p className="text-[12px] md:text-[13px] font-medium leading-relaxed opacity-90 pt-2">{item.rhythm}</p>
    </div>
  );
};

const CourseGrid = ({ items }: { items: CourseItem[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 bg-white auto-rows-fr">
    {items.map((item, idx) => (
      <div key={idx} className="h-full min-h-[320px] md:min-h-[360px]">
        <CourseCard item={item} />
      </div>
    ))}
  </div>
);

export default function ApprenticePage({ lang }: ApprenticePageProps) {
  const [openRegulation, setOpenRegulation] = useState<string | null>(null);
  const regulations = getApprenticeRegulations(lang);

  const t = {
    en: {
      heroTitle: (
        <>
          Hire an apprentice with <br />
          Grand Sud
        </>
      ),
      bannerImage: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg",
      sidebar: [
        { id: "courses", label: "Our learners' training courses" },
        { id: "regulations", label: "Applicable regulations" },
      ],
      intro:
        "This page guides you through the training programs we offer and details the regulatory framework for work-study programs, as well as how to recruit one of our young people: make your search a success with our corporate relations officers!",
      courses: {
        title: "Our learners' training courses",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            qualification: "State Diploma from the French Ministry of Education - BAC+2",
            rhythm:
              "On average, 3 days at school for 2 days in a company, with near full-time availability during the summer period",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourism",
            qualification: "State Diploma from the French Ministry of Education - BAC+2",
            rhythm:
              "On average, 3 days at school for 2 days in a company, with near full-time availability during the summer period",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Sustainable and Digital Tourism Development Manager",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, 1 week at school for 1 week in a company, with near full-time availability during the summer period",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, 1 week at school for 1 week in a company, with near full-time availability during the summer period",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, 1 week at school for 1 week in a company, with near full-time availability during the summer period",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Manager in Tourism Strategies",
            qualification: "RNCP qualification - BAC+5",
            rhythm:
              "On average, 1 week at school for 1 week in a company, with near full-time availability during the summer period",
            variant: "gray" as const,
          },
        ],
      },
      regulations: {
        title: "Applicable regulations",
      },
    },
    fr: {
      heroTitle: (
        <>
          Recrutez un alternant avec <br /> Grand Sud
        </>
      ),
      bannerImage: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg",
      sidebar: [
        { id: "courses", label: "Les formations de nos apprenants" },
        { id: "regulations", label: "La règlementation applicable" },
      ],
      intro:
        "Cette page vous guide à travers les formations proposées et détaille le cadre réglementaire des alternances, ainsi que comment recruter l'un de nos jeunes : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      courses: {
        title: "Les formations de nos apprenants",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            qualification: "Diplôme d'Etat de l'Education Nationale - BAC+2",
            rhythm: btsRhythmFr,
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourisme",
            qualification: "Diplôme d'Etat de l'Education Nationale - BAC+2",
            rhythm: btsRhythmFr,
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Responsable du Développement Touristique Durable et Digital",
            qualification: "Titre RNCP - BAC+3",
            rhythm: weekRhythmFr,
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            qualification: "Titre RNCP - BAC+3",
            rhythm: weekRhythmFr,
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            qualification: "Titre RNCP - BAC+3",
            rhythm: weekRhythmFr,
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Manager en Stratégies Touristiques",
            qualification: "Titre RNCP - BAC+5",
            rhythm: weekRhythmFr,
            variant: "gray" as const,
          },
        ],
      },
      regulations: {
        title: "La règlementation applicable",
      },
    },
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner title={t.heroTitle} image={t.bannerImage} />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">{t.intro}</p>

            <section id="courses" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
                {t.courses.title}
              </h2>
              <CourseGrid items={t.courses.grid} />
            </section>

            <section id="regulations" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.regulations.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">{regulations.intro}</p>

              <div className="relative rounded-sm overflow-hidden p-6 md:p-12">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${regulations.backgroundImage}")` }}
                />
                <div className="relative z-10 space-y-0">
                  {regulations.sections.map((section) => (
                    <div key={section.id} className="overflow-hidden border-b border-white last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenRegulation(openRegulation === section.id ? null : section.id)}
                        className="w-full bg-[#E54841] text-white px-6 h-[60px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                      >
                        <div className="flex items-center gap-4">
                          {openRegulation === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          <span className="text-[16px] md:text-[18px] font-bold tracking-wide text-left">{section.title}</span>
                        </div>
                      </button>
                      <AnimatePresence>
                        {openRegulation === section.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white overflow-hidden"
                          >
                            {section.content}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
