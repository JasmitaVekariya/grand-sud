import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorDurablePageFR() {
  const t = {
    title: "BACHELOR SUSTAINABLE AND DIGITAL TOURISM DEVELOPMENT",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png",
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaine en entreprise" },
      { label: "Durée", value: "1 an – 518 heures" },
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
          Innovation & Éco-responsabilité
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Ce programme de Bachelor se concentre sur le double défi de l'industrie touristique moderne : 
            mettre en œuvre des pratiques durables tout en tirant parti de l'innovation numérique pour 
            améliorer l'expérience du voyageur et l'efficacité opérationnelle.
          </p>
        </div>
      </div>
    </main>
  );
}
