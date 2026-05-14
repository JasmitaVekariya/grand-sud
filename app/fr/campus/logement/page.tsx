import PageBanner from "@/components/common/PageBanner";

export default function HousingPageFR() {
  const t = {
    title: "Se loger autour de Toulouse-Labège",
    image: "/assets/pexels-harriet-b-392993362-14768387-min-scaled.jpg"
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
              Trouvez Votre Foyer à Toulouse
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Trouver le bon logement est une priorité au début de vos études. Toulouse-Labège 
                offre une large gamme d'options, des résidences étudiantes modernes aux locations 
                privées. À Grand Sud, nous mettons à votre disposition les ressources et les 
                partenariats pour vous aider à trouver un lieu de vie confortable à proximité du campus.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Options de logement :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Résidences étudiantes partenaires avec tarifs exclusifs.</li>
                <li>Annonces de locations privées via notre plateforme interne.</li>
                <li>Opportunités de colocation avec d'autres étudiants de Grand Sud.</li>
                <li>Assistance pour les démarches administratives (APL, Visale, etc.).</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guide du Logement</h3>
              <p className="text-gray-600 mb-6">
                Téléchargez notre guide complet du logement à Toulouse-Labège, incluant les adresses 
                partenaires et des conseils pratiques.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Télécharger le guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
