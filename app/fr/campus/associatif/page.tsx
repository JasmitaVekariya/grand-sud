import PageBanner from "@/components/common/PageBanner";

export default function VieAssociativePageFR() {
  const t = {
    title: "La vie associative chez Grand Sud",
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.png"
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
              Une Communauté Étudiante Dynamique
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                À Grand Sud, la vie étudiante s'étend bien au-delà de la salle de classe. Notre vie 
                associative s'articule autour d'initiatives menées par les étudiants, d'événements 
                culturels et d'opportunités de réseautage professionnel. Rejoindre une association 
                est le moyen idéal de développer des compétences en leadership, de se faire des amis 
                pour la vie et d'enrichir votre parcours académique global.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi s'investir ?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Créer et gérer des projets et des événements concrets.</li>
                <li>Rencontrer des étudiants de différents programmes et niveaux.</li>
                <li>Développer des soft skills très appréciées des professionnels du tourisme.</li>
                <li>Avoir un impact positif sur la vie du campus et la communauté locale.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rejoindre une association</h3>
              <p className="text-gray-600 mb-6">
                Vous souhaitez lancer votre propre projet ou rejoindre une association existante ? 
                Notre coordinateur de la vie étudiante est là pour vous accompagner.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                NOUS CONTACTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
