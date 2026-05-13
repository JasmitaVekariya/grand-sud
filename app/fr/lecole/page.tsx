import PageBanner from "@/components/common/PageBanner";

export default function SchoolPageFR() {
  const t = {
    title: (
      <>
        Bienvenue chez <br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg"
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
                L'ÉCOLE
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                NOS ENGAGEMENTS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                RAYONNEMENT INTERNATIONAL
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                L'Excellence du Tourisme & du Management depuis 1991
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900 font-extrabold">Grand Sud</strong> est une institution de premier plan dédiée à la formation des futurs leaders de l'industrie du tourisme et de l'hôtellerie. Avec plus de 30 ans d'expérience, nous offrons à nos étudiants les compétences, le réseau et l'expérience professionnelle nécessaires pour réussir sur un marché mondial.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Notre Mission</h3>
                  <p className="text-gray-600">Combler le fossé entre la théorie académique et la pratique industrielle, en veillant à ce que nos diplômés soient immédiatement opérationnels et hautement employables.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Chiffres Clés</h3>
                  <p className="text-gray-600">Plus de 5 000 alumni, 1 000 entreprises partenaires et un taux d'emploi de 95 % dans les 6 mois suivant l'obtention du diplôme.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
