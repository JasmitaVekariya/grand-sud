import PageBanner from "@/components/common/PageBanner";

export default function HireInternPageFR() {
  const t = {
    title: "Recrutez un stagiaire avec Grand Sud",
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
              Investissez dans les Talents Émergents
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Recruter un stagiaire de Grand Sud est une excellente opportunité d'apporter un 
                regard neuf et de l'enthousiasme à votre équipe tout en soutenant la prochaine 
                génération de professionnels du tourisme. Nos étudiants sont formés aux dernières 
                pratiques du secteur et sont prêts à contribuer à vos projets.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi recruter nos stagiaires ?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Des étudiants dotés de solides compétences opérationnelles et digitales.</li>
                <li>Des stages en phase avec les besoins spécifiques du secteur du tourisme.</li>
                <li>Un accompagnement de l'école pour la gestion des conventions.</li>
                <li>Une opportunité de pré-recruter vos futurs talents.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Déposer une offre</h3>
              <p className="text-gray-600 mb-6">
                Partagez vos opportunités de stage avec nos étudiants et trouvez le candidat idéal 
                pour vos missions.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Déposer un stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
