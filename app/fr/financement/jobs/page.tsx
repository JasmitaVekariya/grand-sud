import PageBanner from "@/components/common/PageBanner";

export default function StudentJobsPageFR() {
  const t = {
    title: "financer ses études avec un job étudiant",
    image: "/assets/pexels-rdne-4921254-scaled.jpg"
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
              Concilier Travail et Études
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Beaucoup de nos étudiants choisissent de financer leurs études grâce à des jobs 
                étudiants. Toulouse offre un marché du travail dynamique pour les étudiants, avec de 
                nombreuses opportunités dans les secteurs de l'hôtellerie, de l'événementiel et des 
                services. À Grand Sud, nous vous accompagnons dans vos recherches pour trouver un 
                emploi flexible qui respecte votre emploi du temps académique.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Trouver un job étudiant :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accès à des plateformes d'emploi spécialement adaptées aux horaires étudiants.</li>
                <li>Partenariats exclusifs avec des agences d'événementiel locales.</li>
                <li>Ateliers sur la gestion du temps entre travail et études.</li>
                <li>Opportunités au sein du campus pour des rôles étudiants spécifiques.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Offres en cours</h3>
              <p className="text-gray-600 mb-6">
                Consultez nos dernières offres de jobs étudiants à Toulouse et ses environs.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Consulter les offres
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
