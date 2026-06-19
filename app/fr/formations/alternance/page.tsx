"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircle, Send, Leaf, Building, Users, User, type LucideIcon } from "lucide-react";

type FormationCard = {
  icon: LucideIcon;
  title: string;
  qualification: string;
  rhythm: string;
  variant: "gray" | "red";
  href?: string;
};

const FormationCardItem = ({ item }: { item: FormationCard }) => {
  const Icon = item.icon;
  const bgColor = item.variant === "red" ? "bg-[#802020]" : "bg-[#333333]";
  const iconColor = item.variant === "red" ? "text-[#f0b4ad]" : "text-white";

  const content = (
    <div
      className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-between text-center space-y-4 w-full h-full min-h-[320px] md:min-h-[360px] ${item.href ? "transition-transform hover:scale-[1.02]" : ""}`}
    >
      <Icon size={48} strokeWidth={1} className={`${iconColor} shrink-0`} />
      <div className="space-y-3 grow flex flex-col justify-center">
        <h3 className="text-[15px] md:text-[17px] font-bold leading-tight tracking-tight">{item.title}</h3>
        <p className="text-[12px] md:text-[13px] font-bold opacity-95 leading-relaxed">{item.qualification}</p>
      </div>
      <p className="text-[12px] md:text-[13px] font-medium leading-relaxed opacity-90 pt-2">{item.rhythm}</p>
    </div>
  );

  if (item.href) {
    return <Link href={item.href} className="block h-full">{content}</Link>;
  }
  return content;
};

const btsRhythm =
  "en moyenne 3 jours en école pour 2 jours en entreprise, avec une disponibilité à quasi temps plein durant la période estivale";
const weekRhythm =
  "en moyenne 1 semaine à l'école pour 1 semaine en entreprise, avec une disponibilité à quasi temps plein durant la période estivale";

const formations: FormationCard[] = [
  {
    icon: MessageCircle,
    title: "BTS Communication",
    qualification: "Diplôme d'Etat de l'Education Nationale - BAC+2",
    rhythm: btsRhythm,
    variant: "red",
  },
  {
    icon: Send,
    title: "BTS Tourisme",
    qualification: "Diplôme d'Etat de l'Education Nationale - BAC+2",
    rhythm: btsRhythm,
    variant: "gray",
    href: "/fr/formations/bts-tourisme",
  },
  {
    icon: Leaf,
    title: "BACHELOR Responsable du Développement Touristique Durable et Digital",
    qualification: "Titre RNCP - BAC+3",
    rhythm: weekRhythm,
    variant: "red",
    href: "/fr/formations/bachelor-durable",
  },
  {
    icon: Building,
    title: "BACHELOR Hospitality Management",
    qualification: "Titre RNCP - BAC+3",
    rhythm: weekRhythm,
    variant: "gray",
    href: "/fr/formations/bachelor-hospitality",
  },
  {
    icon: Users,
    title: "BACHELOR MICE Designer",
    qualification: "Titre RNCP - BAC+3",
    rhythm: weekRhythm,
    variant: "red",
    href: "/fr/formations/bachelor-mice",
  },
  {
    icon: User,
    title: "MASTERE Manager en Stratégies Touristiques",
    qualification: "Titre RNCP - BAC+5",
    rhythm: weekRhythm,
    variant: "gray",
    href: "/fr/formations/mastere-tourism",
  },
];

const referenceSites = [
  { label: "Modalités du contrat d'apprentissage", href: "https://www.service-public.fr/particuliers/vosdroits/F2918" },
  { label: "Le contrat d'apprentissage", href: "https://www.service-public.fr/particuliers/vosdroits/F2918" },
  { label: "Code du travail : Salaire de l'apprenti", href: "https://www.service-public.fr/particuliers/vosdroits/F2944" },
  { label: "Le portail de l'alternance", href: "https://www.alternance.emploi.gouv.fr/" },
  { label: "Formation en alternance – Site du ministère du Travail", href: "https://travail-emploi.gouv.fr/formation-professionnelle/formation-en-alternance-10771" },
  { label: "Formation en alternance – Site etudiant.gouv.fr", href: "https://www.etudiant.gouv.fr/fr/orientation/alternance" },
  { label: "Mes droits et mes obligations en tant qu'apprenti – Site Mon parcours handicap", href: "https://monparcourshandicap.gouv.fr/" },
  { label: "Etablir un contrat d'apprentissage", href: "https://www.service-public.fr/particuliers/vosdroits/F2918" },
  { label: "Santé et sécurité au travail", href: "https://travail-emploi.gouv.fr/sante-securite-au-travail" },
  { label: "Santé et sécurité au travail : obligations du salarié", href: "https://www.service-public.fr/particuliers/vosdroits/F1855" },
];

export default function AlternancePageFR() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const sections = [
    { id: "formations", label: "Les formations accessibles en alternance" },
    { id: "contracts", label: "Les différents contrats d'alternance" },
    { id: "rights", label: "Droits et devoirs de l'alternant" },
    { id: "references", label: "Sites de référence" },
  ];

  return (
    <main className="bg-white">
      <PageBanner
        title={<>Réaliser sa formation en <br /> alternance</>}
        image="/assets/pexels-olly-3769021-scaled.jpg"
      />

      <CourseDetailLayout sections={sections}>
        <section id="formations" className="scroll-mt-32 space-y-12">
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium max-w-4xl">
            <p>
              L&apos;alternance constitue une véritable passerelle vers l&apos;emploi et l&apos;insertion professionnelle. Ce rythme de formation permet à l&apos;étudiant de combiner apprentissages théoriques et expérience en entreprise, afin de se préparer concrètement à un métier et de s&apos;immerger dans la culture professionnelle.
            </p>
            <p>
              Bénéficiant d&apos;un statut de salarié et d&apos;un cadre réglementé, l&apos;alternant peut ainsi financer ses études tout en profitant de nombreux atouts.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              Les formations accessibles en alternance
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium max-w-4xl">
              <p>Du BTS au Mastère, vous mixez des périodes sur votre campus et des temps en dehors de ce dernier.</p>
              <p>La signature d&apos;un contrat en alternance pourra vous permettre de concilier :</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>compétences théoriques en cours (enseignement général, professionnel ou technologique),</li>
                <li>compétences pratiques au sein d&apos;une entreprise,</li>
                <li>participation partielle ou totale au financement de votre formation.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-fr">
            {formations.map((item, idx) => (
              <div key={idx} className="h-full min-h-[320px] md:min-h-[360px]">
                <FormationCardItem item={item} />
              </div>
            ))}
          </div>
        </section>

        <section id="contracts" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              Les différents contrats d&apos;alternance
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium max-w-4xl">
              <p>Votre année peut prendre 2 formes :</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>alternance par le biais du contrat de professionnalisation</li>
                <li>alternance par le biais du contrat d&apos;apprentissage</li>
              </ul>
              <p className="italic">A ce jour, la grande majorité des contrats d&apos;alternance signés le sont via un contrat d&apos;apprentissage.</p>
              <p>
                Grand Sud Formation vous transmettra les éléments nécessaires pour la mise en place de votre contrat auprès de votre entreprise d&apos;accueil (programme pédagogique, calendrier des cours, référence du titre visé, etc.) et vous accompagnera pour les différentes démarches.
              </p>
            </div>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/pexels-pixabay-262978-scaled.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 space-y-1">
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
                        <p>
                          Le contrat de professionnalisation est un contrat de travail en alternance entre un employeur et un salarié répondant à certains critères. Il peut être conclu avec tout type d&apos;employeur privé, assujetti au financement de la formation professionnelle continue, sauf les particuliers employeurs. Il peut être signé en CDD (pour une durée de 6 mois minimum à 24 mois maximum) ou en CDI. Pour l&apos;accompagner dans sa montée en compétences, le salarié bénéficie du soutien d&apos;un tuteur.
                        </p>
                        <div className="space-y-4">
                          <p className="font-bold">Le contrat de professionnalisation vise l&apos;obtention d&apos;un titre ou diplôme correspondant à une qualification :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>enregistrée dans le répertoire national des certifications professionnelles – RNCP (c&apos;est le cas des formations dispensées par Grand Sud Formation),</li>
                            <li>ou reconnues dans les classifications d&apos;une convention collective nationale de branche,</li>
                            <li>ou figurant sur la liste ouvrant droit à un certificat de qualification professionnelle.</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold">Il s&apos;adresse :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>aux jeunes de 16 ans à 25 ans révolus (26 ans moins un jour),</li>
                            <li>aux demandeurs d&apos;emploi âgés de 26 ans et plus,</li>
                            <li>aux bénéficiaires du RSA,</li>
                            <li>aux bénéficiaires de l&apos;allocation de solidarité spécifique (ASS),</li>
                            <li>aux bénéficiaires de l&apos;allocation aux adultes handicapés (AAH),</li>
                            <li>aux personnes ayant bénéficié d&apos;un contrat unique d&apos;insertion (CUI).</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Les employeurs publics ne sont pas concernés, c&apos;est-à-dire :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>l&apos;État,</li>
                            <li>les collectivités territoriales,</li>
                            <li>les établissements publics à caractère administratif (EPA), par exemple hôpitaux ou lycées.</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Conditions de travail et rémunération</p>
                          <p>Le titulaire d&apos;un contrat de professionnalisation est un salarié à part entière. À ce titre, les lois, les règlements et la convention collective lui sont applicables dans les mêmes conditions qu&apos;aux autres salariés, dans la mesure où leurs dispositions ne sont pas incompatibles avec les exigences de leur formation. Le temps de travail est identique à celui des autres salariés de l&apos;entreprise. Attention, le temps de formation est inclus dans le temps de travail.</p>
                          <p>Pendant la durée du contrat, l&apos;alternant perçoit une rémunération, dont le montant varie en fonction de :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>son âge,</li>
                            <li>son niveau de formation initial,</li>
                            <li>la convention collective appliquée dans l&apos;entreprise d&apos;accueil.</li>
                          </ul>
                          <p>Cette rémunération ne peut être inférieure aux montants indiqués sur le site gouvernemental.</p>
                          <p>Des dispositions conventionnelles ou contractuelles peuvent prévoir une rémunération plus favorable pour le salarié.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Période d&apos;essai</p>
                          <p>Dans le cadre d&apos;un contrat de 6 mois minimum signé à durée déterminée, la période d&apos;essai dure 1 mois maximum.</p>
                          <p>Pour les contrats de professionnalisation signés à durée indéterminée, la durée de la période d&apos;essai dépend de la classification du poste dans la convention collective.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Prise en charge de la formation et démarches à effectuer</p>
                          <p>Quelle que soit la forme du contrat (à durée déterminée ou CDI), il doit être établi par écrit, et signé par l&apos;employeur et le salarié (cerfa N°12434). L&apos;employeur doit envoyer la demande de prise en charge du contrat à l&apos;opérateur de compétences (OPCO) auquel il cotise au plus tard 5 jours après le début du contrat. Il est toutefois conseillé aux employeurs de déposer le dossier avant le début du contrat, afin de s&apos;assurer auprès de l&apos;OPCO de sa conformité et de la prise en charge des dépenses de formation. L&apos;OPCO dispose de 20 jours pour s&apos;opposer au contrat et l&apos;annuler, s&apos;il estime que celui-ci comprend des dispositions illégales ou non conformes à la convention collective.</p>
                          <p>Dans la limite des 24 mois maximum, le contrat de professionnalisation :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>peut débuter en entreprise jusqu&apos;à 2 mois avant le premier cours en centre de formation</li>
                            <li>peut se terminer 1 mois après les examens de validation du titre visé.</li>
                          </ul>
                          <p>Concernant les dates de mise en place du contrat, les OPCO accordent généralement 2 mois de flexibilité, qui peuvent être répartis avant la rentrée et après les examens (si le contrat débute 2 mois avant le premier cours, il faudra donc le faire terminer à la date de fin des examens).</p>
                          <p>Dans le cadre d&apos;un contrat signé à durée indéterminée, la durée maximale de 24 mois porte sur la période des actions de professionnalisation, c&apos;est-à-dire du premier jour en centre de formation jusqu&apos;au dernier jour des examens. A l&apos;issue de cette période, le contrat se poursuit dans le cadre d&apos;un contrat de travail à durée indéterminée de droit commun.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Renouvellement du contrat</p>
                          <p>Le contrat de professionnalisation à durée déterminée peut être renouvelé 1 fois avec le même employeur :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>si le bénéficiaire ayant obtenu la qualification visée prépare une qualification supérieure ou complémentaire,</li>
                            <li>si le bénéficiaire n&apos;a pas obtenu la qualification visée pour l&apos;un des motifs suivants : échec à l&apos;obtention de la qualification, maternité ou adoption, maladie, accident du travail, absence ou insuffisance des cours dispensés par l&apos;organisme de formation.</li>
                          </ul>
                        </div>
                        <p className="font-bold text-black">
                          L&apos;aide de 6 000 euros maximum précédemment accordée aux employeurs qui recrutent des alternants ne s&apos;applique plus aux contrats de professionnalisation conclus après le 30 avril 2024 (cf. décret n° 2024-392 du 27 avril 2024).
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("apprenticeship")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "apprenticeship" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Contrat d&apos;apprentissage</span>
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
                        <p>
                          Le contrat d&apos;apprentissage est un contrat de travail écrit à durée limitée (CDL) ou à durée indéterminée (CDI) entre un salarié et un employeur. Il permet à l&apos;apprenti de suivre une formation en alternance en entreprise sous la responsabilité d&apos;un maître d&apos;apprentissage et en centre de formation des apprentis (CFA) pendant 6 mois à 3 ans.
                        </p>
                        <p>
                          Sauf dérogation, la date de début du contrat d&apos;apprentissage ne peut être antérieure de plus de 3 mois, ni postérieure de plus de 3 mois au début du cycle de formation que suit l&apos;apprenti. Lorsqu&apos;il est conclu dans le cadre d&apos;un CDI, le contrat débute par la période d&apos;apprentissage, d&apos;une durée équivalente au cycle de la formation suivie.
                        </p>
                        <div className="space-y-4">
                          <p className="font-bold text-black">L&apos;apprentissage permet de préparer :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>un diplôme professionnel de l&apos;enseignement secondaire : certificat d&apos;aptitude professionnelle (CAP), baccalauréat professionnel, brevet professionnel, mention complémentaire,</li>
                            <li>un diplôme de l&apos;enseignement supérieur : brevet de technicien supérieur (BTS), diplôme universitaire de technologie (DUT), licences professionnelles, diplômes d&apos;ingénieur ou d&apos;école supérieure de commerce, etc.</li>
                            <li>un titre à finalité professionnelle enregistré au répertoire national des certifications professionnelles (RNCP), dont l&apos;ensemble des titres professionnels relevant du ministère chargé de l&apos;emploi</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p>L&apos;âge minimum est de 16 ans et l&apos;âge maximum est de 30 ans (29 ans révolus), mais peut être porté à 35 ans (34 ans révolus) dans les cas suivants :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>l&apos;apprenti veut signer un nouveau contrat pour accéder à un niveau de diplôme supérieur à celui déjà obtenu,</li>
                            <li>le précédent contrat de l&apos;apprenti a été rompu pour des raisons indépendantes de sa volonté,</li>
                            <li>le précédent contrat de l&apos;apprenti a été rompu pour inaptitude physique et temporaire.</li>
                          </ul>
                          <p>Dans ces cas, il ne doit pas s&apos;écouler plus d&apos;1 an entre les 2 contrats.</p>
                          <p>Il n&apos;y a pas d&apos;âge limite dans les cas suivants :</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>l&apos;apprenti est reconnu travailleur handicapé,</li>
                            <li>l&apos;apprenti envisage de créer ou reprendre une entreprise supposant l&apos;obtention d&apos;un diplôme (exemple : dispositif d&apos;aide individualisée Acre, Nacre ou Cape),</li>
                            <li>l&apos;apprenti est une personne inscrite en tant que sportif de haut niveau,</li>
                            <li>l&apos;apprenti n&apos;obtient pas le diplôme ou le titre professionnel visé. Dans ce cas, l&apos;apprentissage peut être prolongé pour 1 an maximum avec un nouveau contrat chez un autre employeur.</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Quels employeurs ?</p>
                          <p>Toute entreprise du secteur privé, y compris les associations, peut embaucher un apprenti. L&apos;employeur doit déclarer prendre les mesures nécessaires à l&apos;organisation de l&apos;apprentissage. À ce titre, l&apos;employeur doit notamment garantir que l&apos;équipement de l&apos;entreprise, les techniques utilisées, les conditions de travail, d&apos;hygiène et de sécurité, les compétences professionnelles et pédagogiques du maître d&apos;apprentissage sont de nature à permettre une formation satisfaisante.</p>
                          <p>Le secteur public non industriel et commercial, dont les 3 fonctions publiques (état, territoriale et hospitalière), peut également recourir à l&apos;apprentissage.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Conditions de travail et rémunération</p>
                          <p>L&apos;apprenti est un salarié à part entière. À ce titre, les lois, les règlements et la convention collective de la branche professionnelle ou de l&apos;entreprise lui sont applicables dans les mêmes conditions qu&apos;aux autres salariés. Le temps de travail de l&apos;apprenti est identique à celui des autres salariés. L&apos;employeur doit permettre à l&apos;apprenti de suivre les cours théoriques professionnels. Ce temps est compris dans le temps de travail effectif et rémunéré comme tel.</p>
                          <p>Pendant la durée du contrat, l&apos;apprenti perçoit une rémunération variant en fonction de son âge. En outre, sa rémunération progresse chaque nouvelle année calendaire d&apos;exécution de son contrat.</p>
                          <p>Le salaire minimum réglementaire perçu par l&apos;apprenti correspond à un pourcentage du Smic ou du SMC (salaire minimum conventionnel de l&apos;emploi occupé) pour les 21 ans et plus.</p>
                          <p>L&apos;apprenti préparant une licence professionnelle en 1 an bénéficie d&apos;une rémunération correspondant à une 2e année de contrat.</p>
                          <p>Les montants peuvent être majorés si un accord collectif applicable dans l&apos;entreprise fixe une rémunération minimale plus élevée.</p>
                          <p>Des retenues pour avantages en nature (nourriture ou logement) prévus au contrat d&apos;apprentissage peuvent être effectuées dans la limite de 75 % du salaire.</p>
                          <p>L&apos;apprenti a droit à la prise en charge de ses frais de transport pour se rendre de son domicile à son travail.</p>
                          <p>Les conditions de rémunération des heures supplémentaires sont celles qui sont applicables au personnel de l&apos;entreprise concernée.</p>
                          <p>Lorsqu&apos;un apprenti conclut un nouveau contrat d&apos;apprentissage avec le même employeur ou avec un employeur différent, sa rémunération est au moins égale à celle qu&apos;il percevait lors de la dernière année d&apos;exécution du contrat précédent s&apos;il a validé le titre visé, sauf quand l&apos;application des rémunérations liées à l&apos;âge est plus favorable.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Période d&apos;essai</p>
                          <p>Durant les 45 premiers jours (consécutifs ou non) en entreprise, le contrat peut être rompu sans motif par l&apos;employeur ou par l&apos;apprenti</p>
                          <p>La rupture unilatérale du contrat par l&apos;une des parties pendant cette période ou la rupture convenue d&apos;un commun accord doit être constatée par écrit et notifiée au directeur du CFA.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Prise en charge de la formation et démarches à effectuer</p>
                          <p>Le contrat d&apos;apprentissage est conclu à l&apos;aide d&apos;un formulaire type signé par l&apos;employeur et l&apos;apprenti (cerfa N°10103). L&apos;employeur doit envoyer la demande de prise en charge du contrat à l&apos;opérateur de compétences (OPCO) auquel il cotise au plus tard 5 jours après le début du contrat. Il est toutefois conseillé aux employeurs de déposer le dossier avant le début du contrat, afin de s&apos;assurer auprès de l&apos;OPCO de sa conformité et de la prise en charge des dépenses de formation.</p>
                          <p>L&apos;opérateur de compétences a 20 jours pour statuer sur la prise en charge du contrat. Sans réponse de l&apos;OPCO dans ce délai, la demande est refusée.</p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-bold text-black">Succession de contrats</p>
                          <p>Après un contrat d&apos;apprentissage en CDD, il est possible de conclure avec le même employeur :</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>un autre contrat d&apos;apprentissage à durée limitée pour une certification différente, de même niveau ou non (aucun délai n&apos;est exigé entre les 2 contrats),</li>
                            <li>un contrat de professionnalisation en CDD ou en CDI.</li>
                          </ul>
                        </div>
                        <p className="font-bold text-black">
                          Le gouvernement poursuit son engagement en faveur des entreprises recrutant des apprentis. Ainsi, pour tous les contrats d&apos;apprentissage conclus des aides sont accordées, d&apos;un montant maximal de 5 000€ (jusqu&apos;à 6000€ pour une personne en situation de handicap).
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="rights" className="scroll-mt-32 space-y-10">
          <div className="space-y-6">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              Droits et devoirs de l&apos;alternant
            </h2>
            <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed font-medium max-w-4xl">
              <p>Si l&apos;alternance est un tremplin vers l&apos;emploi et la professionnalisation, la législation impose un cadre.</p>
              <p className="font-bold text-black">Droits et devoirs sont à connaître avant de s&apos;engager !</p>
            </div>
          </div>

          <div className="space-y-10 max-w-4xl">
            <div className="space-y-6">
              <h3 className="text-[22px] font-bold text-black">Droits</h3>

              <div className="space-y-4 text-[14px] text-gray-800 leading-relaxed">
                <div>
                  <p className="font-bold text-black mb-2">Période d&apos;essai</p>
                  <p>L&apos;apprenti dispose d&apos;une période d&apos;essai de 45 jours, en comptant uniquement les jours de présence, consécutifs ou non, en entreprise. En cas de difficultés rencontrées pendant cette période, le premier réflexe est de contacter son CFA pour trouver des solutions et éviter la rupture du contrat. Depuis la réforme de janvier 2019, l&apos;employeur, l&apos;apprenti ou son responsable légal, peuvent saisir des médiateurs de l&apos;apprentissage à la chambre de commerce et d&apos;industrie.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Temps de travail</p>
                  <p>Le temps de travail de l&apos;apprenti est identique à celui des autres salariés. La durée légale du travail effectif est fixée à 35 heures par semaine. Le temps de formation en centre de formation des apprentis (CFA) est du temps de travail effectif et compte dans l&apos;horaire de travail. Les années de formation en apprentissage sont capitalisées comme des années pleines à valoir sur la retraite.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Temps de repos</p>
                  <p>Le temps de repos hebdomadaire est au minimum de 24 heures consécutives, auquel s&apos;ajoute le temps de repos quotidien qui est au minimum de 11 heures consécutives. Le temps de pause quotidien est au minimum de 20 minutes pour 6 heures consécutives de travail</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Rémunération</p>
                  <p>Une fiche de paie est éditée chaque mois pour l&apos;apprenti. La rémunération est fixée en fonction de l&apos;âge, de la durée du contrat et du diplôme envisagé. Le taux varie entre 27 et 100 % du SMIC ou du SMC (salaire minimum conventionnel) selon l&apos;expérience. L&apos;apprenti bénéficie d&apos;une exonération d&apos;impôts sur le revenu si le salaire ne dépasse pas le SMIC annuel.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Congés</p>
                  <p>Comme tout salarié, entre le 1er juin et le 31 mai, l&apos;apprenti cumule 2,5 jours ouvrables de congés au minimum par mois travaillé. Il est possible de demander 5 jours supplémentaires pour la préparation du diplôme pour des journées de révision intégrées au planning annuel de la formation. De plus, en cas d&apos;évènement particulier, notamment familial, des congés sont prévus dans la loi ou la convention collective de l&apos;entreprise (mariage, décès, etc.).</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Couverture sociale</p>
                  <p>L&apos;apprenti est assuré social et bénéficie de la même protection sociale que les autre salariés (sans être assujetti aux cotisations : assurance maladie, maternité, invalidité, vieillesse, accidents du travail et maladies professionnelles). La prise en charge concerne les congés maladie, les accidents de travail, maladies professionnelles, etc. De plus, l&apos;employeur doit proposer une mutuelle à l&apos;apprenti. Lors de votre premier emploi, votre employeur doit faire une déclaration préalable à l&apos;embauche – DPAE. De votre côté, vous devez informer la Caisse d&apos;Assurance Maladie de votre nouveau statut d&apos;apprenti. L&apos;apprenti bénéficie d&apos;un examen médical dans les deux mois qui suivent l&apos;embauche (visite d&apos;embauche auprès de la médecine du travail).</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Prise en charge des frais</p>
                  <p>L&apos;employeur doit prendre en charge 50% des déplacements professionnels effectués en transport en commun (art. L. 3261-2 du code du travail). Pour les frais liés à un véhicule personnel, la prise en charge dépend des entreprises. Si l&apos;entreprise met à la disposition des salariés des tickets restaurant ou une cantine, alors l&apos;apprenti en bénéficie également.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Formation gratuite</p>
                  <p>Les coûts de la formation sont gratuits pour l&apos;apprenti. C&apos;est l&apos;Opco (opérateurs de compétences) auquel cotise l&apos;entreprise qui finance le contrat d&apos;apprentissage ; avec la prise en charge éventuelle d&apos;un solde à charge par l&apos;entreprise.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Apprentis en situation de handicap</p>
                  <p>Des aménagements peuvent être apportés relativement aux conditions de mises en place du contrat d&apos;apprentissage, à la durée du contrat et à sa rupture, à la succession des contrats d&apos;apprentissage, aux obligations de l&apos;employeur, à la durée du temps de travail dans l&apos;entreprise (art. L6222-37 du code du travail).</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Redoublement</p>
                  <p>En cas d&apos;échec à l&apos;examen, l&apos;apprentissage peut être prolongé pour une durée d&apos;un an au plus soit par prorogation du contrat initial, soit par conclusion d&apos;un nouveau contrat avec un autre employeur (art. L. 6222-11 du code du travail). La durée minimale est de 240 heures pour l&apos;année de prolongation ; ce minimum pouvant être réduit en cas de prolongation de l&apos;apprentissage pour une durée inférieure (art. R6233-53 du code du travail).</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[22px] font-bold text-black">Devoirs</h3>
              <div className="space-y-4 text-[14px] text-gray-800 leading-relaxed">
                <div>
                  <p className="font-bold text-black mb-2">Travail, formation et assiduité</p>
                  <p>L&apos;apprenti doit être inscrit dans un établissement, suivre les cours assidument, effectuer les tâches confiées par son entreprise et se présenter aux examens.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Respect des règles</p>
                  <p>L&apos;apprenti doit respecter les règles de son entreprise d&apos;accueil et de son centre de formation (règlement intérieur) ainsi que les règles d&apos;hygiène et les consignes de sécurité.</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Attitude professionnelles</p>
                  <p>Pour développer une image positive et prouver ses capacités à s&apos;insérer dans l&apos;entreprise, l&apos;apprenti doit respecter les horaires de travail. En cas d&apos;absence, l&apos;apprenti doit transmettre à l&apos;entreprise ou au CFA ses justificatifs tels qu&apos;ils sont définis par le code du travail. Les autres absences sont considérées comme injustifiées. L&apos;apprenti doit être loyal et de bonne foi avec son employeur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="references" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
            Sites de référence
          </h2>
          <ul className="space-y-3 max-w-4xl">
            {referenceSites.map((site, idx) => (
              <li key={idx}>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-black underline hover:text-primary-red transition-colors"
                >
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
