"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function BachelorSustainablePageFR() {
  const bannerData = {
    title: "Bachelor Développement touristique durable et digital",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "1 an – 518 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "DÉBOUCHÉS" },
    { id: "further-education", label: "POURSUITE D'ÉTUDES" },
  ];

  const advantages = [
    { icon: CheckCircle2, text: "Une expertise 100% tourisme depuis 1991", isDarkRed: false },
    { icon: Search, text: "Accompagnement dans la recherche d'alternance ou de stage", isDarkRed: true },
    { icon: PenTool, text: "Préparation aux examens tout au long de l'année", isDarkRed: false },
    { icon: Users, text: "Atelier avec de vrais partenaires et de vraies problématiques", isDarkRed: true },
    { icon: Briefcase, text: "Cas d'entreprise réels étudiés en classe", isDarkRed: false },
    { icon: MonitorPlay, text: "Intervenants professionnels", isDarkRed: true },
  ];

  const programYears = [
    {
      id: "year1",
      title: "Année 1 - 518 heures",
      hours: "518 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Développer la culture générale du tourisme",
          items: [
            { label: "Culture générale", description: "Développer une culture générale applicable à votre activité professionnelle" },
            { label: "Start", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Workshop", description: "Mises en situation professionnelle stimulantes impliquant des réponses concrètes à des besoins clients, transformer des besoins en solutions concrètes dans un temps imparti, développer l'adaptabilité, la créativité et l'intelligence collective au sein d'équipes pluridisciplinaires aléatoires" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Piloter la stratégie financière d'une entreprise touristique",
          items: [
            { label: "Gestion de projet touristique", description: "Capacité à piloter un projet de développement touristique pour un territoire, un événement, ou l'aménagement d'un site" },
            { label: "Management d'équipe", description: "Maîtriser les bases du management d'une équipe projet" },
            { label: "Faisabilité financière (Création d'un dossier professionnel et financier)", description: "Maîtriser les indicateurs financiers spécifiques au tourisme et analyser les performances comptables d'une entreprise" },
            { label: "Bureautique", description: "Maîtriser Word & Excel et les outils couramment utilisés en entreprise" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Définir et mettre en œuvre la stratégie marketing et commerciale d'une organisation touristique",
          items: [
            { label: "Marketing analytique et stratégique", description: "Analyser une situation et définir une stratégie marketing" },
            { label: "Plan d'action commercial", description: "Élaborer et mettre en œuvre un plan marketing" },
            { label: "IA et tourisme", description: "Intégrer l'IA dans une approche touristique" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Développement durable et tourisme 3.0",
          items: [
            { label: "Destinations touristiques, tendances et veille", description: "Analyser les tendances, comprendre les techniques d'identification, de collecte et d'analyse des informations liées au tourisme" },
            { label: "Tourisme et développement durable", description: "Maîtriser les concepts permettant de minimiser les impacts négatifs du tourisme sur l'environnement et les communautés locales, tout en favorisant des retombées économiques et sociales positives." },
            { label: "Tourisme 3.0", description: "Intégrer les nouvelles technologies pour rendre le tourisme plus durable." },
          ]
        },
        {
          unit: "Bloc de compétences 5 – Préparation à l'intégration professionnelle",
          items: [
            { label: "Soft skills (atelier théâtre)", description: "Développer l'élocution, apprendre à verbaliser et communiquer ses besoins et attentes" },
            { label: "Anglais", description: "Préparer un questionnaire de satisfaction ou de motivation en anglais pour des visiteurs anglophones ; créer un document de promotion territoriale en français et en anglais, sur supports papier et numérique" },
            { label: "Espagnol", description: "Préparer un questionnaire de satisfaction ou de motivation en espagnol pour des visiteurs hispanophones ; créer un document de promotion territoriale en français et en espagnol sur supports papier et numérique" },
            { label: "Préparation au titre", description: "Comprendre les attentes du certificateur et préparer des rendus conformes" },
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
        "Deux années d'études supérieures",
        "Niveau de langue française suffisant pour suivre le programme",
        "Langues : Anglais et une autre langue de votre choix"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée :",
      nextYearValue: "Octobre 2025",
      deferredLabel: "Rentrée décalée :",
      deferredValue: "Février 2026"
    },
    processTitle: "Conditions d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature en cliquant ici.", isLink: true, linkText: "cliquant ici." },
          { text: "Envoyez votre dossier complété par email, en pensant à joindre toutes les pièces demandées !" },
          { text: "Il n'y a pas de frais de candidature.", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Entretien individuel : entretien de motivation à l'école ou à distance (visio)" },
          { text: "Examen par le comité d'admission : notre équipe examinera votre candidature dans son intégralité" },
          { text: "Réponse sous 48 heures ouvrées : avis favorable ou défavorable", isItalic: true }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Validation de votre statut : Étudiant / Demandeur d'emploi / Stagiaire de la formation professionnelle / Salarié" },
          { text: "Accompagnement sur les options de financement et la recherche d'entreprise" }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif initial :",
      initialPrice: "7 500 €",
      visaNote: "*Pour les étudiants nécessitant une aide aux visas (première entrée dans l'UE) : 7 500 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "8 688 €",
      workStudyNote: "*Dans le cadre de l'alternance, les frais de formation sont pris en charge par l'OPCO. Cela sera discuté avec l'entreprise lors de la signature du contrat.",
      seminarLabel: "Séminaire : \"Le paysage touristique en France et en Occitanie\"",
      seminarPrice: "1 050 €",
      seminarNote: "Ce module est obligatoire pour les étudiants hors Union Européenne lors de leur première année en France. Son coût s'ajoute au coût de la première année du programme choisi."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales.",
      downloadFrameworkLabel: "Télécharger le référentiel de validation",
      downloadFrameworkHref: "/assets/framework-pdf.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau 6 (bac+3)",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du Travail, du plein emploi et de l'insertion",
      expirationLabel: "Date d'échéance :",
      expirationDate: "08/02/2026",
      certificationNote: "Ce titre professionnel est composé de quatre blocs de compétences appelés « certificats de compétences professionnelles » (CCP). Il peut être obtenu par capitalisation de CCP ou à l'issue d'un parcours de formation.",
      equivalencesTitle: "Équivalences",
      equivalencesItems: [
        "Le CCP « Accompagner le développement marketing d'un territoire » du titre RDTT est équivalent au CCP « Commercialiser un établissement touristique dans une démarche omnicanale » du titre professionnel « Manager d'établissement touristique ».",
        "Le CCP « Assurer la faisabilité financière d'une initiative touristique » du titre RDTT est équivalent au CCP « Assurer la gestion opérationnelle et planifier les investissements d'un établissement touristique » du titre professionnel « Manager d'établissement touristique »."
      ]
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre de nombreuses opportunités <strong>en France et à l'étranger</strong> aux titulaires du Bachelor Développement touristique durable et digital.",
    categories: [
      {
        jobs: [
          { label: "Chef de produit touristique", isDarkRed: false },
          { label: "Concepteur de produits touristiques", isDarkRed: true },
          { label: "Coordinateur d'offres de tourisme responsable", isDarkRed: false },
          { label: "Commercial en agence BtoB", isDarkRed: true },
          
          { label: "Commercial groupe BtoC", isDarkRed: true },
          { label: "Responsable Grands Comptes", isDarkRed: false },
          { label: "Responsable du développement du tourisme durable", isDarkRed: true },
          { label: "Responsable Marketing Touristique Digital", isDarkRed: false },
          
          { label: "Chef de projet Tourisme Durable", isDarkRed: false },
          { label: "Chargé de promotion touristique", isDarkRed: true },
          { label: "Consultant en stratégie digitale et durable appliquée au tourisme", isDarkRed: false },
          { label: "Responsable Partenariats et Labels (Tourisme Durable)", isDarkRed: true },
          
          { label: "Responsable webmarketing touristique", isDarkRed: true },
          { label: "Chef de projet digital en organisme de tourisme", isDarkRed: false },
          { label: "Responsable communication digitale pour une destination", isDarkRed: true },
          { label: "Responsable Innovation et Tourisme 3.0", isDarkRed: false },
        ]
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère Manager en Stratégies Touristiques", href: "/fr/formations/mastere-tourism", flag: "FR" as const },
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "De manière générale, les titres de niveau 7", href: "#" }
    ],
    jobs: []
  };

  return (
    <main className="bg-white">
      <CourseBanner 
        title={bannerData.title} 
        image={bannerData.image} 
        details={bannerData.details} 
        additionalInfo={bannerData.additionalInfo}
        logos={bannerData.logos}
      />
      
      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Le Bachelor Développement touristique durable et digital est un diplôme en trois ans (niveau 6) qui prépare les professionnels à concevoir, promouvoir et gérer des projets touristiques intégrant les enjeux de durabilité et les outils numériques.</p>
              <p>Ce programme complet couvre divers sujets tels que la conception d'offres de tourisme responsable, la gestion de projets et d'équipes, le webmarketing et la stratégie commerciale, l'utilisation des technologies 3.0, l'analyse de données, et les principes du tourisme durable appliqués à différents territoires.</p>
              <p>Conçu pour allier savoir-faire technique et compétences interpersonnelles, il met l'accent sur la professionnalisation à travers des projets concrets, des ateliers pratiques, des jeux de rôle et des stages : les étudiants acquièrent ainsi une solide expérience de terrain et développent les compétences recherchées dans un secteur en pleine mutation.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="Les avantages de Grand Sud"
            subtitle="Forte de plus de 30 ans d'expérience dans la préparation des étudiants à de nombreuses qualifications, l'école Grand Sud possède les clés de la réussite pour cette qualification de niveau 6."
            advantages={advantages}
          />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
            downloadButton={{ label: "Télécharger le programme complet", href: "/assets/Programme-pedagogique_BTS-Tourisme_2025-2027.pdf" }}
          />
        </section>

        {/* Admissions Section */}
        <section id="admissions" className="scroll-mt-32">
          <CourseAdmissions {...admissionsData} />
        </section>

        {/* Validation Section */}
        <section id="validation" className="scroll-mt-32">
          <CourseValidation {...validationData} />
        </section>

        {/* Job Opportunities Section */}
        <section id="jobs" className="scroll-mt-32">
          <CourseJobs {...jobsData} />
        </section>

        {/* Further Education Section */}
        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...educationData} />
        </section>

      </CourseDetailLayout>
    </main>
  );
}
