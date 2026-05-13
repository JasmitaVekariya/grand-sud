import PageBanner from "@/components/common/PageBanner";

export default function ContinuingEducationPageFR() {
  const t = {
    title: "La formation continue",
    image: "/assets/pexels-silverkblack-30535785-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
              Apprentissage Tout au Long de la Vie
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Nos programmes de formation continue sont conçus pour les professionnels souhaitant monter 
                en compétences, changer de carrière ou rester à jour avec les dernières tendances du secteur. 
                Nous proposons des parcours d'apprentissage flexibles qui respectent vos engagements 
                professionnels tout en offrant un enseignement de haute qualité.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi choisir la formation continue à Grand Sud ?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modules de formation personnalisés adaptés à vos objectifs de carrière spécifiques.</li>
                <li>Enseignement par des professionnels chevronnés ayant une expertise concrète.</li>
                <li>Options d'horaires flexibles pour s'adapter aux professionnels en activité.</li>
                <li>Accès à un vaste réseau professionnel et à des ressources de développement de carrière.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions Entreprises</h3>
              <p className="text-gray-600 mb-6">
                Vous recherchez des solutions de formation pour toute votre équipe ? Nous proposons des 
                programmes sur mesure conçus pour répondre aux besoins spécifiques de votre entreprise.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                DEMANDER UN DEVIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
