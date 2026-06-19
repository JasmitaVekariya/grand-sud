import Link from "next/link";
import type { ReactNode } from "react";

export type ApprenticeRegulationSection = {
  id: string;
  title: string;
  content: ReactNode;
};

const contentClass = "p-8 space-y-6 text-[14px] md:text-[15px] text-gray-800 leading-relaxed";

const frSections: ApprenticeRegulationSection[] = [
  {
    id: "contractualisation",
    title: "Contractualisation",
    content: (
      <div className={contentClass}>
        <p>L&apos;alternance peut prendre 2 formes :</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>alternance par le biais du contrat de professionnalisation</li>
          <li>alternance par le biais du contrat d&apos;apprentissage</li>
        </ul>
        <p>
          A ce jour, la grande majorité des contrats d&apos;alternance signés le sont via un contrat d&apos;apprentissage, suite à l&apos;arrêt des aides pour les contrats de professionnalisation.
        </p>
        <p>
          Le contrat est formalisé notamment par la rédaction et la signature du CERFA adapté au type de contrat souhaité par l&apos;entreprise, l&apos;alternant et le CFA.
        </p>
      </div>
    ),
  },
  {
    id: "apprenticeship",
    title: "Contrat d'apprentissage",
    content: (
      <div className={contentClass}>
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
          <p>
            Toute entreprise du secteur privé, y compris les associations, peut embaucher un apprenti. L&apos;employeur doit déclarer prendre les mesures nécessaires à l&apos;organisation de l&apos;apprentissage. À ce titre, l&apos;employeur doit notamment garantir que l&apos;équipement de l&apos;entreprise, les techniques utilisées, les conditions de travail, d&apos;hygiène et de sécurité, les compétences professionnelles et pédagogiques du maître d&apos;apprentissage sont de nature à permettre une formation satisfaisante.
          </p>
          <p>
            Le secteur public non industriel et commercial, dont les 3 fonctions publiques (état, territoriale et hospitalière), peut également recourir à l&apos;apprentissage.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Conditions de travail et rémunération</p>
          <p>
            L&apos;apprenti est un salarié à part entière. À ce titre, les lois, les règlements et la convention collective de la branche professionnelle ou de l&apos;entreprise lui sont applicables dans les mêmes conditions qu&apos;aux autres salariés. Le temps de travail de l&apos;apprenti est identique à celui des autres salariés. L&apos;employeur doit permettre à l&apos;apprenti de suivre les cours théoriques professionnels. Ce temps est compris dans le temps de travail effectif et rémunéré comme tel.
          </p>
          <p>
            Pendant la durée du contrat, l&apos;apprenti perçoit une rémunération variant en fonction de son âge. En outre, sa rémunération progresse chaque nouvelle année calendaire d&apos;exécution de son contrat.
          </p>
          <p>
            Le salaire minimum réglementaire perçu par l&apos;apprenti correspond à un pourcentage du Smic ou du SMC (salaire minimum conventionnel de l&apos;emploi occupé).
          </p>
          <p>
            En 2025, le salaire mensuel brut d&apos;un alternant peut varier entre 486,49€ et 1801,80€. Un tableau ainsi qu&apos;un simulateur sont mis à disposition par le gouvernement pour connaître le montant exact de la rémunération à verser.
          </p>
          <p>L&apos;apprenti préparant une licence professionnelle en 1 an bénéficie d&apos;une rémunération correspondant à une 2e année de contrat.</p>
          <p>Les montants peuvent être majorés si un accord collectif applicable dans l&apos;entreprise fixe une rémunération minimale plus élevée.</p>
          <p>Des retenues pour avantages en nature (nourriture ou logement) prévus au contrat d&apos;apprentissage peuvent être effectuées dans la limite de 75 % du salaire.</p>
          <p>L&apos;apprenti a droit à la prise en charge de ses frais de transport pour se rendre de son domicile à son travail.</p>
          <p>Les conditions de rémunération des heures supplémentaires sont celles qui sont applicables au personnel de l&apos;entreprise concernée.</p>
          <p>
            Lorsqu&apos;un apprenti conclut un nouveau contrat d&apos;apprentissage avec le même employeur ou avec un employeur différent, sa rémunération est au moins égale à celle qu&apos;il percevait lors de la dernière année d&apos;exécution du contrat précédent s&apos;il a validé le titre visé, sauf quand l&apos;application des rémunérations liées à l&apos;âge est plus favorable.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Période d&apos;essai</p>
          <p>Durant les 45 premiers jours (consécutifs ou non) en entreprise, le contrat peut être rompu sans motif par l&apos;employeur ou par l&apos;apprenti</p>
          <p>
            La rupture unilatérale du contrat par l&apos;une des parties pendant cette période ou la rupture convenue d&apos;un commun accord doit être constatée par écrit et notifiée au directeur du CFA.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Prise en charge de la formation et démarches à effectuer</p>
          <p>
            Le contrat d&apos;apprentissage est conclu à l&apos;aide d&apos;un formulaire type signé par l&apos;employeur et l&apos;apprenti (cerfa N°10103). L&apos;employeur doit envoyer la demande de prise en charge du contrat à l&apos;opérateur de compétences (OPCO) auquel il cotise au plus tard 5 jours après le début du contrat. Il est toutefois conseillé aux employeurs de déposer le dossier avant le début du contrat, afin de s&apos;assurer auprès de l&apos;OPCO de sa conformité et de la prise en charge des dépenses de formation.
          </p>
          <p>
            L&apos;opérateur de compétences a 20 jours pour statuer sur la prise en charge du contrat. Sans réponse de l&apos;OPCO dans ce délai, la demande est refusée.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Succession de contrats</p>
          <p>Après un contrat d&apos;apprentissage en CDD, il est possible de conclure avec le même employeur :</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>un autre contrat d&apos;apprentissage à durée limitée pour une certification différente, de même niveau ou non (aucun délai n&apos;est exigé entre les 2 contrats),</li>
            <li>un contrat de professionnalisation en CDD ou en CDI.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "professionalization",
    title: "Contrat de professionnalisation",
    content: (
      <div className={contentClass}>
        <p>
          Le contrat de professionnalisation est un contrat de travail en alternance entre un employeur et un salarié répondant à certains critères. Il peut être conclu avec tout type d&apos;employeur privé, assujetti au financement de la formation professionnelle continue, sauf les particuliers employeurs. Il peut être signé en CDD (pour une durée de 6 mois minimum à 24 mois maximum) ou en CDI. Pour l&apos;accompagner dans sa montée en compétences, le salarié bénéficie du soutien d&apos;un tuteur.
        </p>
        <div className="space-y-4">
          <p className="font-bold text-black">Le contrat de professionnalisation vise l&apos;obtention d&apos;un titre ou diplôme correspondant à une qualification :</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>enregistrée dans le répertoire national des certifications professionnelles – RNCP (c&apos;est le cas des formations dispensées par Grand Sud Formation),</li>
            <li>ou reconnues dans les classifications d&apos;une convention collective nationale de branche,</li>
            <li>ou figurant sur la liste ouvrant droit à un certificat de qualification professionnelle.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Il s&apos;adresse :</p>
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
          <p>
            Le titulaire d&apos;un contrat de professionnalisation est un salarié à part entière. À ce titre, les lois, les règlements et la convention collective lui sont applicables dans les mêmes conditions qu&apos;aux autres salariés, dans la mesure où leurs dispositions ne sont pas incompatibles avec les exigences de leur formation. Le temps de travail est identique à celui des autres salariés de l&apos;entreprise. Attention, le temps de formation est inclus dans le temps de travail.
          </p>
          <p>Pendant la durée du contrat, l&apos;alternant perçoit une rémunération, dont le montant varie en fonction de :</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>son âge,</li>
            <li>son niveau de formation initial,</li>
            <li>la convention collective appliquée dans l&apos;entreprise d&apos;accueil.</li>
          </ul>
          <p>Cette rémunération ne peut être inférieure aux montants donnés sur le site gouvernemental.</p>
          <p>Des dispositions conventionnelles ou contractuelles peuvent prévoir une rémunération plus favorable pour le salarié.</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Période d&apos;essai</p>
          <p>Dans le cadre d&apos;un contrat de 6 mois minimum signé à durée déterminée, la période d&apos;essai dure 1 mois maximum.</p>
          <p>Pour les contrats de professionnalisation signés à durée indéterminée, la durée de la période d&apos;essai dépend de la classification du poste dans la convention collective.</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Prise en charge de la formation et démarches à effectuer</p>
          <p>
            Quelle que soit la forme du contrat (à durée déterminée ou CDI), il doit être établi par écrit, et signé par l&apos;employeur et le salarié (cerfa N°12434). L&apos;employeur doit envoyer la demande de prise en charge du contrat à l&apos;opérateur de compétences (OPCO) auquel il cotise au plus tard 5 jours après le début du contrat. Il est toutefois conseillé aux employeurs de déposer le dossier avant le début du contrat, afin de s&apos;assurer auprès de l&apos;OPCO de sa conformité et de la prise en charge des dépenses de formation. L&apos;OPCO dispose de 20 jours pour s&apos;opposer au contrat et l&apos;annuler, s&apos;il estime que celui-ci comprend des dispositions illégales ou non conformes à la convention collective.
          </p>
          <p>Dans la limite des 24 mois maximum, le contrat de professionnalisation :</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>peut débuter en entreprise jusqu&apos;à 2 mois avant le premier cours en centre de formation</li>
            <li>peut se terminer 1 mois après les examens de validation du titre visé.</li>
          </ul>
          <p>
            Concernant les dates de mise en place du contrat, les OPCO accordent généralement 2 mois de flexibilité, qui peuvent être répartis avant la rentrée et après les examens (si le contrat débute 2 mois avant le premier cours, il faudra donc le faire terminer à la date de fin des examens).
          </p>
          <p>
            Dans le cadre d&apos;un contrat signé à durée indéterminée, la durée maximale de 24 mois porte sur la période des actions de professionnalisation, c&apos;est-à-dire du premier jour en centre de formation jusqu&apos;au dernier jour des examens. A l&apos;issue de cette période, le contrat se poursuit dans le cadre d&apos;un contrat de travail à durée indéterminée de droit commun.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-black">Renouvellement du contrat</p>
          <p>Le contrat de professionnalisation à durée déterminée peut être renouvelé 1 fois avec le même employeur :</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>si le bénéficiaire ayant obtenu la qualification visée prépare une qualification supérieure ou complémentaire,</li>
            <li>si le bénéficiaire n&apos;a pas obtenu la qualification visée pour l&apos;un des motifs suivants : échec à l&apos;obtention de la qualification, maternité ou adoption, maladie, accident du travail, absence ou insuffisance des cours dispensés par l&apos;organisme de formation.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "aides",
    title: "Aides",
    content: (
      <div className={contentClass}>
        <p>
          Le gouvernement poursuit son engagement en faveur des entreprises recrutant des apprentis. Ainsi, pour tous les contrats d&apos;apprentissage conclus des aides sont accordées, d&apos;un montant maximal de 5 000€ (6000€ pour un apprenti en situation de handicap).
        </p>
        <p>
          Aucune démarche particulière n&apos;est nécessaire pour bénéficier de l&apos;aide, il suffit pour l&apos;entreprise de déclarer l&apos;embauche de l&apos;apprenti auprès de son OPCO. L&apos;aide est ensuite versée automatiquement par l&apos;Agence de services et de paiement (ASP) tous les mois pendant la première année du contrat d&apos;apprentissage, avant le paiement du salaire. L&apos;entreprise reçoit un avis de paiement consultable sur la plateforme SYLAé.
        </p>
        <p>
          En revanche, l&apos;aide ne s&apos;applique plus aux contrats de professionnalisation conclus depuis le 30 avril 2024 (cf. décret n° 2024-392 du 27 avril 2024).
        </p>
        <p>
          <Link
            href="https://travail-emploi.gouv.fr/formation-professionnelle/apprentissage-et-alternance/article/aide-financiere-a-l-embauche-d-un-apprenti"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black underline hover:text-primary-red transition-colors"
          >
            Tout savoir sur les aides à l&apos;apprentissage
          </Link>
        </p>
        <p>Les frais de formation sont, quant à eux, pris en charge en totalité ou en partie par l&apos;OPCO de l&apos;entreprise.</p>
        <p>
          Depuis le 1er juillet 2025, un reste à charge obligatoire d&apos;un montant de 750€ sera facturé par le centre de formation à l&apos;entreprise d&apos;accueil.
        </p>
        <p>
          <Link
            href="https://travail-emploi.gouv.fr/formation-professionnelle/apprentissage-et-alternance/article/le-contrat-d-apprentissage"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black underline hover:text-primary-red transition-colors"
          >
            En savoir plus sur cette réforme
          </Link>
        </p>
      </div>
    ),
  },
];

const enSections: ApprenticeRegulationSection[] = [
  {
    id: "contractualisation",
    title: "Contract formalization",
    content: (
      <div className={contentClass}>
        <p>Work-study programs can take two forms:</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>work-study through a professionalization contract</li>
          <li>work-study through an apprenticeship contract</li>
        </ul>
        <p>
          To date, the vast majority of work-study contracts signed are apprenticeship contracts, following the end of subsidies for professionalization contracts.
        </p>
        <p>
          The contract is formalized in particular by drafting and signing the CERFA form adapted to the type of contract chosen by the company, the apprentice and the CFA.
        </p>
      </div>
    ),
  },
  {
    id: "apprenticeship",
    title: "Apprenticeship contract",
    content: frSections[1].content,
  },
  {
    id: "professionalization",
    title: "Professionalization contract",
    content: frSections[2].content,
  },
  {
    id: "aides",
    title: "Financial support",
    content: frSections[3].content,
  },
];

export function getApprenticeRegulations(lang: "en" | "fr") {
  return {
    backgroundImage: "/assets/pexels-pixabay-262978-scaled.jpg",
    intro: lang === "fr"
      ? "En France, les alternances sont encadrés par une réglementation visant à protéger les jeunes et à garantir que cette expérience professionnelle soit qualitative. Elle permet aussi aux entreprises de bénéficier d'aides pour l'embauche de ce type de salarié."
      : "In France, work-study programs are governed by regulations designed to protect young people and ensure that this professional experience is of high quality. It also allows companies to benefit from subsidies for hiring this type of employee.",
    sections: lang === "fr" ? frSections : enSections,
  };
}
