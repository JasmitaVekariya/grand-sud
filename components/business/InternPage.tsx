"use client";

import { useState, type ReactNode } from "react";
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
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

type RegulationSection = {
  id: string;
  title: string;
  paragraphs: ReactNode[];
  bullets?: string[];
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

function RegulationAccordionContent({ section }: { section: RegulationSection }) {
  return (
    <div className="p-8 space-y-4 text-[15px] text-gray-800 leading-relaxed">
      {section.paragraphs.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
      {section.bullets && (
        <ul className="space-y-2 pl-2">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-[#dc4b3b] text-[18px] leading-none mt-0.5">–</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function InternPage({ lang }: InternPageProps) {
  const [openRegulation, setOpenRegulation] = useState<string | null>(null);
  const t = {
    en: {
      heroTitle: "Hire an intern with Grand Sud",
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "Our trainees' training courses" },
        { id: "regulations", label: "Applicable regulations" },
      ],
      intro:
        "This page guides you through the training courses on offer and details the regulatory framework for internships, as well as how to recruit one of our students: make your search a success with our corporate relations officers!",
      frenchCourses: {
        title: "Our trainees' training courses",
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
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum 14-week internship",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum 14-week internship",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum 14-week internship",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Manager in Tourism Strategies",
            subtitle: "RNCP qualification - BAC+5",
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
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "red" as const,
          },
          {
            icon: Code,
            title: "BACHELOR IT & Tourism",
            subtitle: "RNCP qualification - BAC+3",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: LineChart,
            title: "MASTERE Business & Tourism",
            subtitle: "RNCP qualification - BAC+5",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "MASTERE Hospitality Management",
            subtitle: "RNCP qualification - BAC+5",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "gray" as const,
          },
          {
            icon: Code,
            title: "MASTERE IT & Tourism",
            subtitle: "RNCP qualification - BAC+5",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            variant: "red" as const,
          },
        ],
      },
      regulations: {
        title: "Applicable regulations",
        backgroundImage: "/assets/pexels-scales-justice-scaled.jpg",
        intro: [
          "In France, internships are governed by strict regulations designed to protect interns and ensure that these professional experiences are educational.",
          <>
            <strong>Law No. 2014-788 of July 10, 2014</strong> (known as the &quot;Youth Guarantee&quot; or &quot;Internship&quot; law) is one of the key pieces of legislation that has consolidated and strengthened the rights of interns.
          </>,
        ],
        sections: [
          {
            id: "convention",
            title: "Internship agreement",
            paragraphs: [
              "The internship agreement is the fundamental and mandatory document for any internship in France. It is signed by three parties:",
            ],
            bullets: [
              "The intern (or their legal representative if they are a minor).",
              "The host organization (the company, association, administration, etc.).",
              "The educational institution (university, school, high school, etc.).",
              "It must specify several essential elements, including:",
              "The tasks assigned to the intern, in line with their educational program.",
              "The start and end dates of the internship.",
              "The intern's weekly attendance hours.",
              "The amount of the allowance and how it is paid.",
              "The identity of the mentor in the company and the teacher-referent in the institution.",
              "The conditions for reimbursement of transport and meal expenses.",
            ],
          },
          {
            id: "gratification",
            title: "Allowance and expense coverage",
            paragraphs: [
              "The allowance is not a salary, but compensation paid to the intern. Payment is mandatory for internships lasting more than two consecutive months or not, during the same academic year. The two-month period corresponds to 44 days of actual attendance or the equivalent of 308 hours of work, based on 7 hours per day.",
              "The minimum amount of this allowance is set by law. It is calculated on the basis of a minimum hourly rate of 15% of the social security ceiling. It is reassessed each year. The company may always choose to pay a higher allowance.",
              "The intern is also entitled to the same social benefits as employees (meal vouchers, access to the company restaurant, reimbursement of part of transport costs, etc.).",
            ],
          },
          {
            id: "duration",
            title: "Duration and working time",
            paragraphs: [
              "The maximum duration of an internship in the same host organization cannot exceed six months per academic year. This duration may be calculated consecutively or not.",
              "The intern's attendance time cannot exceed the legal working time (generally 35 hours per week) and the company must ensure that daily and weekly rest periods are respected, as well as public holidays.",
            ],
          },
          {
            id: "protection",
            title: "Social protection and mentor",
            paragraphs: [
              <>
                The intern is affiliated with the general <strong>social security</strong> system. They are covered in the event of a work accident or occupational illness.
              </>,
              "The mentor in the company plays a crucial role: they are responsible for integrating the intern, supporting their tasks and monitoring their internship.",
              <>
                The <strong>referent</strong> at the educational institution is the guarantor of the proper pedagogical conduct of the internship and serves as a link with the host organization.
              </>,
            ],
          },
        ] as RegulationSection[],
      },
    },
    fr: {
      heroTitle: (
        <>
          Recrutez un stagiaire avec <br /> Grand Sud
        </>
      ),
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "Les formations de nos stagiaires" },
        { id: "regulations", label: "La règlementation applicable" },
      ],
      intro:
        "Cette page vous guide à travers les formations proposées et détaille le cadre réglementaire des stages, ainsi que comment recruter l'un de nos étudiants : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      frenchCourses: {
        title: "Les formations de nos stagiaires",
        subtitle: "Formations en français",
        desc: "Les étudiants issus de ces formations sont tous francophones (niveau B1 minimum) et, au-delà des compétences acquises durant leur cursus, sont aussi capable de s'exprimer en anglais et dans au moins une autre langue.",
        grid: [
          {
            icon: MessageCircle,
            title: "BTS Communication",
            subtitle: "Diplôme d'Etat de l'Education Nationale - BAC+2",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "red" as const,
          },
          {
            icon: Send,
            title: "BTS Tourisme",
            subtitle: "Diplôme d'Etat de l'Education Nationale - BAC+2",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "gray" as const,
          },
          {
            icon: Leaf,
            title: "BACHELOR Responsable du Développement Touristique Durable et Digital",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum",
            variant: "gray" as const,
          },
          {
            icon: Users,
            title: "BACHELOR MICE Designer",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum",
            variant: "red" as const,
          },
          {
            icon: User,
            title: "MASTERE Manager en Stratégies Touristiques",
            subtitle: "Titre RNCP - BAC+5",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "gray" as const,
          },
          {
            icon: Globe,
            title: "Conseiller Voyage",
            subtitle: "Formation certifiante",
            duration: "14 semaines de stage minimum",
            variant: "red" as const,
          },
        ],
      },
      englishCourses: {
        subtitle: "Formations en anglais",
        desc: "Les étudiants suivant ces formations sont principalement anglophones (niveau B1 minimum) et ont des profils internationaux. Certains étudiants parlent également français, d'autres ont plusieurs langues à leur actif : l'international est une valeur importante pour Grand Sud !",
        grid: [
          {
            icon: PieChart,
            title: "BACHELOR Business & Tourism",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
            variant: "gray" as const,
          },
          {
            icon: Building,
            title: "BACHELOR Hospitality Management",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
            variant: "red" as const,
          },
          {
            icon: Code,
            title: "BACHELOR IT & Tourism",
            subtitle: "Titre RNCP - BAC+3",
            duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
            variant: "gray" as const,
          },
          {
            icon: LineChart,
            title: "MASTERE Business & Tourism",
            subtitle: "Titre RNCP - BAC+5",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "red" as const,
          },
          {
            icon: Building,
            title: "MASTERE Hospitality Management",
            subtitle: "Titre RNCP - BAC+5",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "gray" as const,
          },
          {
            icon: Code,
            title: "MASTERE IT & Tourism",
            subtitle: "Titre RNCP - BAC+5",
            duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
            variant: "red" as const,
          },
        ],
      },
      regulations: {
        title: "La règlementation applicable",
        backgroundImage: "/assets/pexels-scales-justice-scaled.jpg",
        intro: [
          "En France, les stages sont encadrés par une réglementation stricte visant à protéger les stagiaires et à garantir que ces expériences professionnelles soient pédagogiques.",
          <>
            La <strong>loi n° 2014-788 du 10 juillet 2014</strong> (dite loi « Garantie jeune » ou loi « Stages ») est l&apos;un des textes de référence qui a consolidé et renforcé les droits des stagiaires.
          </>,
        ],
        sections: [
          {
            id: "convention",
            title: "Convention de stage",
            paragraphs: [
              "La convention de stage est le document fondamental et obligatoire pour tout stage en France. Elle est signée par trois parties :",
            ],
            bullets: [
              "Le stagiaire (ou son représentant légal s'il est mineur).",
              "L'organisme d'accueil (l'entreprise, l'association, l'administration, etc.).",
              "L'établissement d'enseignement (l'université, l'école, le lycée, etc.).",
              "Elle doit préciser plusieurs éléments essentiels, notamment :",
              "Les missions confiées au stagiaire, en lien avec son cursus pédagogique.",
              "Les dates de début et de fin du stage.",
              "La durée hebdomadaire de présence du stagiaire.",
              "Le montant de la gratification et ses modalités de versement.",
              "L'identité du tuteur dans l'entreprise et celle de l'enseignant-référent dans l'établissement.",
              "Les conditions de remboursement des frais de transport et de restauration.",
            ],
          },
          {
            id: "gratification",
            title: "Gratification et prise en charge des frais",
            paragraphs: [
              "La gratification n'est pas un salaire, mais une indemnité versée au stagiaire. Son versement est obligatoire pour les stages dont la durée est supérieure à deux mois consécutifs ou non, au cours de la même année d'enseignement. La durée de deux mois correspond à 44 jours de présence effective ou l'équivalent de 308 heures de travail, sur la base de 7 heures par jour.",
              "Le montant minimal de cette gratification est fixé par la loi. Son calcul se fait sur la base d'un taux horaire minimum qui est de 15 % du plafond horaire de la sécurité sociale. Il est réévalué chaque année. L'entreprise peut toujours choisir de verser une gratification plus élevée.",
              "Le stagiaire a également droit aux mêmes avantages sociaux que les salariés (titres-restaurant, accès au restaurant d'entreprise, remboursement d'une partie des frais de transport, etc…)",
            ],
          },
          {
            id: "duration",
            title: "Durée et encadrement du temps de travail",
            paragraphs: [
              "La durée maximale d'un stage dans le même organisme d'accueil ne peut excéder six mois par année d'enseignement. Cette durée peut être calculée de façon consécutive ou non.",
              "Le temps de présence du stagiaire ne peut dépasser la durée légale du travail (soit 35 heures par semaine en général) et l'entreprise doit veiller à respecter les repos quotidiens et hebdomadaires, ainsi que les jours fériés.",
            ],
          },
          {
            id: "protection",
            title: "Protection sociale et tuteur",
            paragraphs: [
              <>
                Le stagiaire est affilié au régime général de la <strong>sécurité sociale</strong>. Il bénéficie de la couverture en cas d&apos;accident du travail ou de maladie professionnelle.
              </>,
              "Le tuteur dans l'entreprise joue un rôle crucial : il est responsable de l'intégration du stagiaire, de l'accompagnement de ses missions et du suivi de son stage.",
              <>
                Le <strong>référent</strong> de l&apos;établissement d&apos;enseignement est, quant à lui, le garant du bon déroulement pédagogique du stage et sert de lien avec l&apos;organisme d&apos;accueil.
              </>,
            ],
          },
        ] as RegulationSection[],
      },
    },
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner title={t.heroTitle} image={t.bannerImage} />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
              {t.intro}
            </p>

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

            <section id="regulations" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.regulations.title}
              </h2>
              <div className="space-y-6">
                {t.regulations.intro.map((para, idx) => (
                  <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
              </div>

              <div className="relative rounded-sm overflow-hidden p-6 md:p-12">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${t.regulations.backgroundImage}")` }}
                />
                <div className="relative z-10 space-y-0">
                  {t.regulations.sections.map((section) => (
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
                            <RegulationAccordionContent section={section} />
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
