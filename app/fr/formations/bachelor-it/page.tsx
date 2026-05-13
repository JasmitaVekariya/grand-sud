import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorITPageFR() {
  const t = {
    title: "Bachelor IT & Tourism",
    image: "/assets/Gemini_Generated_Image_bvjg5ybvjg5ybvjg-scaled-e1756665675348.png",
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
          La Technologie au Service du Tourisme
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Bachelor IT & Tourism est un programme unique qui fait le pont entre la technologie numérique 
            et l'industrie du voyage. Enseigné en anglais, il prépare les étudiants à diriger des projets 
            de transformation numérique, à gérer les données touristiques et à développer des solutions 
            technologiques innovantes pour le marché mondial du voyage.
          </p>
        </div>
      </div>
    </main>
  );
}
