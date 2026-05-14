"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import Link from "next/link";
import { 
  Users, 
  Building,
  Send,
  MessageCircle,
  Leaf,
  PiggyBank,
  Banknote,
  Handshake,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VAEPageFR() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("etape-1");

  const sections = [
    { id: "accessibles", label: "LES FORMATIONS ACCESSIBLES PAR LE BIAIS DE LA VAE" },
    { id: "etapes", label: "LES DIFFÉRENTES ÉTAPES DE LA VALIDATION DES ACQUIS DE L'EXPÉRIENCE" },
    { id: "aides", label: "LES AIDES À LA VAE" },
    { id: "reference", label: "SITE DE RÉFÉRENCE" },
    { id: "details", label: "DEMANDER PLUS DE DÉTAILS" },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const etapes = [
    {
      id: "etape-1",
      title: "Etape 1 : je m'informe",
      content: (
        <div className="space-y-4">
          <p>Elle permet de découvrir en détail le dispositif de la Validation des Acquis de l'Expérience et offre l'occasion de comprendre les conditions d'accès, les certifications disponibles et le déroulement global du parcours.</p>
          <p>Cette première étape aide à vérifier la pertinence de la VAE par rapport à son projet professionnel et à identifier les ressources d'accompagnement possibles.</p>
          <p>C'est également le moment de rassembler les premières informations nécessaires pour construire son dossier en toute sérénité.</p>
        </div>
      )
    },
    {
      id: "etape-2",
      title: "Etape 2 : je constitue mon dossier de recevabilité",
      content: (
        <div className="space-y-4">
          <p>Le dossier de demande de VAE se compose de plusieurs rubriques essentielles.</p>
          <p>Dans la <span className="font-bold">Rubrique 1</span>, vous précisez la nature de votre demande : première demande, renouvellement ou prolongation.</p>
          <p>La <span className="font-bold">Rubrique 2</span> concerne la certification professionnelle visée ; il est nécessaire d'indiquer son intitulé complet, son niveau et l'autorité qui la délivre.</p>
          <p>La <span className="font-bold">Rubrique 3</span> rassemble vos informations personnelles et professionnelles (état civil, coordonnées, situation actuelle, éventuel handicap).</p>
          <p>La <span className="font-bold">Rubrique 4</span> détaille votre parcours scolaire et vos certifications déjà obtenues.</p>
          <p>La <span className="font-bold">Rubrique 5</span>, particulièrement importante, doit présenter vos expériences en lien direct avec la certification visée, en décrivant les missions exercées et leur durée.</p>
          <p>Enfin, la <span className="font-bold">Rubrique 6</span> correspond à une déclaration sur l'honneur attestant de l'exactitude des informations fournies et du respect des conditions d'éligibilité à la VAE.</p>
          <p>Il ne faut pas oublier de joindre les justificatifs nécessaires.</p>
        </div>
      )
    },
    {
      id: "etape-3",
      title: "Etape 3 : je constitue mon dossier de validation",
      content: (
        <div className="space-y-4">
          <p>Pour chaque diplôme, une trame spécifique de dossier de validation est proposée afin de guider le candidat et de répondre aux attendus du certificateur.</p>
          <p>Cette trame comprend généralement plusieurs volets : les informations relatives à l'identité du candidat, la présentation de ses expériences sous forme de parcours professionnel (similaire à un CV), les motivations qui l'ont conduit à s'engager dans une démarche de VAE, ainsi qu'une analyse détaillée de ses activités en lien avec la certification visée.</p>
          <p>Enfin, un encart est réservé à la signature du candidat, par laquelle il atteste sur l'honneur être l'auteur du dossier.</p>
        </div>
      )
    },
    {
      id: "etape-4",
      title: "Etape 4 : jury",
      content: (
        <div className="space-y-4">
          <p>Les jurys de VAE sont encadrés par le référentiel du diplôme concerné, ce qui explique que certaines règles puissent varier d'une certification à l'autre. Néanmoins, leur fonctionnement repose sur des principes communs.</p>
          <p>Le jury occupe un rôle central : il examine le dossier de validation du candidat, l'interroge afin de vérifier l'adéquation de ses acquis avec les compétences attendues, puis rend sa décision quant à l'obtention de la certification.</p>
          <p>Sa composition réunit généralement au moins deux membres, pouvant être des professionnels du secteur, des experts du diplôme ou encore des représentants du certificateur.</p>
          <p>Les modalités d'évaluation sont définies par le certificateur, qui convoque le candidat en précisant les conditions de passage.</p>
          <p>Le jour J, l'évaluation peut prendre la forme d'un entretien oral – où le candidat expose ses motivations, ses expériences et répond aux questions du jury – et/ou d'une mise en situation professionnelle, réelle ou reconstituée, destinée à apprécier concrètement ses compétences.</p>
        </div>
      )
    },
    {
      id: "etape-5",
      title: "Etape 5 : résultat",
      content: (
        <div className="space-y-4">
          <p>À l'issue de son passage devant le jury, le candidat reçoit une décision officielle concernant sa demande de Validation des Acquis de l'Expérience.</p>
          <p>Trois issues sont possibles :</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>une validation <span className="font-bold">totale</span>, qui permet d'obtenir immédiatement la certification visée ;</li>
            <li>une validation <span className="font-bold">partielle</span>, où certaines compétences sont reconnues mais d'autres doivent encore être acquises, par exemple via une formation complémentaire ou une nouvelle expérience ;</li>
            <li>un <span className="font-bold">refus de validation</span> si les acquis présentés ne correspondent pas suffisamment aux exigences du diplôme.</li>
          </ul>
          <p>Dans tous les cas, la décision du jury est notifiée par écrit au candidat.</p>
        </div>
      )
    }
  ];

  return (
    <main className="!bg-white">
      <PageBanner 
        title="Validation des Acquis de l'Expérience (VAE)" 
        image="/assets/pexels-olly-3756679-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium mb-16">
          <p>La Validation des Acquis de l'Expérience (VAE) offre la possibilité d'obtenir une certification professionnelle en valorisant les compétences acquises au cours d'expériences professionnelles, personnelles ou bénévoles. La certification obtenue par ce biais possède la même valeur que celle délivrée à l'issue d'une formation initiale ou continue.</p>
        </div>

        {/* Section 1: Formations Accessibles */}
        <section id="accessibles" className="scroll-mt-32 space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              LES FORMATIONS ACCESSIBLES PAR LE BIAIS DE LA VAE
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Du BTS au Bachelor, nos titres en français sont pour la plupart accessible en VAE, selon des modalités différentes selon les titres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 text-white">
            <Link href="/fr/formations/bts-communication" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <MessageCircle size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BTS<br/>Communication</h3>
                <p className="text-[14px]">Diplôme d'Etat de l'Education Nationale - BAC+2</p>
              </div>
            </Link>
            <Link href="/fr/formations/bts-tourisme" className="bg-[#333333] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Send size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BTS Tourisme</h3>
                <p className="text-[14px]">Diplôme d'Etat de l'Education Nationale - BAC+2</p>
              </div>
            </Link>
            <Link href="/fr/formations/bachelor-durable" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Leaf size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR<br/>Responsable du Développement Touristique Durable et Digital</h3>
                <p className="text-[14px]">Titre RNCP - BAC+3</p>
              </div>
            </Link>
            <Link href="/fr/formations/bachelor-hospitality" className="bg-[#333333] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Building size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR<br/>Hospitality Management</h3>
                <p className="text-[14px]">Titre RNCP - BAC+3</p>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 text-white mt-0">
            <Link href="/fr/formations/bachelor-mice" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] md:col-span-1 hover:brightness-110 transition-all cursor-pointer group">
              <Users size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR MICE<br/>Designer</h3>
                <p className="text-[14px]">Titre RNCP - BAC+3</p>
              </div>
            </Link>
            <div className="md:col-span-3"></div>
          </div>
        </section>

        {/* Section 2: Étapes */}
        <section id="etapes" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            LES DIFFÉRENTES ÉTAPES DE LA VALIDATION DES ACQUIS DE L'EXPÉRIENCE
          </h2>
          
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
            <p>La VAE est accessible à tous, sans distinction d'âge, de statut ou de niveau de formation. Toutes les expériences en lien avec la certification visée, y compris le bénévolat, peuvent être prises en compte. Véritable levier d'évolution professionnelle, elle permet de :</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Valoriser ses compétences</li>
              <li>Donner du sens et de la cohérence à son parcours</li>
              <li>Relancer ou dynamiser sa carrière</li>
              <li>Anticiper ou accélérer une évolution de poste</li>
              <li>Changer d'orientation professionnelle</li>
            </ul>
            <p className="pt-4">Le parcours de VAE s'organise en plusieurs étapes, indispensables, pour lesquelles nous recommandons un accompagnement qui vous permettra de réaliser chacune d'elles en toute sérénité.</p>
            <p className="italic">Que vous réalisiez votre VAE avec un accompagnement ou en autonomie, des frais liés au jury sont à prévoir. Les conditions et modalités de ce jury vous seront précisées avant tout engagement dans un parcours VAE.</p>
          </div>

          <div className="relative rounded-sm overflow-hidden p-6 md:p-12 mt-8">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/assets/pexels-samjjohnson-1764956-scaled.jpg")' }}
            />
            
            <div className="relative z-10">
              {etapes.map((etape) => (
                <div key={etape.id} className="overflow-hidden border-b border-white last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(etape.id)}
                    className="w-full bg-[#E54841] text-white px-6 h-[60px] flex items-center gap-4 transition-colors hover:bg-primary-red/90"
                  >
                    {openAccordion === etape.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide">{etape.title}</span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === etape.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-white/95 backdrop-blur-sm"
                      >
                        <div className="p-8 text-[15px] text-gray-800 leading-relaxed font-medium">
                          {etape.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Aides */}
        <section id="aides" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            LES AIDES À LA VAE
          </h2>
          
          <div className="rounded-sm overflow-hidden flex flex-col">
            <div className="relative h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/pexels-divinetechygirl-1181303-scaled.jpg")' }}
              />
              <div className="relative z-10 h-full flex items-center p-8 md:p-12">
                <div className="bg-white/40 backdrop-blur-sm p-8 max-w-lg">
                  <p className="text-[16px] text-gray-900 font-medium leading-relaxed">
                    Pour vous permettre de réaliser votre projet de VAE, vous pouvez mobiliser diverses aides pour répondre aux mieux à vos besoins.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#8B2B23] text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <PiggyBank size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Compte Personnel de Formation (CPF)</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>Il est possible de financer tout ou partie de votre VAE en utilisant vos droits au Compte Personnel de Formation.</p>
                  <p><span className="font-bold">Attention :</span> Une participation forfaitaire, indexée sur l'inflation, est obligatoire. Elle s'élève à date à environ 100€.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Banknote size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Abondements</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>Si le montant du CPF ne couvre pas la totalité des frais, d'autres sources de financement peuvent intervenir : votre employeur, votre OPCO, le conseil régional, le conseil départemental, votre mairie, France Travail, etc.</p>
                  <p>Les frais supplémentaires liés à la formation, tels que le transport, l'hébergement ou les repas, ne sont pas pris en charge.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Handshake size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Accompagnement</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>L'accompagnement n'est pas obligatoire, vous pouvez choisir de faire votre VAE de façon autonome.</p>
                  <p>Toutefois, nous le recommandons car il permet d'être accompagné par un professionnel qui connait la VAE et le titre sur le bout des doigts : il saura vous orienter dans l'élaboration de votre projet !</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Site de référence */}
        <section id="reference" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            SITE DE RÉFÉRENCE
          </h2>
          <div>
            <a 
              href="https://vae.gouv.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[18px] text-black underline hover:text-primary-red transition-colors font-medium"
            >
              Le portail officiel de la VAE
            </a>
          </div>
        </section>

        {/* Section 5: Demander plus de détails */}
        <section id="details" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            DEMANDER PLUS DE DÉTAILS
          </h2>
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
            <p>Entièrement gratuit, ce temps d'échange permettra de répondre à vos questions et de définir votre projet et vos besoins.</p>
            <p>Pour prévoir votre rendez-vous, <Link href="/fr/contact" className="text-[#E54841] hover:underline transition-colors">demandez simplement un rappel !</Link></p>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
