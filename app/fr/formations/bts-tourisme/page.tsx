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

export default function BTSTourismePage() {
  const bannerData = {
    title: "BTS TOURISME",
    image: "/assets/eiffeltower-1536x838.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "5 (bac+2)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d'emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaine en entreprise" },
      { label: "Durée", value: "2 ans – 1350 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
    logos: ["/assets/logo-france-competences.png"],
    certificationBadge: "• DIPLÔME D'ÉTAT DE L'ÉDUCATION NATIONALE",
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
    { icon: PenTool, text: "Deux sessions de BTS blancs par an / jurys professionnels", isDarkRed: false },
    { icon: Users, text: "workshop avec des partenaires et problématiques réelles", isDarkRed: true },
    { icon: Briefcase, text: "business cases réels étudiés en cours", isDarkRed: false },
    { icon: MonitorPlay, text: "intervenants professionnels", isDarkRed: true },
  ];

  const programYears = [
    {
      id: "annee1",
      title: "Année 1",
      hours: "581 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Start", description: "Séminaire d'intégration et team building" },
            { label: "Workshop", description: "Scénarios professionnels stimulants nécessitant des réponses concrètes aux besoins des clients, transformation des besoins en solutions concrètes dans un délai imparti, développement de l'adaptabilité, de la créativité et de l'intelligence collective (soft & hard skills)." },
            { label: "Culture Générale et Expression", description: "Synthèse d'informations, élaboration de réponses argumentées aux questions relatives aux documents proposés à la lecture" },
            { label: "Anglais", description: "Accueil et assistance des clients étrangers, vente de produits touristiques français aux clients étrangers, vente de produits touristiques étrangers aux clients français, accompagnement des touristes étrangers, suivi et fidélisation de la clientèle étrangère" },
            { label: "LV2", description: "Espagnol, Italien ou Allemand" },
            { label: "Devoirs surveillés et BTS blancs", description: "Simulation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Gestion de la relation client touristique",
          items: [
            { label: "Amadeus", description: "Maîtrise du fonctionnement du GDS Amadeus (Global Distribution Systems), système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "GRCT", description: "Organiser l'accueil, écouter activement les clients, présenter les caractéristiques des destinations ou produits concernés, proposer un service touristique adapté et finaliser la vente" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Innover dans le management et les méthodes organisationnelles",
          items: [
            { label: "Management et droit appliqués au tourisme", description: "Déterminer le prix de revient de la prestation, fixer un prix de vente en cohérence avec la politique commerciale" },
            { label: "Marketing touristique", description: "Identifier les menaces et opportunités, forces et faiblesses de l'environnement et d'une organisation touristique donnée, identifier les caractéristiques de l'offre et de la demande, choisir les réseaux de distribution appropriés, sélectionner les supports de communication adaptés" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Gestion de l'information touristique",
          items: [
            { label: "Atelier professionnel", description: "Sélectionner les prestataires, assembler les composantes de la prestation ; évaluer la conception et la réalisation de la prestation ; assurer une veille informationnelle" },
            { label: "Acteurs du tourisme", description: "Établir des liens entre les évolutions socio-économiques ou juridiques et l'activité touristique ; caractériser le rôle et le statut des acteurs du tourisme" },
          ]
        }
      ]
    },
    {
      id: "annee2",
      title: "Année 2",
      hours: "616 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Start", description: "Séminaire d'intégration et team building" },
            { label: "Workshop", description: "Scénarios professionnels stimulants nécessitant des réponses concrètes aux besoins des clients, transformation des besoins en solutions concrètes dans un délai imparti, développement de l'adaptabilité, de la créativité et de l'intelligence collective (soft & hard skills)." },
            { label: "Culture Générale et Expression", description: "Synthèse d'informations, élaboration de réponses argumentées aux questions relatives aux documents proposés à la lecture" },
            { label: "Anglais", description: "Accueil et assistance des clients étrangers, vente de produits touristiques français aux clients étrangers, vente de produits touristiques étrangers aux clients français, accompagnement des touristes étrangers, suivi et fidélisation de la clientèle étrangère" },
            { label: "LV2", description: "Espagnol, Italien ou Allemand" },
            { label: "Devoirs surveillés et BTS blancs", description: "Simulation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Gestion de la relation client touristique",
          items: [
            { label: "Amadeus", description: "Maîtrise du fonctionnement du GDS Amadeus (Global Distribution Systems), système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "GRCT", description: "Organiser l'accueil, écouter activement les clients, présenter les caractéristiques des destinations ou produits concernés, proposer un service touristique adapté et finaliser la vente" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Innover dans le management et les méthodes organisationnelles",
          items: [
            { label: "Management et droit appliqués au tourisme", description: "Déterminer le prix de revient de la prestation, fixer un prix de vente en cohérence avec la politique commerciale" },
            { label: "Marketing touristique", description: "Identifier les menaces et opportunités, forces et faiblesses de l'environnement et d'une organisation touristique donnée, identifier les caractéristiques de l'offre et de la demande, choisir les réseaux de distribution appropriés, sélectionner les supports de communication adaptés" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Gestion de l'information touristique",
          items: [
            { label: "Atelier professionnel", description: "Sélectionner les prestataires, assembler les composantes de la prestation ; évaluer la conception et la réalisation de la prestation ; assurer une veille informationnelle" },
            { label: "Acteurs du tourisme", description: "Établir des liens entre les évolutions socio-économiques ou juridiques et l'activité touristique ; caractériser le rôle et le statut des acteurs du tourisme" },
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
        "Un niveau de français suffisant pour permettre au candidat de suivre la formation",
        "Langues : Anglais et une autre langue au choix",
        "Si niveau baccalauréat : les candidats devront passer les épreuves manquantes en candidat libre durant la première année du BTS"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée académique",
      nextYearValue: "Octobre 2025",
      deferredLabel: "Rentrée décalée",
      deferredValue: "Février 2026"
    },
    processTitle: "Processus d'admission",
    processSteps: [
      {
        title: "Étape 1 : Dépôt du dossier",
        items: [
          { text: "Téléchargez le dossier de candidature en cliquant ici.", isLink: true, linkText: "en cliquant ici." },
          { text: "Envoyez votre dossier complet par email, sans oublier toutes les pièces jointes demandées !" },
          { text: "Il n'y a pas de frais de dossier." }
        ]
      },
      {
        title: "Étape 2 : sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Entretien individuel : entretien de motivation à l'école ou à distance (via visioconférence)" },
          { text: "Passage en commission d'admission : notre équipe étudiera votre candidature dans son ensemble" },
          { text: "Réponse sous 48h ouvrées : décision favorable ou défavorable" }
        ]
      },
      {
        title: "Étape 3 : inscription",
        items: [
          { text: "Confirmation de votre statut : Étudiant / Demandeur d'emploi / Stagiaire de la formation professionnelle / Salarié" },
          { text: "Accompagnement sur les solutions de financement et la recherche d'entreprise" }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Frais initiaux :",
      initialYear1: "5 500 €",
      initialYear2: "5 700 €",
      visaNote: "*Pour les étudiants nécessitant une assistance visa (première entrée dans l'UE) :",
      visaYear1: "6 500 €",
      visaYear2: "5 700 €",
      workStudyLabel: "Frais en alternance :",
      workStudyYear1: "8 000 €",
      workStudyYear2: "8 000 €",
      workStudyNote: "*En contrat d'apprentissage ou de professionnalisation, les frais de formation sont pris en charge par l'OPCO. Cela sera discuté avec l'entreprise lors de la signature du contrat."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales conformément au référentiel de l'Éducation Nationale pour les examens du BTS.",
      certificationTitle: "Certification",
      diplomaName: "BTS Tourisme – Diplôme d’État National BAC+2",
      rncpLabel: "RNCP 37890",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/37890/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "32033426",
      ministry: "Ministère de l'enseignement supérieur et de la recherche",
      expirationLabel: "Date d'échéance :",
      expirationDate: "31/08/2028"
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS PROFESSIONNELS",
    intro: "Le secteur du tourisme offre un large éventail d'opportunités en France et à l'étranger pour les titulaires d'un BTS Tourisme.",
    categories: [
      {
        title: "Métiers liés à l'offre de destinations :",
        jobs: [
          { label: "CONSEILLER EN VOYAGES", isDarkRed: false },
          { label: "FORFAITISTE", isDarkRed: true },
          { label: "CONSEILLER BILLETTERIE", isDarkRed: false },
          { label: "AGENT RÉCEPTIF", isDarkRed: true },
          { label: "AGENT D'ESCALE", isDarkRed: true },
          { label: "GUIDE ACCOMPAGNATEUR", isDarkRed: false },
          { label: "AGENT D'OPÉRATIONS", isDarkRed: true },
          { label: "DÉLÉGUÉ RÉCEPTIF", isDarkRed: false },
        ],
        prospects: "Perspectives d'évolution : chef d'équipe, responsable d'agence, responsable de plateau ou chef de produit, yield manager, etc."
      },
      {
        title: "Métiers liés à la conception de l'offre par les organismes de tourisme territoriaux :",
        jobs: [
          { label: "CONSEILLER EN SÉJOUR", isDarkRed: false },
          { label: "ANIMATEUR DU TOURISME LOCAL", isDarkRed: true },
          { label: "CHARGÉ DE PROMOTION", isDarkRed: false },
          { label: "CONSEILLER EN DÉVELOPPEMENT", isDarkRed: true },
        ],
        prospects: "Perspectives : responsable d'accueil, directeur d'office de tourisme (petite structure)."
      },
      {
        title: "Métiers liés à l'hébergement, aux déplacements et à l'accueil sur sites de loisirs :",
        jobs: [
          { label: "TECHNICIEN D'ACCUEIL", isDarkRed: true },
          { label: "ANIMATEUR DE SITE", isDarkRed: false },
          { label: "RESPONSABLE D'ACCUEIL", isDarkRed: true },
          { label: "AGENT DE RÉSERVATION", isDarkRed: false },
        ],
        prospects: "Perspectives : directeur de centre, de camping, etc., responsable de site."
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Bachelor Développement du Tourisme Durable et Numérique", href: "/fr/formations/bachelor-durable", flag: "FR" as const },
      { label: "Bachelor MICE DESIGNER", href: "/fr/formations/bachelor-mice", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality", flag: "FR" as const, isHighlighted: true },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality-en", flag: "UK" as const },
      { label: "Bachelor Business & Tourism", href: "/fr/formations/bachelor-business", flag: "UK" as const },
      { label: "D'une manière générale, titres de niveau 6", href: "/fr/formations" }
    ],
    jobs: [
      { label: "CHEF D'ENTREPRISE, CRÉATEUR OU REPRENEUR D'ENTREPRISES", isDarkRed: false },
      { label: "DIRECTEUR MEMBRE DU COMITÉ DE DIRECTION", isDarkRed: true },
      { label: "DIRECTEUR FONCTIONNEL (COMMERCIAL, MARKETING, JURIDIQUE, FINANCE, RESSOURCES HUMAINES, SUPPLY CHAIN, LOGISTIQUE, EXPORT)", isDarkRed: false },
      { label: "DIRECTEUR D'UNITÉS OPÉRATIONNELLES AU NIVEAU UNITAIRE, RÉGIONAL, NATIONAL OU MONDIAL", isDarkRed: true },
      { label: "DIRECTEUR / MANAGER DE ZONE, FILIALE, D'UNITÉ, DE SERVICES", isDarkRed: true },
      { label: "DIRECTEUR GÉNÉRAL ADJOINT", isDarkRed: false },
      { label: "GÉRANT", isDarkRed: true },
      { label: "DIRECTEUR DE SERVICE, DÉPARTEMENT, UNITÉ, D'AGENCE", isDarkRed: false },
      { label: "DIRECTEUR DE PROJET / MANAGER DE PROJET", isDarkRed: false },
      { label: "DIRECTEUR DU DEVELOPPEMENT", isDarkRed: true },
      { label: "DIRECTEUR DES VENTES", isDarkRed: false },
      { label: "MANAGER DES ORGANISATIONS", isDarkRed: true },
      { label: "MANAGER INTERNATIONAL", isDarkRed: true },
      { label: "CONSULTANT DANS DES CABINETS DE CONSEIL ORIENTÉS", isDarkRed: false },
      { label: "DIRECTEUR GÉNÉRAL DE FILIALE", isDarkRed: true },
      { label: "DIRECTEUR ADJOINT", isDarkRed: false },
    ]
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
        applyButton={{ label: "CANDIDATER", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Le BTS Tourisme est le diplôme d’enseignement supérieur de référence en deux ans dans le secteur.</p>
              <p>Cette formation polyvalente couvre des domaines variés tels que la gestion de projets touristiques, le marketing des produits et services, l’accueil, l’animation et les compétences linguistiques.</p>
              <p>Axé sur la professionnalisation, il inclut des stages en entreprise, offrant aux futurs diplômés une solide expérience pratique et de réelles opportunités d’insertion dans un secteur dynamique et en constante évolution.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="Les avantages de Grand Sud"
            subtitle="Avec plus de 20 ans d’expérience dans la préparation des étudiants aux examens du BTS Tourisme, l’école Grand Sud connaît les clés de la réussite pour l’obtention de ce diplôme de niveau 5."
            topHighlight="100% de réussite en 2025, pour la deuxième année consécutive"
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
