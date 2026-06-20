"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";
import {
  ChevronDown,
  ChevronUp,
  Laptop,
  Send,
  MessageCircle,
  Leaf,
  Hotel,
  Users,
  User,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitFormToApi } from "@/lib/submit-form-client";
import { executiveFormations, type ExecutiveFormation } from "./executiveFormationsData";

interface BusinessTrainingPageProps {
  lang: "en" | "fr";
}

type DegreeCourse = {
  icon: LucideIcon;
  title: string;
  diploma: string;
  color: string;
  href?: string;
};

const degreeCoursesFr: DegreeCourse[] = [
  {
    icon: MessageCircle,
    title: "BTS Communication",
    diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2",
    color: "bg-[#8B2B23]",
  },
  {
    icon: Send,
    title: "BTS Tourisme",
    diploma: "Diplôme d'Etat de l'Education Nationale - BAC+2",
    color: "bg-[#333333]",
    href: "/fr/formations/bts-tourisme",
  },
  {
    icon: Leaf,
    title: "BACHELOR Responsable du Développement Touristique Durable et Digital",
    diploma: "Titre RNCP - BAC+3",
    color: "bg-[#8B2B23]",
    href: "/fr/formations/bachelor-durable",
  },
  {
    icon: Hotel,
    title: "BACHELOR Hospitality Management",
    diploma: "Titre RNCP - BAC+3",
    color: "bg-[#333333]",
    href: "/fr/formations/bachelor-hospitality",
  },
  {
    icon: Users,
    title: "BACHELOR MICE Designer",
    diploma: "Titre RNCP - BAC+3",
    color: "bg-[#8B2B23]",
    href: "/fr/formations/bachelor-mice",
  },
  {
    icon: User,
    title: "MASTERE Manager en Stratégies Touristiques",
    diploma: "Titre RNCP - BAC+5",
    color: "bg-[#333333]",
    href: "/fr/formations/mastere-tourism",
  },
];

function CourseCard({ icon: Icon, title, diploma, color, href }: DegreeCourse) {
  const inner = (
    <div className={`${color} p-8 text-white flex flex-col items-center text-center space-y-6 min-h-[280px] transition-transform hover:scale-[1.02] h-full ${href ? "cursor-pointer" : ""}`}>
      <Icon size={48} strokeWidth={1} className="opacity-80" />
      <div className="space-y-2">
        <h3 className="text-[16px] md:text-[17px] font-bold leading-tight uppercase">{title}</h3>
        <p className="text-[13px] opacity-90">{diploma}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="h-full">
        {inner}
      </Link>
    );
  }
  return <div className="h-full">{inner}</div>;
}

