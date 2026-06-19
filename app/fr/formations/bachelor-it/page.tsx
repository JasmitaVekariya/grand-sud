"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

export default function BachelorITPageFR() {
  const bannerData = {
    title: "BACHELOR IT & TOURISM",
    image: "/assets/Gemini_Generated_Image_bvjg5ybvjg5ybvjg-scaled-e1756665675348.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "anglais" },
      { label: "NIVEAU", value: "6 (bac+3)" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "3 ans – 1 806 heures" },
    ],
    logos: ["/assets/logo-france-competences.png"],
    certificationBadge: "TITRE CERTIFIÉ PAR L'ÉTAT",
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "DÉBOUCHÉS" },
    { id: "further-education", label: "POURSUITE D'ÉTUDES" },
  ];

  const advantagesData = {
    title: "Les plus de Grand Sud",
    subtitle: "Avec une expérience de la formation depuis bientôt 35 ans, l'école Grand Sud connaît les clefs du succès pour apporter à ses étudiants le nécessaire pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "une expertise 100% tourisme depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement à la recherche de stage", isDarkRed: true },
      { icon: PenTool, text: "2 sessions par an d'examens blancs / jurys professionnels", isDarkRed: false },
      { icon: Users, text: "workshop avec des partenaires et des problématiques réels", isDarkRed: true },
      { icon: Briefcase, text: "des cas réels d'entreprise étudiés en cours", isDarkRed: false },
      { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté à la demande des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme à visée internationale", isDarkRed: true },
      { icon: Handshake, text: "des étudiants aux origines diverses, vecteurs de richesse culturelle", isDarkRed: false },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Apprendre à communiquer afin de répondre à des besoins basiques et concrets (niveau A1)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Culture touristique",
          items: [
            { label: "Panorama du tourisme français", description: "Connaître les spécificités et tendances du tourisme en France" },
            { label: "Panorama du tourisme mondial", description: "Connaître les spécificités et tendances du tourisme dans le monde" },
            { label: "Economie française", description: "Maîtriser l'économie du secteur" },
            { label: "Intelligence Artificielle", description: "Maîtriser le fonctionnement de l'IA" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Développement",
          items: [
            { label: "HTML/CSS/JS framework", description: "Savoir créer un site internet" },
            { label: "Notions de Full Stack", description: "Maîtriser les principaux concepts Full Stack" },
            { label: "Développement iOS et Android", description: "Maîtriser les technologies pour créer un site responsive" },
            { label: "Algorithme", description: "Comprendre les bases des algorithmes" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Sécuriser un réseau au sein d'une structure touristique",
          items: [
            { label: "Architecture réseau (CCNA 1)", description: "Comprendre les bases de la création d'un réseau informatique (Certification CNA 1)" },
            { label: "Sécurité réseau", description: "Maîtriser les bases de la sécurisation d'un réseau" },
            { label: "Informatique et gestions d'assets", description: "Gérer un système informatique" },
            { label: "Base de données", description: "Savoir gérer des bases de données" },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Comprendre l'essentiel des textes écrits dans le langage de tous les jours : mails, brochures, articles, critiques de films ; possibilité d'écrire des textes simples, connectés sur des sujets familiers (niveau intermédiaire B1)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Culture touristique",
          items: [
            { label: "Panorama du tourisme français", description: "Connaître les spécificités et tendances du tourisme en France" },
            { label: "Panorama du tourisme mondial", description: "Connaître les spécificités et tendances du tourisme dans le monde" },
            { label: "Economie française", description: "Maîtriser l'économie du secteur" },
            { label: "Intelligence Artificielle", description: "Maîtriser le fonctionnement de l'IA" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Développement",
          items: [
            { label: "Flutter", description: "Savoir créer une application" },
            { label: "Notions de Full Stack", description: "Maîtriser les principaux concepts Full Stack" },
            { label: "React Native", description: "Maîtriser les technologies pour créer un site responsive" },
            { label: "Algorithme", description: "Comprendre les bases des algorithmes" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Développement et sécurisation",
          items: [
            { label: "Architecture réseau (CCNA 2)", description: "Comprendre les bases de la création d'un réseau informatique (Certification CNA 2)" },
            { label: "Sécurité avancée", description: "Maîtriser les bases de la sécurisation d'un réseau" },
            { label: "Programmation orientée objet", description: "Savoir programmer" },
            { label: "Développement Backend", description: "Savoir concevoir les outils nécessaires à l'administration d'un site" },
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Année 3",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Comprendre des textes écrits dans le langage courant : mails, brochures, articles, critiques de films ; possibilité d'écrire des textes plus complexes, connectés sur des sujets familiers (niveau intermédiaire B2)" },
            { label: "Préparation du titre", description: "Connaître les attentes du certificateur et savoir y répondre" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Commerce et économie",
          items: [
            { label: "Monitoring et Business Intelligence", description: "La collecte de données, l'analyse stratégique et l'utilisation de l'intelligence d'affaires pour prendre des décisions éclairées et obtenir des avantages concurrentiels" },
            { label: "E-commerce", description: "Appliquer les techniques de e-commerce" },
            { label: "CRM et analyse de données", description: "Stratégies de gestion de la relation client par l'utilisation d'outils technologiques et l'exploitation des données" },
            { label: "Growth Hacking", description: "Utiliser les canaux numériques pour identifier des opportunités de croissance rapide et efficace" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Développement",
          items: [
            { label: "Devops", description: "Comprendre les pratiques agiles et le développement incrémental" },
            { label: "Docker & Kubernetes", description: "Créez des applications mobiles riches en fonctionnalités avec une intégration API sécurisée" },
            { label: "Technologies cross-platformes", description: "Maîtriser les technologies cross-plateformes" },
            { label: "Déployer une application mobile", description: "Développer, tester et déployer des applications mobiles hybrides multiplateformes" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Développement et sécurisation",
          items: [
            { label: "Web Hacking", description: "Comprendre et maîtriser les techniques utilisées par les hackers pour tester et protéger vos systèmes" },
            { label: "Sécurité des applications mobiles", description: "Développer l'architecture de l'application, créer des maquettes et des prototypes" },
            { label: "Développement front-end", description: "Créer un modèle graphique du site permettant au client de visualiser l'interface fonctionnelle et graphique de la plateforme Web" },
            { label: "Développement back-end", description: "Utiliser divers outils, cadres et langages pour déterminer la meilleure façon de développer des prototypes intuitifs et conviviaux et de les transformer en sites web" },
          ]
        }
      ]
    }
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Pré-requis",
      items: [
        "Bac ou équivalent",
        "Un niveau d'anglais suffisant pour permettre de suivre la formation (au minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones (langue maternelle anglaise) ou les candidats qui ont étudié au moins 2 ans dans un programme enseigné en anglais (le candidat devra fournir des documents justificatifs)",
        "Bon niveau académique",
        "Si niveau bac : le candidat devra valider les épreuves manquantes en candidat libre lors de la 1ère année du programme",
      ],
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "6 octobre 2025",
      deferredLabel: "Rentrée décalée",
      deferredValue: "9 février 2026",
    },
    processTitle: "Modalités d'admission",
    processSteps: [
      {
        title: "Etape 1 : Dépôt de candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature sur la version anglaise de notre site internet.", isLink: true, linkText: "version anglaise de notre site internet", linkHref: "/en/apply" },
          { text: "Envoyez votre dossier complété par mail en n'oubliant pas les pièces jointes à fournir !" },
          { text: "Frais de dossier : 300€, non remboursables", isItalic: true },
        ],
      },
      {
        title: "Etape 2 : sélection",
        items: [
          { text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Rendez-vous individuel : entretien de motivation à distance (en visio)" },
          { text: "Passage en commission d'admission : notre équipe étudie votre dossier dans son ensemble" },
          { text: "Réponse sous 48h ouvrée : avis favorable ou défavorable" },
        ],
      },
      {
        title: "Etape 3 : inscription",
        items: [
          { text: "Signature du contrat d'enseignement" },
          { text: "Accompagnement sur les dispositifs de financement et la recherche de stage" },
        ],
      },
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif en initial :",
      initialPrice: "Par an : 12 500 €\nDes bourses sont disponibles, contactez votre chargé d'admissions pour connaître les modalités",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
    },
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales",
      downloadFrameworkLabel: "Télécharger le guide de validation",
      downloadFrameworkHref: "/assets/Guide-de-validation-RDTT_2025-20261.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau bac +3",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Date d'échéance :",
      expirationDate: "02/08/2026",
      certificationNote: "Ce titre est composé de quatre blocs de compétences dénommés « certificats de compétences professionnelles » (CCP). Il est accessible par capitalisation de CCP ou suite à un parcours de formation.",
      equivalencesTitle: "Equivalences",
      equivalencesItems: [
        "Le CCP « Accompagner le développement marketing d'un territoire » du titre RDTT est équivalent au CCP « Commercialiser un établissement touristique avec une démarche multicanale » du titre professionnel « Responsable d'établissement touristique ».",
        "Le CCP « Assurer la faisabilité financière d'une action touristique » du titre RDTT est équivalent au CCP « Assurer la gestion opérationnelle d'exploitation et prévoir les investissements d'un établissement touristique » du titre professionnel « Responsable d'établissement touristique ».",
      ],
    },
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Après ce bachelor international, le monde s'ouvre à vous et les débouchés sont intéressants !",
    categories: [
      {
        jobs: [
          { label: "Développeur Web Full Stack", isDarkRed: false },
          { label: "Développeur d'applications mobiles", isDarkRed: true },
          { label: "Ingénieur DevOps", isDarkRed: false },
          { label: "Spécialiste en cybersécurité", isDarkRed: true },
          { label: "Administrateur Systèmes et Réseaux", isDarkRed: true },
          { label: "Growth Hacker", isDarkRed: false },
          { label: "Analyste de données", isDarkRed: true },
          { label: "Spécialiste en e-commerce", isDarkRed: false },
          { label: "Responsable marketing digital", isDarkRed: false },
          { label: "Chef de projet digital touristique", isDarkRed: true },
          { label: "Consultant en transformation digitale pour l'hôtellerie", isDarkRed: false },
          { label: "Spécialiste en développement de produits touristiques", isDarkRed: true },
        ],
      },
    ],
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère IT & Tourism", href: "/fr/formations/mastere-it", flag: "UK" as const },
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Tourism Strategy Management", href: "/fr/formations/mastere-tourism", flag: "FR" as const },
      { label: "De manière générale, tous les titres de niveau 7", href: "" }
    ],
    jobs: []
  };

  return (
    <main className="bg-white">
      <CourseBanner
        title={bannerData.title}
        image={bannerData.image}
        details={bannerData.details}
        logos={bannerData.logos}
        certificationBadge={bannerData.certificationBadge}
      />

      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Ce Bachelor, formulé pour les étudiants visant l&apos;international et les métiers, les forme aux enjeux du tourisme, à la culture française et à la maîtrise des systèmes informatiques propres au domaine du tourisme.</p>
              <p>Les diplômés obtiennent un titre professionnel certifié de niveau 6 leur permettant d&apos;accéder à des postes variés dans l&apos;univers du tourisme.</p>
              <p>Il est fait pour les étudiants passionnés par les voyages et l&apos;informatique, diplômés d&apos;un bac (ou équivalent) à la recherche d&apos;une carrière dans le tourisme international ainsi que pour les étudiants européens et internationaux cherchant à étudier en France dans un environnement d&apos;apprentissage international.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
          />
        </section>

        <section id="admissions" className="scroll-mt-32">
          <CourseAdmissions {...admissionsData} />
        </section>

        <section id="validation" className="scroll-mt-32">
          <CourseValidation {...validationData} />
        </section>

        <section id="jobs" className="scroll-mt-32">
          <CourseJobs {...jobsData} />
        </section>

        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...educationData} />
        </section>
      </CourseDetailLayout>
    </main>
  );
}
