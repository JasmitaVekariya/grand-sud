import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorBusinessPageFR() {
  const t = {
    title: "Bachelor Business & Tourism",
    image: "/assets/Gemini_Generated_Image_moyjrqmoyjrqmoyj-scaled-e1756663814308.png",
    details: [
      { label: "Langue de la formation", value: "anglais" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant" },
      { label: "Rythme", value: "initial" },
      { label: "Durée", value: "3 ans – 1806 heures" },
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
          Commerce International & Tourisme
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Bachelor Business & Tourism est notre programme international phare, enseigné entièrement en anglais. 
            Il combine une formation rigoureuse en gestion d'entreprise avec des connaissances spécialisées 
            en tourisme, préparant les étudiants à des carrières mondiales dans la plus grande industrie du monde.
          </p>
        </div>
      </div>
    </main>
  );
}
