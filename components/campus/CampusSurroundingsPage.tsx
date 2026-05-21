"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  Layers, 
  Presentation, 
  Accessibility, 
  Car, 
  Globe, 
  Utensils, 
  Users, 
  Gamepad2, 
  ChevronDown,
  MapPin,
  Train,
  Bus,
  TramFront
} from "lucide-react";
import { useState } from "react";

interface CampusSurroundingsPageProps {
  lang: "en" | "fr";
}

export default function CampusSurroundingsPage({ lang }: CampusSurroundingsPageProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("bus");

  const t = {
    en: {
      sidebar: ["FOCUS ON THE CAMPUS", "ACCESS AND TRANSPORT", "ENVIRONMENT"],
      intro: {
        line1: "Live the student experience by joining the school on its campus in Toulouse-Labège for your return!",
        line2: "Located about 15 minutes from the center of Toulouse, close to the Labège 2 Shopping Center and Lake Labège, in the heart of a business area, the Campus offers a pleasant learning field: students will be able to benefit as much from the campus' facilities as from the numerous facilities attached to it."
      },
      focus: {
        title: "FOCUS ON THE CAMPUS",
        subtitle: "Building",
        stats: [
          {
            icon: Building2,
            title: "nearly 1,000 m2 of surface",
            desc: "dedicated to training and supporting learners in their journey",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Layers,
            title: "2 floors",
            desc: "air-conditioned and connected, equipped for the comfort of all",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Presentation,
            title: "8 classrooms",
            desc: "fully equipped and adapted to any type of course and work.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Accessibility,
            title: "Maximum accessibility",
            desc: "the entire campus is accessible to people with disabilities, as well as their potential guide or assistance dog",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Car,
            title: "42 parking spaces",
            desc: "free and private, outdoors, available to learners, visitors, and speakers. Including 4 spaces for electric car - EVZen",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Globe,
            title: "International dimension",
            desc: "the building is designed to accommodate both French-speaking and English-speaking people",
            bgColor: "bg-[#8B2318]"
          }
        ],
        extrasTitle: "The little extras",
        extras: [
          {
            icon: Utensils,
            title: "Cafeteria",
            desc: "equipped with microwaves, hot and cold drinks dispensers and snacks and a fresh water fountain, the lunch room is practical and friendly",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Users,
            title: "Reception and videoconference room",
            desc: "to welcome large audiences or conduct webinars worldwide!",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Gamepad2,
            title: "Break room",
            desc: "let off steam with self-service games!",
            bgColor: "bg-[#333333]"
          }
        ]
      },
      access: {
        title: "ACCESS AND TRANSPORT",
        subtitle: "Location",
        publicTitle: "Public transportation",
        accordions: {
          bus: {
            title: "Bus",
            lines: [
              "Line 79 and 109 : stop rue du village d'entreprises",
              "Line 204 : stop Marco Polo",
              "Line 80 : stop Lalande"
            ]
          },
          train: {
            title: "Train",
            text: "TER Occitanie/liO Train : Train station Labège Innopole SNCF"
          },
          subway: {
            title: "Subway",
            text: "Line C : stop Diagora (forecast opening in September 2027)"
          }
        }
      },
      environment: {
        title: "ENVIRONMENT",
        intro: "Green spaces and lakes are just a stone's throw away but, above all, numerous living areas are present all around the campus, accessible on foot or by public transport. We have listed a few addresses for you, but there are many others to discover!",
        categories: [
          {
            title: "Restaurant",
            items: [
              { name: "La Boucherie", addr: "123 L'Occitane - Labège", logo: "/assets/boucherie.png" },
              { name: "Tommy's Diner", addr: "259 avenue La méridienne - Labège", logo: "/assets/tommy.png" },
              { name: "Boulangerie L'atelier des Papilles", addr: "1423 L'Occitane - Labège", logo: "/assets/papilles.png" },
              { name: "Del Arte", addr: "Avenue La Méridienne - Labège", logo: "/assets/delarte.png" },
              { name: "Au Bureau", addr: "57 Rue Lapeyrouse - Labège", logo: "/assets/bureau.png" },
              { name: "Bistro Régent", addr: "5 Rue Pierre Gilles de Gennes - Labège", logo: "/assets/regent.png" },
              { name: "3 Brasseurs", addr: "Rue Pierre Gilles de Gennes - Labège", logo: "/assets/brasseurs.png" },
              { name: "Eat Salad", addr: "505 Rue Jean Rostand - Labège", logo: "/assets/salad.png" },
              { name: "Centre commercial Labège 2", addr: "700 La Pyrénéenne - Labège. Côté Sushi, Pitaya, Flunch, Kombo, Subway...", logo: "/assets/cc.png" },
            ]
          },
          {
            title: "Shopping",
            items: [
              { name: "Carrefour Labège", addr: "700 La Pyrénéenne - Labège", logo: "/assets/carrefour.png" },
              { name: "Super Tout Nu", addr: "380 La Tolosane - Labège", logo: "/assets/supertoutnu.png" },
              { name: "Chronodrive", addr: "16 place du Lauragais - Labège", logo: "/assets/chronodrive.png" },
              { name: "Lidl", addr: "50 Route de Labège - Toulouse", logo: "/assets/lidl.png" },
            ]
          },
          {
            title: "Health",
            items: [
              { name: "Pharmacie de l'Innopole", addr: "700 La Pyrénéenne - Labège", logo: "/assets/pharmacie.png" },
              { name: "Pharmacie de L'Autan", addr: "Centre Commercial Autan - Labège", logo: "/assets/pharmacie.png" },
              { name: "Centre médical Labège", addr: "6 Rue de l'Autan - Labège", logo: "/assets/medecin.png" },
              { name: "Centre Médical De La Poste", addr: "1 Place de la Poste - Saint-Orens-de-Gameville", logo: "/assets/medecin-1.png" },
            ]
          },
          {
            title: "Sport and leisure",
            items: [
              { name: "Cinéma Pathé", addr: "105 Av. la Méridienne - Labège", logo: "/assets/pathe.png" },
              { name: "Hife Karaoke", addr: "1151 L'Occitane - Labège", logo: "/assets/hife.png" },
              { name: "Ferme de 50", addr: "Chemin de Mange Pommes - Ramonville", logo: "/assets/ferme.png" },
              { name: "Crossfit Lab", addr: "805 rue l'occitane - Saint-Orens-de-Gameville", logo: "/assets/crossfit.png" },
              { name: "Centre de congrès Diagora", addr: "150 rue Pierre Gilles de Gennes - Labège", logo: "/assets/diagora.png" },
            ]
          }
        ]
      }
    },
    fr: {
      sidebar: ["ZOOM SUR LE CAMPUS", "ACCÈS ET TRANSPORT", "ENVIRONNEMENT"],
      intro: {
        line1: "Vivez l'expérience étudiante en rejoignant l'école sur son campus de Toulouse-Labège pour votre rentrée !",
        line2: "Situé à environ 15 minutes du centre de Toulouse, à proximité du centre commercial Labège 2 et du lac de Labège, au cœur d'une zone d'activités, le Campus offre un cadre d'apprentissage agréable : les étudiants pourront profiter aussi bien des équipements du campus que des nombreuses infrastructures qui y sont rattachées."
      },
      focus: {
        title: "ZOOM SUR LE CAMPUS",
        subtitle: "Le bâtiment",
        stats: [
          {
            icon: Building2,
            title: "près de 1 000 m2 de surface",
            desc: "dédiés à la formation et à l'accompagnement des apprenants dans leur parcours",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Layers,
            title: "2 étages",
            desc: "climatisés et connectés, équipés pour le confort de tous",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Presentation,
            title: "8 salles de cours",
            desc: "entièrement équipées et adaptées à tout type de cours et de travail.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Accessibility,
            title: "Accessibilité maximale",
            desc: "l'ensemble du campus est accessible aux personnes en situation de handicap, ainsi qu'à leur éventuel chien guide ou d'assistance",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Car,
            title: "42 places de parking",
            desc: "gratuit et privé, en extérieur, à disposition des apprenants, visiteurs et intervenants. Dont 4 places pour voiture électrique - EVZen",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Globe,
            title: "Dimension internationale",
            desc: "le bâtiment est conçu pour accueillir aussi bien des francophones que des anglophones",
            bgColor: "bg-[#8B2318]"
          }
        ],
        extrasTitle: "Les petits plus",
        extras: [
          {
            icon: Utensils,
            title: "Cafétéria",
            desc: "équipée de micro-ondes, de distributeurs de boissons chaudes et froides et de snacks et d'une fontaine à eau fraîche, la salle de restauration est pratique et conviviale",
            bgColor: "bg-[#333333]"
          },
          {
            icon: Users,
            title: "Accueil et salle de visioconférence",
            desc: "pour accueillir de larges publics ou mener des webinaires dans le monde entier !",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: Gamepad2,
            title: "Salle de pause",
            desc: "pour se défouler avec des jeux en libre-service !",
            bgColor: "bg-[#333333]"
          }
        ]
      },
      access: {
        title: "ACCÈS ET TRANSPORT",
        subtitle: "Localisation",
        publicTitle: "Transports en commun",
        accordions: {
          bus: {
            title: "Bus",
            lines: [
              "Ligne 79 et 109 : arrêt rue du village d'entreprises",
              "Ligne 204 : arrêt Marco Polo",
              "Ligne 80 : arrêt Lalande"
            ]
          },
          train: {
            title: "Train",
            text: "TER Occitanie/liO Train : Gare de Labège Innopole SNCF"
          },
          subway: {
            title: "Métro",
            text: "Ligne C : arrêt Diagora (ouverture prévue en septembre 2027)"
          }
        }
      },
      environment: {
        title: "ENVIRONNEMENT",
        intro: "Les espaces verts et les lacs ne sont qu'à un jet de pierre mais, surtout, de nombreux lieux de vie sont présents tout autour du campus, accessibles à pied ou en transports en commun. Nous vous avons listé quelques adresses, mais il y en a bien d'autres à découvrir !",
        categories: [
          {
            title: "Restauration",
            items: [
              { name: "La Boucherie", addr: "123 L'Occitane - Labège", logo: "/assets/boucherie.png" },
              { name: "Tommy's Diner", addr: "259 avenue La méridienne - Labège", logo: "/assets/tommy.png" },
              { name: "Boulangerie L'atelier des Papilles", addr: "1423 L'Occitane - Labège", logo: "/assets/papilles.png" },
              { name: "Del Arte", addr: "Avenue La Méridienne - Labège", logo: "/assets/delarte.png" },
              { name: "Au Bureau", addr: "57 Rue Lapeyrouse - Labège", logo: "/assets/bureau.png" },
              { name: "Bistro Régent", addr: "5 Rue Pierre Gilles de Gennes - Labège", logo: "/assets/regent.png" },
              { name: "3 Brasseurs", addr: "Rue Pierre Gilles de Gennes - Labège", logo: "/assets/brasseurs.png" },
              { name: "Eat Salad", addr: "505 Rue Jean Rostand - Labège", logo: "/assets/salad.png" },
              { name: "Centre commercial Labège 2", addr: "700 La Pyrénéenne - Labège. Côté Sushi, Pitaya, Flunch, Kombo, Subway...", logo: "/assets/cc.png" },
            ]
          },
          {
            title: "Shopping",
            items: [
              { name: "Carrefour Labège", addr: "700 La Pyrénéenne - Labège", logo: "/assets/carrefour.png" },
              { name: "Super Tout Nu", addr: "380 La Tolosane - Labège", logo: "/assets/supertoutnu.png" },
              { name: "Chronodrive", addr: "16 place du Lauragais - Labège", logo: "/assets/chronodrive.png" },
              { name: "Lidl", addr: "50 Route de Labège - Toulouse", logo: "/assets/lidl.png" },
            ]
          },
          {
            title: "Santé",
            items: [
              { name: "Pharmacie de l'Innopole", addr: "700 La Pyrénéenne - Labège", logo: "/assets/pharmacie.png" },
              { name: "Pharmacie de L'Autan", addr: "Centre Commercial Autan - Labège", logo: "/assets/pharmacie.png" },
              { name: "Centre médical Labège", addr: "6 Rue de l'Autan - Labège", logo: "/assets/medecin.png" },
              { name: "Centre Médical De La Poste", addr: "1 Place de la Poste - Saint-Orens-de-Gameville", logo: "/assets/medecin-1.png" },
            ]
          },
          {
            title: "Sport et loisirs",
            items: [
              { name: "Cinéma Pathé", addr: "105 Av. la Méridienne - Labège", logo: "/assets/pathe.png" },
              { name: "Hife Karaoke", addr: "1151 L'Occitane - Labège", logo: "/assets/hife.png" },
              { name: "Ferme de 50", addr: "Chemin de Mange Pommes - Ramonville", logo: "/assets/ferme.png" },
              { name: "Crossfit Lab", addr: "805 rue l'occitane - Saint-Orens-de-Gameville", logo: "/assets/crossfit.png" },
              { name: "Centre de congrès Diagora", addr: "150 rue Pierre Gilles de Gennes - Labège", logo: "/assets/diagora.png" },
            ]
          }
        ]
      }
    }
  }[lang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 gap-12">
      
      {/* Sticky Sidebar Navigation */}
      <aside className="lg:w-1/4 h-fit lg:sticky lg:top-32 space-y-4 hidden lg:block">
        {t.sidebar.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
            className="flex items-center gap-4 group w-full text-left"
          >
            <div className="w-4 h-4 bg-primary-red shrink-0" />
            <span className="text-[14px] font-bold text-[#444] group-hover:text-primary-red transition-colors uppercase tracking-widest">
              {item}
            </span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-24 pb-20">
        
        {/* Intro */}
        <section className="space-y-6">
          <p className="text-[16px] text-[#444] font-medium leading-relaxed">
            {t.intro.line1}
          </p>
          <p className="text-[16px] text-[#444] font-medium leading-relaxed">
            {t.intro.line2}
          </p>
        </section>

        {/* Focus Section */}
        <section id={t.sidebar[0].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-10">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.focus.title}
          </h2>
          
          <div className="space-y-12">
            <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
              {t.focus.subtitle}
            </h3>

            {/* Building Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {t.focus.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`${stat.bgColor} p-10 text-white flex flex-col items-center text-center gap-6 min-h-[320px] justify-center border border-white/5`}
                >
                  <stat.icon size={48} className="opacity-80" />
                  <div className="space-y-3">
                    <h4 className="text-[20px] font-bold leading-tight uppercase tracking-tight">
                      {stat.title}
                    </h4>
                    <p className="text-[14px] opacity-90 leading-relaxed font-medium">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
              {t.focus.extrasTitle}
            </h3>

            {/* Little Extras Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {t.focus.extras.map((extra, idx) => (
                <div 
                  key={idx}
                  className={`${extra.bgColor} p-10 text-white flex flex-col items-center text-center gap-6 min-h-[280px] justify-center border border-white/5`}
                >
                  <extra.icon size={48} className="opacity-80" />
                  <div className="space-y-3">
                    <h4 className="text-[20px] font-bold leading-tight uppercase tracking-tight">
                      {extra.title}
                    </h4>
                    <p className="text-[14px] opacity-90 leading-relaxed font-medium">
                      {extra.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Access Section */}
        <section id={t.sidebar[1].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.access.title}
          </h2>

          <div className="space-y-8">
            <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
              {t.access.subtitle}
            </h3>
            {/* Map Placeholder */}
            <div className="relative w-full aspect-[16/9] bg-gray-100 border border-gray-200 overflow-hidden group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9547517174624!2d1.4988773124806495!3d43.54460595924761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebce580665f8d%3A0x6b44569947f68282!2sGrand%20Sud%2C%20Upper%20School%20Tourism%20And%20Management!5e0!3m2!1sen!2sfr!4v1715745000000!5m2!1sen!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
              {t.access.publicTitle}
            </h3>
            
            {/* Public Transport Section with Background */}
            <div className="relative w-full min-h-[500px] overflow-hidden">
              <Image 
                src="/assets/Car_liO_a_la_gare_routiere_de_Nimes-scaled.jpg" 
                alt="Public Transport"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute inset-x-0 bottom-10 px-6 md:px-12 flex flex-col gap-1 max-w-[900px] mx-auto">
                {/* Accordions */}
                {Object.entries(t.access.accordions).map(([key, acc]) => (
                  <div key={key} className="w-full">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === key ? null : key)}
                      className="w-full bg-[#F23A2E] text-white p-4 flex items-center justify-between font-bold uppercase tracking-widest text-[16px] md:text-[18px] transition-colors hover:bg-[#D42F25]"
                    >
                      <div className="flex items-center gap-4">
                        {key === 'bus' && <Bus size={24} />}
                        {key === 'train' && <Train size={24} />}
                        {key === 'subway' && <TramFront size={24} />}
                        {acc.title}
                      </div>
                      <ChevronDown size={24} className={`transition-transform duration-300 ${activeAccordion === key ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: activeAccordion === key ? 'auto' : 0 }}
                      className="overflow-hidden bg-white/95"
                    >
                      <div className="p-6 text-black font-bold text-[14px] md:text-[16px] space-y-4">
                        {'lines' in acc ? (
                          acc.lines.map((line, lidx) => (
                            <p key={lidx}>{line}</p>
                          ))
                        ) : (
                          <p>{acc.text}</p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section id={t.sidebar[2].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.environment.title}
          </h2>

          {/* Hero Environment */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image 
              src="/assets/unnamed.jpg" 
              alt="Environment"
              fill
                sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-10 left-10 max-w-[600px] bg-white/90 backdrop-blur-sm p-8 border-l-4 border-primary-red">
              <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-[#333]">
                {t.environment.intro}
              </p>
            </div>
          </div>

          {/* Service Categories */}
          <div className="space-y-0">
            {t.environment.categories.map((cat, cidx) => (
              <div key={cidx} className={`${cidx % 2 === 0 ? 'bg-[#8B2318]' : 'bg-[#333333]'} p-10 md:p-16 text-white space-y-12`}>
                <h3 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight">
                  {cat.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
                  {cat.items.map((item, iidx) => (
                    <div key={iidx} className="flex flex-col gap-6 group">
                      <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300 shadow-lg">
                        <Image 
                          src={item.logo} 
                          alt={item.name}
                          fill
                sizes="100vw"
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                          {item.name}
                        </h4>
                        <p className="text-[11px] md:text-[12px] opacity-70 leading-normal font-medium max-w-[180px]">
                          {item.addr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
