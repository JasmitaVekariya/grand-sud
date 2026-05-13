import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereHospitalityPageFR() {
  const t = {
    title: "Mastère Hospitality Management",
    image: "/assets/Gemini_Generated_Image_euyvcheuyvcheuyv-scaled-e1756721064422.png",
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
          Stratégie Hôtelière de Luxe
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Mastère Hospitality Management est un programme de troisième cycle d'élite pour les étudiants 
            aspirant à des postes de direction dans l'industrie de l'hôtellerie et des centres de villégiature 
            de luxe. Enseigné en anglais, il combine des opérations hôtelières avancées avec une gestion 
            financière stratégique et un positionnement de marque de luxe.
          </p>
        </div>
      </div>
    </main>
  );
}
