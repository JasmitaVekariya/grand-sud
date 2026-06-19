"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";

interface CampusToulousePageProps {
  lang: "en" | "fr";
}

export default function CampusToulousePage({ lang }: CampusToulousePageProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("study");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/campus/campus-1.jpg",
    "/campus/campus-2.jpg",
    "/campus/campus-3.jpg",
    "/campus/campus-4.jpg",
    "/campus/campus-5.jpg",
    "/campus/campus-6.jpg",
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  }, [nextImage]);

  // Auto-scroll thumbnails
  useEffect(() => {
    const activeThumb = document.getElementById(`thumb-${currentImageIndex}`);
    const container = document.getElementById('thumbnail-scroll');
    if (activeThumb && container) {
      const scrollPos = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, [currentImageIndex]);

  const t = {
    en: {
      sections: [
        { id: "life-is-good", label: "TOULOUSE, A CITY WHERE LIFE IS GOOD" },
        { id: "tourism-focus", label: "FOCUS ON TOURISM IN TOULOUSE AND ITS REGION" },
        { id: "discover", label: "TO DISCOVER THE CITY AND THE REGION" },
      ],
      intro: {
        text1: "As the European capital of aeronautics and space, Toulouse in the Occitanie region opens the doors to a dynamic city where innovation is omnipresent.",
        text2: "With its 150,000 students, it ranks among the largest university cities in France, and offers a sunny living environment, a cultural richness and a friendly atmosphere. Between its lively streets, its pink bricks and its peaceful Garonne, the \"Pink City\" is the ideal place to study, flourish and start a professional life rich in opportunities."
      },
      stats: [
        { value: "1st", label: "student city in France", bgColor: "bg-[#333]" },
        { value: "1 080 000", label: "people living in Toulouse", bgColor: "bg-[#8B2318]" },
        { value: "15.9 billions of €", label: "economic benefits for tourism in Occitania", bgColor: "bg-[#333]" },
      ],
      lifeIsGood: {
        title: "TOULOUSE, A CITY WHERE LIFE IS GOOD",
        bullets: [
          {
            title: "Accessibility and quality of life:",
            text: "Toulouse is a metropolis on a human scale. The cost of living is affordable, whether for housing, leisure or outings. In addition, the city is well served by an efficient public transport network."
          },
          {
            title: "Natural environment and climate:",
            text: "Nicknamed the 'Pink City', Toulouse enjoys a sunny climate with more than 2000 hours of sunshine per year. It is also a green city, with 170 parks and gardens, and is crossed by the Garonne and the Canal du Midi, offering many walking spaces by the water."
          },
          {
            title: "Heritage and culture:",
            text: "With more than 2000 years of history, Toulouse has an exceptional heritage, including three UNESCO World Heritage sites: the Canal du Midi, the Saint-Sernin basilica and the Hôtel-Dieu Saint-Jacques."
          },
          {
            title: "Ideal geographical location:",
            text: "The position of Toulouse is a major asset. The city is located only 1h30 from the Mediterranean sea and the Pyrenees mountains, offering easy access to a wide variety of activities."
          },
          {
            title: "Discovery of the region:",
            text: "As the capital of Occitania, Toulouse is the ideal starting point to explore the treasures of the region. You can discover emblematic sites such as Carcassonne, Albi or Auch, as well as 9 UNESCO sites, 8 regional parks, 43 ski resorts and 45 of the most beautiful villages in France."
          }
        ]
      },
      accordions: [
        {
          id: "study",
          title: "Places of study and work",
          items: [
            { title: "University libraries:", text: "These places are the main choice for a quiet and concentration-friendly environment." },
            { title: "Cafes and tea rooms:", text: "Many establishments, such as Le Florida on the Place du Capitole, offer a more convivial setting for working." },
            { title: "Coworking spaces:", text: "La Cantine Toulouse, near the Matabiau station, offers modern workspaces with flexible hours." },
            { title: "Parks and gardens:", text: "Perfect for studying outdoors when the weather permits, such as on the banks of the Garonne or at the Prairie des Filtres." }
          ]
        },
        {
          id: "leisure",
          title: "Places of leisure and outings",
          items: [
            { title: "Bars and clubs:", text: "The Saint-Pierre district is a must for student parties, with bars like the Basque Bar or Chez Tonton. Other places like La Couleur de la Culotte or Le Saint des Seins are also very popular." },
            { title: "Lively districts:", text: "Besides Saint-Pierre, the neighborhoods of Saint-Cyprien and Jean Jaurès are also known for their festive atmosphere and their many bars and restaurants." },
            { title: "Cultural and leisure activities:", text: "Students can enjoy the Cité de l’Espace, the many museums (Musée des Abattoirs) and theatres (Théâtre Garonne) of the city, or participate in events and festivals organized by the Crous." },
            { title: "Sport:", text: "The city provides free access to sports equipment, swimming pools, and offers various activities via the Crous (yoga, dance, climbing, etc.). The hill of Pech-David also offers an ideal green space for outdoor activities." },
            { title: "The Turbine University of Toulouse:", text: "A student third place that offers activities and support for projects." }
          ]
        }
      ],
      tourismFocus: {
        title: "FOCUS ON TOURISM IN TOULOUSE AND ITS REGION",
        toulouse: {
          title: "Toulouse",
          paragraphs: [
            "Tourism in Toulouse is proving to be a major economic pillar, benefiting from growing and diversified attractiveness.",
            "The \"Ville rose\" charms with its rich historical heritage, illustrated by emblematic monuments such as the Saint-Sernin Basilica, a UNESCO World Heritage site, and the Capitoline.",
            "Beyond its history, Toulouse has positioned itself as a European capital of aeronautics and space, with sites like the Cité de l'Espace or the Airbus visits, which attract visitors from all over the world, passionate about technology.",
            "This business and industrial tourism generates significant economic benefits for hotels, restaurants and local commerce.",
            "In addition, the city capitalizes on its lifestyle, its gastronomy and its Occitan culture, thus attracting a family and individual leisure tourism.",
            "This combination of heritage, innovation and lifestyle makes Toulouse a complete and dynamic destination, contributing to the creation of jobs and the development of the local economy."
          ]
        },
        occitanie: {
          title: "Occitanie region",
          paragraphs: [
            "Tourism represents an essential component of the economy of Occitania, positioning itself as a strategic sector for regional development.",
            "This vast region, the second largest in metropolitan France, enjoys a diversity of landscapes and heritages that attract a varied clientele.",
            "From the Mediterranean coast and its popular seaside resorts like Palavas-les-Flots, to the wild coastline of the Aude, through the peaks of the Pyrenees conducive to winter sports and hiking, the tourist offer is extremely rich.",
            "The historical and cultural heritage, with sites like the City of Carcassonne, the Pont du Gard and the many medieval villages, is another major asset.",
            "Wine tourism and gastronomy, symbolized by the wines of Languedoc-Roussillon and local specialties, also contribute to the attractiveness of the region.",
            "This tourist effervescence generates direct and indirect jobs, stimulates the local and regional economy, and promotes the enhancement of the natural and cultural heritage of Occitania."
          ]
        }
      },
      discover: {
        title: "TO DISCOVER THE CITY AND THE REGION",
        bgText: "Some useful sites to discover your new place of life!",
        heading1: "Discover the city of Toulouse and the Occitanie Region",
        heading2: "Know the good addresses of student life in Toulouse",
        logos: [
          { name: "Toulouse Tourisme", icon: "/assets/tou.png", subLabel: "Office de Tourisme Toulouse" },
          { name: "Tourisme Occitanie", icon: "/assets/tourisme-occitanie.png", subLabel: "Occitanie Sud de France" },
          { name: "Le Petit Tou", icon: "/assets/tou.png" },
          { name: "Toulouse Mairie Métropole", icon: "/assets/toulousemairie.png" },
          { name: "Toulouse Web", icon: "/assets/toulouseweb.png" },
          { name: "Toulouscope", icon: "/assets/toulouscope.png", address: "50 Route de Labège – Toulouse" }
        ]
      }
    },
    fr: {
      sections: [
        { id: "life-is-good", label: "Toulouse, une ville où il fait bon vivre" },
        { id: "tourism-focus", label: "focus sur le tourisme à Toulouse et dans sa région" },
        { id: "discover", label: "Pour découvrir la ville et la région" },
      ],
      intro: {
        text1: "En tant que capitale européenne de l'aéronautique et du spatial, Toulouse, en région Occitanie, vous ouvre les portes d'une ville dynamique où l'innovation est omniprésente.",
        text2: "Avec ses 150 000 étudiants, elle se classe parmi les plus grandes villes universitaires de France, et offre un cadre de vie ensoleillé, une richesse culturelle et une ambiance conviviale. Entre ses rues animées, ses briques roses et sa Garonne paisible, la « Ville rose » est le lieu idéal pour faire ses études, s'épanouir et démarrer une vie professionnelle riche en opportunités."
      },
      stats: [
        { value: "1ère", label: "ville étudiante de France", bgColor: "bg-[#333]" },
        { value: "1 080 000", label: "habitants en métropole toulousaine", bgColor: "bg-[#8B2318]" },
        { value: "15.9", label: "milliards d'€\nde retombées économiques pour le tourisme en Occitanie", bgColor: "bg-[#333]" },
      ],
      lifeIsGood: {
        title: "Toulouse, une ville où il fait bon vivre",
        bullets: [
          {
            title: "Accessibilité et qualité de vie :",
            text: "Toulouse est une métropole à échelle humaine. Le coût de la vie y est abordable, que ce soit pour le logement, les loisirs ou les sorties. De plus, la ville est bien desservie par un réseau de transports publics efficace."
          },
          {
            title: "Environnement naturel et climat :",
            text: "Surnommée la « Ville rose », Toulouse bénéficie d'un climat ensoleillé avec plus de 2000 heures d'ensoleillement par an. Elle est également une ville verte, avec 170 parcs et jardins, et est traversée par la Garonne et le canal du Midi, offrant de nombreux espaces de promenade au bord de l'eau."
          },
          {
            title: "Patrimoine et culture :",
            text: "Riche de plus de 2000 ans d'histoire, Toulouse possède un patrimoine exceptionnel, dont trois sites classés au patrimoine mondial de l'UNESCO : le canal du Midi, la basilique Saint-Sernin et l'Hôtel-Dieu Saint-Jacques."
          },
          {
            title: "Situation géographique idéale :",
            text: "La position de Toulouse est un atout majeur. La ville se trouve à seulement 1h30 de la mer Méditerranée et des montagnes des Pyrénées, offrant un accès facile à une grande variété d'activités."
          },
          {
            title: "Découverte de la région :",
            text: "En tant que capitale de l'Occitanie, Toulouse est le point de départ idéal pour explorer les trésors de la région. Vous pourrez y découvrir des sites emblématiques comme Carcassonne, Albi ou Auch, ainsi que 9 sites UNESCO, 8 parcs régionaux, 43 stations de ski et 45 des plus beaux villages de France."
          }
        ]
      },
      accordions: [
        {
          id: "study",
          title: "Lieux d'étude et de travail",
          items: [
            { title: "Bibliothèques universitaires :", text: "Ces lieux sont le choix principal pour un environnement calme et propice à la concentration." },
            { title: "Cafés et salons de thé :", text: "De nombreux établissements, comme Le Florida sur la place du Capitole, offrent un cadre plus convivial pour travailler." },
            { title: "Espaces de coworking :", text: "La Cantine Toulouse, près de la gare Matabiau, propose des espaces de travail modernes avec des horaires flexibles." },
            { title: "Parcs et jardins :", text: "Parfaits pour étudier en plein air quand le temps le permet, comme sur les quais de la Garonne ou à la Prairie des Filtres." }
          ]
        },
        {
          id: "leisure",
          title: "Lieux de loisirs et de sorties",
          items: [
            { title: "Bars et clubs :", text: "Le quartier de Saint-Pierre est un lieu incontournable pour les soirées étudiantes, avec des bars comme le Bar Basque ou Chez Tonton. D'autres lieux comme La Couleur de la Culotte ou Le Saint des Seins sont aussi très appréciés." },
            { title: "Quartiers animés :", text: "Outre Saint-Pierre, les quartiers de Saint-Cyprien et Jean Jaurès sont également réputés pour leur ambiance festive et leurs nombreux bars et restaurants." },
            { title: "Activités culturelles et de détente :", text: "Les étudiants peuvent profiter de la Cité de l'Espace, des nombreux musées (Musée des Abattoirs) et théâtres (Théâtre Garonne) de la ville, ou encore participer à des événements et festivals organisés par le Crous." },
            { title: "Sport :", text: "La ville met à disposition des équipements sportifs en libre accès, des piscines, et propose des activités variées via le Crous (yoga, danse, escalade, etc.). La colline de Pech-David offre également un espace vert idéal pour les activités de plein air." },
            { title: "La Turbine Université de Toulouse :", text: "Un tiers-lieu étudiant qui propose des activités et un accompagnement pour les projets." }
          ]
        }
      ],
      tourismFocus: {
        title: "focus sur le tourisme à Toulouse et dans sa région",
        toulouse: {
          title: "Toulouse",
          paragraphs: [
            "Le tourisme à Toulouse se révèle être un pilier économique majeur, bénéficiant d'une attractivité croissante et diversifiée.",
            "La « Ville rose » séduit par son riche patrimoine historique, illustré par des monuments emblématiques tels que la basilique Saint-Sernin, inscrite au patrimoine mondial de l'UNESCO, et le Capitole.",
            "Au-delà de son histoire, Toulouse a su se positionner comme une capitale européenne de l'aéronautique et du spatial, avec des sites comme la Cité de l'Espace ou les visites d'Airbus, qui attirent des visiteurs du monde entier, passionnés de technologie.",
            "Ce tourisme d'affaires et industriel génère des retombées économiques significatives pour l'hôtellerie, la restauration et le commerce local.",
            "En outre, la ville capitalise sur sa douceur de vivre, sa gastronomie et sa culture occitane, attirant ainsi un tourisme de loisirs familial et individuel.",
            "Cette combinaison de patrimoine, d'innovation et d'art de vivre fait de Toulouse une destination complète et dynamique, contribuant à la création d'emplois et au développement de l'économie locale."
          ]
        },
        occitanie: {
          title: "Région Occitanie",
          paragraphs: [
            "Le tourisme représente une composante essentielle de l'économie de l'Occitanie, se positionnant comme un secteur stratégique pour le développement régional.",
            "Cette vaste région, la deuxième plus grande de France métropolitaine, bénéficie d'une diversité de paysages et de patrimoines qui attirent une clientèle variée.",
            "De la côte méditerranéenne et de ses stations balnéaires prisées comme Palavas-les-Flots, au littoral sauvage de l'Aude, en passant par les sommets des Pyrénées propices aux sports d'hiver et à la randonnée, l'offre touristique est extrêmement riche.",
            "Le patrimoine historique et culturel, avec des sites comme la Cité de Carcassonne, le pont du Gard et les nombreux villages médiévaux, est un autre atout majeur.",
            "L'œnotourisme et la gastronomie, symbolisés par les vins du Languedoc-Roussillon et les spécialités locales, contribuent également à l'attractivité de la région.",
            "Cette effervescence touristique génère des emplois directs et indirects, stimule l'économie locale et régionale, et favorise la valorisation du patrimoine naturel et culturel de l'Occitanie."
          ]
        }
      },
      discover: {
        title: "Pour découvrir la ville et la région",
        bgText: "Quelques sites utiles pour découvrir votre nouveau lieu de vie !",
        heading1: "Découvrir la ville de Toulouse et la Région Occitanie",
        heading2: "Connaître les bonnes adresses de la vie étudiante à Toulouse",
        logos: [
          { name: "Toulouse Tourisme", icon: "/assets/tou.png", subLabel: "Office de Tourisme Toulouse" },
          { name: "Tourisme Occitanie", icon: "/assets/tourisme-occitanie.png", subLabel: "Occitanie Sud de France" },
          { name: "Le Petit Tou", icon: "/assets/tou.png" },
          { name: "Toulouse Mairie Métropole", icon: "/assets/toulousemairie.png" },
          { name: "Toulouse Web", icon: "/assets/toulouseweb.png" },
          { name: "Toulouscope", icon: "/assets/toulouscope.png", address: "50 Route de Labège – Toulouse" }
        ]
      }
    }
  }[lang];

  return (
    <main className="bg-white overflow-hidden">
      <CourseDetailLayout sections={t.sections}>
        {/* Intro and Stats */}
        <div className="space-y-12">
          <div className="space-y-6 text-[16px] text-[#444] leading-relaxed font-medium max-w-4xl">
            <p>{t.intro.text1}</p>
            <p>{t.intro.text2}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
            {t.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`${stat.bgColor} p-10 text-white flex flex-col items-center text-center justify-center min-h-[200px] border-r border-white/10 last:border-0`}
              >
                <span className="text-[36px] font-black mb-3">{stat.value}</span>
                <span className="text-[15px] font-bold uppercase tracking-widest opacity-90 leading-tight whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

          {/* Section 1: Life is Good */}
          <section id="life-is-good" className="scroll-mt-32 space-y-12">
            <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
              {t.lifeIsGood.title}
            </h2>
            
            <ul className="space-y-6">
              {t.lifeIsGood.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-primary-red mt-2.5 shrink-0" />
                  <p className="text-[16px] text-[#333] leading-relaxed">
                    <span className="font-bold">{bullet.title}</span> {bullet.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="space-y-1">
              {t.accordions.map((acc) => (
                <div key={acc.id} className="w-full">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full bg-primary-red text-white p-6 flex items-center justify-between font-bold uppercase tracking-widest text-[16px] md:text-[20px] transition-all hover:bg-[#D42F25]"
                  >
                    <div className="flex items-center gap-4">
                      {activeAccordion === acc.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      {acc.title}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === acc.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#F9F9F9] border-x border-b border-gray-100"
                      >
                        <div className="p-8 space-y-6">
                          {acc.items.map((item, iidx) => (
                            <div key={iidx} className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                              <p className="text-[15px] text-[#444] leading-relaxed">
                                <span className="font-bold text-black">{item.title}</span> {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Gallery Carousel */}
            <div className="space-y-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm shadow-2xl bg-gray-100">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={carouselImages[currentImageIndex]} 
                      alt={`Toulouse ${currentImageIndex + 1}`}
                      fill
                sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Auto-centering Thumbnails (No buttons) */}
              <div className="relative overflow-hidden py-4">
                <div 
                  className="flex gap-4 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
                  id="thumbnail-scroll"
                >
                  {carouselImages.map((img, idx) => (
                    <button 
                      key={idx}
                      id={`thumb-${idx}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-40 md:w-56 aspect-video shrink-0 overflow-hidden rounded-sm transition-all duration-500 border-2 ${currentImageIndex === idx ? 'border-primary-red scale-105 shadow-xl z-10' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    >
                      <Image 
                        src={img} 
                        alt="Thumbnail"
                        fill
                sizes="100vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Tourism Focus */}
          <section id="tourism-focus" className="scroll-mt-32 space-y-16">
            <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
              {t.tourismFocus.title}
            </h2>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
                  {t.tourismFocus.toulouse.title}
                </h3>
                <div className="space-y-4 text-[16px] text-[#444] leading-relaxed font-medium">
                  {t.tourismFocus.toulouse.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[28px] md:text-[36px] font-bold text-[#333]">
                  {t.tourismFocus.occitanie.title}
                </h3>
                <div className="space-y-4 text-[16px] text-[#444] leading-relaxed font-medium">
                  {t.tourismFocus.occitanie.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Discover */}
          <section id="discover" className="scroll-mt-32 space-y-0 pb-20">
            <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none mb-12">
              {t.discover.title}
            </h2>

            {/* BG Image Section */}
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image 
                src="/assets/1-scaled.jpg" 
                alt="Discover Toulouse"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 max-w-[400px]">
                <div className="bg-white/90 backdrop-blur-sm p-8 border-l-4 border-primary-red shadow-xl">
                  <p className="text-[14px] md:text-[16px] font-medium leading-relaxed text-[#333]">
                    {t.discover.bgText}
                  </p>
                </div>
              </div>
            </div>

            {/* Red Section */}
            <div className="bg-[#8B2318] p-10 md:p-16 text-white space-y-12">
              <h3 className="text-[28px] md:text-[36px] font-bold leading-tight">
                {t.discover.heading1}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/tou.png" 
                      alt="Toulouse Tourisme"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Toulouse
                    </h4>
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Tourisme
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/tourisme-occitanie.png" 
                      alt="Tourisme Occitanie"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Tourisme
                    </h4>
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Occitanie
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Grey Section */}
            <div className="bg-[#333333] p-10 md:p-16 text-white space-y-12">
              <h3 className="text-[28px] md:text-[36px] font-bold leading-tight">
                {t.discover.heading2}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {/* Le Petit Tou */}
                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/tou.png" 
                      alt="Le Petit Tou"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Le Petit Tou
                    </h4>
                  </div>
                </div>

                {/* Toulouse Mairie */}
                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/toulousemairie.png" 
                      alt="Toulouse Mairie Métropole"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Toulouse
                    </h4>
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Mairie
                    </h4>
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Métropole
                    </h4>
                  </div>
                </div>

                {/* Toulouse Web */}
                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/toulouseweb.png" 
                      alt="Toulouse Web"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Toulouse Web
                    </h4>
                  </div>
                </div>

                {/* Toulouscope */}
                <div className="flex flex-col gap-6 group">
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300">
                    <Image 
                      src="/assets/toulouscope.png" 
                      alt="Toulouscope"
                      fill
                sizes="100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-wide">
                      Toulouscope
                    </h4>
                    <p className="text-[11px] md:text-[12px] opacity-70 leading-normal font-medium max-w-[150px]">
                      50 Route de Labège – Toulouse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </CourseDetailLayout>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
