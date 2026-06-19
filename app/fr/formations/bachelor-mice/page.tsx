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

export default function BachelorMiceDesignerPageFR() {
  const bannerData = {
    title: "Bachelor MICE Designer",
    image: "/assets/Gemini_Generated_Image_gl11shgl11shgl11-scaled-e1756651535869.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d'emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "1 an – 560 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
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

  const advantages = [
    { icon: CheckCircle2, text: "une expertise 100% tourisme depuis 1991", isDarkRed: false },
    { icon: Search, text: "accompagnement à la recherche d'alternance ou de stage", isDarkRed: true },
    { icon: PenTool, text: "des entraînements à l'examen tout au long de l'année", isDarkRed: false },
    { icon: Users, text: "workshop avec des partenaires et des problématiques réels", isDarkRed: true },
    { icon: Briefcase, text: "des cas réels d'entreprise étudiés en cours", isDarkRed: false },
    { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
  ];

  const programYears = [
    {
      id: "year1",
      title: "Année 1",
      hours: "560 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Développer sa culture générale touristique",
          items: [
            { label: "Culture générale", description: "Développer une culture générale globale réutilisable dans son activité professionnelle" },
            { label: "Destinations touristiques", description: "Connaître les principales destinations touristiques mondiales" },
            { label: "Etude de cas et projet", description: "Mise en situation professionnelle de réponses concrètes à un besoin client" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Piloter la stratégie financière d'une entreprise touristique",
          items: [
            { label: "Gestion d'un projet touristique", description: "Être en capacité de gérer un projet de développement touristique d'un territoire, évènementiel ou aménagement d'un site ou d'une structure" },
            { label: "Gestion et management d'équipes", description: "Maîtriser les bases du management d'équipe projet" },
            { label: "Faisabilité financière Création d'un dossier professionnel et financier", description: "Maîtriser les indicateurs financiers propres au tourisme et analyser les performances comptables d'une entreprise" },
            { label: "Droit des sociétés", description: "Identifier les différentes formes sociales en droit français et savoir arbitrer entre ces dernières" },
            { label: "Bureautique", description: "Maîtriser Word & Excel et les outils couramment employés en entreprise" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Définir et conduire la stratégie marketing et commerciale d'une organisation touristique",
          items: [
            { label: "Marketing analytique et stratégique", description: "Analyser une situation et définir une stratégie marketing" },
            { label: "Plan marketing", description: "Elaborer et piloter un plan marketing" },
            { label: "Commercialisation d'un projet touristique", description: "Maîtriser les bases de la négociation commerciale dans le domaine touristique, en respectant une démarche qualité" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Spécialité MICE Designer",
          items: [
            { label: "Fondamentaux de l'événementiel", description: "Comprendre les règles de différents types d'événement, les acteurs et tendances du tourisme événementiel" },
            { label: "Conception et Pilotage d'un projet événementiel", description: "Déterminer sa stratégie, maîtriser les étapes-clés de l'organisation amont aux retombées finales d'un événement" },
            { label: "Recrutement, réglementation et sécurité événementielle", description: "Connaître les spécificités RH, les risques et la règlementation propre à l'événementiel" },
          ]
        },
        {
          unit: "Unité de Compétences 5 – Préparer son insertion professionnelle",
          items: [
            { label: "Start", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Workshop", description: "Mise en situation professionnelle challenging de réponses concrètes à un besoin client, transformation du besoin en solution concrète en un temps imparti, développement de la capacité d'adaptation, créativité, intelligence collective en équipe aléatoire pluridisciplinaire" },
            { label: "Intelligence Artificielle", description: "Utiliser l'IA dans sa montée en compétences" },
            { label: "Soft skills (atelier thêatre)", description: "Développer son élocution, apprendre à verbaliser et faire savoir ses besoins et ses attentes" },
            { label: "Anglais", description: "Préparer un questionnaire de satisfaction ou de motivation en anglais, destiné aux visiteurs anglophones ; créer un document de promotion territoriale en français et en anglais, en version papier et en version numérique" },
            { label: "Espagnol", description: "Préparer un questionnaire de satisfaction ou de motivation en espagnol, destiné aux visiteurs hispanophones ; créer un document de promotion territoriale en français et en espagnol en version papier et en version numérique" },
            { label: "Préparation titre", description: "Comprendre les attentes du certificateur et préparer les rendus conformes à ces dernières" },
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
        "Bac+2",
        "Un niveau de français suffisant pour permettre de suivre la formation",
        "Langues : anglais et une autre langue au choix"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "octobre 2026",
      deferredLabel: "Rentrée décalée",
      deferredValue: "février 2027"
    },
    processTitle: "Modalités d'admission",
    processSteps: [
      {
        title: "Etape 1 : Dépôt de candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature en cliquant ici.", isLink: true, linkText: "cliquant ici." },
          { text: "Envoyez votre dossier complété par mail en n'oubliant pas les pièces jointes à fournir !" },
          { text: "Il n'y a pas de frais de dossier." }
        ]
      },
      {
        title: "Etape 2 : sélection",
        items: [
          { text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Rendez-vous individuel : entretien de motivation à l'école ou à distance (en visio)" },
          { text: "Passage en commission d'admission : notre équipe étudie votre dossier dans son ensemble" },
          { text: "Réponse sous 48h ouvrée : avis favorable ou défavorable" }
        ]
      },
      {
        title: "Etape 3 : inscription",
        items: [
          { text: "Validation de votre statut : Étudiant / Demandeur d'Emploi / Stagiaire de la formation professionnelle / Salarié" },
          { text: "Accompagnement sur les dispositifs de financement et la recherche d'entreprise" }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif en initial :",
      initialPrice: "6 500 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "8 688 €",
      workStudyNote: "En alternance, les frais de formation sont pris en charge par l'OPCO. Celle-ci sera abordée avec l'entreprise à la signature du contrat.",
      seminarLabel: "Séminaire « Le paysage touristique en France et en Occitanie » :",
      seminarPrice: "1 050 €",
      seminarNote: "Ce module est obligatoire pour les étudiants hors Union Européenne, pour la première année en France. Son coût s'ajoute au montant de la première année de la formation choisie."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales.",
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
        "Le CCP « Assurer la faisabilité financière d'une action touristique » du titre RDTT est équivalent au CCP « Assurer la gestion opérationnelle d'exploitation et prévoir les investissements d'un établissement touristique » du titre professionnel « Responsable d'établissement touristique »."
      ]
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre un large panel d'opportunités <strong>en France et à l'Étranger</strong> pour les titulaires du Bachelor MICE Designer.",
    categories: [
      {
        jobs: [
          { label: "Responsable événementiel", isDarkRed: false },
          { label: "Chargé de l'organisation de congrès, séminaires et salons", isDarkRed: true },
          { label: "Manager en centres de congrès ou parcs des expositions", isDarkRed: false },
          { label: "Manager en événementiel culturel et festivalier", isDarkRed: true },
          { label: "Assistant chef de projet événementiel", isDarkRed: true },
          { label: "Business travel manager", isDarkRed: false },
          { label: "Responsable communication événementielle", isDarkRed: true },
          { label: "Responsable logistique événementielle", isDarkRed: false },
          { label: "Coordinateur d'événements internationaux", isDarkRed: false },
          { label: "Responsable relations entreprises et partenariats", isDarkRed: true },
          { label: "Chef de projet tourisme d'affaires", isDarkRed: false },
          { label: "Responsable développement touristique orienté MICE", isDarkRed: true },
          { label: "Consultant en stratégie événementielle et tourisme d'affaires", isDarkRed: true },
          { label: "Responsable sponsoring et partenariats événementiels", isDarkRed: false },
          { label: "Organisateur de voyages incentives", isDarkRed: true },
          { label: "Responsable marketing et promotion d'événements", isDarkRed: false },
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
      { label: "De manière générale, les titres de niveau 7", href: "" }
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
              <p>Le Bachelor MICE Designer est un diplôme de niveau Bac+3 (niveau 6) qui prépare aux métiers de l&apos;événementiel et du tourisme d&apos;affaires, en formant des professionnels capables de concevoir, piloter et coordonner des projets complexes.</p>
              <p>Ce cursus approfondit des domaines variés tels que la conception et l&apos;organisation d&apos;événements, la gestion d&apos;équipes, la stratégie marketing et commerciale, le développement touristique, la communication, ainsi que la réglementation et la sécurité propres au secteur.</p>
              <p>Orientée vers la professionnalisation, la formation intègre des études de cas, des projets concrets, des ateliers pratiques et des périodes en entreprise. Les étudiants acquièrent ainsi une expérience opérationnelle solide et développent les compétences techniques et relationnelles recherchées dans un secteur en forte croissance et à dimension internationale.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="Les plus de Grand Sud"
            subtitle="Avec plus de 30 ans d'expérience dans la préparation de nombreux titres, l'école Grand Sud connaît les clefs du succès pour réussir ce titre de niveau 6."
            advantages={advantages}
          />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
            downloadButton={{ label: "Télécharger le programme pédagogique", href: "/assets/Programme_pedagogique_Bachelor_MICE_Designer.pdf" }}
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
