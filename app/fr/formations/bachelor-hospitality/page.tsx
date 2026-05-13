import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorHospitalityPageFR() {
  const t = {
    title: "Bachelor Hospitality Management",
    image: "/assets/Gemini_Generated_Image_d6oi0gd6oi0gd6oi-scaled-e1756648261219.png",
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
          Présentation du programme
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Bachelor Hospitality Management est un programme de haut niveau conçu pour les étudiants souhaitant 
            poursuivre une carrière dans l'industrie hôtelière internationale. Il couvre tous les aspects de la 
            gestion hôtelière, des opérations au marketing stratégique et aux ressources humaines.
          </p>
        </div>
      </div>
    </main>
  );
}
