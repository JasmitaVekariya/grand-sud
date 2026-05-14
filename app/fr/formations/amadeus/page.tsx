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
      
      <div className="max-w-[1440px] mx-auto px-6 py-16 text-center border-t border-b border-gray-100">
        <p className="text-lg font-medium text-gray-900">
          La formation GDS Amadeus sera de retour très prochainement dans un format mis à jour, restez à l'écoute pour plus d'informations !
        </p>
      </div>
    </main>
  );
}
