"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { GraduationCap, CheckCircle2, Search, PenTool, Users, Briefcase, Lightbulb } from "lucide-react";

export default function BtsMcoPageFR() {
  const bannerData = {
    title: "BTS MCO",
    image: "/assets/Gemini_Generated_Image_99uv1u99uv1u99uv-e1756911385254.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "5 (bac+2)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d'emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "2 ans – 1 197 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
    logos: ["/assets/logo-france-competences.png"],
    certificationBadge: "TITRE CERTIFIÉ PAR L'ÉTAT",
  };

  const sections = [
    { id: "objectifs", label: "OBJECTIFS" },
    { id: "programm", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "DÉBOUCHÉS" },
    { id: "further-education", label: "POURSUITE D'ÉTUDES" },
  ];

  const programYears = [
    {
      id: "year1",
      title: "Année 1",
      hours: "581 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            {
              label: "Start",
              description: "Séminaire d'intégration et teambuilding. Intégration des apprenants, découverte des métiers du commerce et du marketing digital, développement de l'esprit d'équipe et des compétences collaboratives.",
            },
            {
              label: "Workshop",
              description: "Mises en situation professionnelles : analyse d'un besoin client, conception d'une offre commerciale omnicanale, élaboration d'une stratégie marketing et digitale en temps contraint. Développement des soft skills : créativité, agilité, intelligence collective, gestion de projet.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 2 – Développement de la relation client omnicanale",
          items: [
            {
              label: "Relation client digitale et omnicanale",
              description: "Accueil et accompagnement du client sur tous les canaux : point de vente, e-commerce, marketplaces, réseaux sociaux. Personnalisation de la relation client et optimisation de l'expérience utilisateur.",
            },
            {
              label: "Vente conseil et tunnel de conversion",
              description: "Analyse du comportement client, construction d'argumentaires commerciaux, optimisation du parcours d'achat et transformation des prospects en clients.",
            },
            {
              label: "Fidélisation et CRM",
              description: "Mise en place d'actions de fidélisation, utilisation des outils de CRM, gestion de bases clients et suivi de la satisfaction client.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 3 – Animation et dynamisation de l'offre marketing & e-commerce",
          items: [
            {
              label: "Marketing opérationnel et digital",
              description: "Étude de marché, analyse de la concurrence, définition des cibles, conception d'actions marketing adaptées aux marchés nationaux et internationaux.",
            },
            {
              label: "E-commerce et stratégie digitale",
              description: "Fonctionnement d'un site marchand, initiation au SEO/SEA, gestion des contenus digitaux, animation commerciale en ligne, utilisation des réseaux sociaux comme leviers de croissance.",
            },
            {
              label: "Merchandising physique et digital",
              description: "Optimisation de l'offre produit en magasin et en ligne, mise en valeur des produits, parcours client et performance commerciale.",
            },
            {
              label: "Management interculturel",
              description: "Développement des compétences en communication et management dans un contexte international, compréhension des différences culturelles, adaptation des pratiques commerciales et managériales selon les cultures et marchés.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 4 – Gestion et pilotage de la performance commerciale",
          items: [
            {
              label: "Gestion commerciale et indicateurs de performance",
              description: "Analyse des ventes, marges, stocks et KPI e-commerce (trafic, taux de conversion, panier moyen). Contribution à l'amélioration de la rentabilité et à la stratégie de développement international.",
            },
            {
              label: "Droit, économie et réglementation du commerce digital",
              description: "Cadre juridique du commerce et du e-commerce, protection du consommateur, RGPD, sécurisation des pratiques commerciales.",
            },
            {
              label: "Management de l'équipe commerciale et digitale",
              description: "Organisation du travail, répartition des tâches, animation et motivation d'une équipe, coordination entre équipes physiques et digitales.",
            },
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Année 2",
      hours: "616 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            {
              label: "Start",
              description: "Séminaire de rentrée et projets collaboratifs. Renforcement de l'intégration, développement de projets complexes et travail en équipe pluridisciplinaire sur des problématiques commerciales et digitales.",
            },
            {
              label: "Workshop",
              description: "Projets plus avancés : conception de campagnes digitales, optimisation du tunnel de conversion, gestion de projets marketing internationaux. Développement des soft skills : leadership, créativité, esprit critique et gestion de crise.",
            },
            {
              label: "Culture Générale et Expression",
              description: "Analyse et synthèse de documents complexes, rédaction professionnelle et communication orale structurée, argumentation sur des sujets liés au commerce international et au digital.",
            },
            {
              label: "Anglais commercial avancé & business",
              description: "Négociation internationale, rédaction de documents commerciaux, gestion de relations clients et partenaires étrangers, communication multilingue digitale et physique.",
            },
            {
              label: "LV2 – Espagnol, Italien ou Allemand",
              description: "Communication professionnelle avancée dans un contexte commercial international.",
            },
            {
              label: "Géopolitique appliquée au commerce international",
              description: "Analyse des tendances géopolitiques et économiques mondiales, identification des opportunités et risques pour le commerce international, adaptation stratégique des activités commerciales et marketing.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 2 – Développement de la relation client omnicanale",
          items: [
            {
              label: "Relation client omnicanale avancée",
              description: "Pilotage de la relation client sur tous les canaux : magasin, e-commerce, réseaux sociaux, marketplaces. Personnalisation et optimisation de l'expérience utilisateur, fidélisation et développement de la clientèle internationale.",
            },
            {
              label: "Vente conseil et négociation internationale",
              description: "Techniques de vente complexe, négociation interculturelle, gestion des objections, conclusion de contrats et suivi commercial dans un contexte global.",
            },
            {
              label: "CRM et fidélisation digitale",
              description: "Exploitation des outils CRM avancés, analyse des comportements clients, conception de programmes de fidélisation et suivi de la satisfaction.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 3 – Animation et dynamisation de l'offre marketing & e-commerce",
          items: [
            {
              label: "Marketing opérationnel et stratégie digitale avancée",
              description: "Conception et pilotage de campagnes marketing internationales, optimisation de l'offre et des promotions, analyse du ROI et adaptation des stratégies marketing selon les marchés étrangers.",
            },
            {
              label: "E-commerce et omnicanal",
              description: "Gestion avancée des sites e-commerce, marketplaces et réseaux sociaux, SEO/SEA, web analytics, marketing automation, conversion et fidélisation digitale.",
            },
            {
              label: "Merchandising physique et digital avancé",
              description: "Optimisation de l'expérience client en magasin et en ligne, parcours client cross-canal, valorisation de l'offre pour les marchés internationaux.",
            },
            {
              label: "Management interculturel",
              description: "Management d'équipes multiculturelles, adaptation des pratiques managériales et commerciales aux différences culturelles, conduite de projets internationaux et gestion des conflits interculturels.",
            },
          ],
        },
        {
          unit: "Unité de Compétences 4 – Gestion et pilotage de la performance commerciale",
          items: [
            {
              label: "Pilotage commercial et indicateurs de performance",
              description: "Analyse des KPI, chiffre d'affaires, marges, trafic et conversion e-commerce, élaboration de plans d'action pour améliorer la performance commerciale à l'international.",
            },
            {
              label: "Gestion financière et juridique avancée",
              description: "Suivi des coûts, marges et budgets, connaissance approfondie du cadre juridique national et international, conformité RGPD et réglementation e-commerce.",
            },
            {
              label: "Management opérationnel d'équipe",
              description: "Animation d'équipes physiques et digitales, coordination internationale, planification et organisation des tâches, motivation et développement des compétences des collaborateurs.",
            },
          ],
        },
      ],
    },
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Pré-requis",
      items: [
        "Baccalauréat ou équivalent",
        "Un niveau de français suffisant pour permettre au candidat de suivre la formation",
        "Langues : Anglais et une autre langue au choix",
        "Si niveau bac : le candidat devra valider les épreuves manquantes en candidat libre lors de la 1ère année du BTS",
      ],
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "Septembre 2026",
      deferredLabel: "",
      deferredValue: "",
    },
    processTitle: "Modalités d'admission",
    processSteps: [
      {
        title: "Etape 1 : Dépôt de candidature",
        items: [
          {
            text: "Téléchargez votre dossier de candidature en cliquant ici.",
            isLink: true,
            linkText: "cliquant ici",
            linkHref: "/fr/candidater",
          },
          { text: "Envoyez votre dossier complété par mail en n'oubliant pas les pièces jointes à fournir !" },
          { text: "Il n'y a pas de frais de dossier.", isItalic: true },
        ],
      },
      {
        title: "Etape 2 : sélection",
        items: [
          {
            text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle,",
          },
          { text: "Rendez-vous individuel : entretien de motivation à l'école ou à distance (en visio)" },
          { text: "Passage en commission d'admission : notre équipe étudie votre dossier dans son ensemble" },
          { text: "Réponse sous 48h ouvrée : avis favorable ou défavorable" },
        ],
      },
      {
        title: "Etape 3 : inscription",
        items: [
          { text: "Validation de votre statut : Étudiant / Demandeur d'Emploi / Stagiaire de la formation professionnelle / Salarié" },
          { text: "Accompagnement sur les dispositifs de financement et la recherche d'entreprise" },
        ],
      },
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif en initial :",
      initialPrice: "Année 1 : 5 500 €\nAnnée 2 : 5 700 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "Année 1 : 8 000 €\nAnnée 2 : 8 000 €",
      workStudyNote: "En alternance, les frais de formation sont pris en charge par l'OPCO. Celle-ci sera abordée avec l'entreprise à la signature du contrat.",
    },
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales selon les directives de l'Éducation Nationale pour les examens du BTS.",
      certificationTitle: "Certification",
      diplomaName: "BTS MCO – Diplôme d'État National BAC+2",
      rncpLabel: "RNCP 38362",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/38362/",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "Ministère de l'enseignement supérieur et de la recherche",
      expirationLabel: "Date d'échéance :",
      expirationDate: "31/12/2028",
    },
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre un large panel d'opportunités en France et à l'Étranger pour les titulaires du BTS Management commercial opérationnel.",
    categories: [
      {
        title: "Emplois liés à l'offre de destinations :",
        jobs: [
          { label: "Conseiller voyages", isDarkRed: false },
          { label: "Forfaiteur", isDarkRed: true },
          { label: "Conseiller billetterie", isDarkRed: false },
          { label: "Agent réceptif", isDarkRed: true },
          { label: "Agent d'escale", isDarkRed: true },
          { label: "Guide accompagnateur", isDarkRed: false },
          { label: "Agent d'opérations (ou de planning)", isDarkRed: true },
          { label: "Délégué réceptif (ou correspondant local)", isDarkRed: false },
        ],
        prospects:
          "Perspectives d'évolution de carrière : responsable d'équipe, responsable d'office, responsable d'agence(s), responsable de plateau ou chef de produit, yield manager…",
      },
      {
        title: "Emplois liés à la conception d'offres touristiques par des organismes de tourisme sur un territoire donné :",
        jobs: [
          { label: "Conseiller voyages", isDarkRed: false },
          { label: "Coordinateur tourisme local", isDarkRed: true },
          { label: "Responsable du développement régional digital", isDarkRed: false },
          { label: "Chargé de développement touristique", isDarkRed: true },
        ],
        prospects: "Perspectives d'évolution : responsable/directeur d'accueil, directeur d'office de tourisme (petite structure).",
      },
      {
        title: "Emplois liés à l'hébergement, aux déplacements touristiques et à l'accueil sur des sites de loisirs :",
        jobs: [
          { label: "Technicien d'accueil touristique", isDarkRed: true },
          { label: "Employé de loisirs ou d'attraction", isDarkRed: false },
          { label: "Responsable réception", isDarkRed: true },
          { label: "Agent de ventes et réservations", isDarkRed: false },
        ],
        prospects: "Perspectives d'évolution : directeur (de centre, camping, etc.), responsable de site.",
      },
    ],
  };

  const educationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Bachelor Développement touristique durable et digital", href: "/fr/formations/bachelor-durable", flag: "FR" as const },
      { label: "Bachelor MICE DESIGNER", href: "/fr/formations/bachelor-mice", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality-en", flag: "UK" as const },
      { label: "Bachelor Business & Tourism", href: "/fr/formations/bachelor-business", flag: "UK" as const },
      { label: "De manière générale, les titres de niveau 6", href: "" },
    ],
    jobs: [
      { label: "Chef d'entreprise, créateur ou repreneur d'entreprises", isDarkRed: false },
      { label: "Directeur membre du comité de direction", isDarkRed: true },
      { label: "Directeur fonctionnel (commercial, marketing, juridique, finance, ressources humaines, supply chain, logistique, export)", isDarkRed: false },
      { label: "Directeur d'unités opérationnelles au niveau unitaire, régional, national ou mondial", isDarkRed: true },
      { label: "Directeur de projet / manager de projet", isDarkRed: false },
      { label: "Directeur du développement", isDarkRed: true },
      { label: "Directeur des ventes", isDarkRed: false },
      { label: "Manager des organisations", isDarkRed: true },
      { label: "Manager international", isDarkRed: true },
      { label: "Consultant dans des cabinets de conseil orientés", isDarkRed: false },
      { label: "Directeur général de filiale", isDarkRed: true },
      { label: "Directeur adjoint", isDarkRed: false },
    ],
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
        <section id="objectifs" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              OBJECTIFS
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>
                Le BTS Management Commercial Opérationnel (BTS MCO) a pour objectif de vous permettre de prendre la responsabilité opérationnelle de tout ou partie d&apos;une unité commerciale. Dans un contexte d&apos;activités commerciales de plus en plus digitalisés, le BTS MCO vous apprendra à être plus polyvalent.
              </p>
              <p>
                Le BTS MCO vise à développer la performance et les compétences en marketing et management opérationnel d&apos;unités et d&apos;équipes commerciales. Vous pourrez avoir des missions telles que : l&apos;encadrement d&apos;une unité commerciale, le choix des politiques d&apos;achats et de ventes, la réalisation de la promotion commerciale, la gestion de la relation client, l&apos;identification des besoins commerciaux d&apos;une entreprise, la gestion et l&apos;animation de l&apos;offre de produits et de services.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 leading-tight uppercase">
                Les plus de Grand Sud
              </h2>
              <p className="text-[16px] text-gray-700 leading-relaxed font-medium">
                Avec plus de 20 ans d&apos;expérience dans la préparation des étudiants aux examens du BTS, l&apos;école Grand Sud connaît les clés du succès pour obtenir ce diplôme de niveau 5.
              </p>
            </div>

            <div className="w-full max-w-[835px]">
              <div className="bg-primary-red text-white p-8 flex items-center gap-8 h-[100px]">
                <div className="shrink-0">
                  <GraduationCap size={56} className="text-[#3F3F3F]" strokeWidth={1.5} />
                </div>
                <p className="text-[18px] md:text-[20px] font-bold uppercase tracking-wide leading-tight">
                  100 % de réussite en 2025, pour la deuxième année consécutive
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 items-stretch w-full">
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-r border-b border-white/10">
                  <CheckCircle2 size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Curiosité</p>
                </div>
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02] border-r border-b border-white/10">
                  <Search size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Dynamisme</p>
                </div>
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-b border-white/10">
                  <PenTool size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Aimer le contact client</p>
                </div>
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02] border-r border-white/10">
                  <Users size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Esprit d&apos;équipe</p>
                </div>
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#3F3F3F] transition-transform duration-300 hover:scale-[1.02] border-r border-white/10">
                  <Lightbulb size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Esprit d&apos;initiative</p>
                </div>
                <div className="h-[140px] p-4 flex flex-col items-center justify-center text-center gap-4 bg-[#A93226] transition-transform duration-300 hover:scale-[1.02]">
                  <Briefcase size={32} strokeWidth={1.5} className="text-white/60" />
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">Goût du challenge et de la gestion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram title="PROGRAMME" years={programYears} />
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
