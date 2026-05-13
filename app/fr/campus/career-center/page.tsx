import PageBanner from "@/components/common/PageBanner";

export default function CareerCenterPageFR() {
  const t = {
    title: "E-campus et career center",
    image: "/assets/pexels-marta-klement-636760-1438081-scaled.jpg"
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
              Votre Tremplin Professionnel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                L'E-campus et le Career Center de Grand Sud offrent aux étudiants les outils numériques 
                et l'accompagnement professionnel nécessaires pour réussir leurs études et lancer leur 
                carrière dans l'industrie du tourisme. Des supports de cours en ligne aux offres de 
                stages exclusives, tout est conçu pour faciliter votre insertion professionnelle.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Ce que propose le Career Center :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Coaching personnalisé pour les CV et lettres de motivation.</li>
                <li>Accès à un réseau de plus de 1 000 entreprises partenaires.</li>
                <li>Ateliers réguliers sur les techniques d'entretien et le branding professionnel.</li>
                <li>Accès direct à des offres exclusives de stages et d'emplois.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accédez à votre espace</h3>
              <p className="text-gray-600 mb-6">
                Connectez-vous à l'E-campus pour accéder à vos cours ou au Career Center pour gérer vos 
                opportunités professionnelles.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-4 uppercase tracking-wider">
                Connexion E-campus
              </button>
              <button className="w-full border-2 border-primary-red text-primary-red py-3 rounded-lg font-bold hover:bg-red-50 transition-colors uppercase tracking-wider">
                Portail Career Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
