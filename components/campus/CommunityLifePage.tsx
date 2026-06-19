"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import MeetUsEventsCalendar from "@/components/school/MeetUsEventsCalendar";

interface CommunityLifePageProps {
  lang: "en" | "fr";
}

export default function CommunityLifePage({ lang }: CommunityLifePageProps) {
  const t = {
    en: {
      sections: [
        { id: "bde", label: "STUDENTS OFFICE (BDE)" },
        { id: "humanitarian", label: "HUMANITARIAN ASSISTANCE" },
        { id: "ambassador", label: "AMBASSADOR'S CLUB" },
        { id: "events", label: "Upcoming events" },
      ],
      intro: [
        "The involvement of students in the community life of their campus is important.",
        "It is an opportunity to develop interpersonal skills, gain confidence and expand one’s professional network, assets that will be valuable for the rest of their career.",
        "That is why we make it a point of honor to encourage their participation in the life of their campus, but also to allow them to create associations that they like.",
        "Do you have an idea for an association and the desire to gather around a project that excites you? Tell us about it: because we believe in your ideas – even the most daring ones – we offer personalized support to help you make them happen!"
      ],
      bde: {
        title: "STUDENTS OFFICE (BDE)",
        paragraphs: [
          "The Student Office (BDE) plays a crucial role in the life of each campus.",
          "It is the heart of student animation, creating an atmosphere of cohesion and belonging. It is thanks to him that the students meet, share unforgettable moments and forge lasting bonds.",
          "By organizing various events, from parties to trips, including sports or cultural activities, the BDE enriches daily life and offers opportunities for relaxation and discovery. It also represents a platform for personal development: members learn to manage projects, work in teams and take on responsibilities, essential skills for their future career.",
          "In short, the BDE is much more than a simple association: it is the social engine of the school and a springboard towards the personal and professional development of the students!"
        ],
        cta: "Go to @bde.gsf to find out more!",
        instagram: "@bde.gsf",
        image: "/assets/pexels-paggiarofrancesco-2111015-scaled.jpg"
      },
      humanitarian: {
        title: "HUMANITARIAN ASSISTANCE",
        paragraphs: [
          "We encourage our students to participate in humanitarian and social actions, in order to help their neighbors and those in need.",
          "4L Trophy, food collection... the doors of the school are open to all projects and our teams are often active participants!"
        ],
        image: "/assets/Raid-4L-Trophy_et-depuis_040-1024x681-1.jpg"
      },
      ambassador: {
        title: "AMBASSADOR'S CLUB",
        paragraphs: [
          "Want to proudly represent your school at key events such as Open Days, trade shows or immersion days?",
          "Join the Ambassadors Club and develop valuable skills in speaking, brand promotion, and sales techniques!",
          "The Ambassadors work closely with the Admissions and Communication teams of Grand Sud, thus acquiring concrete and rewarding experience."
        ],
        image: "/assets/IMG_0243-scaled-1-768x1024.jpeg"
      },
      events: {
        title: "Upcoming events",
      }
    },
    fr: {
      sections: [
        { id: "bde", label: "BUREAU DES ÉTUDIANTS (BDE)" },
        { id: "humanitarian", label: "AIDE HUMANITAIRE" },
        { id: "ambassador", label: "CLUB DES AMBASSADEURS" },
        { id: "events", label: "Prochains évènements" },
      ],
      intro: [
        "L'implication des étudiants dans la vie associative de leur campus est importante.",
        "C’est l’occasion de développer ses compétences relationnelles, de gagner en confiance et d’élargir son réseau professionnel, autant d’atouts qui seront précieux pour la suite de leur carrière.",
        "C’est pourquoi nous mettons un point d’honneur à encourager leur participation à la vie de leur campus, mais aussi à leur permettre de créer des associations qui leur ressemblent.",
        "Vous avez une idée d’association et l’envie de vous rassembler autour d’un projet qui vous anime ? Parlez-nous en : parce que nous croyons en vos idées – même les plus audacieuses – nous vous proposons un accompagnement personnalisé pour vous aider à les concrétiser !"
      ],
      bde: {
        title: "BUREAU DES ÉTUDIANTS (BDE)",
        paragraphs: [
          "Le Bureau des Étudiants (BDE) joue un rôle crucial dans la vie de chaque campus.",
          "C’est le cœur de l’animation étudiante, créant une atmosphère de cohésion et d’appartenance. C’est grâce à lui que les étudiants se rencontrent, partagent des moments inoubliables et tissent des liens durables.",
          "En organisant des événements variés, allant des soirées aux voyages, en passant par des activités sportives ou culturelles, le BDE enrichit le quotidien et offre des occasions de détente et de découverte. Il représente également une plateforme de développement personnel : les membres apprennent à gérer des projets, à travailler en équipe et à prendre des responsabilités, des compétences essentielles pour leur futur parcours professionnel.",
          "En somme, le BDE est bien plus qu’une simple association : c’est le moteur social de l’école et un tremplin vers l’épanouissement personnel et professionnel des étudiants !"
        ],
        cta: "Rendez-vous sur @bde.gsf pour en savoir plus !",
        instagram: "@bde.gsf",
        image: "/assets/pexels-paggiarofrancesco-2111015-scaled.jpg"
      },
      humanitarian: {
        title: "AIDE HUMANITAIRE",
        paragraphs: [
          "Nous encourageons nos étudiants à participer à des actions humanitaires et sociales, afin de venir en aide à leur prochain et aux plus démunis.",
          "4L Trophy, collecte alimentaire... les portes de l’école sont ouvertes à tous les projets et nos équipes en sont souvent les participants actifs !"
        ],
        image: "/assets/Raid-4L-Trophy_et-depuis_040-1024x681-1.jpg"
      },
      ambassador: {
        title: "CLUB DES AMBASSADEURS",
        paragraphs: [
          "Vous souhaitez représenter fièrement votre école lors d’événements clés tels que les Journées Portes Ouvertes, les salons ou les journées d’immersion ?",
          "Rejoignez le Club des Ambassadeurs et développez des compétences précieuses en prise de parole, promotion de marque et techniques de vente !",
          "Les ambassadeurs travaillent en étroite collaboration avec les équipes Admissions et Communication de Grand Sud, acquérant ainsi une expérience concrète et valorisante."
        ],
        image: "/assets/IMG_0243-scaled-1-768x1024.jpeg"
      },
      events: {
        title: "Prochains évènements",
      }
    }
  }[lang];

  return (
    <div className="pt-4">
      <CourseDetailLayout sections={t.sections}>
        {/* Intro Text */}
        <div className="space-y-6 text-[16px] md:text-[18px] text-[#333] leading-relaxed font-medium max-w-4xl">
          {t.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Grouped Sections (No space between them) */}
        <div className="space-y-0 shadow-2xl">
          {/* Section 1: BDE */}
          <section id="bde" className="scroll-mt-32">
            <div className="bg-[#333333] flex flex-col lg:flex-row min-h-[600px] overflow-hidden rounded-sm shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[400px]">
                <Image
                  src={t.bde.image}
                  alt="BDE"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8 lg:py-12 lg:pl-8 lg:pr-6 xl:pl-10 xl:pr-8 2xl:pl-16 2xl:pr-10 flex flex-col justify-center text-white space-y-6 lg:space-y-8">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[44px] font-bold uppercase leading-none tracking-tight mt-[-2px]">
                  {t.bde.title}
                </h2>
                <div className="space-y-4 opacity-90 leading-relaxed font-medium text-[15px] md:text-[16px]">
                  {t.bde.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-[#8B2318] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <FaInstagram size={32} className="text-white" />
                  </div>
                  <p className="text-[18px] md:text-[22px] font-bold tracking-tight">
                    {t.bde.cta}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Humanitarian */}
          <section id="humanitarian" className="scroll-mt-32">
            <div className="bg-[#8B2318] flex flex-col lg:flex-row-reverse min-h-[500px] overflow-hidden rounded-sm shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[350px]">
                <Image
                  src={t.humanitarian.image}
                  alt="Humanitarian"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8 lg:py-12 lg:pl-6 lg:pr-8 xl:pl-8 xl:pr-10 2xl:pl-10 2xl:pr-16 flex flex-col justify-center text-white space-y-6 lg:space-y-8">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[44px] font-bold uppercase leading-none tracking-tight mt-[-2px]">
                  {t.humanitarian.title}
                </h2>
                <div className="space-y-4 opacity-90 leading-relaxed font-medium text-[16px] md:text-[18px]">
                  {t.humanitarian.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Ambassador */}
          <section id="ambassador" className="scroll-mt-32">
            <div className="bg-primary-red flex flex-col lg:flex-row min-h-[500px] overflow-hidden rounded-sm shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[350px]">
                <Image
                  src={t.ambassador.image}
                  alt="Ambassador Club"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8 lg:py-12 lg:pl-8 lg:pr-6 xl:pl-10 xl:pr-8 2xl:pl-16 2xl:pr-10 flex flex-col justify-center text-white space-y-6 lg:space-y-8">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[44px] font-bold uppercase leading-none tracking-tight mt-[-2px]">
                  {t.ambassador.title}
                </h2>
                <div className="space-y-4 opacity-90 leading-relaxed font-medium text-[16px] md:text-[18px]">
                  {t.ambassador.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="events" className="scroll-mt-32 pt-16 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight text-[#2B2B2B]">
            {t.events.title}
          </h2>
          <MeetUsEventsCalendar lang={lang} />
        </section>
      </CourseDetailLayout>
    </div>
  );
}
