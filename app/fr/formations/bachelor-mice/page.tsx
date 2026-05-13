import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorMICEPageFR() {
  const t = {
    title: "Bachelor MICE Designer",
    image: "/assets/Gemini_Generated_Image_gl11shgl11shgl11-scaled-e1756651535869.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaine en entreprise" },
      { label: "Durée", value: "1 an – 560 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
    logos: ["/assets/logo-france-competences.png"]
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        additionalInfo={t.additionalInfo}
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Conception et Gestion Événementielle
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le programme Bachelor MICE Designer (Meetings, Incentives, Conferences, and Exhibitions) est 
            spécifiquement conçu pour les personnes créatives et organisées souhaitant maîtriser l'art de 
            la production événementielle et de la gestion du tourisme professionnel.
          </p>
        </div>
      </div>
    </main>
  );
}
