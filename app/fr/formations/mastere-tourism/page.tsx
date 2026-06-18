"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function MastereTourismPageFR() {
  const bannerData = {
    title: "MASTÈRE MANAGER EN STRATÉGIES TOURISTIQUES",
    image: "/assets/Gemini_Generated_Image_j1wcudj1wcudj1wc-scaled-e1756654688857.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "7 (bac+5)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d'emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/3 semaines en entreprise" },
      { label: "Durée", value: "2 ans – 1 148 heures" },
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
  ];

  const advantagesData = {
    title: "Les plus de Grand Sud",
    subtitle: "Avec plus de 30 ans d'expérience dans la préparation de nombreux titres, l'école Grand Sud connaît les clefs du succès pour réussir ce titre de niveau 7.",
    advantages: [
      { icon: CheckCircle2, text: "une expertise 100% tourisme depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement à la recherche d'alternance ou de stage", isDarkRed: true },
      { icon: PenTool, text: "des examens blancs pour la préparation du titre", isDarkRed: false },
      { icon: Users, text: "workshop avec des partenaires et des problématiques réels", isDarkRed: true },
      { icon: Briefcase, text: "des cas réels d'entreprise étudiés en cours", isDarkRed: false },
      { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1",
      hours: "574 heures",
      content: [
        {
          unit: "Elaborer une offre de produits événementiels ou touristiques responsable",
          items: [
            { label: "", description: "Organiser un système de veille stratégique, en identifiant des axes de recherche, notamment en terme d'innovation issue du marché de l'événementiel et du tourisme, de conformité légale et réglementaire, de développement durable, en identifiant des sources fiables, en automatisant la collecte d'information, notamment en exploitant des outils d'intelligence artificielle générative, afin de disposer de données fiables, actualisées et complémentaires concernant des sujets ciblés pour une analyse proactive des tendances." },
            { label: "", description: "Analyser les informations collectées sur le marché, les innovations événementielles et touristiques, les évolutions réglementaires et normatives, ainsi que les comportements et attentes des différents segments de consommateurs, en exploitant des données fiables et pertinentes, afin de déterminer les opportunités d'intégration de nouveaux formats et concepts, d'assurer la conformité légale, éthique et environnementale, et d'aligner l'offre produits/services avec les exigences clients, y compris les besoins d'accessibilité et de mobilité des personnes en situation de handicap." },
            { label: "", description: "Analyser la demande d'un commanditaire, en explorant le contexte et les différentes dimensions de son projet, en réalisant un diagnostic stratégique, territorial et culturel de son positionnement, en intégrant les dimensions internes (offre) et environnementales (marché, évolutions règlementaires, pratiques et attentes de consommation…), en qualifiant les menaces et opportunités portées par son marché, au regard des évolutions socio-économiques et des gisements de croissance et d'innovation, afin d'identifier ses attentes, objectifs, contraintes et valeurs." },
            { label: "", description: "Projeter une solution de produits événementiels et touristiques responsables, en élaborant un format, un contenu éditorial et un scénario répondant aux besoins du commanditaire et tenant compte de ses contraintes, en prévoyant l'application de règles et principes (accessibilité, recyclage des consommables, gestion des déchets, fournisseurs locaux, circuits courts…) respectueux de l'environnement, afin de formuler une proposition alignée avec ses moyens, aspirations et objectifs." },
            { label: "", description: "Définir la cible d'une offre renouvelée de produits événementiels ou touristiques, en caractérisant ses leviers de motivation, aspirations et capacités économiques, à partir d'analyses de marché et de données clients, sous la forme de persona(e), afin de dessiner une offre adaptée et répondant aux attentes du marché." },
            { label: "", description: "Établir ou valider le cahier des charges de produits événementiels ou touristiques, en définissant ses caractéristiques technique, tarifaire, de format et de contenu, en s'assurant de la complétude, de la cohérence avec les objectifs stratégiques et de la qualité du document, afin de garantir un cadrage optimal de la phase opérationnelle et la réussite de l'offre." },
            { label: "", description: "Assurer la qualité de l'offre de produits événementiels ou touristiques, en préconisant son alignement avec des référentiels et/ou labels qualité, en évaluant leur valeur ajoutée et leur adéquation avec la stratégie, les valeurs de l'entreprise et les attentes de sa clientèle cible, afin d'accroitre l'attractivité de l'offre et la visibilité des engagements en matière d'inclusion et de développement durable." },
            { label: "", description: "Évaluer la faisabilité et l'opportunité d'une offre de produits événementiels ou touristiques, en estimant ses coûts de production et mise en marché, en tenant compte du cahier des charges, du positionnement de l'entreprise, de ses objectifs stratégiques et des menaces et opportunités du marché, afin de fournir un support de décision pour son développement." },
          ]
        },
        {
          unit: "Piloter la stratégie d'achat des composantes de produits événementiels et touristiques",
          items: [
            { label: "", description: "Élaborer une stratégie d'achats de biens et services nécessaires à la réalisation de produits événementiels ou de tourisme, en s'appuyant sur la définition des besoins générés par sa production et sa mise en œuvre et en établissant des critères et exigences associant les dimensions qualité, prix, délai et RSE, afin d'optimiser la constitution d'un portefeuille de partenaires et prestataires contribuant à la délivrance de son offre." },
            { label: "", description: "Définir les modalités de consultation des fournisseurs potentiels, en tenant compte des éventuelles obligations légales découlant du contexte du marché, afin d'obtenir un panel de propositions suffisant pour une mise en concurrence." },
            { label: "", description: "Identifier les prestataires et fournisseurs en capacité de satisfaire les besoins générés par la production et la délivrance de produits événementiels, de tourisme et de voyage, en mettant en œuvre les modalités de recherche appropriées et en collectant des informations ciblées les concernant, afin de disposer des éléments nécessaires à une sélection éclairée et objective." },
            { label: "", description: "Évaluer l'offre produit/service des prestataires et fournisseurs identifiés, en vérifiant leur fiabilité, la capacité de leurs ressources humaines, techniques et financières, et l'alignement de leur gamme et niveau de prestation avec le positionnement de l'organisation et les exigences de ses clients, afin de sélectionner ceux présentant le meilleur rapport qualité/prix/RSE." },
            { label: "", description: "Conduire la négociation avec les prestataires et fournisseurs sélectionnés, en menant les discussions sur les conditions de délivrance des produits/services attendus, afin de parvenir à un accord profitable concernant la nature, le tarif et le calendrier de leur(s) intervention(s)." },
            { label: "", description: "Contractualiser un accord commercial avec les prestataires et fournisseurs sélectionnés, en supervisant la traduction des négociations en clauses explicites, et en vérifiant la légalité, la conformité et l'intégration éventuelle de critères qualité et RSE, afin de sécuriser la transaction et l'engagement mutuel des parties." },
            { label: "", description: "Concevoir un dispositif d'évaluation des prestataire et fournisseurs intervenant dans la production et la délivrance de produits événementiels, de tourisme et de voyage, en établissant les indicateurs qualifiant leurs prestations selon des critères de qualité, de conformité, de respect des délais et de RSE, afin de mesurer objectivement leur performance et d'identifier leurs éventuelles marges de progression." },
            { label: "", description: "Construire un plan de progrès associant les fournisseurs intervenant dans la production et la délivrance de produits événementiels et de tourisme, en déterminant les mesures correctives permettant de remédier aux insuffisances repérées, et en associant des partenariats avec acteurs locaux afin d'améliorer leurs prestations et de contribuer à la délivrance d'une offre parfaitement alignée avec ses engagements qualité et RSE." },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2",
      hours: "574 heures",
      content: [
        {
          unit: "Manager le développement d'une offre de produits événementiels et touristiques",
          items: [
            { label: "", description: "Planifier la réalisation du produit événementiel et de tourisme, en structurant les actions à mener et en définissant les échéances et en coordonnant les parties prenantes, afin d'assurer l'ordonnancement et la maîtrise temporelle des opérations." },
            { label: "", description: "Estimer le budget de réalisation du produit événementiel et de tourisme, en évaluant de manière réaliste tous les postes de dépense et en utilisant un outil avec des indicateurs de suivi, afin d'assurer la maîtrise des coûts." },
            { label: "", description: "Constituer une équipe projet dédiée à la réalisation de produits événementiels et de tourisme, en identifiant les compétences et profils nécessaires, en dimensionnant les ressources humaines de manière qualitative et quantitative, en définissant clairement les rôles, périmètres d'intervention et responsabilités de chaque collaborateur, et en mettant en place les conditions organisationnelles et adaptations pour l'inclusion des collaborateurs en situation de handicap, afin d'assurer une organisation optimale, complémentaire et performante." },
            { label: "", description: "Établir les modalités de travail et de partage d'information dans un contexte d'hybridation (présentiel/distanciel), en définissant les flux d'information et en intégrant les outils collaboratifs favorisant la mutualisation des informations et ressources, afin d'optimiser le fonctionnement du projet et la réalisation des opérations." },
            { label: "", description: "Encadrer les équipes impliquées dans la mise en œuvre opérationnelle de produits événementiels et de tourisme en adoptant un mode de management favorisant la coopération, la solidarité et l'autonomie des collaborateurs, afin de maintenir la cohésion et la motivation du collectif, tout en prévenant les risques psycho-sociaux associés à un contexte de distanciel." },
            { label: "", description: "Élaborer et suivre les outils de pilotage de la mise en œuvre du produit événementiel et de tourisme, en définissant les indicateurs de contrôle permettant d'en suivre la réalisation, afin de s'assurer du respect et de l'atteinte des objectifs établis en termes de délai, de coût et de qualité." },
            { label: "", description: "Assurer le pilotage budgétaire de la mise en œuvre du produit événementiel et de tourisme, en contrôlant en continu l'allocation des ressources et en opérant, le cas échéant, les arbitrages liés aux imprévus, afin d'assurer la viabilité et la rentabilité économique du projet." },
            { label: "", description: "Vérifier la conformité des conditions de mise en œuvre du produit événementiel et de tourisme sur les plans logistique, accessibilité, sécurité et développement durable, en s'assurant du respect des exigences du cahiers des charges et des obligations légales et règlementaires et en anticipant les écarts, afin de garantir le bon déroulement des opérations." },
          ]
        },
        {
          unit: "Développer la stratégie commerciale d'une offre de produits événementiels et touristiques",
          items: [
            { label: "", description: "Élaborer une stratégie de commercialisation d'une offre de produits événementiels et touristiques, en respectant la politique de l'entreprise et en tenant compte des spécificités du marché, en mobilisant des outils d'analyse, des outils digitaux et financiers, et en impliquant les parties prenantes internes et externes, afin d'assurer la viabilité et la croissance de l'activité." },
            { label: "", description: "Sélectionner les actions de développement commercial à appliquer, en évaluant leur faisabilité technique et financière et en estimant leur retour sur investissement, afin de structurer un plan d'action budgétisé et planifié, à présenter à la direction pour validation." },
            { label: "", description: "Identifier les relais et leviers de diffusion d'informations mobilisables sur les canaux phygitaux concernant l'offre de produits événementiels, de tourisme et de voyage, en évaluant les plus adéquats et les mieux dimensionnés compte tenu de la clientèle cible et des moyens budgétaires à disposition, afin d'assurer une couverture de sa mise en œuvre contribuant à l'optimisation de son aura et de son retentissement." },
            { label: "", description: "Définir la stratégie de communication associée à la mise en marché de l'offre de produits événementiels et de tourisme, en déterminant les canaux, formats et types de contenus à mobiliser, afin de contribuer à l'optimisation de son développement commercial." },
            { label: "", description: "Structurer un dispositif multicanal d'écoute des clients de l'offre touristique/événementielle, en déterminant les informations à faire remonter et les modalités et outils associés, afin de suivre en continu le niveau de satisfaction de ses clients." },
            { label: "", description: "Évaluer la performance économique et les retombées de l'offre de produits événementiels et de tourisme, en mettant en place et en exploitant des indicateurs fiables, objectifs et digitalisés, afin de vérifier leur rentabilité et l'atteinte des objectifs commerciaux." },
            { label: "", description: "Mettre en œuvre une stratégie tarifaire adaptée, en s'appuyant sur l'analyse continue des indicateurs du cycle de vie des produits événementiels et de tourisme, afin d'optimiser leur attractivité, leurs ventes et leur rentabilité." },
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
        "Bac+3 (ou Bac+4 pour une admission en seconde année du Mastère)",
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
      initialPrice: "Année 1 : 7 500 €\nAnnée 2 : 7 500 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "Année 1 : 8 870 €\nAnnée 2 : 8 870 €",
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
      certificationTitle: "Certification",
      diplomaName: "Titre de niveau bac +5",
      rncpLabel: "RNCP41997",
      rncpLink: "",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "",
      expirationLabel: "",
      expirationDate: "",
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre un large panel d'opportunités <strong>en France et à l'Étranger</strong> pour les titulaires du Mastère Manager en Stratégies Touristiques",
    categories: [
      {
        jobs: [
          { label: "Chef de projet événementiel", isDarkRed: false },
          { label: "Responsable événementiel", isDarkRed: true },
          { label: "Event Manager", isDarkRed: false },
          { label: "Travel Manager", isDarkRed: true },
          { label: "Responsable commercial", isDarkRed: true },
          { label: "Responsable grand compte", isDarkRed: false },
          { label: "Account Manager", isDarkRed: true },
          { label: "Directeur de service, département, unité, d'agence", isDarkRed: false },
        ]
      }
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
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Le Mastère est un diplôme de niveau Bac+5 (RNCP niveau 7) qui est solides et directement utiles en entreprise. Cette formation prépare les apprenants à comprendre des besoins concrets, à proposer des solutions adaptées et à piloter des projets de manière efficace, de leur conception jusqu&apos;à leur mise en œuvre. Elle met l&apos;accent sur une approche très opérationnelle, avec des compétences en analyse, en organisation et en gestion de projet, tout en développant des qualités essentielles comme la communication, l&apos;autonomie et le travail en équipe. Grâce à des méthodes d&apos;apprentissage basées sur des cas réels et des mises en situation, les participants acquièrent des réflexes professionnels rapidement mobilisables. À l&apos;issue du parcours, ils sont capables d&apos;évoluer sur des postes à responsabilité dans des environnements variés, avec une certification qui valorise leur profil et facilite leur insertion ou leur évolution professionnelle</p>
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

        <p className="text-[14px] text-gray-400 italic text-right pt-8">
          Dernière mise à jour le 10 avril 2026 à 09h47
        </p>
      </CourseDetailLayout>
    </main>
  );
}
