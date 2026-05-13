import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorHospitalityENPageFR() {
  const t = {
    title: "Bachelor Hospitality Management",
    image: "/assets/Gemini_Generated_Image_tkqn4otkqn4otkqn-scaled-e1756664070201.png",
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
          Excellence Hôtelière Internationale
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Bachelor Hospitality Management en 3 ans est un programme international intensif enseigné 
            entièrement en anglais. Il est conçu pour offrir aux étudiants une compréhension complète 
            du secteur de l'hôtellerie de luxe, combinant la théorie des affaires avec une expérience 
            pratique de la gestion.
          </p>
        </div>
      </div>
    </main>
  );
}
