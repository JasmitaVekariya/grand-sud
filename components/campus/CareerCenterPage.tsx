"use client";

import {
  Calendar,
  Pencil,
  CalendarX,
  BarChart3,
  FileDown,
  BellRing,
  CalendarDays,
  CalendarPlus,
  User,
  Briefcase,
  Clock,
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";

interface CareerCenterPageProps {
  lang: "en" | "fr";
}

export default function CareerCenterPage({ lang }: CareerCenterPageProps) {
  const t = {
    en: {
      sections: [
        { id: "e-campus", label: "E-CAMPUS" },
        { id: "career-center", label: "CAREER CENTER" },
      ],
      intro: [
        "The landscape of higher education is changing, and digital tools are its main drivers.",
        "Among these tools, the e-campus and the Career Center stand out as essential platforms for our students.",
        "The e-campus offers access to educational resources and many other tools, promoting autonomy and flexibility.",
        "At the same time, the Career Center is an indispensable ally for building a professional project.",
        "Together, these digital tools create a complete learning ecosystem, which complements the quality of the teachings of our professional speakers but also the support of our teams."
      ],
      ecampus: {
        title: "E-CAMPUS",
        description: [
          "The e-campus is the digital platform at the heart of your training path, offering centralized access to educational resources (annual schedule, assignments, course materials...).",
          "It is also a place of exchange and sharing, where speakers and students can find guides and tips to make the most of the tools provided by the school.",
          "Beyond classes, it facilitates the management of school life by allowing the tracking of grades, absences and schedules."
        ],
        grid: [
          { icon: Calendar, title: "Schedules and classrooms", subtitle: "updated in real time", bgColor: "bg-[#333333]" },
          { icon: Pencil, title: "Homework", subtitle: "so as not to forget anything", bgColor: "bg-[#8B2318]" },
          { icon: CalendarX, title: "Tracking of absences and delays", subtitle: "to check the status of your justifications and avoid surprises at the class council!", bgColor: "bg-[#333333]" },
          { icon: BarChart3, title: "Notes and bulletins", subtitle: "available in your space, as soon as your speaker or the teaching team add them", bgColor: "bg-[#8B2318]" },
          { icon: FileDown, title: "Document sharing", subtitle: "to be up to date, even from a distance", bgColor: "bg-[#333333]" },
          { icon: BellRing, title: "Real-time alerts", subtitle: "for each change in your space, an alert comes to you by email if it is not urgent, by SMS if it is.", bgColor: "bg-[#8B2318]" },
        ]
      },
      career: {
        title: "CAREER CENTER",
        description: [
          "The Career Center is an essential tool to support students and graduates in their professional project.",
          "It is a platform dedicated to job search, internship and apprenticeship with offers that are made available online by companies and our school.",
          "It serves as a practical guide for work-study and internship, centralizing the necessary information and contractual documents.",
          "Thanks to our corporate relationship managers and coaches, who accompany you on a daily basis, you also access targeted opportunities for a successful placement!"
        ],
        students: {
          title: "For students",
          grid: [
            { icon: Calendar, title: "Apprenticeships", subtitle: "for our young people in search of a company within which to train throughout the year", bgColor: "bg-[#333333]" },
            { icon: CalendarDays, title: "Internships", subtitle: "for students seeking to gain experience in a company separate from the training period", bgColor: "bg-[#8B2318]" },
            { icon: CalendarPlus, title: "Student jobs", subtitle: "for those who would like to work alongside their studies!", bgColor: "bg-[#333333]" },
          ]
        },
        graduates: {
          title: "For graduates",
          grid: [
            { icon: User, title: "Permanent contract", subtitle: "for those looking for a long-term position", bgColor: "bg-[#8B2318]" },
            { icon: Briefcase, title: "Short term contract", subtitle: "for those looking for a short or medium-term mission", bgColor: "bg-[#333333]" },
            { icon: Clock, title: "Freelance", subtitle: "for those in search of one-off missions", bgColor: "bg-[#8B2318]" },
          ]
        },
      }
    },
    fr: {
      sections: [
        { id: "e-campus", label: "E-CAMPUS" },
        { id: "career-center", label: "CAREER CENTER" },
      ],
      intro: [
        "Le paysage de l'enseignement supérieur change, et les outils numériques en sont les principaux moteurs.",
        "Parmi ces outils, l'e-campus et le Career Center s'imposent comme des plateformes essentielles pour nos étudiants.",
        "L'e-campus offre un accès aux ressources pédagogiques et à de nombreux autres outils, favorisant l'autonomie et la flexibilité.",
        "Parallèlement, le Career Center est un allié indispensable pour construire un projet professionnel.",
        "Ensemble, ces outils numériques créent un écosystème d'apprentissage complet, qui complète la qualité des enseignements de nos intervenants professionnels mais aussi l'accompagnement de nos équipes."
      ],
      ecampus: {
        title: "E-CAMPUS",
        description: [
          "L'e-campus est la plateforme numérique au cœur de votre parcours de formation, offrant un accès centralisé aux ressources pédagogiques (emploi du temps annuel, devoirs, supports de cours...).",
          "C'est aussi un lieu d'échange et de partage, où intervenants et étudiants peuvent trouver des guides et des conseils pour tirer le meilleur parti des outils mis à disposition par l'école.",
          "Au-delà des cours, il facilite la gestion de la vie scolaire en permettant le suivi des notes, des absences et des emplois du temps."
        ],
        grid: [
          { icon: Calendar, title: "Planning et salles", subtitle: "mis à jour en temps réel", bgColor: "bg-[#333333]" },
          { icon: Pencil, title: "Devoirs", subtitle: "pour ne rien oublier", bgColor: "bg-[#8B2318]" },
          { icon: CalendarX, title: "Suivi des absences et retards", subtitle: "pour consulter l'état de vos justificatifs et éviter les surprises au conseil de classe !", bgColor: "bg-[#333333]" },
          { icon: BarChart3, title: "Notes et bulletins", subtitle: "disponibles dans votre espace, dès que votre intervenant ou l'équipe pédagogique les ajoute", bgColor: "bg-[#8B2318]" },
          { icon: FileDown, title: "Partage de documents", subtitle: "pour être à jour, même à distance", bgColor: "bg-[#333333]" },
          { icon: BellRing, title: "Alertes en temps réel", subtitle: "pour chaque changement dans votre espace, une alerte vous parvient par mail si ce n'est pas urgent, par SMS si ça l'est.", bgColor: "bg-[#8B2318]" },
        ]
      },
      career: {
        title: "CAREER CENTER",
        description: [
          "Le Career Center est un outil essentiel pour accompagner les étudiants et les diplômés dans leur projet professionnel.",
          "C'est une plateforme dédiée à la recherche d'emploi, de stage et d'alternance avec des offres qui sont mises à disposition en ligne par les entreprises et notre école.",
          "Il sert de guide pratique pour l'alternance et le stage, centralisant les informations nécessaires et les documents contractuels.",
          "Grâce à nos chargés de relations entreprises et nos coachs, qui vous accompagnent au quotidien, vous accédez également à des opportunités ciblées pour un placement réussi !"
        ],
        students: {
          title: "Pour les étudiants",
          grid: [
            { icon: Calendar, title: "Apprentissage", subtitle: "pour nos jeunes en recherche d'une entreprise au sein de laquelle se former tout au long de l'année", bgColor: "bg-[#333333]" },
            { icon: CalendarDays, title: "Stages", subtitle: "pour les étudiants cherchant à acquérir de l'expérience en entreprise en dehors de la période de formation", bgColor: "bg-[#8B2318]" },
            { icon: CalendarPlus, title: "Jobs étudiants", subtitle: "pour ceux qui souhaiteraient travailler en parallèle de leurs études !", bgColor: "bg-[#333333]" },
          ]
        },
        graduates: {
          title: "Pour les diplômés",
          grid: [
            { icon: User, title: "CDI", subtitle: "pour ceux qui recherchent un poste à long terme", bgColor: "bg-[#8B2318]" },
            { icon: Briefcase, title: "CDD / Missions", subtitle: "pour ceux qui recherchent une mission de courte ou moyenne durée", bgColor: "bg-[#333333]" },
            { icon: Clock, title: "Freelance", subtitle: "pour ceux en quête de missions ponctuelles", bgColor: "bg-[#8B2318]" },
          ]
        },
      }
    }
  }[lang];

  return (
    <div className="pt-4">
      <CourseDetailLayout sections={t.sections}>
        <div className="space-y-24 pb-24">
          {/* Intro Paragraphs */}
          <div className="space-y-6 text-[16px] md:text-[18px] text-[#333] leading-relaxed font-medium max-w-4xl">
            {t.intro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* E-CAMPUS Section */}
          <section id="e-campus" className="scroll-mt-32 space-y-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-primary-red uppercase leading-none tracking-tight">
              {t.ecampus.title}
            </h2>
            <div className="space-y-6 text-[16px] md:text-[18px] text-[#444] leading-relaxed font-medium max-w-4xl">
              {t.ecampus.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl rounded-sm overflow-hidden">
              {t.ecampus.grid.map((item, idx) => (
                <div key={idx} className={`${item.bgColor} p-10 text-white space-y-4 flex flex-col items-center text-center group hover:bg-opacity-90 transition-all duration-300`}>
                  <item.icon size={48} className="opacity-80 group-hover:opacity-100 transition-opacity mb-4" />
                  <h3 className="text-[18px] font-bold uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] opacity-70 leading-relaxed font-medium">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CAREER CENTER Section */}
          <section id="career-center" className="scroll-mt-32 space-y-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-primary-red uppercase leading-none tracking-tight">
              {t.career.title}
            </h2>
            <div className="space-y-6 text-[16px] md:text-[18px] text-[#444] leading-relaxed font-medium max-w-4xl">
              {t.career.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Students Grid */}
            <div className="space-y-8">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#333] uppercase tracking-tight">
                {t.career.students.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden">
                {t.career.students.grid.map((item, idx) => (
                  <div key={idx} className={`${item.bgColor} p-10 text-white space-y-4 flex flex-col items-center text-center`}>
                    <item.icon size={40} className="opacity-80 mb-4" />
                    <h4 className="text-[18px] font-bold uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[14px] opacity-70 leading-relaxed font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Graduates Grid */}
            <div className="space-y-8">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#333] uppercase tracking-tight">
                {t.career.graduates.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden">
                {t.career.graduates.grid.map((item, idx) => (
                  <div key={idx} className={`${item.bgColor} p-10 text-white space-y-4 flex flex-col items-center text-center`}>
                    <item.icon size={40} className="opacity-80 mb-4" />
                    <h4 className="text-[18px] font-bold uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[14px] opacity-70 leading-relaxed font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </CourseDetailLayout>
    </div>
  );
}
