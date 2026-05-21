"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Handshake, Briefcase } from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface GraduatePageProps {
  lang: "en" | "fr";
}

export default function GraduatePage({ lang }: GraduatePageProps) {
  const t = {
    en: {
      title: "HIRE A GRADUATE",
      heroTitle: "HIRE A GRADUATE",
      bannerImage: "/assets/pexels-teddyjmodel-2955375-scaled.jpg",
      sidebar: [
        { id: "programs", label: "OUR GRADUATES' TRAINING PROGRAMS" },
        { id: "how-to", label: "HOW TO FIND YOUR FUTURE EMPLOYEE?" },
      ],
      intro: "Recruiting a Grand Sud graduate means recruiting someone with a guaranteed quality education: since 1991, several thousand graduates have cut their teeth with us and now hold a variety of positions around the world... while others are just waiting for you!",
      programs: {
        title: "OUR GRADUATES' TRAINING PROGRAMS",
        desc1: "With training in English or French, students from Grand Sud are all ready to join the professional world and your teams to meet your needs!",
        desc2: "Beyond the skills acquired during their studies, they have also gained valuable professional experience through work-study programs or internships, enabling them to quickly and successfully enter the workforce.",
        desc3: "The courses presented on our website are just a few examples of the courses taken by our students. Many others have existed and others are set to be created as the tourism market evolves and sector-specific needs are identified."
      },
      howTo: {
        title: "HOW TO FIND YOUR FUTURE EMPLOYEE?",
        desc: "To recruit one of our graduates, you can use your company space: it will allow you to post your job offer and recruit the right candidate.",
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Create an account", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake size={32} /> },
          { label: "Business login", href: `/${lang}/welcome/company-login`, icon: <Briefcase size={32} /> }
        ]
      }
    },
    fr: {
      title: "RECRUTER UN DIPLÔMÉ",
      heroTitle: "RECRUTER UN DIPLÔMÉ",
      bannerImage: "/assets/pexels-teddyjmodel-2955375-scaled.jpg",
      sidebar: [
        { id: "programs", label: "LES FORMATIONS DE NOS DIPLÔMÉS" },
        { id: "how-to", label: "COMMENT TROUVER VOTRE FUTUR COLLABORATEUR ?" },
      ],
      intro: "Recruter un diplômé de Grand Sud, c'est recruter l'assurance d'une formation de qualité : depuis 1991, plusieurs milliers de diplômés ont fait leurs armes chez nous et occupent aujourd'hui des postes variés dans le monde entier... tandis que d'autres n'attendent que vous !",
      programs: {
        title: "LES FORMATIONS DE NOS DIPLÔMÉS",
        desc1: "Avec des formations dispensées en anglais ou en français, les étudiants de Grand Sud sont tout à fait prêts à intégrer le monde professionnel et vos équipes pour répondre à vos besoins !",
        desc2: "Au-delà des compétences acquises durant leurs études, ils ont également acquis une solide expérience professionnelle à travers des formules d'alternance ou des stages, leur permettant d'entrer rapidement et avec succès dans la vie active.",
        desc3: "Les formations présentées sur notre site Internet ne sont que quelques exemples des cursus suivis par nos étudiants. Bien d'autres ont existé et d'autres ont vocation à être créées au gré des évolutions du marché du tourisme et de l'identification de besoins sectoriels précis."
      },
      howTo: {
        title: "COMMENT TROUVER VOTRE FUTUR COLLABORATEUR ?",
        desc: "Pour recruter l'un de nos diplômés, vous pouvez utiliser votre espace entreprise : il vous permettra de déposer votre offre d'emploi et de recruter le profil idéal.",
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Créer un compte", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake size={32} /> },
          { label: "Connexion entreprise", href: `/${lang}/welcome/company-login`, icon: <Briefcase size={32} /> }
        ]
      }
    }
  }[lang];

  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <main className="bg-white">
      {/* Custom Banner mimicking PageBanner to allow object-top for the specific image */}
      <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          <div className="relative h-[300px] lg:h-full overflow-hidden">
            <Image
              src={t.bannerImage}
              alt={t.heroTitle}
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
          <div className="py-8 space-y-20">
            {/* Intro */}
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
              {t.intro}
            </p>

            {/* Programs Section */}
            <section id="programs" className="scroll-mt-32 space-y-8">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.programs.title}
              </h2>
              <div className="space-y-6 text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
                <p>{t.programs.desc1}</p>
                <p>{t.programs.desc2}</p>
                <p className="italic text-[#555]">{t.programs.desc3}</p>
              </div>
            </section>

            {/* How To Section */}
            <section id="how-to" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.howTo.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.howTo.desc}
              </p>

              {/* Recruitment space block CTA */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-6 rounded-none overflow-hidden group">
                <motion.div 
                  style={{ scale: imageScale }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={t.howTo.bgImage} 
                    alt="Recruitment background" 
                    fill
                sizes="100vw" 
                    className="object-cover" 
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#dc4b3b]/40" />
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                  {t.howTo.buttons.map((btn, idx) => (
                    <Link 
                      key={idx}
                      href={btn.href}
                      className={`${idx === 0 ? "bg-[#8B2318]" : "bg-[#333333]"} text-white p-8 md:p-12 flex flex-col items-center justify-center space-y-6 transition-all hover:scale-[1.02] shadow-xl`}
                    >
                      <div className="text-white/90">
                        {btn.icon}
                      </div>
                      <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-center">
                        {btn.label}
                      </span>
                    </Link>
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
