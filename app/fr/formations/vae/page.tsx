import PageBanner from "@/components/common/PageBanner";

export default function VAEPageFR() {
  const t = {
    title: "Validation des Acquis de l'Expérience (VAE)",
    image: "/assets/pexels-olly-3756679-scaled.jpg"
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
              Transformez Votre Expérience en Diplôme
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                La Validation des Acquis de l'Expérience (VAE) permet à toute personne, quels que soient 
                son âge, son niveau d'études ou son statut, de faire reconnaître son expérience 
                professionnelle pour obtenir une certification. À Grand Sud, nous vous accompagnons 
                dans cette démarche pour valider vos compétences et obtenir un diplôme en phase 
                avec votre expertise dans l'industrie du tourisme.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">À qui s'adresse la VAE ?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Salariés, non-salariés ou bénévoles.</li>
                <li>Toute personne justifiant d'au moins un an d'expérience en rapport direct avec le diplôme visé.</li>
                <li>Professionnels souhaitant sécuriser leur parcours ou évoluer dans leur entreprise.</li>
              </ul>
              <h3 className="text-xl font-bold mt-8 mb-4">Notre Accompagnement :</h3>
              <p>
                Nous proposons un coaching personnalisé pour vous aider à constituer votre dossier de 
                validation, préparer l'entretien avec le jury et mettre en valeur vos réalisations 
                professionnelles de manière efficace.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lancez votre VAE</h3>
              <p className="text-gray-600 mb-6">
                Prêt à valider votre expérience ? Téléchargez notre guide ou planifiez un rendez-vous 
                découverte avec notre coordinateur VAE.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-4">
                TÉLÉCHARGER LE GUIDE VAE
              </button>
              <button className="w-full border-2 border-primary-red text-primary-red py-3 rounded-lg font-bold hover:bg-red-50 transition-colors">
                PRENDRE RENDEZ-VOUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
