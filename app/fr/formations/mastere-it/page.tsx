import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereITPageFR() {
  const t = {
    title: "Mastère IT & Tourism",
    image: "/assets/Gemini_Generated_Image_o2x5nlo2x5nlo2x5-scaled-e1756724790741.png",
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
          Leadership de la Transformation Digitale
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Mastère IT & Tourism est notre programme technologique le plus avancé, conçu pour les futurs 
            CTO et directeurs de stratégie digitale dans l'industrie du voyage. Enseigné en anglais, il couvre 
            l'architecture système complexe, l'analyse des big data pour le tourisme et la mise en œuvre de 
            solutions basées sur l'IA dans les plateformes de voyage mondiales.
          </p>
        </div>
      </div>
    </main>
  );
}
