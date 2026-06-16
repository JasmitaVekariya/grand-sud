"use client";

import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface BusinessTrainingPageProps {
  lang: "en" | "fr";
}

export default function BusinessTrainingPage({ lang }: BusinessTrainingPageProps) {
  const t = {
    en: {
      title: "TRAIN YOUR TEAMS",
      heroTitle: "TRAINING FOR YOUR TEAMS",
      bannerImage: "/assets/pexels-fauxels-3183173-scaled.jpg",
      sidebar: [
        { id: "degree", label: "DEGREE COURSES" },
        { id: "certification", label: "CERTIFICATION COURSES - INTENSIVE" },
        { id: "qualifying", label: "QUALIFYING TRAINING COURSES - GRAND SUD EXECUTIVE" },
      ],
      introNote: "Note: this page is for informational purposes only. Currently, training for your teams is only available for French speakers.",
      introParagraphs: [
        "Would you like to strengthen your teams' skills by offering them professional training tailored to your needs and objectives?",
        "Our training courses are a real career booster, allowing participants to improve their skills with a view to advancement, while ensuring that they truly acquire knowledge, know-how, and interpersonal skills.",
        "Prerequisites, objectives, dates, and durations depend on the training course chosen and are presented below. Our teams can also help you design a tailor-made program to improve your employees' skills."
      ],
      sections: [
        {
          id: "degree",
          title: "DEGREE COURSES",
          content: "The degree courses in our French-language programs are accessible through the VAE (validation of acquired experience) process, which is the most suitable option for professionals already working in a company."
        },
        {
          id: "certification",
          title: "CERTIFICATION COURSES - INTENSIVE",
          content: "These short, certified training courses offer real professional value and enable your teams to update their skills."
        },
        {
          id: "qualifying",
          title: "QUALIFYING TRAINING COURSES - GRAND SUD EXECUTIVE",
          content: "These qualifying training courses, lasting 1 to 2 days, enable participants to perfect their technical or interpersonal skills and apply what they have learned immediately in the workplace."
        }
      ]
    },
    fr: {
      title: "FORMER VOS ÉQUIPES",
      heroTitle: "LA FORMATION DE VOS ÉQUIPES",
      bannerImage: "/assets/pexels-fauxels-3183173-scaled.jpg",
      sidebar: [
        { id: "degree", label: "FORMATIONS DIPLÔMANTES" },
        { id: "certification", label: "FORMATIONS CERTIFIANTES - INTENSIFS" },
        { id: "qualifying", label: "FORMATIONS QUALIFIANTES - GRAND SUD EXECUTIVE" },
      ],
      introNote: "Note : cette page est à titre informatif uniquement. Actuellement, la formation de vos équipes n'est disponible qu'en français.",
      introParagraphs: [
        "Vous souhaitez renforcer les compétences de vos équipes en leur proposant une formation professionnelle adaptée à vos besoins et objectifs ?",
        "Nos formations sont un véritable booster de carrière, permettant aux participants de monter en compétences dans une optique d'évolution, tout en garantissant une réelle acquisition de savoir, savoir-faire et savoir-être.",
        "Prérequis, objectifs, dates et durées dépendent de la formation choisie et sont présentés ci-dessous. Nos équipes peuvent également vous accompagner dans la conception d'un programme sur-mesure pour faire monter en compétences vos collaborateurs."
      ],
      sections: [
        {
          id: "degree",
          title: "FORMATIONS DIPLÔMANTES",
          content: "Les formations diplômantes de nos cursus en français sont accessibles par la voie de la VAE (validation des acquis de l'expérience), dispositif le plus adapté pour les professionnels déjà en poste."
        },
        {
          id: "certification",
          title: "FORMATIONS CERTIFIANTES - INTENSIFS",
          content: "Ces formations courtes et certifiantes offrent une réelle valeur professionnelle et permettent à vos équipes de mettre à jour leurs compétences."
        },
        {
          id: "qualifying",
          title: "FORMATIONS QUALIFIANTES - GRAND SUD EXECUTIVE",
          content: "Ces formations qualifiantes, d'une durée de 1 à 2 jours, permettent aux participants de perfectionner leurs compétences techniques ou comportementales et d'appliquer immédiatement leurs acquis en entreprise."
        }
      ]
    }
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image={t.bannerImage}
      />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-16">
            <section className="space-y-6">
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-bold italic">
                {t.introNote}
              </p>
              {t.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            {t.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 space-y-6">
                <h2 className="text-[#dc4b3b] text-[20px] md:text-[28px] font-semibold uppercase leading-tight tracking-tight">
                  {section.title}
                </h2>
                <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
