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
    logos: ["/assets/logo-france-competences.png", "/assets/logo-diploma.png"]
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
    title: "Les atouts Grand Sud",
    subtitle: "Avec près de 35 ans d'expérience dans l'éducation, l'École Grand Sud connaît les clés du succès pour fournir à ses étudiants ce dont ils ont besoin pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "100% d'expertise touristique depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement à la recherche de stage", isDarkRed: true },
      { icon: PenTool, text: "Deux sessions d'examens blancs par an / jurys professionnels", isDarkRed: false },
      { icon: Users, text: "workshop avec de vrais partenaires et de vraies problématiques", isDarkRed: true },
      { icon: Briefcase, text: "des cas réels d'entreprise étudiés en classe", isDarkRed: false },
      { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté aux besoins des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme tourné vers l'international", isDarkRed: true },
      { icon: Handshake, text: "étudiants d'horizons divers, vecteurs de richesse culturelle", isDarkRed: false },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1 - 602 heures",
      hours: "602 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Apprendre à communiquer pour répondre aux besoins basiques et spécifiques (niveau A1)" },
            { label: "Culture française", description: "Comprendre et maîtriser la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Panorama du tourisme français", description: "Comprendre les spécificités et les tendances du tourisme en France" },
            { label: "Panorama du tourisme mondial", description: "Comprendre les caractéristiques spécifiques et les tendances du tourisme dans le monde" },
            { label: "Économie française", description: "Maîtriser l'économie du secteur" },
            { label: "Intelligence artificielle", description: "Maîtriser le fonctionnement de l'IA" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Développement",
          items: [
            { label: "Framework HTML/CSS/JS", description: "Savoir créer un site web" },
            { label: "Concepts Full Stack", description: "Maîtriser les principaux concepts Full Stack" },
            { label: "Développement iOS et Android", description: "Maîtriser les technologies nécessaires à la création d'un site web responsive" },
            { label: "Algorithmes", description: "Comprendre les bases des algorithmes" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Sécurisation d'un réseau au sein d'une organisation touristique",
          items: [
            { label: "Architecture réseau (CCNA 1)", description: "Comprendre les bases de la création d'un réseau informatique (certification CNA 1)" },
            { label: "Sécurité réseau", description: "Maîtriser les bases de la sécurisation d'un réseau" },
            { label: "Gestion informatique et de parc", description: "Gérer un système d'information" },
            { label: "Bases de données", description: "Savoir gérer des bases de données" }
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2 - 602 heures",
      hours: "602 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre l'essentiel de textes écrits en langage courant : e-mails, brochures, articles, critiques de films ; capacité à rédiger des textes simples et cohérents sur des sujets familiers (niveau intermédiaire B1)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Panorama du tourisme français", description: "Connaître les spécificités et les tendances du tourisme en France" },
            { label: "Panorama du tourisme mondial", description: "Connaître les spécificités et les tendances du tourisme dans le monde" },
            { label: "Économie française", description: "Maîtriser l'économie du secteur" },
            { label: "Intelligence Artificielle", description: "Maîtriser le fonctionnement de l'IA" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Développement",
          items: [
            { label: "Flutter", description: "Savoir créer une application" },
            { label: "Concepts Full Stack", description: "Maîtriser les principaux concepts Full Stack" },
            { label: "React Native", description: "Maîtriser les technologies pour créer un site web responsive" },
            { label: "Algorithmes", description: "Comprendre les bases des algorithmes" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Développement et Sécurité",
          items: [
            { label: "Architecture réseau (CCNA 2)", description: "Comprendre les bases de la création d'un réseau informatique (certification CNA 2)" },
            { label: "Sécurité avancée", description: "Maîtriser les bases de la sécurité réseau" },
            { label: "Programmation orientée objet", description: "Savoir programmer" },
            { label: "Développement Backend", description: "Savoir concevoir les outils nécessaires à l'administration d'un site web" }
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Année 3 - 602 heures",
      hours: "602 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre des textes écrits en langage courant : e-mails, brochures, articles, critiques de films ; capacité à rédiger des textes plus complexes et liés sur des sujets familiers (niveau intermédiaire B2)" },
            { label: "Préparation à la certification", description: "Comprendre les attentes du certificateur et savoir y répondre" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Business et Économie",
          items: [
            { label: "Veille et Business Intelligence", description: "Collecte de données, analyse stratégique et utilisation de la business intelligence pour prendre des décisions éclairées et obtenir des avantages concurrentiels" },
            { label: "E-commerce", description: "Appliquer les techniques du e-commerce" },
            { label: "CRM et analyse de données", description: "Stratégies de gestion de la relation client via l'utilisation d'outils technologiques et l'exploitation des données" },
            { label: "Growth Hacking", description: "Utiliser les canaux numériques pour identifier des opportunités de croissance rapide et efficace" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Développement",
          items: [
            { label: "Devops", description: "Comprendre les pratiques agiles et le développement incrémental" },
            { label: "Docker & Kubernetes", description: "Créer des applications mobiles riches en fonctionnalités avec une intégration d'API sécurisée" },
            { label: "Technologies multiplateformes", description: "Maîtriser les technologies multiplateformes" },
            { label: "Déploiement d'une application mobile", description: "Développer, tester et déployer des applications mobiles hybrides multiplateformes" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Développement et Sécurité",
          items: [
            { label: "Web Hacking", description: "Comprendre et maîtriser les techniques utilisées par les pirates pour tester et protéger vos systèmes" },
            { label: "Sécurité des applications mobiles", description: "Développer l'architecture des applications, créer des maquettes et des prototypes" },
            { label: "Développement Front-end", description: "Créer une maquette graphique du site permettant au client de visualiser l'interface fonctionnelle et graphique de la plateforme web" },
            { label: "Développement Back-end", description: "Utiliser divers outils, frameworks et langages pour déterminer la meilleure façon de développer des prototypes intuitifs et conviviaux et de les transformer en sites web" }
          ]
        }
      ]
    }
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Prérequis",
      items: [
        "Baccalauréat ou équivalent",
        "Compétences suffisantes en anglais pour suivre le programme (minimum B2), démontrées par des résultats officiels (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), sauf pour les anglophones natifs ou les candidats ayant étudié au moins deux ans dans un programme enseigné en anglais (les candidats doivent fournir des justificatifs).",
        "Bon niveau académique",
        "Si niveau baccalauréat : les candidats doivent passer les examens manquants en candidat libre durant la première année du programme"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée :",
      nextYearValue: "6 octobre 2025",
      deferredLabel: "Rentrée décalée :",
      deferredValue: "9 février 2026"
    },
    processTitle: "Processus d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature." },
          { text: "Envoyez votre dossier complet par email, sans oublier toutes les pièces jointes demandées !" },
          { text: "Frais de dossier : 300 €, non remboursables", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle." },
          { text: "Entretien individuel : entretien de motivation à distance (via vidéo)" },
          { text: "Passage en commission d'admission : notre équipe étudiera votre candidature dans son ensemble" },
          { text: "Réponse sous 48h ouvrées : favorable ou défavorable", isItalic: true }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Signature du contrat d'études" },
          { text: "Accompagnement dans les options de financement et la recherche de stage" }
        ]
      }
    ],
    prices: {
      title: "Frais de scolarité initiaux :",
      initialLabel: "Par an :",
      initialPrice: "12 500 €\nDes bourses sont disponibles. Contactez votre chargé d'admissions pour plus d'informations.",
      visaNote: "",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
      seminarLabel: "",
      seminarPrice: "",
      seminarNote: ""
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Examens écrits et oraux.",
      downloadFrameworkLabel: "Télécharger le guide de validation",
      downloadFrameworkHref: "/assets/validation-guide.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau 6",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Date d'échéance :",
      expirationDate: "08/02/2026",
      certificationNote: "Cette certification est constituée de quatre blocs de compétences appelés « certificats de compétences professionnelles » (CCP). Elle peut être obtenue par capitalisation des CCP ou à l'issue d'un parcours de formation.",
      equivalencesTitle: "Équivalences",
      equivalencesItems: [
        "Le CCP « Accompagner le développement marketing d'un territoire » de la certification RDTT est équivalent au CCP « Commercialiser un établissement touristique dans une approche multicanale » du titre professionnel « Directeur d'établissement touristique ».",
        "Le CCP « Assurer la faisabilité financière d'une action touristique » de la certification RDTT est équivalent au CCP « Assurer la gestion opérationnelle et planifier les investissements d'un établissement touristique » du titre professionnel « Directeur d'établissement touristique »."
      ]
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Après l'obtention de ce bachelor international, le monde vous appartiendra et vous aurez d'excellentes opportunités de carrière !",
    categories: [
      {
        jobs: [
          { label: "DÉVELOPPEUR WEB FULL STACK", isDarkRed: false },
          { label: "DÉVELOPPEUR D'APPLICATIONS MOBILES", isDarkRed: true },
          { label: "INGÉNIEUR DEVOPS", isDarkRed: false },
          { label: "SPÉCIALISTE EN CYBERSÉCURITÉ", isDarkRed: true },
          
          { label: "ADMINISTRATEUR SYSTÈMES ET RÉSEAUX", isDarkRed: true },
          { label: "GROWTH HACKER", isDarkRed: false },
          { label: "DATA ANALYST", isDarkRed: true },
          { label: "SPÉCIALISTE E-COMMERCE", isDarkRed: false },
          
          { label: "MARKÉTEUR DIGITAL", isDarkRed: false },
          { label: "CHEF DE PROJET TOURISME DIGITAL", isDarkRed: true },
          { label: "CONSULTANT EN TRANSFORMATION DIGITALE POUR L'HÔTELLERIE", isDarkRed: false },
          { label: "SPÉCIALISTE EN DÉVELOPPEMENT DE PRODUITS TOURISTIQUES", isDarkRed: true },
        ]
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère IT & Tourism", href: "/fr/formations/mastere-it", flag: "UK" as const },
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Tourism Strategy Management", href: "/fr/formations/mastere-tourism", flag: "FR" as const },
      { label: "De manière générale, tous les titres de niveau 7", href: "#" }
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
      />

      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidature" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Ce bachelor, destiné aux étudiants visant des carrières internationales, les forme aux enjeux du tourisme, à la culture française et à la maîtrise des systèmes informatiques spécifiques au secteur du tourisme.</p>
              <p>Les diplômés obtiennent une certification professionnelle de niveau 6 leur permettant d'accéder à une variété de postes dans l'industrie du tourisme.</p>
              <p>Il s'adresse aux étudiants passionnés par les voyages et l'informatique, titulaires d'un baccalauréat (ou équivalent) et souhaitant faire carrière dans le tourisme international, ainsi qu'aux étudiants européens et internationaux souhaitant étudier en France dans un environnement d'apprentissage international.</p>
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
