import PageBanner from "@/components/common/PageBanner";

export default function CommunityLifePage() {
  const t = {
    title: "Community life at Grand Sud",
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.png"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
              A Vibrant Student Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                At Grand Sud, student life extends far beyond the classroom. Our community life is built 
                around student-led initiatives, cultural events, and professional networking opportunities. 
                Joining a student association is the perfect way to develop leadership skills, make 
                lifelong friends, and enrich your overall academic journey.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Why Get Involved?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage real-world projects and events.</li>
                <li>Connect with students from different programmes and levels.</li>
                <li>Develop soft skills highly valued by tourism professionals.</li>
                <li>Make a positive impact on campus life and the local community.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join an Association</h3>
              <p className="text-gray-600 mb-6">
                Interested in starting your own project or joining an existing association? Our student 
                life coordinator is here to support you.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
