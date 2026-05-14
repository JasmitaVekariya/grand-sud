"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Send, 
  Leaf, 
  Hotel, 
  Users, 
  User, 
  PieChart, 
  Laptop, 
  TrendingUp, 
  Briefcase,
  Clock,
  UserCheck,
  Bed,
  Banknote,
  Umbrella,
  Heart,
  CreditCard,
  Plus,
  CalendarCheck,
  FileEdit
} from "lucide-react";

export default function InitialTrainingPageFR() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const sections = [
    { id: "accessible", label: "LES FORMATIONS ACCESSIBLES EN INITIAL" },
    { id: "possible-internships", label: "LES DIFFÉRENTS STAGES POSSIBLES" },
    { id: "rights-duties", label: "DROITS ET DEVOIRS DU STAGIAIRE" },
    { id: "reference-site", label: "SITE DE RÉFÉRENCE" },
    { id: "internship-program", label: "PROGRAMME DE STAGE GRAND SUD" },
  ];

  const courses = [
    {
      icon: MessageSquare,
      title: "BTS Communication",
      diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/bts-mco",
      flag: "🇫🇷"
    },
    {
      icon: Send,
      title: "BTS Tourisme",
      diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#333333]",
      href: "/fr/formations/bts-tourisme",
      flag: "🇫🇷"
    },
    {
      icon: Leaf,
      title: "BACHELOR Responsable du Développement Touristique Durable et Digital",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/bachelor-durable",
      flag: "🇫🇷"
    },
    {
      icon: Hotel,
      title: "BACHELOR Hospitality Management",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum",
      color: "bg-[#333333]",
      href: "/fr/formations/bachelor-hospitality",
      flag: "🇫🇷"
    },
    {
      icon: Users,
      title: "BACHELOR MICE Designer",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/bachelor-mice",
      flag: "🇫🇷"
    },
    {
      icon: User,
      title: "MASTERE Manager en Stratégies Touristiques",
      diploma: "Titre RNCP - BAC+5",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#333333]",
      href: "/fr/formations/mastere-projets",
      flag: "🇫🇷"
    },
    {
      icon: PieChart,
      title: "BACHELOR Business & Tourism",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
      color: "bg-[#333333]",
      href: "/fr/formations/bachelor-business",
      flag: "🇬🇧"
    },
    {
      icon: Hotel,
      title: "BACHELOR Hospitality Management",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/bachelor-hospitality",
      flag: "🇬🇧"
    },
    {
      icon: Laptop,
      title: "BACHELOR IT & Tourism",
      diploma: "Titre RNCP - BAC+3",
      duration: "14 semaines de stage minimum par an (donc 42 semaines minimum au total)",
      color: "bg-[#333333]",
      href: "/fr/formations/bachelor-it",
      flag: "🇬🇧"
    },
    {
      icon: TrendingUp,
      title: "MASTERE Business & Tourism",
      diploma: "Titre RNCP - BAC+5",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/mastere-business",
      flag: "🇬🇧"
    },
    {
      icon: Briefcase,
      title: "MASTERE Hospitality Management",
      diploma: "Titre RNCP - BAC+5",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#333333]",
      href: "/fr/formations/mastere-hospitality",
      flag: "🇬🇧"
    },
    {
      icon: Laptop,
      title: "MASTERE IT & Tourism",
      diploma: "Titre RNCP - BAC+5",
      duration: "14 semaines de stage minimum par an (donc 28 semaines minimum au total)",
      color: "bg-[#8B2B23]",
      href: "/fr/formations/mastere-it",
      flag: "🇬🇧"
    }
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title="Réaliser sa formation en initial" 
        image="/assets/pexels-danxavier-1239291-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Formations accessibles */}
        <section id="accessible" className="scroll-mt-32 space-y-12">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Une formation en initial est une solution adaptée pour ceux souhaitant un rythme plus scolaire que l'alternance. Ce rythme de formation permet à l'étudiant de suivre ses apprentissages théoriques puis de les mettre en application en entreprise, afin de s'immerger dans la culture professionnelle.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Le statut de la personne choisissant une formation en initial est celui d'étudiant, et de stagiaire lors de la période en entreprise.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              LES FORMATIONS ACCESSIBLES EN INITIAL
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Du BTS au Mastère, toutes nos formations sont accessible en formation initiale, que ce soit avec un stage alterné ou un stage de fin d'année.</p>
              <p>La signature d'une convention de stage vous permet de mettre en application les compétences et connaissances théoriques vue en cours.</p>
            </div>

            {/* French Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {courses.filter(c => c.flag === "🇫🇷").map((course, index) => (
                <Link key={index} href={course.href}>
                  <div className={`${course.color} p-8 text-white flex flex-col items-center text-center space-y-6 min-h-[350px] transition-transform hover:scale-[1.02] hover:z-10 h-full cursor-pointer`}>
                    <course.icon size={48} strokeWidth={1} className="opacity-80" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-wider mb-2">
                        <span className="text-[18px]">{course.flag}</span>
                        {course.title.split(' ')[0]}
                      </div>
                      <h3 className="text-[18px] font-bold leading-tight uppercase">
                        {course.title.split(' ').slice(1).join(' ')}
                      </h3>
                    </div>
                    <p className="text-[13px] opacity-90">{course.diploma}</p>
                    <p className="text-[13px] font-bold pt-4 border-t border-white/20 w-full">
                      {course.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* English Courses Grid - Starts from new row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {courses.filter(c => c.flag === "🇬🇧").map((course, index) => (
                <Link key={index} href={course.href}>
                  <div className={`${course.color} p-8 text-white flex flex-col items-center text-center space-y-6 min-h-[350px] transition-transform hover:scale-[1.02] hover:z-10 h-full cursor-pointer`}>
                    <course.icon size={48} strokeWidth={1} className="opacity-80" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-wider mb-2">
                        <span className="text-[18px]">{course.flag}</span>
                        {course.title.split(' ')[0]}
                      </div>
                      <h3 className="text-[18px] font-bold leading-tight uppercase">
                        {course.title.split(' ').slice(1).join(' ')}
                      </h3>
                    </div>
                    <p className="text-[13px] opacity-90">{course.diploma}</p>
                    <p className="text-[13px] font-bold pt-4 border-t border-white/20 w-full">
                      {course.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Différents stages */}
        <section id="possible-internships" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              LES DIFFÉRENTS STAGES POSSIBLES
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Votre année peut prendre 2 formes, selon la formation et vos choix personnels :</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>stage alterné</li>
                <li>stage de fin d'année</li>
              </ul>
              <p className="italic">À ce jour, la grande majorité des conventions de stage signées le sont pour un stage de fin d'année.</p>
              <p>Grand Sud Formation vous transmettra les éléments nécessaires pour la mise en place de votre convention de stage auprès de votre entreprise d'accueil (programme pédagogique, calendrier des cours, référence du titre visé, etc.) et vous accompagnera pour les différentes démarches.</p>
            </div>
          </div>

          {/* Accordion with Background Image */}
          <div className="relative min-h-[500px] flex items-center justify-center py-20 overflow-hidden rounded-sm">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/pexels-pixabay-262978-scaled.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 space-y-1">
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("alternating")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "alternating" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Stage alterné</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "alternating" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>Pour les formations disponibles en alternance, l'étudiant peut faire le choix de faire son stage selon le calendrier de l'alternance.</p>
                        <p>Il mêle alors des périodes en formation et des périodes en entreprise, mais reste sous statut étudiant et stagiaire, et non salarié comme c'est le cas d'un alternant.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("yearend")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "yearend" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Stage de fin d'année</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "yearend" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>Adapté à celles et ceux en recherche d'une immersion pendant une longue période dans le monde de l'entreprise, le stage de fin d'année a lieu généralement en fin d'année scolaires, entre mai et octobre (selon les formations).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Droits et devoirs */}
        <section id="rights-duties" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              DROITS ET DEVOIRS DU STAGIAIRE
            </h2>
            
            {/* Header Image for Section */}
            <div className="relative h-[250px] rounded-sm overflow-hidden mb-12">
              <img src="/assets/pexels-asphotograpy-518244-scaled.jpg" alt="Rights and Duties" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center p-8">
                <div className="max-w-2xl text-white space-y-4">
                  <p className="text-[15px] leading-relaxed">
                    Si la réalisation d'un stage est un atout pour le parcours professionnel de l'étudiant, la loi impose un cadre.
                  </p>
                  <p className="font-bold text-[18px]">
                    Droits et devoirs sont à connaître avant de s'engager !
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-gray-100 rounded-sm overflow-hidden">
              {/* Droits Column - Full Width */}
              <div className="bg-[#8B2B23] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Droits</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <Clock size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Durée du stage</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stage ne peut durer que 6 mois maximum dans la même entreprise pour chaque année d'enseignement (soit 924h).</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">La durée de stage est calculée en fonction du temps que réellement passé dans l'entreprise. Une journée de présence correspond à 7 heures, qu'elles soient consécutives ou non, un mois de présence est atteint après 22 jours dans l'entreprise.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <UserCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Temps de travail</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stagiaire ne peut travailler plus de 7h par jour.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">La durée du travail est donc plafonnée à 35h hebdomadaires.</p>
                  </div>

                  <div className="space-y-4">
                    <Bed size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Temps de repos</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le temps de repos hebdomadaire est au minimum de 24 heures consécutives, auxquels s'ajoute le temps de repos quotidien qui est au minimum de 11 heures consécutives. Le temps de pause quotidien est au minimum de 20 minutes pour 6 heures consécutives de travail.</p>
                  </div>

                  <div className="space-y-4">
                    <Banknote size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Indemnité</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Une gratification minimale est versée au stagiaire si la durée du stage est supérieure à 2 mois consécutifs (soit l'équivalent de 44 jours à 7 heures par jour, ou 309h) au cours de la même année scolaire ou universitaire.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">En dessous de ces seuils de durée, l'organisme d'accueil n'est pas obligé de verser une gratification.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Si le montant horaire de la gratification est inférieur à 4,35 €, le stagiaire est exonéré de cotisations sociales. La gratification peut être versée de 2 manières différentes : en fonction du nombre réel d'heures effectuées par mois ou par lissage par mois de la totalité des heures effectuées durant le stage.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                  <div className="space-y-4">
                    <Umbrella size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Congés</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Lorsque le stage dure plus de 2 mois, la convention de stage doit prévoir la possibilité de prise de congés et d'autorisations d'absence.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Si le stage dure 2 mois maximum, la prise de congés n'est pas obligatoire. La rémunération des congés est facultative.</p>
                  </div>

                  <div className="space-y-4">
                    <Heart size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Couverture sociale</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">L'étudiant continue de bénéficier de sa mutuelle personnelle, souvent celle de ses parents.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">N'étant pas salariés, ils ne bénéficient pas de la couverture sociale attribuée à ceux-ci. En revanche, la convention de stage étant tripartite et impliquant son école, il bénéficie de l'appui de celle-ci au quotidien durant toute la durée du stage.</p>
                  </div>

                  <div className="space-y-4">
                    <CreditCard size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Prise en charge des frais</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stagiaire a accès au restaurant d'entreprise ou aux titres-restaurant ainsi qu'aux activités sociales et culturelles prévues par le comité social et économique (CSE).</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stagiaire bénéficie du remboursement d'une partie des frais de transport en commun dans les mêmes conditions que les salariés (50 % du coût de l'abonnement).</p>
                  </div>

                  <div className="space-y-4">
                    <Plus size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">des aides pour chaque situation</h4>
                  </div>
                </div>
              </div>

              {/* Devoirs Column - Full Width Below */}
              <div className="bg-[#333333] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Devoirs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <CalendarCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Travail, formation et assiduité</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stagiaire doit être investi dans un établissement et effectuer les tâches confiées par son entreprise.</p>
                  </div>

                  <div className="space-y-4">
                    <FileEdit size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Respect des règles</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Le stagiaire doit respecter les règles de son entreprise d'accueil et de son centre de formation (règlement intérieur) ainsi que les règles d'hygiène et les consignes de sécurité.</p>
                  </div>

                  <div className="space-y-4">
                    <Briefcase size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Attitude professionnelle</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Pour développer une image positive et prouver ses capacités à s'insérer dans l'entreprise, l'apprenti doit respecter les horaires de travail.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">En cas d'absence, le stagiaire doit transmettre à l'entreprise et à l'école ses justificatifs, dans le cas contraire l'absence serait injustifiée.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed font-bold">Le stagiaire doit être loyal et de bonne foi avec son employeur et envers son école.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Site de référence */}
        <section id="reference-site" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            SITE DE RÉFÉRENCE
          </h2>
          <a 
            href="https://www.service-public.fr/particuliers/vosdroits/F20559" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[18px] text-black underline hover:text-primary-red transition-colors font-medium"
          >
            Stage en milieu professionnel
          </a>
        </section>

        {/* Section 5: Programme de stage */}
        <section id="internship-program" className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            PROGRAMME DE STAGE GRAND SUD
          </h2>
          
          <div className="space-y-10 text-[15px] text-gray-700 leading-relaxed">
            <p>
              Grâce à un partenaire spécialiste du secteur, nous pouvons proposer un <span className="font-bold text-black">stage dans la restauration</span> d'une durée de <span className="font-bold text-black">3 à 6 mois</span>, avec des avantages négociés :
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Indemnité :</span> 650 € par mois
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Hébergement pris en charge</span> en chambre partagée
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Repas :</span> pris en charge les jours travaillés (généralement déjeuner et dîner)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Transport :</span> prise en charge jusqu'à la gare ou l'aéroport le plus proche
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Remboursement :</span> 100 % si visa refusé (sur présentation du refus et après vérification)
              </li>
            </ul>

            <div className="space-y-4">
              <p className="font-bold text-black">Profil recherché :</p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                <li>Expérience minimale de <span className="font-bold text-black">6 mois en cuisine ou dans la restauration</span></li>
                <li><span className="font-bold text-black">Niveau d'anglais B2</span> requis avec très bonnes capacités de communication</li>
                <li>Le français n'est pas obligatoire, sauf pour un poste au <span className="font-bold text-black">Front Desk</span>, où une maîtrise parfaite est nécessaire</li>
              </ul>
            </div>

            <p>
              <span className="font-bold text-black">Eligibilité :</span> tout étudiant de l'un de nos campus sur l'un de nos titres Hospitality Management, âgé de 18 à 28 ans.
            </p>

            <p>
              Cette opportunité permet de <span className="font-bold text-black">développer vos compétences dans un environnement international</span>, tout en bénéficiant d'un encadrement et d'avantages pratiques pour votre séjour.
            </p>

            <p className="italic font-bold">Prenez attache avec l'équipe de votre campus pour connaître les modalités !</p>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
