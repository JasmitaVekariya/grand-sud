import PageBanner from "@/components/common/PageBanner";

export default function BusinessTrainingPageFR() {
  const t = {
    title: "Formez vos équipes avec Grand Sud",
    image: "/assets/pexels-fauxels-3183173-scaled.jpg"
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
              Faites Monter vos Équipes en Compétences
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Dans une industrie du tourisme en constante évolution, la formation continue est 
                essentielle pour maintenir un avantage concurrentiel. Grand Sud propose des solutions 
                de formation sur mesure conçues pour répondre aux besoins spécifiques de votre 
                entreprise. De la transformation digitale aux standards de l'hôtellerie de luxe, nous 
                aidons vos équipes à maîtriser les compétences de demain.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Notre Expertise Formation :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modules personnalisés adaptés à vos objectifs commerciaux.</li>
                <li>Enseignement par des experts et consultants de haut niveau.</li>
                <li>Formats flexibles : en entreprise, sur notre campus ou en ligne.</li>
                <li>Accompagnement pour le montage des dossiers de financement (OPCO, etc.).</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Demander un devis</h3>
              <p className="text-gray-600 mb-6">
                Faites-nous part de vos besoins de formation, et notre équipe relations entreprises 
                concevra une proposition personnalisée pour vous.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Obtenir une proposition
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
