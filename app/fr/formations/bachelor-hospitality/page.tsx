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

export default function BachelorHospitalityPageFR() {
  const bannerData = {
    title: "Bachelor Hospitality Management",
    image: "/assets/Gemini_Generated_Image_d6oi0gd6oi0gd6oi-scaled-e1756648261219.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "1 an – 560 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programme", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "debouchés", label: "DÉBOUCHÉS PROFESSIONNELS" },
    { id: "poursuite-etudes", label: "POURSUITE D'ÉTUDES" },
  ];

  const advantages = [
    { icon: CheckCircle2, text: "100% d'expertise tourisme depuis 1991", isDarkRed: false },
    { icon: Search, text: "accompagnement à la recherche d'alternance ou de stage", isDarkRed: true },
    { icon: PenTool, text: "préparation aux examens tout au long de l'année", isDarkRed: false },
    { icon: Users, text: "workshop avec des partenaires et problématiques réelles", isDarkRed: true },
    { icon: Briefcase, text: "business cases réels étudiés en cours", isDarkRed: false },
    { icon: MonitorPlay, text: "intervenants professionnels", isDarkRed: true },
  ];

  // --- PLACEHOLDER DATA FROM BTS TOURISME ---
  const programYears = [
    {
      id: "annee1",
      title: "Année 1",
      hours: "580 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Développer la culture générale liée au tourisme",
          items: [
            { label: "Culture générale", description: "Développer une culture générale applicable dans son activité professionnelle" },
            { label: "Destinations touristiques", description: "Connaître les principales destinations touristiques dans le monde" },
            { label: "Étude de cas et projet", description: "Mise en situation professionnelle impliquant des réponses concrètes à un besoin client" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Gérer la stratégie financière d'une entreprise touristique",
          items: [
            { label: "Gestion de projet touristique", description: "Être capable de gérer un projet de développement touristique pour une région, un événement, un site ou un équipement" },
            { label: "Management d'équipe", description: "Maîtriser les bases du management d'une équipe projet" },
            { label: "Faisabilité financière et montage de dossier", description: "Maîtriser les indicateurs financiers spécifiques au tourisme et analyser les performances comptables d'une entreprise" },
            { label: "Droit des sociétés", description: "Identifier les différents types de sociétés en droit français et savoir choisir entre elles" },
            { label: "Bureautique", description: "Maîtriser Word & Excel et les outils couramment utilisés en entreprise" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Définir et mettre en œuvre la stratégie marketing et commerciale d'une organisation touristique",
          items: [
            { label: "Marketing analytique et stratégique", description: "Analyser une situation et définir une stratégie marketing" },
            { label: "Plan marketing", description: "Élaborer et mettre en œuvre un plan marketing" },
            { label: "Commercialisation d'un projet", description: "Maîtriser les bases de la négociation commerciale dans le secteur du tourisme, tout en respectant une démarche qualité" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Spécialisation Hospitality Management",
          items: [
            { label: "Fondamentaux de la restauration et de l'hébergement", description: "Comprendre les différentes structures existantes, les tendances et les enjeux de l'hébergement et de la restauration" },
            { label: "Marketing de l'hébergement", description: "Comprendre le mix marketing d'une structure d'hébergement" },
            { label: "Événementiel", description: "Maîtriser les règles d'organisation d'un événement" },
            { label: "Gestion d'une structure", description: "Comprendre les spécificités RH, juridiques et financières d'une structure d'hébergement" },
          ]
        },
        {
          unit: "Unité de Compétences 5 – Se préparer à l'insertion professionnelle",
          items: [
            { label: "Start", description: "Séminaire d'intégration de rentrée et team-building" },
            { label: "Workshop", description: "Scénarios professionnels stimulants nécessitant des réponses concrètes aux besoins des clients, transformation des besoins en solutions concrètes dans un délai imparti, développement de l'adaptabilité, de la créativité et de l'intelligence collective en équipes multidisciplinaires aléatoires" },
            { label: "Intelligence Artificielle", description: "Utiliser l'IA pour améliorer ses compétences" },
            { label: "Soft skills (atelier théâtre)", description: "Développer l'éloquence, apprendre à verbaliser et communiquer ses besoins et attentes" },
            { label: "Anglais", description: "Préparer un questionnaire de satisfaction ou de motivation en anglais pour des visiteurs anglophones ; créer un document de promotion régionale en français et en anglais, sur supports papier et numérique" },
            { label: "Espagnol", description: "Préparer un questionnaire de satisfaction ou de motivation en espagnol pour des visiteurs hispanophones ; créer un document de promotion régionale en français et en espagnol sur supports papier et numérique" },
            { label: "Préparation au titre", description: "Comprendre les attentes du certificateur et préparer des dossiers conformes à celles-ci" },
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
        "Bac +2 (deux années d'études supérieures)",
        "Compétences suffisantes en français pour suivre le programme",
        "Langues : Anglais et une autre langue de votre choix"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "Octobre 2025",
      deferredLabel: "Rentrée décalée",
      deferredValue: "Février 2026"
    },
    processTitle: "Conditions d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature en cliquant ici.", isLink: true, linkText: "en cliquant ici." },
          { text: "Envoyez votre dossier complet par email, sans oublier toutes les pièces jointes demandées !" },
          { text: "Il n'y a pas de frais de dossier.", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Entretien individuel : entretien de motivation à l'école ou à distance (via visioconférence)" },
          { text: "Passage en commission d'admission : notre équipe étudiera votre candidature dans son ensemble" },
          { text: "Réponse sous 48h ouvrées : décision favorable ou défavorable", isItalic: true }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Validation de votre statut : Étudiant / Demandeur d'emploi / Stagiaire de la formation professionnelle / Salarié" },
          { text: "Accompagnement sur les solutions de financement et la recherche d'entreprise" }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Frais initiaux :",
      initialPrice: "7 500 €",
      visaNote: "*Pour les étudiants nécessitant une assistance visa (première entrée dans l'UE) : 7 500 €",
      workStudyLabel: "Frais en alternance :",
      workStudyPrice: "8 688 €",
      workStudyNote: "*En contrat d'apprentissage ou de professionnalisation, les frais de formation sont pris en charge par l'OPCO. Cela sera discuté avec l'entreprise lors de la signature du contrat.",
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
      downloadFrameworkLabel: "Télécharger le référentiel complet",
      downloadFrameworkHref: "/assets/framework-pdf.pdf", // Placeholder href
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau 6 (bac+3)",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l’insertion",
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
    intro: "Le secteur du tourisme offre de nombreuses opportunités <strong>en France et à l'étranger</strong> aux titulaires d'un Bachelor Hospitality Management.",
    categories: [
      {
        jobs: [
          { label: "MANAGER D'UN ÉTABLISSEMENT D'HÉBERGEMENT", isDarkRed: false },
          { label: "RESPONSABLE D'HÉBERGEMENT", isDarkRed: true },
          { label: "MANAGER DE RESTAURATION", isDarkRed: false },
          { label: "RESPONSABLE COMMUNICATION, BIEN-ÊTRE ET SPA", isDarkRed: true },
          { label: "RESPONSABLE MARKETING TOURISTIQUE", isDarkRed: true },
          { label: "COMMUNITY MANAGER SPÉCIALISÉ EN TOURISME/HÔTELLERIE", isDarkRed: false },
          { label: "RESPONSABLE COMMERCIAL (HÔTELLERIE, TOURISME, ÉVÉNEMENTIEL)", isDarkRed: true },
          { label: "RESPONSABLE DU DÉVELOPPEMENT TOURISTIQUE TERRITORIAL", isDarkRed: false },
          { label: "RESPONSABLE QUALITÉ DANS UNE STRUCTURE TOURISTIQUE", isDarkRed: false },
          { label: "CHARGÉ DE CLIENTÈLE TOURISME/HÔTELLERIE", isDarkRed: true },
          { label: "CHEF DE PROJET ÉVÉNEMENTIEL", isDarkRed: false },
          { label: "CHARGÉ DE CLIENTÈLE TOURISME/HÔTELLERIE", isDarkRed: true },
          { label: "RESPONSABLE DES VENTES HÔTELIÈRES OU TOURISTIQUES", isDarkRed: true },
          { label: "CONSULTANT EN STRATÉGIE TOURISTIQUE", isDarkRed: false },
          { label: "RESPONSABLE ANIMATION ET LOISIRS EN HÔTELLERIE", isDarkRed: true },
          { label: "RESPONSABLE DE LA PROMOTION TOURISTIQUE D'UN TERRITOIRE", isDarkRed: false },
        ]
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère Tourism Strategy Management", href: "/fr/formations/mastere-tourism", flag: "FR" as const },
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "En règle générale, tous les titres de niveau 7", href: "#" }
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
        applyButton={{ label: "CANDIDATER", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Le Bachelor Hospitality Management est un diplôme en trois ans (niveau 6) qui forme des professionnels à gérer, promouvoir et développer des structures touristiques et hôtelières.</p>
              <p>Ce programme complet couvre divers sujets tels que la gestion de projets touristiques, la stratégie marketing et commerciale, la gestion d'équipe, l'événementiel, l'hébergement et la restauration, ainsi que le droit et la finance appliqués au tourisme.</p>
              <p>Conçu pour allier expertise technique et compétences interpersonnelles, il met l'accent sur le développement professionnel à travers des projets concrets, des ateliers pratiques, des jeux de rôle et des stages : les étudiants acquièrent ainsi une solide expérience de terrain et développent les compétences recherchées par les employeurs.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="Les avantages de Grand Sud"
            subtitle="Avec plus de 30 ans d'expérience dans la préparation des étudiants à de nombreuses qualifications, l'école Grand Sud connaît les clés de la réussite pour l'obtention de cette qualification de Niveau 6."
            advantages={advantages}
          />
        </section>

        {/* Program Section */}
        <section id="programme" className="scroll-mt-32">
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
        <section id="debouchés" className="scroll-mt-32">
          <CourseJobs {...jobsData} />
        </section>

        {/* Further Education Section */}
        <section id="poursuite-etudes" className="scroll-mt-32">
          <CourseFurtherEducation {...educationData} />
        </section>

      </CourseDetailLayout>
    </main>
  );
}
