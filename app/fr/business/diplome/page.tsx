import PageBanner from "@/components/common/PageBanner";

export default function HireGraduatePageFR() {
  const t = {
    title: "Recrutez un diplômé de Grand Sud",
    image: "/assets/pexels-teddyjmodel-2955375-scaled.jpg"
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
              Recrutez des Experts Prêts à l'Emploi
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Les diplômés de Grand Sud sont très recherchés dans les secteurs du tourisme et de 
                l'hôtellerie. Avec des bases académiques solides et une expérience professionnelle 
                étendue acquise via des stages ou l'alternance, ils sont prêts à assumer des 
                responsabilités et à contribuer à la croissance de votre entreprise dès le premier jour.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Profil de nos diplômés :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Double compétence : Opérationnelle et Management.</li>
                <li>Esprit international et capacités multilingues.</li>
                <li>Maîtrise des outils professionnels et logiciels métiers.</li>
                <li>Un vaste réseau d'alumni à travers l'industrie touristique mondiale.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Réseau Alumni</h3>
              <p className="text-gray-600 mb-6">
                Accédez à notre vivier de jeunes diplômés et d'alumni expérimentés via notre 
                plateforme de recrutement dédiée.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Recruter un Alumni
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
