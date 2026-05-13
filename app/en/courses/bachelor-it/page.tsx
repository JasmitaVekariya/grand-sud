import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorITPage() {
  const t = {
    title: "Bachelor IT & Tourism",
    image: "/assets/Gemini_Generated_Image_bvjg5ybvjg5ybvjg-scaled-e1756665675348.png",
    details: [
      { label: "Language of instruction", value: "English" },
      { label: "Level", value: "6 (bac+3)" },
      { label: "Status", value: "student" },
      { label: "Pace", value: "initial" },
      { label: "Duration", value: "3 years – 1,806 hours" },
    ],
    logos: ["/assets/logo-france-competences.png"]
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
          Technology & Tourism Fusion
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Bachelor IT & Tourism is a unique programme that bridges the gap between digital technology 
            and the travel industry. Taught in English, it prepares students to lead digital transformation 
            projects, manage tourism data, and develop innovative tech solutions for the global travel market.
          </p>
        </div>
      </div>
    </main>
  );
}
