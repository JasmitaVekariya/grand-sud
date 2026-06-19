"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Leaf,
  Building,
  Users,
  User,
  Globe,
  Laptop,
  PieChart,
  Code,
  Briefcase,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";

interface GraduatePageProps {
  lang: "en" | "fr";
}

type ProgramItem = {
  icon?: LucideIcon;
  title?: string;
  diploma?: string;
  variant: "gray" | "red";
  flag?: "FR" | "UK";
  href?: string;
  isMore?: boolean;
};

const ProgramCard = ({ item }: { item: ProgramItem }) => {
  const bgColor = item.variant === "red" ? "bg-[#802020]" : "bg-[#333333]";
  const iconColor = item.variant === "red" ? "text-[#f0b4ad]" : "text-white";

  if (item.isMore) {
    return (
      <div className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[300px] md:min-h-[320px] h-full`}>
        <p className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide">{item.title}</p>
      </div>
    );
  }

  const Icon = item.icon!;
  const inner = (
    <div
      className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-between text-center space-y-4 w-full h-full min-h-[300px] md:min-h-[320px] ${item.href ? "transition-transform hover:scale-[1.02] cursor-pointer" : ""}`}
    >
      <Icon size={48} strokeWidth={1} className={`${iconColor} shrink-0`} />
      <div className="space-y-3 grow flex flex-col justify-center">
        {item.flag && (
          <div className="relative w-8 h-5 mx-auto overflow-hidden rounded-[2px] shadow-sm border border-white/20">
            <img
              src={item.flag === "FR" ? "/assets/1f1eb-1f1f7.svg" : "/assets/1f1ec-1f1e7.svg"}
              alt={item.flag}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-[15px] md:text-[17px] font-bold leading-tight tracking-tight uppercase">{item.title}</h3>
        <p className="text-[12px] md:text-[13px] font-medium opacity-95 leading-relaxed">{item.diploma}</p>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="h-full block">
        {inner}
      </Link>
    );
  }
  return <div className="h-full">{inner}</div>;
};

const programsFr: ProgramItem[] = [
  { icon: MessageCircle, title: "BTS MCO", diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2", variant: "red", flag: "FR" },
  { icon: Send, title: "BTS Tourisme", diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2", variant: "gray", flag: "FR", href: "/fr/formations/bts-tourisme" },
  { icon: Leaf, title: "BACHELOR Responsable du Développement Touristique Durable et Digital", diploma: "Titre RNCP - BAC+3", variant: "red", flag: "FR", href: "/fr/formations/bachelor-durable" },
  { icon: Building, title: "BACHELOR Hospitality Management", diploma: "Titre RNCP - BAC+3", variant: "gray", flag: "FR", href: "/fr/formations/bachelor-hospitality" },
  { icon: Users, title: "BACHELOR MICE Designer", diploma: "Titre RNCP - BAC+3", variant: "red", flag: "FR", href: "/fr/formations/bachelor-mice" },
  { icon: User, title: "MASTERE Manager en Stratégies Touristiques", diploma: "Titre RNCP - BAC+5", variant: "gray", flag: "FR", href: "/fr/formations/mastere-tourism" },
  { icon: Globe, title: "Conseiller Voyage", diploma: "Formation certifiante", variant: "red", flag: "FR" },
  { icon: Send, title: "GDS Amadeus", diploma: "Formation certifiante", variant: "gray", flag: "FR" },
  { icon: PieChart, title: "BACHELOR Business & Tourism", diploma: "Titre RNCP - BAC+3", variant: "red", flag: "UK", href: "/fr/formations/bachelor-business" },
  { icon: LineChart, title: "BACHELOR Business Marketing and Communication", diploma: "Titre RNCP - BAC+3 – RNCP42050", variant: "gray", flag: "UK", href: "/fr/formations/bachelor-marketing" },
  { icon: Building, title: "BACHELOR Hospitality Management", diploma: "Titre RNCP - BAC+3", variant: "gray", flag: "UK", href: "/fr/formations/bachelor-hospitality-en" },
  { icon: Code, title: "BACHELOR IT & Tourism", diploma: "Titre RNCP - BAC+3", variant: "red", flag: "UK", href: "/fr/formations/bachelor-it" },
  { icon: Briefcase, title: "MASTERE Hospitality Management", diploma: "Titre RNCP - BAC+5", variant: "gray", flag: "UK", href: "/fr/formations/mastere-hospitality" },
  { icon: Laptop, title: "MASTERE IT & Tourism", diploma: "Titre RNCP - BAC+5", variant: "red", flag: "UK", href: "/fr/formations/mastere-it" },
  { icon: LineChart, title: "MASTERE Business & Tourism", diploma: "Titre RNCP - BAC+5", variant: "gray", flag: "UK", href: "/fr/formations/mastere-business" },
  { icon: Briefcase, title: "MASTERE Business Marketing and Communication", diploma: "Titre RNCP - BAC+5 – RNCP38504", variant: "red", flag: "UK", href: "/fr/formations/mastere-marketing" },
  { title: "et bien d'autres...", variant: "red", isMore: true },
];

const programsEn: ProgramItem[] = [
  { icon: MessageCircle, title: "BTS MCO", diploma: "State Diploma from the French Ministry of Education - BAC+2", variant: "red", flag: "FR" },
  { icon: Send, title: "BTS Tourism", diploma: "State Diploma from the French Ministry of Education - BAC+2", variant: "gray", flag: "FR", href: "/en/courses/bts-tourism" },
  { icon: Leaf, title: "BACHELOR Sustainable and Digital Tourism Development Manager", diploma: "RNCP qualification - BAC+3", variant: "red", flag: "FR", href: "/en/courses/bachelor-durable" },
  { icon: Building, title: "BACHELOR Hospitality Management", diploma: "RNCP qualification - BAC+3", variant: "gray", flag: "FR", href: "/en/courses/bachelor-hospitality" },
  { icon: Users, title: "BACHELOR MICE Designer", diploma: "RNCP qualification - BAC+3", variant: "red", flag: "FR", href: "/en/courses/bachelor-mice" },
  { icon: User, title: "MASTERE Manager in Tourism Strategies", diploma: "RNCP qualification - BAC+5", variant: "gray", flag: "FR", href: "/en/courses/mastere-tourism" },
  { icon: Globe, title: "Travel Advisor", diploma: "Certification training", variant: "red", flag: "FR" },
  { icon: Send, title: "GDS Amadeus", diploma: "Certification training", variant: "gray", flag: "FR" },
  { icon: PieChart, title: "BACHELOR Business & Tourism", diploma: "RNCP qualification - BAC+3", variant: "red", flag: "UK", href: "/en/courses/bachelor-business" },
  { icon: LineChart, title: "BACHELOR Business Marketing and Communication", diploma: "RNCP qualification - BAC+3 – RNCP42050", variant: "gray", flag: "UK", href: "/en/courses/bachelor-marketing" },
  { icon: Building, title: "BACHELOR Hospitality Management", diploma: "RNCP qualification - BAC+3", variant: "gray", flag: "UK", href: "/en/courses/bachelor-hospitality-en" },
  { icon: Code, title: "BACHELOR IT & Tourism", diploma: "RNCP qualification - BAC+3", variant: "red", flag: "UK", href: "/en/courses/bachelor-it" },
  { icon: Briefcase, title: "MASTERE Hospitality Management", diploma: "RNCP qualification - BAC+5", variant: "gray", flag: "UK", href: "/en/courses/mastere-hospitality" },
  { icon: Laptop, title: "MASTERE IT & Tourism", diploma: "RNCP qualification - BAC+5", variant: "red", flag: "UK", href: "/en/courses/mastere-it" },
  { icon: LineChart, title: "MASTERE Business & Tourism", diploma: "RNCP qualification - BAC+5", variant: "gray", flag: "UK", href: "/en/courses/mastere-business" },
  { icon: Briefcase, title: "MASTERE Business Marketing and Communication", diploma: "RNCP qualification - BAC+5 – RNCP38504", variant: "red", flag: "UK", href: "/en/courses/mastere-marketing" },
  { title: "and many more...", variant: "red", isMore: true },
];

export default function GraduatePage({ lang }: GraduatePageProps) {
  const programs = lang === "fr" ? programsFr : programsEn;

  const t = {
    en: {
      heroTitle: "Hire a graduate from Grand Sud",
      bannerImage: "/assets/pexels-teddyjmodel-2955375-scaled.jpg",
      sidebar: [{ id: "programs", label: "Our graduates' training courses" }],
      intro:
        "Recruiting a Grand Sud graduate means ensuring you hire a profile whose training quality is guaranteed: since 1991, several thousand graduates have honed their skills with us and now hold a variety of positions around the world... while others are just waiting for you!",
      programs: {
        title: "Our graduates' training courses",
        desc1:
          "Whether in English or French, Grand Sud students are all ready to join the professional world and your teams to meet your needs!",
        desc2:
          "Beyond the skills acquired during their studies, they have also gained quality professional experience through work-study programs or internships, enabling rapid and successful integration.",
        desc3:
          "The courses presented here are just an example of those followed by our students; many others have existed and others are set to be created as the tourism market evolves and sector needs are identified.",
      },
    },
    fr: {
      heroTitle: (
        <>
          Recrutez un diplômé de <br /> Grand Sud
        </>
      ),
      bannerImage: "/assets/pexels-teddyjmodel-2955375-scaled.jpg",
      sidebar: [{ id: "programs", label: "Les formations de nos diplômés" }],
      intro:
        "Recruter un diplômé de chez Grand Sud, c'est s'assurer de recruter un profil dont la qualité de formation est garantie : depuis 1991, ce sont plusieurs milliers de diplômés qui ont fait leurs armes chez nous et qui se retrouvent aujourd'hui à des postes variés aux quatre coins du monde… tandis que d'autres n'attendent que vous !",
      programs: {
        title: "Les formations de nos diplômés",
        desc1:
          "Formations en anglais ou en français, les étudiants issus de Grand Sud sont tous prêts à rejoindre le monde professionnel et vos équipes pour répondre à vos besoins !",
        desc2:
          "Au-delà des compétences acquises durant leur cursus, ils ont aussi vécus des expériences professionnelles de qualité par le biais de l'alternance ou de stages, permettant ainsi une insertion rapide et réussie.",
        desc3:
          "Les formations présentées ici ne sont qu'un exemple des formations suivies par nos étudiants, de nombreuses autres ont existées et d'autres sont vouées à être créées, au fil des évolutions du marché du tourisme et des besoins sectoriels identifiés.",
      },
    },
  }[lang];

  return (
    <main className="bg-white">
      <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          <div className="relative h-[300px] lg:h-full overflow-hidden">
            <Image
              src={t.bannerImage}
              alt={typeof t.heroTitle === "string" ? t.heroTitle : "Grand Sud graduates"}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="bg-primary-red h-full" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center translate-x-[8%] lg:translate-x-[12%]"
            >
              <h1 className="text-white text-left text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight text-balance break-words max-w-[700px] pointer-events-auto">
                {t.heroTitle}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">{t.intro}</p>

            <section id="programs" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
                {t.programs.title}
              </h2>
              <div className="space-y-6 text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
                <p>{t.programs.desc1}</p>
                <p>{t.programs.desc2}</p>
                <p>{t.programs.desc3}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 bg-white auto-rows-fr pt-4">
                {programs.map((item, idx) => (
                  <div key={idx} className="h-full min-h-[300px] md:min-h-[320px]">
                    <ProgramCard item={item} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
