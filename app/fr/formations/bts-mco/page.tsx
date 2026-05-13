import CourseBanner from "@/components/courses/CourseBanner";

export default function BTSMCOPageFR() {
  const t = {
    title: "BTS MCO",
    image: "/assets/Gemini_Generated_Image_99uv1u99uv1u99uv-e1756911385254.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "5 (bac+2)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaine en entreprise" },
      { label: "Durée", value: "2 ans – 1350 heures" },
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
          Objectifs
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Le BTS MCO (Management Commercial Opérationnel) a pour but de former les futurs managers capables de 
            gérer une unité commerciale ou une partie de celle-ci. Cette formation apporte des bases solides en 
            gestion, marketing et relation commerciale.
          </p>
        </div>
      </div>
    </main>
  );
}
