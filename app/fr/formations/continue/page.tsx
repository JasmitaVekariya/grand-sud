"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Coins, 
  FileCheck, 
  Award,
  Search,
  UserCheck,
  Building2,
  Handshake,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Laptop,
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContinuingEducationPageFR() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("management-basics");

  const sections = [
    { id: "proposees", label: "LES FORMATIONS CONTINUES PROPOSÉES" },
    { id: "stages", label: "LES STAGES" },
    { id: "reference", label: "SITE DE RÉFÉRENCE" },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  return (
    <main className="!bg-white">
      <PageBanner 
        title="La formation continue" 
        image="/assets/pexels-fauxels-3184418-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Formations Proposées */}
        <section id="proposees" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              LES FORMATIONS CONTINUES PROPOSÉES
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Nous proposons diverses formations, adaptées à des professionnels en recherche de formations continue :</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>des formations certifiantes intensives, permettant d'améliorer son CV :</li>
              </ul>
            </div>

            {/* Grid for Amadeus and Voyage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-[#333333] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[300px]">
                <div className="border-2 border-white/40 p-4 rounded-sm">
                  <Laptop size={64} strokeWidth={1} className="opacity-90" />
                </div>
                <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">GDS AMADEUS</h3>
              </div>
              <div className="bg-[#8B2B23] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[300px]">
                <Send size={64} strokeWidth={1} className="opacity-90" />
                <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">CONSEILLER VOYAGE</h3>
              </div>
            </div>

            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium pt-8">
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>des formations qualifiantes Grand Sud Executive sur 1 à 2 jours, permettant de perfectionner un savoir-faire ou un savoir-être et d'appliquer les acquis immédiatement en entreprise :</li>
              </ul>
            </div>

            {/* Accordions for Management Modules with Background */}
            <div className="relative rounded-sm overflow-hidden p-6 md:p-12 mt-8">
              {/* Background Image Container */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/pexels-fauxels-3184418-scaled.jpg")' }}
              />

              <div className="relative z-10 space-y-4">
              {[
                {
                  id: "management-basics",
                  title: "Les fondamentaux du management",
                  objectifs: [
                    "Acquérir les outils de base du manager",
                    "Adopter la posture adéquate dans les différents temps forts de mon quotidien de manager",
                    "Prendre du recul et ajuster mes pratiques pour s'assurer d'une efficacité dans la relation managériale et dans ma communication interpersonnelle"
                  ],
                  preRequis: "Aucun",
                  programme: [
                    {
                      subtitle: "Prendre conscience de son rôle de manager :",
                      content: "les attentes et les enjeux de l'entreprise et de l'équipe envers le manager, les savoir-faire et savoir-être du manager, auto-évaluation sur la capacité à tenir le rôle de manager"
                    },
                    {
                      subtitle: "Adopter le bon style de management selon la situation :",
                      content: "identifier l'incidence de votre personnalité sur votre style de management, découvrir et s'adapter aux différents profils de vos collaborateurs, fédérer son équipe par des rituels collectifs, poser les bases d'une relation basée sur la confiance, fixer et faire vivre les règles du jeu de l'équipe, préparer et animer une réunion"
                    },
                    {
                      subtitle: "Actionner les leviers de motivation de mes collaborateurs :",
                      content: "comprendre les leviers de motivation de la performance, préparer et mener des entretiens de délégation efficaces et motivants, valoriser et encourager vos collaborateurs, recadrer un collaborateur"
                    }
                  ]
                },
                {
                  id: "professional-relations",
                  title: "Optimiser ses relations professionnelles",
                  intro: "Parce qu'une connaissance de soi-même, de ses qualités, défauts et de son fonctionnement personnel permet de gagner en efficience et de mieux interagir avec les autres en milieu professionnel. Grand Sud Formation propose une formation de deux jours centrée sur des outils et comportements qui permettent de mieux interagir dans un contexte professionnel. Cette formation permet d'acquérir de premiers outils essentiels et pratiques qui permettent de gagner en assurance et d'optimiser ses relations professionnelles.",
                  objectifs: [
                    "Adapter ses comportements aux situations professionnelles",
                    "Développer des relations professionnelles, harmonieuses et efficaces",
                    "Améliorer l'efficacité de son relationnel",
                    "Savoir gérer son stress"
                  ],
                  preRequis: "Aucun",
                  programme: [
                    {
                      subtitle: "Appréhender les règles de l'assertivité :",
                      content: "analyser ses qualités et ses limites comportementales, changer son système de réactions spontanées, développer et renforcer sa confiance en soi, gérer les critiques"
                    },
                    {
                      subtitle: "Comprendre les mécanismes de l'intelligence émotionnelle :",
                      content: "identifier les composantes de l'intelligence émotionnelle, décrypter le langage des émotions dans ses relations professionnelles, exprimer son émotion de manière constructive avec la méthode DESC"
                    },
                    {
                      subtitle: "Maîtriser les bases de l'écoute active :",
                      content: "comprendre les fondements de l'écoute active, créer un climat de confiance grâce à l'écoute de l'autre, ajuster son comportement verbal et non-verbal, optimiser son efficacité relationnelle"
                    },
                    {
                      subtitle: "Découvrir la « théorie FIRO » :",
                      content: "comprendre la méthodologie FIRO, utiliser le FIRO dans un contexte professionnel, tenir compte de la compatibilité des besoins psychologiques"
                    },
                    {
                      subtitle: "Savoir gérer son stress :",
                      content: "définir le stress, s'approprier le mécanisme pensée émotion action, réguler et utiliser ses émotions, nourrir les émotions positives"
                    }
                  ]
                },
                {
                  id: "leadership",
                  title: "Construire et développer son leadership",
                  objectifs: [
                    "Adopter une posture de leader pour mener son projet",
                    "Faire adhérer en communiquant efficacement",
                    "Décliner son projet en actions opérationnelles",
                    "Développer son influence personnelle"
                  ],
                  preRequis: "Exercer des fonctions de manager au sein d'une entreprise, association, etc.",
                  programme: [
                    {
                      subtitle: "Développer ses qualités de leader :",
                      content: "quelles sont les bonnes pratiques des leaders ? Qu'apporte le leadership à la pratique managériale ? Identifier ses talents de leader, mettre en cohérence son système de valeurs avec son propre style de leadership"
                    },
                    {
                      subtitle: "Construire un projet d'équipe et l'incarner :",
                      content: "construire son projet de leader pour son équipe et son organisation, formaliser son projet"
                    },
                    {
                      subtitle: "Communiquer sur son projet en leader :",
                      content: "les clés pour réussir à bien communiquer auprès de son équipe, s'entraîner à des techniques simples de communication dynamique, développer son impact personnel et son charisme"
                    },
                    {
                      subtitle: "Prouver son leadership grâce à des projets réussis :",
                      content: "analyser et évaluer les opportunités du contexte, piloter son projet avec efficacité et succès, s'appuyer sur les ressources existantes et optimiser la mise en œuvre avec les parties prenantes"
                    }
                  ]
                },
                {
                  id: "delegation",
                  title: "Déléguer et responsabiliser ses équipes",
                  objectifs: [
                    "Intégrer les techniques clefs de délégation et responsabilisation",
                    "Maîtriser la fixation d'objectifs et les latitudes de délégation",
                    "Assurer un suivi, développer les compétences et coacher pour mieux déléguer"
                  ],
                  preRequis: "Exercer ses fonctions de manager au sein d'une équipe d'au moins 2 collaborateurs",
                  programme: [
                    {
                      subtitle: "La délégation : instrument de performance individuelle et collective :",
                      content: "délégation et responsabilisation : les grands principes, les freins personnels à la délégation, la dynamique de délégation"
                    },
                    {
                      subtitle: "Les points clefs d'une délégation réussie :",
                      content: "définir quoi et à qui déléguer, définir les étapes et le suivi, communiquer et renforcer l'adhésion"
                    },
                    {
                      subtitle: "Evaluer, contrôler et développer les compétences :",
                      content: "comment contrôler et analyser, rechercher l'amélioration continue, développer les compétences, rendre autonome et responsable"
                    }
                  ]
                },
                {
                  id: "performance",
                  title: "Manager la performance de ses équipes",
                  objectifs: [
                    "Mobiliser son équipe autour d'objectifs clairs et partagés",
                    "Planifier et organiser le travail de son équipe",
                    "Renforcer son leadership et sa capacité à fédérer pour accroître la performance",
                    "Intégrer les différents modes de communication interpersonnelles dans son management",
                    "Développer les compétences individuelles et la performance collective"
                  ],
                  preRequis: "Exercer des fonctions de manager au sein d'une entreprise, association, etc.",
                  programme: [
                    {
                      subtitle: "Fixer le cap : définir les objectifs et le plan de route :",
                      content: "identifier les facteurs indispensables à la performance collective, fixer des objectifs opérationnels pour soi et son équipe : équité & équilibre, finalité, objectifs, leviers d'action, indicateurs de pilotage, rôles et responsabilités, définir des critères d'évaluation mesurables et les communiquer"
                    },
                    {
                      subtitle: "Piloter, organiser le travail de son équipe :",
                      content: "analyser le fonctionnement de son équipe, donner le cadre, décliner les objectifs stratégiques en objectifs opérationnels, déléguer et responsabiliser"
                    },
                    {
                      subtitle: "Animer son équipe : renforcer la performance collective :",
                      content: "comprendre les leviers individuels et collectifs de motivation pour développer la synergie de l'équipe, mettre en place une stratégie relationnelle pour réduire les facteurs démotivants, « Jouer collectif » : renforcer la cohésion d'équipe et le sentiment d'appartenance par un défi commun, faire respecter les règles et partager des bonnes pratiques de travail"
                    },
                    {
                      subtitle: "Optimiser la performance de l'équipe par l'amélioration continue :",
                      content: "analyser l'activité de son équipe pour faire ressortir les freins et les difficultés qui nuisent à la performance, réagir face à la sous performance : le triptyque « voir, décider et agir ensemble », savoir réévaluer la performance au regard des moyens, concilier efficacité de l'équipe et bien-être au travail"
                    }
                  ]
                },
                {
                  id: "project-team",
                  title: "Manager une équipe projet",
                  objectifs: [
                    "Construire et impliquer son équipe projet",
                    "Fédérer des ressources transversales",
                    "Instaurer une dynamique de performance",
                    "Développer son agilité",
                    "Accompagner le changement"
                  ],
                  preRequis: "Exercer des fonctions de manager au sein d'une entreprise, association, etc. Être dans une organisation qui travaille en mode projet ou qui veut instaurer le mode projet.",
                  programme: [
                    {
                      subtitle: "Construire et impliquer son équipe projet :",
                      content: "le chef de projet et l'écosystème, construction de l'équipe, la gestion d'un projet stratégique, le chef de projet et son équipe, identité et valeurs, les rituels relationnels de suivi"
                    },
                    {
                      subtitle: "Fédérer des ressources transversales :",
                      content: "accompagner les contributeurs, prise en compte des spécificités, l'équilibre relation/objectif, formaliser l'esprit d'équipe, un cadre et des règles, les conditions du « faire ensemble »"
                    },
                    {
                      subtitle: "Instaurer une dynamique de performance :",
                      content: "diagnostiquer son équipe, les indicateurs de fonctionnement, les rôles et les étapes de la confiance, manager des contributeurs à distance, les incontournables de l'efficacité, les outils digitaux"
                    },
                    {
                      subtitle: "Développer son agilité :",
                      content: "initier l'agilité dans son équipe, l'esprit agile, l'agilité dans le fonctionnement d'équipe, instaurer des rituels collectifs, innovation collective en réunion, résolution de problèmes avec créativité"
                    },
                    {
                      subtitle: "Accompagner le changement :",
                      content: "comprendre le changement, les différents degrés dans l'organisation, les moteurs de la résistance individuelle"
                    },
                    {
                      subtitle: "Piloter le changement :",
                      content: "les étapes du changement, les actes du chef de projet"
                    }
                  ]
                }
              ].map((item) => (
                <div key={item.id} className="overflow-hidden border-b border-white last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full bg-[#E54841] text-white px-6 h-[60px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                  >
                    <div className="flex items-center gap-4">
                      {openAccordion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-left">{item.title}</span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-white"
                      >
                        <div className="p-8 space-y-8 text-[15px] text-gray-700 leading-relaxed">
                          {item.intro && <p className="font-medium text-gray-900">{item.intro}</p>}
                          
                          <div className="space-y-4">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Objectifs :</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2">
                              {item.objectifs.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Pré-requis :</h4>
                            <p>{item.preRequis}</p>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Programme :</h4>
                            <ul className="list-disc list-outside pl-5 space-y-4">
                              {item.programme.map((prog, i) => (
                                <li key={i}>
                                  <span className="font-bold text-gray-900">{prog.subtitle}</span> {prog.content}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t border-gray-100 space-y-4 text-[14px]">
                            <p><span className="font-bold uppercase">Lieu de formation :</span> Campus Toulouse-Labège</p>
                            <div className="space-y-1">
                              <p className="font-bold uppercase">Durée, dates et horaires :</p>
                              <ul className="list-disc list-outside pl-5 space-y-1">
                                <li><span className="font-bold">Durée :</span> 2 jours de formation, 14 heures</li>
                                <li><span className="font-bold">Dates :</span> A définir</li>
                                <li><span className="font-bold">Horaires :</span> de 09h00 à 12h30 et de 13h30 à 17h00</li>
                              </ul>
                            </div>
                            <p><span className="font-bold uppercase">Validation de la formation :</span> Attestation de fin de formation</p>
                            <p><span className="font-bold uppercase">Tarif de la formation :</span> 1 600€</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stages */}
        <section id="stages" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            LES STAGES
          </h2>
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
            <p>
              Toutes nos formations certifiantes incluent une période d'immersion professionnelle obligatoire en entreprise, permettant de mettre en pratique les acquis théoriques.
            </p>
          </div>
        </section>

        {/* Section 3: Site de référence */}
        <section id="reference" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            SITE DE RÉFÉRENCE
          </h2>
          <div className="bg-gray-50 p-8 rounded-sm">
            <a 
              href="https://www.moncompteformation.gouv.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[18px] text-black underline hover:text-primary-red transition-colors font-bold"
            >
              Mon Compte Formation (CPF)
            </a>
          </div>
        </section>


      </CourseDetailLayout>
    </main>
  );
}
