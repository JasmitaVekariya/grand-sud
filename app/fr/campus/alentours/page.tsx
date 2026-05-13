import PageBanner from "@/components/common/PageBanner";

export default function SurroundingsPageFR() {
  const t = {
    title: "Le campus Toulouse-Labège et ses environs",
    image: "/assets/campus-toulouse.jpg"
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
              Un Environnement d'Apprentissage Moderne
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Situé au cœur du pôle technologique Labège Enova, le campus Grand Sud offre aux 
                étudiants un cadre moderne et professionnel. Entouré d'entreprises technologiques de 
                premier plan, de centres de recherche et de commodités variées, notre campus est 
                parfaitement intégré dans l'une des zones économiques les plus dynamiques de Toulouse.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">La vie à Labège Enova :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accès direct aux transports en commun (Métro, Bus, et bientôt la 3ème ligne).</li>
                <li>Proximité du centre commercial Labège 2 et de nombreux restaurants.</li>
                <li>Espaces verts et zones de loisirs pour les pauses et les rencontres étudiantes.</li>
                <li>Une atmosphère sûre et professionnelle idéale pour la concentration et le réseau.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visitez-nous</h3>
              <p className="text-gray-600 mb-6">
                Venez découvrir notre campus lors de notre prochaine Journée Portes Ouvertes ou 
                planifiez une visite privée.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Réserver une visite
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
