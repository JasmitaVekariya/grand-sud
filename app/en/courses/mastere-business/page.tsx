import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereBusinessPage() {
  const t = {
    title: "Mastère Business & Tourism",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "Language of instruction", value: "English" },
      { label: "Level", value: "7 (bac+5)" },
      { label: "Status", value: "student" },
      { label: "Pace", value: "initial" },
      { label: "Duration", value: "2 years – 1,204 hours" },
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
          Global Leadership in Tourism
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Mastère Business & Tourism is our premier graduate programme for future global leaders. 
            Taught entirely in English, it focuses on high-level strategic management, international business 
            expansion, and innovative tourism models for the luxury and global travel markets.
          </p>
        </div>
      </div>
    </main>
  );
}
