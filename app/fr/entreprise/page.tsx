import PageBanner from "@/components/common/PageBanner";

export default function EntreprisePage() {
  const t = {
    title: (
      <>
        Devenir partenaire de <br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-fauxels-3183173-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-primary-red mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-primary-red">
                PARTENARIATS ENTREPRISES
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                SOLUTIONS DE RECRUTEMENT
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                FORMATION CONTINUE
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Une Alliance Stratégique pour l'Avenir du Tourisme
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Chez <strong className="text-gray-900 font-extrabold">Grand Sud</strong>, nous sommes convaincus que le lien entre la formation et le monde professionnel est la clé de la réussite. Nous travaillons en étroite collaboration avec les entreprises du tourisme, du voyage et de l'hôtellerie pour leur offrir les meilleurs talents et des solutions de formation sur mesure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Sourcing de Talents</h3>
                  <p className="text-gray-600">Accédez à notre vivier de diplômés et d'étudiants pour vos besoins de recrutement en stage, alternance et CDI.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Formation sur Mesure</h3>
                  <p className="text-gray-600">Développez les compétences de vos équipes avec nos modules de formation personnalisés conçus spécifiquement pour vos enjeux métiers.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
