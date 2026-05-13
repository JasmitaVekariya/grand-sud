import CourseBanner from "@/components/courses/CourseBanner";

export default function AmadeusPageFR() {
  const t = {
    title: "GDS AMADEUS",
    image: "/assets/Gemini_Generated_Image_zhhzwzhhzwzhhzwz-scaled.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "–" },
      { label: "Statut", value: "étudiant, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial" },
      { label: "Durée", value: "–" },
    ],
    logos: []
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Formation Intensive GDS
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Maîtrisez le premier système de distribution mondiale. Notre formation Amadeus offre 
            une expérience pratique et concrète dans la réservation de vols, d'hôtels et de locations 
            de voitures, essentielle pour tout professionnel de l'industrie du voyage et du tourisme.
          </p>
        </div>
      </div>
    </main>
  );
}
