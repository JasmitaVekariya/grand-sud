import PageBanner from "@/components/common/PageBanner";

export default function InitialTrainingPageFR() {
  const t = {
    title: "Réaliser sa formation en initial",
    image: "/assets/pexels-danxavier-1239291-scaled.jpg"
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
              Le Parcours Initial
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                La formation initiale est la voie académique traditionnelle, vous permettant de vous 
                concentrer entièrement sur vos études et votre développement personnel au sein de l'école. 
                Cette modalité est idéale pour les étudiants qui souhaitent s'immerger dans l'expérience 
                académique avant d'entrer dans le monde professionnel.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Aspects Clés de la Formation Initiale :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Immersion totale dans la vie académique et étudiante.</li>
                <li>Stages stratégiques tout au long du cursus pour acquérir une expérience pratique.</li>
                <li>Plus de temps dédié à l'apprentissage théorique et aux projets de groupe.</li>
                <li>Flexibilité pour choisir des spécialisations diverses.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Des questions ?</h3>
              <p className="text-gray-600 mb-6">
                Vous ne savez pas quelle modalité vous convient le mieux ? Nos conseillers en 
                admissions sont là pour vous aider.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                PARLER À UN CONSEILLER
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
