export const navigationData = {
  fr: [
    {
      title: "Ecole",
      href: "/fr/lecole",
      megaMenu: {
        type: "school",
        leftLinks: [
          { label: "Histoire", href: "/fr/lecole/histoire" },
          { label: "Engagements", href: "/fr/lecole/engagements" },
          { label: "International", href: "/fr/lecole/international" },
        ],
        rightSections: [
          { title: "CAMPUS", icon: "map-pin", image: "/assets/campus-toulouse.jpg", subtext: "Toulouse-Labège", href: "/fr/campus/toulouse-labege" },
          { title: "CHIFFRES CLÉS", icon: "bar-chart", href: "/fr/lecole/chiffres-cles" },
          { title: "NOUS RENCONTRER", icon: "calendar", href: "/fr/lecole/rencontrer" },
        ],
      },
    },
    {
      title: "Formations",
      href: "/fr/formations",
      megaMenu: {
        type: "courses",
        description: "Grand Sud Formation se distingue par son approche personnalisée et son engagement à faire grandir chaque étudiant, dans un environnement stimulant et bienveillant.",
        button: { label: "CANDIDATER", href: "/fr/candidater" },
        columns: [
          {
            title: "PROGRAMMES EN FRANÇAIS",
            links: [
              { label: "BTS Tourisme", href: "/fr/formations/bts-tourisme" },
              { label: "BTS MCO", href: "/fr/formations/bts-mco" },
              { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality" },
              { label: "Bachelor MICE Designer", href: "/fr/formations/bachelor-mice" },
              { label: "Bachelor Tourisme Durable", href: "/fr/formations/bachelor-durable" },
              { label: "Mastère Manager de projets", href: "/fr/formations/mastere-projets" },
            ],
            extra: { title: "COURS INTENSIFS", links: [{ label: "GDS Amadeus", href: "/fr/formations/amadeus" }] }
          },
          {
            title: "PROGRAMMES EN ANGLAIS",
            links: [
              { label: "Bachelor Business & Tourism", href: "/fr/formations/bachelor-business" },
              { label: "Bachelor Hospitality Management", href: "/fr/formations/bachelor-hospitality-en" },
              { label: "Bachelor IT & Tourism", href: "/fr/formations/bachelor-it" },
              { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business" },
              { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality" },
              { label: "Mastère IT & Tourism", href: "/fr/formations/mastere-it" },
            ]
          },
          {
            title: "MODALITÉS",
            links: [
              { label: "Alternance", href: "/fr/formations/alternance" },
              { label: "Initial", href: "/fr/formations/initial" },
              { label: "Formation continue", href: "/fr/formations/continue" },
              { label: "VAE", href: "/fr/formations/vae" },
            ]
          }
        ]
      }
    },
    {
      title: "Vie étudiante",
      href: "/fr/vie-etudiante",
      megaMenu: {
        type: "student-life",
        leftSection: {
          title: "CAMPUS",
          image: "/assets/campus-toulouse.jpg",
          subtext: "Toulouse-Labège",
          href: "/fr/campus/toulouse-labege",
          links: [
            { label: "Le campus et ses alentours", icon: "map", href: "/fr/campus/alentours" },
            { label: "Se loger autour du campus", icon: "home", href: "/fr/campus/logement" },
            { label: "La vie à Toulouse", icon: "map-signs", href: "/fr/campus/toulouse" },
          ]
        },
        rightLinks: [
          { label: "Vie associative", href: "/fr/campus/associatif" },
          { label: "E-campus et career center", href: "/fr/campus/career-center" },
        ],
        bottomCards: [
          { title: "ALTERNANCE", image: "/assets/card-alternance.jpg", href: "/fr/financement/alternance" },
          { title: "JOBS ÉTUDIANTS", image: "/assets/card-jobs.jpg", href: "/fr/financement/jobs" },
          { title: "AIDES FINANCIÈRES", image: "/assets/card-aides.jpg", href: "/fr/financement/aides" },
        ]
      }
    },
    {
      title: "Entreprise",
      href: "/fr/entreprise",
      megaMenu: {
        type: "business",
        links: [
          { label: "Formez vos équipes", href: "/fr/business/formation" },
          { label: "Recrutez vos talents :", href: "/fr/business/recrutement" },
        ],
        cards: [
          { title: "STAGIAIRE", image: "/assets/card-stagiaire.jpg", href: "/fr/business/stagiaire" },
          { title: "ALTERNANT", image: "/assets/card-alternant.jpg", href: "/fr/business/alternant" },
          { title: "DIPLÔMÉ", image: "/assets/card-alumni.jpg", href: "/fr/business/diplome" },
        ],
        rightBox: { title: "ESPACE ENTREPRISE", icon: "briefcase", href: "/fr/welcome/business/espace-dedie-aux-entreprises" }
      }
    }
  ],
  en: [
    {
      title: "School",
      href: "/en/school",
      megaMenu: {
        type: "school",
        leftLinks: [
          { label: "History", href: "/en/school/history" },
          { label: "Commitments", href: "/en/school/commitments" },
          { label: "International", href: "/en/school/international" },
        ],
        rightSections: [
          { title: "CAMPUS", icon: "map-pin", image: "/assets/campus-toulouse.jpg", subtext: "Toulouse-Labège", href: "/en/campus/toulouse-labege" },
          { title: "KEY FIGURES", icon: "bar-chart", href: "/en/school/key-figures" },
          { title: "MEET US", icon: "calendar", href: "/en/school/meetus" },
        ],
      },
    },
    {
      title: "Courses",
      href: "/en/courses",
      megaMenu: {
        type: "courses",
        description: "Grand Sud Formation stands out for its personalized approach and commitment to helping each student grow in a stimulating and supportive environment.",
        button: { label: "APPLY", href: "/en/apply" },
        columns: [
          {
            title: "COURSES IN FRENCH",
            links: [
              { label: "BTS Tourism", href: "/en/courses/bts-tourism" },
              { label: "BTS MCO", href: "/en/courses/bts-mco" },
              { label: "Bachelor Hospitality Management", href: "/en/courses/bachelor-hospitality" },
              { label: "Bachelor MICE Designer", href: "/en/courses/bachelor-mice" },
              { label: "Bachelor Sustainable and Digital Tourism Development", href: "/en/courses/bachelor-sustainable" },
              { label: "Mastere in Event and Tourism Project Management", href: "/en/courses/mastere-tourism" },
            ],
            extra: { title: "Intensive courses", links: [{ label: "GDS Amadeus", href: "/en/courses/amadeus" }] }
          },
          {
            title: "COURSES IN ENGLISH",
            links: [
              { label: "Bachelor Business & Tourism", href: "/en/courses/bachelor-business" },
              { label: "Bachelor Hospitality Management", href: "/en/courses/bachelor-hospitality-en" },
              { label: "Bachelor IT & Tourism", href: "/en/courses/bachelor-it" },
              { label: "Mastère Business & Tourism", href: "/en/courses/mastere-business" },
              { label: "Mastère Hospitality Management", href: "/en/courses/mastere-hospitality" },
              { label: "Mastère IT & Tourism", href: "/en/courses/mastere-it" },
            ]
          },
          {
            title: "TRAINING OPTIONS",
            links: [
              { label: "Work study program", href: "/en/courses/work-study" },
              { label: "Initial training", href: "/en/courses/initial" },
              { label: "Continuing education", href: "/en/courses/continuing" },
              { label: "Validation of Acquired Experience (VAE)", href: "/en/courses/vae" },
            ]
          }
        ]
      }
    },
    {
      title: "Student Life",
      href: "/en/student-life",
      megaMenu: {
        type: "student-life",
        leftSection: {
          title: "CAMPUS",
          image: "/assets/campus-toulouse.jpg",
          subtext: "Toulouse-Labège",
          href: "/en/campus/toulouse-labege",
          links: [
            { label: "The campus and its surroundings", icon: "map", href: "/en/campus/surroundings" },
            { label: "Housing around the campus", icon: "home", href: "/en/campus/housing" },
            { label: "Living in Toulouse", icon: "map-signs", href: "/en/campus/toulouse" },
          ]
        },
        rightLinks: [
          { label: "Community Life", href: "/en/campus/community-life" },
          { label: "E-campus and career center", href: "/en/campus/career-center" },
        ],
        bottomCards: [
          { title: "APPRENTICESHIP", image: "/assets/card-alternance.jpg", href: "/en/financing/apprenticeship" },
          { title: "STUDENT JOBS", image: "/assets/card-jobs.jpg", href: "/en/financing/jobs" },
          { title: "FINANCIAL AIDS", image: "/assets/card-aides.jpg", href: "/en/financing/aids" },
        ]
      }
    },
    {
      title: "Businesses",
      href: "/en/business",
      megaMenu: {
        type: "business",
        links: [
          { label: "Train your teams", href: "/en/business/training" },
          { label: "Hire your talents :", href: "/en/business/recruitment" },
        ],
        cards: [
          { title: "INTERN", image: "/assets/card-stagiaire.jpg", href: "/en/business/intern" },
          { title: "APPRENTICE", image: "/assets/card-alternant.jpg", href: "/en/business/apprentice" },
          { title: "GRADUATE", image: "/assets/card-alumni.jpg", href: "/en/business/graduate" },
        ],
        rightBox: { title: "BUSINESS SPACE", icon: "briefcase", href: "/en/welcome/business/dedicated-page-for-businesses" }
      }
    }
  ],
};
