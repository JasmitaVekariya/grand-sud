import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereProjetsPageFR() {
  const t = {
    title: "Mastere in Event and Tourism Project Management",
    image: "/assets/Gemini_Generated_Image_j1wcudj1wcudj1wc-scaled-e1756654688857.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "7 (bac+5)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/3 semaine en entreprise" },
      { label: "Durée", value: "2 ans – 1148 heures" },
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
          Management Supérieur et Leadership
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le Mastère Manager de projets événementiels et touristiques est un programme stratégique conçu 
            pour les futurs leaders de l'industrie touristique mondiale. Il se concentre sur la gestion de 
            projets d'envergure, le marketing stratégique et le développement durable dans les secteurs 
            du MICE et du voyage de luxe.
          </p>
        </div>
      </div>
    </main>
  );
}
