"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake, Plus } from "lucide-react";

export default function BachelorHospitalityENPageFR() {
  const bannerData = {
    title: "BACHELOR HOSPITALITY MANAGEMENT",
    image: "/assets/Gemini_Generated_Image_tkqn4otkqn4otkqn-scaled-e1756664070201.png",
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
    subtitle: "Avec près de 35 ans d'expérience dans l'enseignement, l'École Grand Sud connaît les clés du succès pour fournir à ses étudiants ce dont ils ont besoin pour réussir.",
    bottomHighlight: "Un stage garanti dans la restauration, de 3 à 6 mois, en France",
    bottomHighlightIcon: Plus,
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
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team-building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Apprendre à communiquer pour répondre aux besoins basiques et spécifiques (niveau A1)" },
            { label: "Culture française", description: "Comprendre et maîtriser la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtriser les concepts de la phase d'analyse et de mise en œuvre jusqu'à la commercialisation" },
            { label: "Panorama du tourisme mondial", description: "Comprendre les spécificités et tendances des différents types de tourisme, comprendre les principales destinations touristiques mondiales" },
            { label: "Amadeus", description: "Maîtriser le fonctionnement d'Amadeus GDS (Global Distribution Systems), le système de réservation pour l'écosystème aérien et ferroviaire" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication de l'information touristique" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Gestion commerciale", description: "Établir des relations de qualité pour assurer la fidélisation de la clientèle à long terme" },
            { label: "Marketing", description: "Comprendre les règles de base du marketing" },
            { label: "Marketing touristique", description: "Maîtriser les fondamentaux du marketing touristique" },
            { label: "Stratégie de communication", description: "Être capable de construire une stratégie de communication à 360°" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Expérience client",
          items: [
            { label: "Codes du luxe", description: "Comprendre et maîtriser les codes du luxe" },
            { label: "Panorama de l'hospitalité", description: "Connaître les différentes structures, tendances et enjeux de la restauration et de l'hôtellerie" },
            { label: "Management des équipes d'étage", description: "Maîtriser les fondamentaux de la supervision des équipes d'étage" },
            { label: "Événementiel", description: "Savoir organiser un événement" }
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
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team-building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre les points essentiels de textes écrits en langage courant : emails, brochures, articles, critiques de films ; capacité à écrire des textes simples et liés sur des sujets familiers (niveau intermédiaire B1)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtrise des concepts de la phase d'analyse et de mise en œuvre jusqu'à la commercialisation" },
            { label: "Tourisme écoresponsable", description: "Comprendre les enjeux environnementaux, sociaux et économiques liés au tourisme durable" },
            { label: "Développement durable en hôtellerie-restauration", description: "Explorer des stratégies pour minimiser le gaspillage alimentaire et promouvoir le recyclage" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication de l'information touristique" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Environnement économique et juridique", description: "Comprendre les bases légales pour diriger une entreprise" },
            { label: "Marketing en hôtellerie-restauration", description: "Comprendre les spécificités du mix marketing pour un établissement d'hébergement ou de restauration (adaptation de l'offre, yield management, distribution, les 3P des services)" },
            { label: "Gestion des opérations hôtelières", description: "Identifier les différents départements d'un hôtel, expliquer les interactions entre ces départements, appliquer des méthodes de gestion pour optimiser les performances" },
            { label: "Réseaux sociaux", description: "Être capable de mener une campagne sur les réseaux sociaux" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Gestion d'une équipe de vente", description: "Comprendre les règles du management" },
            { label: "Management interculturel", description: "Analyser l'interaction interculturelle dans des situations professionnelles à l'aide de différentes approches conceptuelles" },
            { label: "Prise de parole en public", description: "Être capable de créer un discours engageant" },
            { label: "Négociation commerciale", description: "Comprendre les bases de la négociation commerciale (jeux de rôle)" }
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Année 3 - 602 heures",
      hours: "602 hours",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team-building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre des textes écrits en langage courant : emails, brochures, articles, critiques de films ; capacité à rédiger des textes plus complexes sur des sujets familiers (niveau intermédiaire B2)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Commerce et économie",
          items: [
            { label: "Gestion de projets touristiques", description: "Comprendre la gestion de projet" },
            { label: "Gestion financière", description: "Analyser la performance comptable d'une entreprise" },
            { label: "Marketing analytique et stratégique", description: "Choisir une stratégie marketing dans le secteur du tourisme et fixer des objectifs" },
            { label: "Plan marketing", description: "Planifier un plan de communication digitale dans le secteur du tourisme" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Marketing de la restauration et de l'hébergement", description: "Comprendre les spécificités du mix marketing pour un établissement d'hébergement ou de restauration (adaptation de l'offre, yield management, distribution, les 3P des services)" },
            { label: "Gestion du tourisme local et de l'événementiel", description: "Comprendre les principes du tourisme local et savoir monter un projet" },
            { label: "Développement territorial", description: "Réaliser un diagnostic territorial, développer un projet territorial prenant en compte le développement durable et la RSE" },
            { label: "Gestion d'un établissement d'hébergement", description: "Comprendre les aspects spécifiques RH, juridiques et financiers d'un établissement hôtelier (gestion du budget d'exploitation et planification des investissements, indicateurs de performance hôtel/restaurant, réglementations, gestion des ressources humaines, gestion front et back office)" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Fondamentaux du management", description: "Comprendre différentes méthodes de management" },
            { label: "Management interculturel", description: "Analyser l'interaction interculturelle dans des situations professionnelles à l'aide de différentes approches conceptuelles" },
            { label: "Management d'équipe", description: "Mobiliser les énergies individuelles des membres de l'équipe" },
            { label: "Management et RSE", description: "Intégrer la RSE dans les méthodes de management" }
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
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
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
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT)\n– Titre certifié de niveau 6",
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
          { label: "MANAGER D'UNE STRUCTURE D'HÉBERGEMENT", isDarkRed: false },
          { label: "CHEF DE PROJET TOURISTIQUE", isDarkRed: true },
          { label: "MANAGER D'HÉBERGEMENT (HÔTEL, RÉSIDENCE, AUBERGE)", isDarkRed: false },
          { label: "CHARGÉ DE DÉVELOPPEMENT TOURISTIQUE", isDarkRed: true },
          { label: "RESPONSABLE MARKETING HÔTELIER", isDarkRed: true },
          { label: "MANAGER DE RESTAURATION", isDarkRed: false },
          { label: "RESPONSABLE DE L'EXPÉRIENCE CLIENT", isDarkRed: true },
          { label: "YIELD MANAGER / REVENUE MANAGER", isDarkRed: false },
          { label: "ASSISTANT DE GESTION ADMINISTRATIVE ET FINANCIÈRE HÔTELLERIE/RESTAURATION", isDarkRed: false },
          { label: "RESPONSABLE DES RELATIONS CLIENTS INTERNATIONALES", isDarkRed: true },
          { label: "COORDINATEUR INTERCULTUREL / COORDINATEUR TOURISTIQUE", isDarkRed: false },
          { label: "RESPONSABLE DES RELATIONS VISITEURS", isDarkRed: true },
        ]
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
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
              <p>Ce Bachelor, destiné aux étudiants ayant des ambitions internationales, les forme aux enjeux du tourisme, à la culture française et aux spécificités de l'accueil dans l'hôtellerie-restauration.</p>
              <p>Les diplômés obtiennent une certification professionnelle de niveau 6, leur permettant d'accéder à divers postes dans le secteur du tourisme.</p>
              <p>Il s'adresse aux étudiants passionnés par les voyages, la culture et la relation client, titulaires d'un baccalauréat (ou équivalent) et souhaitant faire carrière dans le tourisme international, ainsi qu'aux étudiants européens et internationaux souhaitant étudier en France dans un environnement d'apprentissage international.</p>
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
