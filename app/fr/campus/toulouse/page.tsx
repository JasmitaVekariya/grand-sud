import PageBanner from "@/components/common/PageBanner";

export default function LivingInToulousePageFR() {
  const t = {
    title: "Vivre à Toulouse",
    image: "/assets/pexels-tbd-traveller-2149583744-30753255-min-scaled.jpg"
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
              Découvrez la Ville Rose
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Régulièrement élue parmi les meilleures villes étudiantes de France, Toulouse offre 
                une qualité de vie exceptionnelle. Surnommée la "Ville Rose" pour son architecture en 
                terre cuite, elle allie charme historique et haute technologie. De sa scène culturelle 
                vibrante à sa gastronomie mondialement connue, vivre à Toulouse est une aventure en soi.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">L'art de vivre toulousain :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un riche patrimoine historique avec le Capitole et la Basilique Saint-Sernin.</li>
                <li>Une vie nocturne étudiante dynamique autour de la Place Saint-Pierre.</li>
                <li>De superbes balades le long de la Garonne et du Canal du Midi.</li>
                <li>Un hub européen pour l'aéronautique et l'industrie spatiale.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explorez Toulouse</h3>
              <p className="text-gray-600 mb-6">
                Découvrez les meilleurs spots, les événements culturels et les réductions étudiantes 
                disponibles dans la métropole.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Guide de la Vie Étudiante
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
