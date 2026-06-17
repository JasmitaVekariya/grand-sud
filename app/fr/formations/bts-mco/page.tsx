"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { GraduationCap, CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function BtsMcoPageFR() {
  const bannerData = {
    title: "BTS MCO",
    image: "/assets/Gemini_Generated_Image_d6oi0gd6oi0gd6oi-scaled-e1756648261219.png", // Placeholder
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "5 (bac+2)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "2 ans – 1 197 heures" },
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

  const programYears = [
    {
      id: "year1",
      title: "Année 1 - 581 heures",
      hours: "581 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Start", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Workshop", description: "Mises en situation professionnelle stimulantes nécessitant des réponses concrètes aux besoins des clients, transformer des besoins en solutions concrètes dans un temps imparti, développer l'adaptabilité, la créativité et l'intelligence collective dans des équipes multidisciplinaires aléatoires (soft & hard skills)." },
            { label: "Culture générale et expression", description: "Synthétiser des informations, apporter des réponses argumentées à des questions liées aux documents proposés à la lecture" },
            { label: "Anglais", description: "Accueillir et assister la clientèle étrangère, vendre des produits touristiques français à une clientèle étrangère, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Deuxième langue vivante", description: "Espagnol, Italien ou Allemand" },
            { label: "Devoirs surveillés et BTS blancs", description: "Simulation d'examen" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Gestion de la relation client touristique",
          items: [
            { label: "Amadeus", description: "Maîtriser le fonctionnement d'Amadeus GDS (Global Distribution Systems), le système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "GRCT", description: "Organiser l'espace d'accueil, accueillir les clients et les écouter activement, présenter les caractéristiques clés des destinations ou produits concernés, proposer une prestation touristique adaptée et finaliser la vente" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Innover dans le management et les méthodes d'organisation",
          items: [
            { label: "Management et droit appliqués au tourisme", description: "Déterminer le prix de revient de la prestation, fixer un prix de vente en cohérence avec la politique commerciale" },
            { label: "Marketing touristique", description: "Identifier les menaces et opportunités, forces et faiblesses de l'environnement et d'une organisation touristique donnée, identifier les caractéristiques de l'offre et de la demande (pour une prestation donnée), choisir les réseaux de distribution appropriés, sélectionner les supports de communication adéquats" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Gestion de l'information touristique",
          items: [
            { label: "Atelier de professionnalisation", description: "Sélectionner les fournisseurs et prestataires et assembler les composantes de la prestation ; évaluer la conception et la mise en œuvre de la prestation ; assurer une veille informationnelle ; identifier les évolutions et changements significatifs de l'environnement" },
            { label: "Acteurs du tourisme", description: "Établir les liens entre les évolutions socio-économiques ou juridiques et l'activité touristique ; caractériser le rôle et le statut des acteurs du tourisme" },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2 - 616 heures",
      hours: "616 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Start", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Workshop", description: "Mises en situation professionnelle stimulantes nécessitant des réponses concrètes aux besoins des clients, transformer des besoins en solutions concrètes dans un temps imparti, développer l'adaptabilité, la créativité et l'intelligence collective dans des équipes multidisciplinaires aléatoires (soft & hard skills)." },
            { label: "Culture générale et expression", description: "Synthétiser des informations, apporter des réponses argumentées à des questions liées aux documents proposés à la lecture" },
            { label: "Anglais", description: "Accueillir et assister la clientèle étrangère, vendre des produits touristiques français à une clientèle étrangère, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Deuxième langue vivante", description: "Espagnol, Italien ou Allemand" },
            { label: "Devoirs surveillés et BTS blancs", description: "Simulation d'examen" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Gestion de la relation client touristique",
          items: [
            { label: "Amadeus", description: "Maîtriser le fonctionnement d'Amadeus GDS (Global Distribution Systems), le système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "GRCT", description: "Organiser l'espace d'accueil, accueillir les clients et les écouter activement, présenter les caractéristiques clés des destinations ou produits concernés, proposer une prestation touristique adaptée et finaliser la vente" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Innover dans le management et les méthodes d'organisation",
          items: [
            { label: "Management et droit appliqués au tourisme", description: "Déterminer le prix de revient de la prestation, fixer un prix de vente en cohérence avec la politique commerciale" },
            { label: "Marketing touristique", description: "Identifier les menaces et opportunités, forces et faiblesses de l'environnement et d'une organisation touristique donnée, identifier les caractéristiques de l'offre et de la demande (pour une prestation donnée), choisir les réseaux de distribution appropriés, sélectionner les supports de communication adéquats" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Gestion de l'information touristique",
          items: [
            { label: "Atelier de professionnalisation", description: "Sélectionner les fournisseurs et prestataires et assembler les composantes de la prestation ; évaluer la conception et la mise en œuvre de la prestation ; assurer une veille informationnelle ; identifier les évolutions et changements significatifs de l'environnement" },
            { label: "Acteurs du tourisme", description: "Établir les liens entre les évolutions socio-économiques ou juridiques et l'activité touristique ; caractériser le rôle et le statut des acteurs du tourisme" },
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
        "Niveau de langue française suffisant pour suivre le programme",
        "Langues : Anglais et une autre langue de votre choix",
        "Niveau Baccalauréat : les candidats doivent passer les épreuves manquantes en candidat libre lors de la première année de BTS"
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
      initialPrice: "Année 1 : 5 500 €\nAnnée 2 : 5 700 €",
      visaNote: "*Pour les étudiants nécessitant une aide aux visas (première entrée dans l'UE) :\nAnnée 1 : 6 500 €\nAnnée 2 : 5 700 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "Année 1 : 8 000 €\nAnnée 2 : 8 000 €",
      workStudyNote: "*Dans le cadre de l'alternance, les frais de formation sont pris en charge par l'OPCO. Cela sera discuté avec l'entreprise lors de la signature du contrat."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales selon les directives du Ministère de l'Éducation Nationale pour les examens du BTS.",
      certificationTitle: "Certification",
      diplomaName: "BTS Tourisme – Diplôme d'État National BAC+2",
      rncpLabel: "RNCP 37890",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/37890/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "32033426",
      ministry: "Ministère de l'enseignement supérieur et de la recherche",
      expirationLabel: "Date d'échéance :",
      expirationDate: "31/08/2028",
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre de nombreuses opportunités en France et à l'étranger aux titulaires d'un BTS Tourisme.",
    categories: [
      {
        title: "Emplois liés à l'offre de destinations :",
        jobs: [
          { label: "CONSEILLER VOYAGES", isDarkRed: false },
          { label: "FORFAITISTE", isDarkRed: true },
          { label: "CONSEILLER BILLETTERIE", isDarkRed: false },
          { label: "AGENT RÉCEPTIF", isDarkRed: true },
          { label: "AGENT D'ESCALE", isDarkRed: true },
          { label: "GUIDE ACCOMPAGNATEUR", isDarkRed: false },
          { label: "AGENT D'OPÉRATIONS (OU DE PLANNING)", isDarkRed: true },
          { label: "DÉLÉGUÉ RÉCEPTIF (OU CORRESPONDANT LOCAL)", isDarkRed: false },
        ],
        prospects: "Perspectives d'évolution : chef d'équipe, chef de comptoir, directeur d'agence(s), responsable de plateau ou chef de produit, yield manager, etc."
      },
      {
        title: "Emplois liés à la conception d'offres touristiques par des organismes de tourisme sur un territoire donné :",
        jobs: [
          { label: "CONSEILLER VOYAGES", isDarkRed: false },
          { label: "COORDINATEUR TOURISME LOCAL", isDarkRed: true },
          { label: "RESPONSABLE DU DÉVELOPPEMENT RÉGIONAL DIGITAL", isDarkRed: false },
          { label: "CHARGÉ DE DÉVELOPPEMENT TOURISTIQUE", isDarkRed: true },
        ],
        prospects: "Perspectives d'évolution : responsable/directeur d'accueil, directeur d'office de tourisme (petite structure)."
      },
      {
        title: "Emplois liés à l'hébergement, aux déplacements touristiques et à l'accueil sur des sites de loisirs :",
        jobs: [
          { label: "TECHNICIEN D'ACCUEIL TOURISTIQUE", isDarkRed: true },
          { label: "EMPLOYÉ DE LOISIRS OU D'ATTRACTION", isDarkRed: false },
          { label: "RESPONSABLE RÉCEPTION", isDarkRed: true },
          { label: "AGENT DE VENTES ET RÉSERVATIONS", isDarkRed: false },
        ],
        prospects: "Perspectives d'évolution : directeur (de centre, camping, etc.), responsable de site."
      }
    ]
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Bachelor Développement touristique durable et digital", href: "/fr/formations/bachelor-sustainable", flag: "FR" as const },
      { label: "Bachelor MICE DESIGNER", href: "/fr/formations/bachelor-mice", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality", flag: "UK" as const },
      { label: "Bachelor Business & Tourism", href: "/fr/formations/bachelor-business", flag: "UK" as const },
      { label: "De manière générale, les titres de niveau 6", href: "#" }
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
              <p>Le BTS Management Commercial Opérationnel (BTS MCO) a pour objectif de vous permettre de prendre la responsabilité opérationnelle de tout ou partie d'une unité commerciale. Dans un contexte de digitalisation croissante des activités commerciales, le BTS MCO vous apprendra à être plus polyvalent.</p>
              <p>Le BTS MCO vise à développer la performance et les compétences en marketing et en gestion opérationnelle des unités commerciales et des équipes. Vous pourrez avoir des missions telles que : gérer une unité commerciale, choisir les politiques d'achat et de vente, réaliser des promotions commerciales, gérer la relation client, identifier les besoins commerciaux d'une entreprise, gérer et animer l'offre de produits et de services.</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 leading-tight uppercase">
                QUALITÉS
              </h2>
              <p className="text-[16px] text-gray-700 leading-relaxed font-medium">
                Forte de plus de 20 ans d'expérience dans la préparation des étudiants aux examens du BTS Tourisme, l'école Grand Sud possède les clés de la réussite pour l'obtention de ce diplôme de niveau 5.
              </p>
            </div>

            <div className="w-full max-w-[835px]">
              {/* Top Highlight Box */}
              <div className="bg-primary-red text-white p-8 flex items-center gap-8 h-[100px]">
                <div className="flex-shrink-0">
                  <GraduationCap size={56} className="text-[#3F3F3F]" strokeWidth={1.5} />
                </div>
                <p className="text-[18px] md:text-[20px] font-bold uppercase tracking-wide leading-tight">
                  100% de réussite en 2025, pour la deuxième année consécutive
                </p>
              </div>

              {/* Qualities Custom Grid */}
              <div className="w-full flex flex-col">
                {/* Row 1 - 4 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 items-stretch w-full">
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-r border-b border-white/10">
                    <CheckCircle2 size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Curiosité</p>
                  </div>
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02] border-r border-b border-white/10">
                    <Search size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Dynamisme</p>
                  </div>
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-r border-b border-white/10">
                    <PenTool size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Goût du contact client</p>
                  </div>
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02] border-b border-white/10">
                    <PenTool size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Esprit d'analyse</p>
                  </div>
                </div>

                {/* Row 2 - 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-stretch w-full">
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02] border-r border-white/10">
                    <Users size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Esprit d'équipe</p>
                  </div>
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-r border-white/10">
                    <Briefcase size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Goût du challenge et du management</p>
                  </div>
                  <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02]">
                    <MonitorPlay size={32} strokeWidth={1.5} className="text-white/60" />
                    <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Sens des responsabilités</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
