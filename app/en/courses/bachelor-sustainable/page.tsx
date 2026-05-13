import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorSustainablePage() {
  const t = {
    title: "BACHELOR SUSTAINABLE AND DIGITAL TOURISM DEVELOPMENT",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "6 (bac+3)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "initial or work-study—1 week at the training center/2 week at the company" },
      { label: "Duration", value: "1 year—518 hours" },
    ],
    additionalInfo: "Training accessible through VAE (validation of acquired experience)",
    logos: ["/assets/logo-france-competences.png"]
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        additionalInfo={t.additionalInfo}
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Innovation & Sustainability
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            This Bachelor programme focuses on the dual challenge of the modern tourism industry: 
            implementing sustainable practices while leveraging digital innovation to enhance the 
            traveler experience and operational efficiency.
          </p>
        </div>
      </div>
    </main>
  );
}