function FormationDetails({ item }: { item: ExecutiveFormation }) {
  return (
    <div className="p-8 space-y-8 text-[15px] text-gray-700 leading-relaxed">
      <div className="space-y-4">
        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Objectifs :</h4>
        {item.objectifsIntro && <p className="font-medium text-gray-900">{item.objectifsIntro}</p>}
        {item.objectifsIntroExtra && <p className="font-medium text-gray-900">{item.objectifsIntroExtra}</p>}
        <ul className="list-disc list-outside pl-5 space-y-2">
          {item.objectifs.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Pré-requis :</h4>
        {Array.isArray(item.preRequis) ? (
          item.preRequis.map((req, i) => <p key={i}>{req}</p>)
        ) : (
          <p>{item.preRequis}</p>
        )}
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
  );
}

function UnderlineField({
  label,
  type = "text",
  value,
  onChange,
  required = true,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[12px] font-bold uppercase text-black tracking-wide block">
        {label} {required && <span className="text-primary-red">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-0 border-b border-black py-2 text-[15px] focus:outline-none focus:border-primary-red transition-colors"
      />
    </div>
  );
}

export default function BusinessTrainingPage({ lang }: BusinessTrainingPageProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>("management-basics");
  const [formData, setFormData] = useState({
    company: "",
    siret: "",
    lastName: "",
    firstName: "",
    email: "",
    mobile: "",
    role: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const t = {
    en: {
      heroTitle: <>Train your teams with <br /> Grand Sud</>,
      bannerImage: "/assets/pexels-fauxels-3183173-scaled.jpg",
      sidebar: [
        { id: "degree", label: "Degree courses" },
        { id: "certification", label: "Certification courses - intensive" },
        { id: "qualifying", label: "Qualifying courses - Grand Sud Executive" },
        { id: "contact", label: "Contact our corporate relations team" },
      ],
      introParagraphs: [
        "Would you like to strengthen your teams' skills by offering them professional training tailored to your needs and objectives?",
        "A real career accelerator, our training courses enable participants to develop their skills with a view to advancement, while ensuring a genuine acquisition of knowledge, know-how and interpersonal skills.",
        "Prerequisites, objectives, dates and durations depend on the training course chosen and are presented below. Our teams can also help you design a tailor-made program to develop your employees' skills.",
      ],
      degree: {
        title: "Degree courses",
        intro: "The degree courses in our French-language programs are accessible through VAE, the most suitable option for professionals already working in a company.",
      },
      certification: {
        title: "Certification courses - intensive",
        intro: "These short, certified training courses offer real professional value and enable your teams to update their skills.",
        items: ["GDS Amadeus", "Conseiller Voyage"],
      },
      qualifying: {
        title: "Qualifying courses - Grand Sud Executive",
        intro: "These qualifying training courses, lasting 1 to 2 days, enable participants to perfect their technical or interpersonal skills and apply what they have learned immediately in the workplace.",
      },
      contact: {
        title: "Contact our corporate relations team",
        intro: "Our teams are available to define your objectives and projects together, and find the most suitable training!",
        fields: {
          company: "Company",
          siret: "SIRET",
          lastName: "Last name",
          firstName: "First name",
          email: "Email",
          mobile: "Mobile",
          role: "Role",
        },
        consent: "I agree to be contacted regarding my request. I can withdraw my consent at any time and register on Bloctel.",
        submit: "Be put in touch with our advisors",
        successMsg: "Your request has been submitted successfully.",
        submitErrorMsg: "Something went wrong. Please try again.",
      },
    },
    fr: {
      heroTitle: <>Formez vos équipes avec <br /> Grand Sud</>,
      bannerImage: "/assets/pexels-fauxels-3183173-scaled.jpg",
      sidebar: [
        { id: "degree", label: "Formations diplômantes" },
        { id: "certification", label: "Formations certifiantes - intensives" },
        { id: "qualifying", label: "Formations qualifiantes - Grand Sud Executive" },
        { id: "contact", label: "Contacter nos chargés de relations entreprises" },
      ],
      introParagraphs: [
        "Vous souhaitez renforcer les compétences de vos équipes en leur proposant des formations professionnalisantes et adaptées à vos besoins et objectifs ?",
        "Véritable accélérateur de carrière professionnelle, nos formations permettent de se perfectionner dans une perspective d'évolution, tout en garantissant une réelle appropriation des savoirs, savoir-faire et savoirs-être.",
        "Pré-requis, objectifs, dates et durées dépendent de la formation choisie et sont présentés ci-dessous. Nos équipes vous accompagnent également dans la conception d'une formule sur-mesure pour la montée en compétences de vos salariés.",
      ],
      degree: {
        title: "Formations diplômantes",
        intro: "Les formations diplômantes de nos programmes en français sont accessibles par le biais de la VAE, formule la plus adaptée à des professionnels déjà en poste en entreprise.",
      },
      certification: {
        title: "Formations certifiantes - intensives",
        intro: "Ces formations courtes, certifiantes, ont une réelle valeur professionnelle et permettent de mettre à jour les compétences de vos équipes.",
        items: ["GDS Amadeus", "Conseiller Voyage"],
      },
      qualifying: {
        title: "Formations qualifiantes - Grand Sud Executive",
        intro: "Ces formations qualifiantes, d'une durée de 1 à 2 jours, permettent de perfectionner un savoir-faire ou un savoir-être et d'appliquer les acquis immédiatement en entreprise",
      },
      contact: {
        title: "Contacter nos chargés de relations entreprises",
        intro: "Nos équipes sont à votre écoute pour définir ensemble vos objectifs et vos projets, et ainsi trouver la formation la plus adaptées !",
        fields: {
          company: "Société",
          siret: "Siret",
          lastName: "Nom",
          firstName: "Prénom",
          email: "Email",
          mobile: "Mobile",
          role: "Fonction",
        },
        consent: "J'accepte d'être recontacté dans le cadre de ma demande. Je peux retirer mon consentement à tout moment et m'inscrire sur Bloctel.",
        submit: "Être mis en relation avec nos conseillers",
        successMsg: "Votre demande a été enregistrée avec succès.",
        submitErrorMsg: "Une erreur est survenue. Veuillez réessayer.",
      },
    },
  }[lang];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      await submitFormToApi("/api/forms/business-training", { ...formData, lang });
      setSubmitted(true);
      setFormData({
        company: "",
        siret: "",
        lastName: "",
        firstName: "",
        email: "",
        mobile: "",
        role: "",
        consent: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError(t.contact.submitErrorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <PageBanner title={t.heroTitle} image={t.bannerImage} />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-16">
            <section className="space-y-6">
              {t.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            <section id="degree" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.degree.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.degree.intro}
              </p>
              {lang === "fr" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-fr">
                  {degreeCoursesFr.map((course) => (
                    <CourseCard key={course.title} {...course} />
                  ))}
                </div>
              )}
            </section>

            <section id="certification" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.certification.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.certification.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-[#333333] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[240px]">
                  <div className="border-2 border-white/40 p-4 rounded-sm">
                    <Laptop size={64} strokeWidth={1} className="opacity-90" />
                  </div>
                  <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">{t.certification.items[0]}</h3>
                </div>
                <div className="bg-[#8B2B23] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[240px]">
                  <Send size={64} strokeWidth={1} className="opacity-90" />
                  <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">{t.certification.items[1]}</h3>
                </div>
              </div>
            </section>

            <section id="qualifying" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.qualifying.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.qualifying.intro}
              </p>

              <div className="relative rounded-sm overflow-hidden p-6 md:p-12">
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/assets/pexels-fauxels-3184418-scaled.jpg")' }}
                  />
                  <div className="relative z-10 space-y-4">
                    {executiveFormations.map((item) => (
                      <div key={item.id} className="overflow-hidden border-b border-white last:border-b-0">
                        <button
                          type="button"
                          onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
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
                              className="bg-white overflow-hidden"
                            >
                              <FormationDetails item={item} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-32 space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.contact.intro}
              </p>

              <form onSubmit={handleSubmit} className="max-w-xl space-y-8 pt-4">
                <UnderlineField
                  label={t.contact.fields.company}
                  value={formData.company}
                  onChange={(v) => setFormData({ ...formData, company: v })}
                />
                <UnderlineField
                  label={t.contact.fields.siret}
                  value={formData.siret}
                  onChange={(v) => setFormData({ ...formData, siret: v })}
                />
                <UnderlineField
                  label={t.contact.fields.lastName}
                  value={formData.lastName}
                  onChange={(v) => setFormData({ ...formData, lastName: v })}
                />
                <UnderlineField
                  label={t.contact.fields.firstName}
                  value={formData.firstName}
                  onChange={(v) => setFormData({ ...formData, firstName: v })}
                />
                <UnderlineField
                  label={t.contact.fields.email}
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                />
                <UnderlineField
                  label={t.contact.fields.mobile}
                  type="tel"
                  value={formData.mobile}
                  onChange={(v) => setFormData({ ...formData, mobile: v })}
                />
                <UnderlineField
                  label={t.contact.fields.role}
                  value={formData.role}
                  onChange={(v) => setFormData({ ...formData, role: v })}
                />

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="business-consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-primary-red shrink-0 cursor-pointer"
                  />
                  <label htmlFor="business-consent" className="text-[11px] md:text-[12px] uppercase font-medium text-[#555] leading-relaxed cursor-pointer">
                    {t.contact.consent} <span className="text-primary-red">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#dc4b3b] disabled:opacity-60 text-white px-8 py-3 text-[13px] md:text-[14px] font-bold uppercase tracking-widest hover:bg-[#c03d2f] transition-all shadow-md"
                >
                  {isSubmitting ? "..." : t.contact.submit}
                </button>
                {submitted && (
                  <p className="text-[13px] text-green-700 font-medium pt-2">{t.contact.successMsg}</p>
                )}
                {submitError && (
                  <p className="text-[13px] text-red-600 font-medium pt-2">{submitError}</p>
                )}
              </form>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
