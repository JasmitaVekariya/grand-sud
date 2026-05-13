import CourseBanner from "@/components/courses/CourseBanner";

export default function AmadeusPage() {
  const t = {
    title: "GDS AMADEUS",
    image: "/assets/Gemini_Generated_Image_zhhzwzhhzwzhhzwz-scaled.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "–" },
      { label: "Status", value: "student, job seeker and employee (CPF transition)" },
      { label: "Pace", value: "initial" },
      { label: "Duration", value: "–" },
    ],
    logos: [] // No specific logos mentioned for this intensive course
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Intensive GDS Training
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Master the world's leading Global Distribution System. Our Amadeus training provides 
            practical, hands-on experience in booking flights, hotels, and car rentals, essential 
            for any professional in the travel and tourism industry.
          </p>
        </div>
      </div>
    </main>
  );
}
