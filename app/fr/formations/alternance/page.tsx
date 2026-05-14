"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AlternancePageFR() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const sections = [
    { id: "available", label: "FORMATIONS EN ALTERNANCE DISPONIBLES" },
    { id: "contracts", label: "LES DIFFÉRENTS CONTRATS D'ALTERNANCE" },
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title="Réaliser sa formation en alternance" 
        image="/assets/pexels-olly-3769021-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Formations disponibles */}
        <section id="available" className="scroll-mt-32 space-y-12">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Note : cette page est à titre informatif uniquement pour les étudiants anglophones ; seuls certains de nos programmes en français sont disponibles en alternance.
            </p>
            <p className="text-[18px] font-bold text-black leading-relaxed">
              L'alternance, un véritable tremplin vers l'emploi et l'insertion professionnelle.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Ce programme de formation permet aux étudiants de combiner apprentissage théorique et expérience pratique en entreprise, leur permettant de se préparer à une carrière et de s'immerger dans le monde professionnel. Avec un statut de salarié et un cadre réglementé, les étudiants en alternance peuvent financer leurs études tout en bénéficiant de nombreux avantages.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              FORMATIONS EN ALTERNANCE DISPONIBLES
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Du BTS au Mastère, nos étudiants francophones alternent périodes sur le campus et périodes hors campus.</p>
              <p>La signature d'un contrat en alternance vous permettra de combiner :</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>des compétences théoriques en classe (enseignement général, professionnel ou technologique),</li>
                <li>des compétences pratiques au sein d'une entreprise,</li>
                <li>une participation partielle ou totale au financement de votre formation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Les différents contrats */}
        <section id="contracts" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              LES DIFFÉRENTS CONTRATS D'ALTERNANCE
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Votre année peut prendre deux formes :</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>alternance via un contrat de professionnalisation</li>
                <li>alternance via un contrat d'apprentissage</li>
              </ul>
              <p className="italic">À ce jour, la grande majorité des contrats d'alternance sont signés via un contrat d'apprentissage.</p>
              <p>Grand Sud Formation vous fournira les informations nécessaires pour mettre en place votre contrat avec votre entreprise d'accueil (programme pédagogique, calendrier de formation, référence de la certification visée, etc.) et vous accompagnera dans les différentes démarches.</p>
            </div>
          </div>

          {/* Accordion with Background Image */}
          <div className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden rounded-sm">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/pexels-pixabay-262978-scaled.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Accordions */}
            <div className="relative z-10 w-full max-w-4xl px-6 space-y-1">
              {/* Contrat de professionnalisation */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("professional")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "professional" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Contrat de professionnalisation</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "professional" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50/95 overflow-hidden"
                    >
                      <div className="p-8 text-[14px] text-gray-800 leading-relaxed space-y-6">
                        <p>Le contrat de professionnalisation est un contrat d'alternance entre un employeur et un salarié répondant à certains critères. Il peut être conclu avec tout type d'employeur privé assujetti au financement de la formation professionnelle continue, à l'exception des particuliers employeurs. Il peut être conclu sous la forme d'un contrat à durée déterminée (CDD) (d'une durée minimale de 6 mois et maximale de 24 mois) ou d'un contrat à durée indéterminée (CDI). Pour l'aider à développer ses compétences, le salarié bénéficie de l'accompagnement d'un tuteur.</p>
                        
                        <div className="space-y-4">
                          <p className="font-bold">Le contrat de professionnalisation a pour objectif l'acquisition d'une qualification ou d'un diplôme correspondant à une qualification :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li><strong>enregistrée au Répertoire National des Certifications Professionnelles (RNCP)</strong> (c'est le cas des formations dispensées par Grand Sud Formation),</li>
                            <li>ou reconnue dans les classifications d'une convention collective nationale de branche,</li>
                            <li>ou figurant sur la liste ouvrant droit à un certificat de qualification professionnelle.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold">Il s'adresse aux :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>jeunes âgés de 16 à 25 ans (26 ans moins un jour),</li>
                            <li>demandeurs d'emploi âgés de 26 ans et plus,</li>
                            <li>bénéficiaires du revenu de solidarité active (RSA),</li>
                            <li>bénéficiaires de l'allocation de solidarité spécifique (ASS),</li>
                            <li>bénéficiaires de l'allocation aux adultes handicapés (AAH),</li>
                            <li>personnes ayant bénéficié d'un contrat unique d'insertion (CUI).</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Les employeurs publics ne sont pas concernés, à savoir :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>l'État,</li>
                            <li>les collectivités territoriales,</li>
                            <li>les établissements publics à caractère administratif (EPA), comme les hôpitaux ou les lycées.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Conditions et rémunération</p>
                          <p>Les titulaires de contrats de professionnalisation sont des salariés à part entière. À ce titre, ils sont soumis aux mêmes lois, règlements et conventions collectives que les autres salariés, dans la mesure où ces dispositions ne sont pas incompatibles avec les exigences de leur formation. Leur temps de travail est le même que celui des autres salariés de l'entreprise. À noter que le temps de formation est inclus dans le temps de travail.</p>
                          <p>Durant le contrat, le salarié en alternance perçoit une rémunération dont le montant varie selon :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>son âge,</li>
                            <li>son niveau de formation initiale,</li>
                            <li>la convention collective appliquée dans l'entreprise d'accueil.</li>
                          </ul>
                          <p>Cette rémunération ne peut être inférieure aux montants indiqués sur le site du gouvernement.</p>
                          <p>Des dispositions conventionnelles ou contractuelles peuvent prévoir une rémunération plus favorable pour le salarié.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Période d'essai</p>
                          <p>Pour les CDD d'au moins six mois, la période d'essai dure au maximum un mois.</p>
                          <p>Pour les contrats de professionnalisation à durée indéterminée, la durée de la période d'essai dépend de la classification du poste dans la convention collective.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Prise en charge des frais de formation et démarches à effectuer</p>
                          <p>Quel que soit le type de contrat (CDD ou CDI), il doit être écrit et signé par l'employeur et le salarié (<strong>cerfa n° 12434</strong>). L'employeur doit envoyer la demande de prise en charge du contrat à l'opérateur de compétences (OPCO) auquel il cotise <strong>au plus tard dans les 5 jours suivant le début du contrat</strong>. Cependant, il est conseillé aux employeurs de déposer le dossier avant le début du contrat pour s'assurer que l'OPCO le valide et prenne en charge les frais de formation. L'OPCO dispose de 20 jours pour s'opposer au contrat et l'annuler s'il estime qu'il comporte des dispositions illégales ou non conformes à la convention collective.</p>
                          <p>Dans la limite maximale de 24 mois, le contrat de professionnalisation :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>peut débuter en entreprise jusqu'à 2 mois avant le premier cours au centre de formation</li>
                            <li>peut se terminer 1 mois après les examens pour valider la qualification visée.</li>
                          </ul>
                          <p>Concernant les dates de début de contrat, les OPCO accordent généralement deux mois de souplesse, répartis avant la rentrée scolaire et après les examens (si le contrat commence deux mois avant le premier cours, il doit donc se terminer à la date des examens finaux).</p>
                          <p>Dans le cas d'un CDI, la durée maximale de 24 mois couvre la période de professionnalisation, c'est-à-dire du premier jour au centre de formation au dernier jour des examens. À l'issue de cette période, le contrat se poursuit dans le cadre d'un CDI de droit commun.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Renouvellement du contrat</p>
                          <p>Un contrat de professionnalisation à durée déterminée peut être renouvelé une fois avec le même employeur :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>si le bénéficiaire ayant obtenu la qualification visée prépare une qualification supérieure ou complémentaire,</li>
                            <li>si le bénéficiaire n'a pas obtenu la qualification visée pour l'une des raisons suivantes : échec à l'obtention de la qualification, maternité ou adoption, maladie, accident du travail, absence ou insuffisance des cours dispensés par l'organisme de formation.</li>
                          </ul>
                        </div>

                        <p className="font-bold text-black">La subvention maximale de 6 000 € précédemment accordée aux employeurs qui recrutent des alternants ne s'applique plus aux contrats de professionnalisation conclus après le 30 avril 2024 (voir décret n° 2024-392 du 27 avril 2024).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contrat d'apprentissage */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("apprenticeship")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "apprenticeship" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Contrat d'apprentissage</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "apprenticeship" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50/95 overflow-hidden"
                    >
                      <div className="p-8 text-[14px] text-gray-800 leading-relaxed space-y-6">
                        <p>Le contrat d'apprentissage est un contrat de travail écrit à durée déterminée (CDD) ou indéterminée (CDI) conclu entre un salarié et un employeur. Il permet à l'apprenti de suivre une formation en alternance en entreprise sous la responsabilité d'un maître d'apprentissage et en centre de formation d'apprentis (CFA) pendant une période de 6 mois à 3 ans.</p>
                        <p>Sauf dérogation, <strong>la date de début du contrat d'apprentissage ne peut être antérieure ou postérieure de plus de trois mois au début du cycle de formation</strong> que suit l'apprenti. Lorsqu'il est conclu en CDI, le contrat débute par la période d'apprentissage dont la durée est égale au cycle de formation suivi.</p>
                        
                        <div className="space-y-4">
                          <p className="font-bold text-black">L'apprentissage permet de préparer :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>un diplôme professionnel de l'enseignement secondaire : certificat d'aptitude professionnelle (CAP), baccalauréat professionnel, brevet professionnel, mention complémentaire,</li>
                            <li>un diplôme de l'enseignement supérieur : brevet de technicien supérieur (BTS), diplôme universitaire de technologie (DUT), licences professionnelles, diplômes d'ingénieur ou d'école de commerce, etc.</li>
                            <li><strong>une certification professionnelle enregistrée au répertoire national des certifications professionnelles (RNCP)</strong>, qui regroupe toutes les certifications professionnelles relevant du ministère de l'Emploi.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p>L'âge minimum est de 16 ans et l'âge maximum est de 30 ans (29 ans révolus), mais peut être porté à 35 ans (34 ans révolus) dans les cas suivants :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>l'apprenti souhaite signer un nouveau contrat pour préparer un niveau de diplôme supérieur à celui déjà obtenu,</li>
                            <li>le précédent contrat de l'apprenti a été rompu pour des raisons indépendantes de sa volonté,</li>
                            <li>le précédent contrat de l'apprenti a été rompu pour inaptitude physique et temporaire.</li>
                          </ul>
                          <p>Dans ces cas, il ne doit pas s'écouler plus d'un an entre les deux contrats.</p>
                          <p>Il n'y a pas de limite d'âge dans les cas suivants :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>l'apprenti est reconnu comme travailleur handicapé,</li>
                            <li>l'apprenti envisage de créer ou de reprendre une entreprise nécessitant un diplôme (ex : dispositifs Acre, Nacre ou Cape),</li>
                            <li>l'apprenti est inscrit en tant que sportif de haut niveau,</li>
                            <li>l'apprenti n'obtient pas le diplôme ou le titre professionnel visé. Dans ce cas, l'apprentissage peut être prolongé d'un an maximum avec un nouveau contrat chez un autre employeur.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Quels employeurs ?</p>
                          <p>Toute entreprise du secteur privé, y compris les associations, peut embaucher un apprenti. L'employeur doit déclarer qu'il prendra les mesures nécessaires à l'organisation de l'apprentissage. À cet égard, l'employeur doit s'assurer que l'équipement de l'entreprise, les techniques utilisées, les conditions de travail, d'hygiène et de sécurité, ainsi que les compétences professionnelles et pédagogiques du maître d'apprentissage sont de nature à permettre une formation satisfaisante.</p>
                          <p>Le secteur public non industriel et non commercial, dont les trois fonctions publiques (État, territoriale et hospitalière), peut également recourir à l'apprentissage.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Conditions et rémunération</p>
                          <p>L'apprenti est un salarié à part entière. À ce titre, les lois, les règlements et la convention collective de la branche professionnelle ou de l'entreprise lui sont applicables dans les mêmes conditions qu'aux autres salariés. Le temps de travail de l'apprenti est le même que celui des autres salariés. L'employeur doit permettre à l'apprenti de suivre les cours de théorie professionnelle. Ce temps est inclus dans le temps de travail effectif et rémunéré comme tel.</p>
                          <p>Durant le contrat, l'apprenti perçoit une rémunération dont le montant varie selon son âge. De plus, sa rémunération augmente à chaque nouvelle année civile de contrat.</p>
                          <p>Le salaire minimum perçu par les apprentis correspond à un pourcentage du SMIC (salaire minimum de croissance) ou du SMC (salaire minimum conventionnel du poste) pour les 21 ans et plus.</p>
                          <p>Les apprentis préparant une <strong>licence professionnelle en un an</strong> perçoivent une rémunération correspondant à une deuxième année de contrat.</p>
                          <p>Les montants peuvent être augmentés si une convention collective applicable dans l'entreprise fixe une rémunération minimale plus élevée.</p>
                          <p>Les déductions pour avantages en nature (nourriture ou logement) prévues au contrat d'apprentissage peuvent être faites dans la limite de 75 % du salaire.</p>
                          <p>L'apprenti a droit à la prise en charge de ses frais de transport de son domicile à son lieu de travail.</p>
                          <p>Les conditions de majoration des heures supplémentaires sont celles applicables au personnel de l'entreprise concernée.</p>
                          <p>Lorsqu'un apprenti conclut un nouveau contrat d'apprentissage avec le même employeur ou avec un employeur différent, <strong>sa rémunération est au moins égale à celle qu'il percevait lors de la dernière année du précédent contrat s'il a validé le diplôme</strong>, sauf si l'application de la rémunération liée à l'âge est plus favorable.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Période d'essai</p>
                          <p>Pendant les 45 premiers jours (consécutifs ou non) en entreprise, le contrat peut être rompu sans motif par l'employeur ou l'apprenti.</p>
                          <p>La rupture unilatérale du contrat par l'une des parties durant cette période ou la rupture d'un commun accord doit faire l'objet d'un écrit et être notifiée au directeur du CFA.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Prise en charge des frais de formation et démarches à effectuer</p>
                          <p>Le contrat d'apprentissage est conclu au moyen d'un formulaire type signé par l'employeur et l'apprenti (<strong>cerfa n° 10103</strong>). L'employeur doit envoyer la demande de prise en charge du contrat à l'opérateur de compétences (OPCO) auquel il cotise <strong>au plus tard dans les cinq jours suivant le début du contrat</strong>. Cependant, il est conseillé aux employeurs de déposer le dossier avant le début du contrat pour s'assurer que l'OPCO le valide et prenne en charge les frais de formation. L'opérateur de compétences dispose de 20 jours pour décider de la prise en charge du contrat. En l'absence de réponse de l'OPCO dans ce délai, la demande est rejetée.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Succession de contrats</p>
                          <p>Après un contrat d'apprentissage à durée déterminée, il est possible de conclure avec le même employeur :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>un autre contrat d'apprentissage à durée déterminée pour une certification différente, de même niveau ou non (aucun délai n'est exigé entre les deux contrats),</li>
                            <li>un contrat de professionnalisation à durée déterminée ou indéterminée.</li>
                          </ul>
                        </div>

                        <p className="font-bold text-black italic">Le gouvernement poursuit son engagement auprès des entreprises qui recrutent des apprentis. À ce titre, pour tout contrat d'apprentissage signé, une aide financière est disponible, d'un montant maximal de 6 000 € (jusqu'à 6 000 € pour une personne en situation de handicap).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
