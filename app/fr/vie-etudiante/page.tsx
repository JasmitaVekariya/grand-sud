import PageBanner from "@/components/common/PageBanner";

export default function StudentLifePageFR() {
  const t = {
    title: (
      <>
        La vie étudiante chez <br />
        Grand Sud
      </>
    ),
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.png"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-primary-red mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-primary-red">
                EXPÉRIENCE CAMPUS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                VIE ASSOCIATIVE
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                SERVICES ÉTUDIANTS
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Plus Qu'une École : Une Véritable Communauté
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Chez <strong className="text-gray-900 font-extrabold">Grand Sud</strong>, la vie étudiante est vibrante, dynamique et centrée sur votre épanouissement. De notre campus moderne à Toulouse-Labège à nos diverses associations étudiantes, nous offrons un environnement où vous pouvez réussir académiquement et socialement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Vie sur le Campus</h3>
                  <p className="text-gray-600">Découvrez nos installations modernes, nos espaces de détente et l'environnement dynamique du pôle Labège Enova.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Associations</h3>
                  <p className="text-gray-600">Rejoignez notre Bureau des Étudiants (BDE) et divers clubs pour organiser des événements, des voyages et créer des liens durables.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
