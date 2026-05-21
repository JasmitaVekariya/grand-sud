"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Building2, Layers, MonitorPlay, ChevronDown, ChevronUp } from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface StudentJobPageProps {
  lang: "en" | "fr";
}

export default function StudentJobPage({ lang }: StudentJobPageProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("remuneration");

  const advantagesRef = useRef(null);
  const { scrollYProgress: advScroll } = useScroll({
    target: advantagesRef,
    offset: ["start end", "end start"]
  });
  const advScale = useTransform(advScroll, [0, 0.5, 1], [1, 1.1, 1.15]);

  const whereRef = useRef(null);
  const { scrollYProgress: whereScroll } = useScroll({
    target: whereRef,
    offset: ["start end", "end start"]
  });
  const whereScale = useTransform(whereScroll, [0, 0.5, 1], [1, 1.1, 1.15]);

  const t = {
    en: {
      title: "STUDENT JOB",
      heroTitle: "WORKING WHILE STUDYING",
      sidebar: [
        { id: "hours", label: "WORKING HOURS AND DAYS" },
        { id: "advantages", label: "THE ADVANTAGES OF A STUDENT JOB" },
        { id: "where", label: "WHERE TO FIND A STUDENT JOB?" },
      ],
      intro: [
        "For a student in initial training, the student job is often a good way to finance his studies and living expenses.",
        "It is an enriching experience, but it requires a good sense of organization.",
        "To successfully balance the two, it is essential to know your options and to adopt the right strategies to find the right balance."
      ],
      workingHours: {
        title: "WORKING HOURS AND DAYS",
        subtitle: "If student contracts, whether on a permanent, fixed-term or temporary basis, generally comply with labor law, there are some important points to know.",
        grid: [
          {
            icon: <Building2 className="w-10 h-10" />,
            title: "no minimum weekly working hours for those under 26",
            desc: "but a daily maximum (10h) and weekly (48h)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Layers className="w-10 h-10" />,
            title: "in the evening after classes or on weekends",
            desc: "are the usual moments to work in a student job",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <MonitorPlay className="w-10 h-10" />,
            title: "flexible schedules",
            desc: "to adapt to the requirements of your training: courses, exams...",
            bgColor: "bg-[#333333]"
          }
        ],
        bulletsTitle: "Your work must not penalize you in your training path:",
        bullets: [
          "Communicate your schedule: be transparent with your future employer about your availability and training constraints.",
          "Don't overload your schedule: set yourself a reasonable number of working hours so as not to jeopardize your studies. A healthy balance is the key to success!",
          "Demonstrate rigor: organize your time between classes, work, and revisions. Planning is your best ally."
        ]
      },
      advantages: {
        title: "THE ADVANTAGES OF A STUDENT JOB",
        image: "/assets/pexels-edwardeyer-687824-scaled.jpg",
        accordions: [
          {
            id: "remuneration",
            title: "Have a remuneration",
            content: (
              <div className="space-y-4">
                <p>The minimum hourly wage to be paid to an employed student depends on their age and is governed by law:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>From 18 years old: pay at the hourly SMIC;</li>
                  <li>At 16 or 17 years: pay at the hourly SMIC with a 10% discount;</li>
                  <li>At 14 or 15 years: pay at the hourly SMIC with a 20% reduction.</li>
                </ul>
                <p>Furthermore, as part of a student contract carried out on weekends, the remuneration may be higher. Some collective agreements indeed provide for a wage increase for Sunday work, particularly in the wholesale or retail food trade sectors.</p>
                <p>These revenues allow you to finance your training or living expenses.</p>
              </div>
            )
          },
          {
            id: "experience",
            title: "Gain experience",
            content: (
              <div className="space-y-4">
                <p>Beyond the financial aspect, a student job is an excellent opportunity to develop new skills.</p>
                <p>It is an opportunity to gain professional experience, discover the world of work and develop your sense of responsibility, your autonomy and your organization.</p>
                <p>It is also a way to create a professional network and enrich your CV.</p>
              </div>
            )
          },
          {
            id: "meet",
            title: "Meet people",
            content: (
              <div className="space-y-4">
                <p>Sometimes, when one is the nose in one’s studies, it may happen that we remain trapped in our bubble…</p>
                <p>A student job will make you meet people from all backgrounds, force you to forget your studies for a few hours and allow you to occupy your mind and body with something other than your training!</p>
              </div>
            )
          }
        ]
      },
      where: {
        title: "WHERE TO FIND A STUDENT JOB?",
        image: "/assets/pexels-kampus-8422725-scaled.jpg",
        overlay: [
          "Use dedicated platforms, such as job boards, temporary employment agencies, professional social networks, companies' sites in your area. Or even our Career Center, on which offers are regularly posted.",
          "Be proactive: do not hesitate to apply directly to companies and submit CVs, even if they do not have online offers!",
          "To not waste time, focus your research on the sectors that recruit the most students:"
        ],
        sectors: [
          { label: "Bars - Restaurants - Hotels", bgColor: "bg-[#8B2318]" },
          { label: "Shops - Retail", bgColor: "bg-[#333333]" },
          { label: "School support - Personal service", bgColor: "bg-[#8B2318]" },
          { label: "Logistics - Order preparation", bgColor: "bg-[#333333]" }
        ]
      }
    },
    fr: {
      title: "JOB ÉTUDIANT",
      heroTitle: "TRAVAILLER PENDANT SES ÉTUDES",
      sidebar: [
        { id: "hours", label: "HORAIRES ET JOURS" },
        { id: "advantages", label: "AVANTAGES DU JOB ÉTUDIANT" },
        { id: "where", label: "OÙ TROUVER UN JOB ÉTUDIANT ?" },
      ],
      intro: [
        "Pour un étudiant en formation initiale, le job étudiant est souvent un bon moyen de financer ses études et ses frais de vie.",
        "C'est une expérience enrichissante, mais qui demande un bon sens de l'organisation.",
        "Pour réussir à concilier les deux, il est essentiel de connaître ses options et d'adopter les bonnes stratégies pour trouver le bon équilibre."
      ],
      workingHours: {
        title: "HORAIRES ET JOURS DE TRAVAIL",
        subtitle: "Si les contrats étudiants, qu'ils soient en CDI, CDD ou intérim, respectent généralement le droit du travail, certains points importants sont à connaître.",
        grid: [
          {
            icon: <Building2 className="w-10 h-10" />,
            title: "pas de durée hebdomadaire minimale pour les moins de 26 ans",
            desc: "mais un maximum quotidien (10h) et hebdomadaire (48h)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Layers className="w-10 h-10" />,
            title: "le soir après les cours ou le week-end",
            desc: "sont les moments habituels pour travailler en job étudiant",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <MonitorPlay className="w-10 h-10" />,
            title: "des horaires flexibles",
            desc: "pour s'adapter aux exigences de votre formation : cours, examens...",
            bgColor: "bg-[#333333]"
          }
        ],
        bulletsTitle: "Votre travail ne doit pas vous pénaliser dans votre parcours de formation :",
        bullets: [
          "Communiquez votre emploi du temps : soyez transparent avec votre futur employeur sur vos disponibilités et vos contraintes de formation.",
          "Ne surchargez pas votre emploi du temps : fixez-vous un nombre d'heures de travail raisonnable pour ne pas mettre en péril vos études. Un bon équilibre est la clé de la réussite !",
          "Faites preuve de rigueur : organisez votre temps entre les cours, le travail et les révisions. La planification est votre meilleure alliée."
        ]
      },
      advantages: {
        title: "LES AVANTAGES D'UN JOB ÉTUDIANT",
        image: "/assets/pexels-edwardeyer-687824-scaled.jpg",
        accordions: [
          {
            id: "remuneration",
            title: "Avoir une rémunération",
            content: (
              <div className="space-y-4">
                <p>Le salaire horaire minimum à verser à un étudiant salarié dépend de son âge et est régi par la loi :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>À partir de 18 ans : rémunération au SMIC horaire ;</li>
                  <li>À 16 ou 17 ans : rémunération au SMIC horaire avec un abattement de 10 % ;</li>
                  <li>À 14 ou 15 ans : rémunération au SMIC horaire avec une réduction de 20 %.</li>
                </ul>
                <p>Par ailleurs, dans le cadre d'un contrat étudiant effectué le week-end, la rémunération peut être plus élevée. Certaines conventions collectives prévoient en effet une majoration de salaire pour le travail dominical, notamment dans les secteurs du commerce de détail alimentaire spécialisé ou non.</p>
                <p>Ces revenus vous permettent de financer votre formation ou vos frais de vie.</p>
              </div>
            )
          },
          {
            id: "experience",
            title: "Acquérir de l'expérience",
            content: (
              <div className="space-y-4">
                <p>Au-delà de l'aspect financier, le job étudiant est une excellente opportunité de développer de nouvelles compétences.</p>
                <p>C'est l'occasion d'acquérir une expérience professionnelle, de découvrir le monde du travail et de développer votre sens des responsabilités, votre autonomie et votre organisation.</p>
                <p>C'est aussi un moyen de se créer un réseau professionnel et d'enrichir son CV.</p>
              </div>
            )
          },
          {
            id: "meet",
            title: "Faire des rencontres",
            content: (
              <div className="space-y-4">
                <p>Parfois, quand on a le nez dans ses études, il peut arriver que l'on reste enfermé dans sa bulle…</p>
                <p>Un job étudiant vous fera rencontrer des personnes de tous horizons, vous obligera à oublier vos études pendant quelques heures et vous permettra d'occuper votre esprit et votre corps à autre chose qu'à votre formation !</p>
              </div>
            )
          }
        ]
      },
      where: {
        title: "OÙ TROUVER UN JOB ÉTUDIANT ?",
        image: "/assets/pexels-kampus-8422725-scaled.jpg",
        overlay: [
          "Utilisez les plateformes dédiées, telles que les sites d'emploi, les agences d'intérim, les réseaux sociaux professionnels, les sites des entreprises de votre zone géographique. Ou encore notre Career Center, sur lequel des offres sont régulièrement postées.",
          "Soyez proactif : n'hésitez pas à démarcher directement les entreprises et à déposer des CV, même si elles n'ont pas d'offres en ligne !",
          "Pour ne pas perdre de temps, privilégiez vos recherches sur les secteurs qui recrutent le plus d'étudiants :"
        ],
        sectors: [
          { label: "Bars - Restaurants - Hôtellerie", bgColor: "bg-[#8B2318]" },
          { label: "Commerces - Vente", bgColor: "bg-[#333333]" },
          { label: "Soutien scolaire - Service à la personne", bgColor: "bg-[#8B2318]" },
          { label: "Logistique - Préparation de commandes", bgColor: "bg-[#333333]" }
        ]
      }
    }
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image="/assets/pexels-rdne-4921254-scaled.jpg"
      />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="py-8 space-y-16">
            <section className="space-y-4">
              {t.intro.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            <section id="hours" className="scroll-mt-32 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h2 className="text-[#dc4b3b] text-[18px] sm:text-[20px] md:text-[28px] font-semibold uppercase leading-tight tracking-tight">
                  {t.workingHours.title}
                </h2>
                <p className="text-[#333] text-[13px] md:text-[15px] font-medium leading-relaxed">
                  {t.workingHours.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                {t.workingHours.grid.map((item, idx) => (
                  <div key={idx} className={`${item.bgColor} text-white p-6 sm:p-8 md:p-10 flex flex-col items-center text-center space-y-4`}>
                    <div className="text-white/90">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[13px] sm:text-[14px] md:text-[16px] font-semibold uppercase leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] opacity-80 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-[#333] text-[14px] md:text-[16px] font-semibold">
                  {t.workingHours.bulletsTitle}
                </h4>
                <ul className="space-y-2">
                  {t.workingHours.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-[#333] text-[13px] md:text-[15px]">
                      <span className="text-[#dc4b3b] text-[16px] md:text-[18px] leading-none mt-0.5">•</span>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="advantages" className="scroll-mt-32 space-y-6 md:space-y-8">
              <h2 className="text-[#dc4b3b] text-[18px] sm:text-[20px] md:text-[28px] font-semibold uppercase leading-tight tracking-tight">
                {t.advantages.title}
              </h2>
              
              <div ref={advantagesRef} className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-gray-100 overflow-hidden">
                <motion.div style={{ scale: advScale }} className="absolute inset-0 w-full h-full">
                  <Image src={t.advantages.image} alt={t.advantages.title} fill className="object-cover" priority sizes="100vw" />
                </motion.div>
                
                <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-[4px] border border-white/20 shadow-2xl overflow-hidden rounded-sm">
                  {t.advantages.accordions.map((acc) => (
                    <div key={acc.id} className="border-b border-white/20 last:border-0">
                      <button 
                        onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                        className="w-full bg-[#dc4b3b] text-white p-3 sm:p-4 md:p-5 flex items-center justify-between transition-colors hover:bg-[#c43a2d]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[13px] sm:text-[15px] md:text-[17px] font-semibold uppercase text-left">{acc.title}</span>
                        </div>
                        {activeAccordion === acc.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <AnimatePresence>
                        {activeAccordion === acc.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/95 text-[#333] overflow-hidden"
                          >
                            <div className="p-4 sm:p-6 md:p-8 text-[12px] sm:text-[14px] md:text-[15px] leading-relaxed font-medium">
                              {acc.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="where" className="scroll-mt-32 space-y-6 md:space-y-8">
              <h2 className="text-[#dc4b3b] text-[18px] sm:text-[20px] md:text-[28px] font-semibold uppercase leading-tight tracking-tight">
                {t.where.title}
              </h2>

              <div ref={whereRef} className="relative w-full overflow-hidden bg-gray-100">
                <div className="relative h-[300px] sm:h-[350px] md:h-[450px]">
                  <motion.div style={{ scale: whereScale }} className="absolute inset-0 w-full h-full">
                    <Image src={t.where.image} alt={t.where.title} fill className="object-cover" priority sizes="100vw" />
                  </motion.div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-8 md:translate-x-0 w-[92%] sm:w-[85%] md:w-[60%] lg:w-[40%] bg-white/90 p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 shadow-xl z-10">
                    {t.where.overlay.map((para, idx) => (
                      <p key={idx} className="text-[#333] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-medium">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col relative z-10">
                  {t.where.sectors.map((sector, idx) => (
                    <div 
                      key={idx} 
                      className={`${sector.bgColor} text-white p-4 sm:p-5 flex items-center justify-between group transition-all hover:pl-8 cursor-default`}
                    >
                      <span className="text-[14px] sm:text-[16px] md:text-[22px] font-bold uppercase tracking-tight">
                        {sector.label}
                      </span>
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
