import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereBusinessPageFR() {
  const t = {
    title: "Mastère Business & Tourism",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "Langue de la formation", value: "anglais" },
      { label: "Niveau", value: "7 (bac+5)" },
      { label: "Statut", value: "étudiant" },
      { label: "Rythme", value: "initial" },
      { label: "Durée", value: "2 ans – 1 204 heures" },
    ],
    logos: ["/assets/logo-france-competences.png"]
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
          Leadership Global en Tourisme
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Mastère Business & Tourism est notre programme de deuxième cycle de premier plan pour les 
            futurs leaders mondiaux. Enseigné entièrement en anglais, il se concentre sur la gestion 
            stratégique de haut niveau, l'expansion commerciale internationale et les modèles 
            touristiques innovants pour les marchés du luxe et du voyage mondial.
          </p>
        </div>
      </div>
    </main>
  );
}
