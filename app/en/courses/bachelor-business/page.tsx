import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorBusinessPage() {
  const t = {
    title: "Bachelor Business & Tourism",
    image: "/assets/Gemini_Generated_Image_moyjrqmoyjrqmoyj-scaled-e1756663814308.png",
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
          International Business & Travel
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Bachelor Business & Tourism is our flagship international programme, taught entirely in English. 
            It combines rigorous business management training with specialized tourism knowledge, preparing 
            students for global careers in the world's largest industry.
          </p>
        </div>
      </div>
    </main>
  );
}
