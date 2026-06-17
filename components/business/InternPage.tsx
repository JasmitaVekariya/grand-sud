"use client";

import {
  MessageCircle,
  Send,
  Leaf,
  Building,
  Users,
  User,
  Globe,
  PieChart,
  Code,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface InternPageProps {
  lang: "en" | "fr";
}

type CourseItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  duration: string;
  variant: "gray" | "red";
};

const CourseCard = ({ item }: { item: CourseItem }) => {
  const Icon = item.icon;
  const bgColor = item.variant === "red" ? "bg-[#802020]" : "bg-[#333333]";
  const iconColor = item.variant === "red" ? "text-[#f0b4ad]" : "text-white";

  return (
    <div
      className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-between text-center space-y-4 w-full h-full min-h-[300px] md:min-h-[320px]`}
    >
      <Icon size={48} strokeWidth={1} className={`${iconColor} shrink-0`} />
      <div className="space-y-3 flex-grow flex flex-col justify-center">
        <h3 className="text-[15px] md:text-[17px] font-bold leading-tight tracking-tight">{item.title}</h3>
        <p className="text-[12px] md:text-[13px] font-medium opacity-95 leading-relaxed">{item.subtitle}</p>
      </div>
      <p className="text-[11px] md:text-[12px] font-medium leading-relaxed opacity-90 pt-2">{item.duration}</p>
    </div>
  );
};

const CourseGrid = ({ items, columns = 4 }: { items: CourseItem[]; columns?: 3 | 4 }) => (
  <div
    className={`grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white auto-rows-fr ${
      columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
    }`}
  >
    {items.map((item, idx) => (
      <div key={idx} className="h-full min-h-[300px] md:min-h-[320px]">
        <CourseCard item={item} />
      </div>
    ))}
  </div>
);

export default function InternPage({ lang }: InternPageProps) {
  const t = {
    en: {
      title: "HIRE AN INTERN",
      heroTitle: "Hire an intern with Grand Sud",
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "OUR TRAINEES' TRAINING COURSES" },
        { id: "regulations", label: "APPLICABLE REGULATIONS" },
      ],
      intro: "This page guides you through the training courses on offer and details the regulatory framework for internships, as well as how to recruit one of our students: make your search a success with our corporate relations officers!",
      frenchCourses: {
        title: "OUR TRAINEES' TRAINING COURSES",
        subtitle: "Courses in French",
        desc: "Students from these programs are all French speakers (minimum level B1) and, in addition to the skills acquired during their studies, are also able to express themselves in English and at least one other language.",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            subtitle: "State Diploma from the French Ministry of Education - BAC+2",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourism",
            subtitle: "State Diploma from the French Ministry of Education - BAC+2",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Sustainable and Digital Tourism Development Manager",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Manager in Tourism Strategy",
            subtitle: "RNCP qualification - Mastère's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Globe,
            title: "Travel Advisor",
            subtitle: "Certification training",
            duration: "Minimum 14-week internship",
            variant: "red" as const,
          },
        ],
      },
      englishCourses: {
        subtitle: "Courses in English",
        desc: "The students enrolled in these programs are primarily English speakers (minimum B1 level) and have international backgrounds. Some students also speak French, while others speak several languages: internationalism is an important value for Grand Sud!",
        grid: [
          {
            icon: PieChart,
            title: "BACHELOR Business & Tourism",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "red" as const,
          },
          {
            icon: Code,
            title: "BACHELOR IT & Tourism",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: LineChart,
            title: "MASTERE Business & Tourism",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "MASTERE Hospitality Management",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Code,
            title: "MASTERE IT & Tourism",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "red" as const,
          },
        ],
      },
      regulations: {
        title: "APPLICABLE REGULATIONS",
        paragraphs: [
          "In France, internships are governed by strict regulations designed to protect interns and ensure that these professional experiences are educational.",
          "Law No. 2014-788 of July 10, 2014 (known as the \"Youth Guarantee\" or \"Internship\" law) is one of the key pieces of legislation that has consolidated and strengthened the rights of interns.",
          "Some of those rules are :"
        ],
        bullets: [
          "the obligation to sign an internship agreement,",
          "remuneration as soon as the internship exceeds two months,",
          "a maximum working time of seven hours per day, for 5 days a week,",
          "a maximum internship duration of six months per academic year"
        ]
      },
    },
    fr: {
      title: "RECRUTER UN STAGIAIRE",
      heroTitle: "TROUVER LE BON STAGIAIRE",
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "LES FORMATIONS DE NOS STAGIAIRES" },
        { id: "regulations", label: "RÉGLEMENTATION APPLICABLE" },
      ],
      intro: "Cette page vous guide à travers les formations proposées et détaille le cadre réglementaire des stages, ainsi que les modalités de recrutement de l'un de nos étudiants : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      frenchCourses: {
        title: "LES FORMATIONS DE NOS STAGIAIRES",
        subtitle: "Cursus en Français",
        desc: "Les étudiants de ces programmes sont tous francophones (niveau B1 minimum) et, en complément des compétences acquises lors de leurs études, sont également capables de s'exprimer en anglais et au moins une autre langue.",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            subtitle: "Diplôme d'État du Ministère de l'Éducation Nationale - BAC+2",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourisme",
            subtitle: "Diplôme d'État du Ministère de l'Éducation Nationale - BAC+2",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Responsable du Développement Touristique Durable et Numérique",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Management de l'Hôtellerie",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTÈRE Manager en Stratégie Touristique",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "gray" as const,
          },
          {
            icon: Globe,
            title: "Conseiller Voyage",
            subtitle: "Formation certifiante",
            duration: "Stage de 14 semaines minimum",
            variant: "red" as const,
          },
        ],
      },
      englishCourses: {
        subtitle: "Cursus en Anglais",
        desc: "Les étudiants inscrits dans ces programmes sont majoritairement anglophones (niveau B1 minimum) et ont un parcours international. Certains étudiants parlent également français, d'autres plusieurs langues : l'internationalité est une valeur forte chez Grand Sud !",
        grid: [
          {
            icon: PieChart,
            title: "BACHELOR Business & Tourism",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            variant: "gray" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            variant: "red" as const,
          },
          {
            icon: Code,
            title: "BACHELOR IT & Tourism",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            variant: "gray" as const,
          },
          {
            icon: LineChart,
            title: "MASTERE Business & Tourism",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "MASTERE Hospitality Management",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "gray" as const,
          },
          {
            icon: Code,
            title: "MASTERE IT & Tourism",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            variant: "red" as const,
          },
        ],
      },
      regulations: {
        title: "RÉGLEMENTATION APPLICABLE",
        paragraphs: [
          "En France, les stages sont régis par une réglementation stricte visant à protéger les stagiaires et à garantir que ces expériences professionnelles sont pédagogiques.",
          "La loi n° 2014-788 du 10 juillet 2014 (dite loi « Garantie Jeunes » ou « Stage ») est l'un des textes législatifs clés qui a consolidé et renforcé les droits des stagiaires.",
          "Quelques-unes de ces règles sont :"
        ],
        bullets: [
          "l'obligation de signer une convention de stage,",
          "la gratification dès lors que le stage dépasse deux mois,",
          "un temps de travail maximum de sept heures par jour, 5 jours par semaine,",
          "une durée de stage maximale de six mois par année universitaire"
        ]
      },
    },
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image={t.bannerImage}
      />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            {/* Intro */}
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
              {t.intro}
            </p>

            {/* Courses Section */}
            <section id="courses" className="scroll-mt-32 space-y-12">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
                {t.frenchCourses.title}
              </h2>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">{t.frenchCourses.subtitle}</h3>
                  <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium opacity-80">
                    {t.frenchCourses.desc}
                  </p>
                </div>
                <CourseGrid items={t.frenchCourses.grid} columns={4} />
              </div>

              <div className="space-y-10 pt-8">
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">{t.englishCourses.subtitle}</h3>
                  <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium opacity-80">
                    {t.englishCourses.desc}
                  </p>
                </div>
                <CourseGrid items={t.englishCourses.grid} columns={3} />
              </div>
            </section>

            {/* Regulations Section */}
            <section id="regulations" className="scroll-mt-32 space-y-8">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.regulations.title}
              </h2>
              <div className="space-y-6">
                {t.regulations.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
                <ul className="space-y-3 pl-2">
                  {t.regulations.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-[#333] text-[14px] md:text-[15px]">
                      <span className="text-[#dc4b3b] text-[18px] leading-none mt-0.5">–</span>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
