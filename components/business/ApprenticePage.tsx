"use client";

import {
  MessageCircle,
  Send,
  Leaf,
  Building,
  Users,
  User,
  type LucideIcon,
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

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
        { id: "courses", label: "OUR LEARNERS' TRAINING COURSES" },
        { id: "regulations", label: "APPLICABLE REGULATIONS" },
      ],
      note: "Note : our apprentice are only coming from our french-speaking courses at this time.",
      intro:
        "This page guides you through the training programs we offer and details the regulatory framework for work-study programs, as well as how to recruit one of our young people: make your search a success with our corporate relations managers!",
      courses: {
        title: "OUR LEARNERS' TRAINING COURSES",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            qualification: "National Education Diploma - BAC+2",
            rhythm:
              "On average, 3 days at school for every 2 days at work, with availability for almost full-time work during the summer period.",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourism",
            qualification: "National Education Diploma - BAC+2",
            rhythm:
              "On average, 3 days at school for every 2 days at work, with availability for almost full-time work during the summer period.",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Sustainable and Digital Tourism Development",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            qualification: "RNCP qualification - BAC+3",
            rhythm:
              "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Tourism Strategy Manager",
            qualification: "RNCP qualification - BAC+5",
            rhythm:
              "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            variant: "gray" as const,
          },
        ],
      },
      regulations: {
        title: "APPLICABLE REGULATIONS",
        paragraphs: [
          "In France, work-study programs are governed by regulations designed to protect young people and ensure that this professional experience is of high quality. It also allows companies to benefit from subsidies for hiring this type of employee.",
        ],
      },
    },
    fr: {
      heroTitle: "RECRUTER LE BON ALTERNANT",
      bannerImage: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg",
      sidebar: [
        { id: "courses", label: "LES FORMATIONS DE NOS APPRENANTS" },
        { id: "regulations", label: "RÉGLEMENTATION APPLICABLE" },
      ],
      note: "Note : nos alternants proviennent uniquement de nos cursus francophones pour le moment.",
      intro:
        "Cette page vous guide à travers les programmes de formation que nous proposons et détaille le cadre réglementaire de l'alternance, ainsi que les modalités de recrutement de l'un de nos jeunes : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      courses: {
        title: "LES FORMATIONS DE NOS APPRENANTS",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            qualification: "Diplôme de l'Éducation Nationale - BAC+2",
            rhythm:
              "En moyenne, 3 jours à l'école pour 2 jours en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourisme",
            qualification: "Diplôme de l'Éducation Nationale - BAC+2",
            rhythm:
              "En moyenne, 3 jours à l'école pour 2 jours en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Responsable du Développement Touristique Durable et Numérique",
            qualification: "Titre RNCP - BAC+3",
            rhythm:
              "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Management de l'Hôtellerie",
            qualification: "Titre RNCP - BAC+3",
            rhythm:
              "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            qualification: "Titre RNCP - BAC+3",
            rhythm:
              "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTÈRE Manager en Stratégie Touristique",
            qualification: "Titre RNCP - BAC+5",
            rhythm:
              "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            variant: "gray" as const,
          },
        ],
      },
      regulations: {
        title: "RÉGLEMENTATION APPLICABLE",
        paragraphs: [
          "En France, l'alternance est régie par une réglementation visant à protéger les jeunes et à garantir une expérience professionnelle de qualité. Elle permet également aux entreprises de bénéficier d'aides à l'embauche pour ce type de profil.",
        ],
      },
    },
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner title={t.heroTitle} image={t.bannerImage} />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            <div className="space-y-6 max-w-4xl">
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-bold italic">{t.note}</p>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">{t.intro}</p>
            </div>

            <section id="courses" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
                {t.courses.title}
              </h2>
              <CourseGrid items={t.courses.grid} />
            </section>

            <section id="regulations" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
                {t.regulations.title}
              </h2>
              <div className="space-y-6">
                {t.regulations.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
