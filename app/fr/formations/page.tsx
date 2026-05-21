import PageBanner from "@/components/common/PageBanner";

export default function FormationsPageFR() {
  const t = {
    title: (
      <>
        Explorez nos <br />
        formations expertes
      </>
    ),
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.jpg"
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
                PROGRAMMES BACHELOR
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                PROGRAMMES MASTÈRE
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                MODALITÉS DE FORMATION
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Des Formations Spécialisées pour des Carrières Mondiales
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Grand Sud propose une gamme complète de programmes académiques de <strong className="text-gray-900 font-extrabold">Bac+2 à Bac+5</strong>, spécifiquement conçus pour les industries du tourisme, de l'hôtellerie et du voyage digital. Toutes nos formations sont certifiées et reconnues par l'État (France Compétences), garantissant des standards académiques élevés et une légitimité professionnelle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Bachelor</h3>
                  <p className="text-gray-600">Programmes de 3 ans axés sur la gestion opérationnelle et l'expertise sectorielle en Business, Tourisme et IT.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Mastère</h3>
                  <p className="text-gray-600">Programmes avancés de 2 ans pour le management stratégique et le leadership dans le tourisme et l'hôtellerie mondiale.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
