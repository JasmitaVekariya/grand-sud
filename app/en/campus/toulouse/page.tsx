import PageBanner from "@/components/common/PageBanner";

export default function LivingInToulousePage() {
  const t = {
    title: "Living in Toulouse",
    image: "/assets/pexels-tbd-traveller-2149583744-30753255-min-scaled.jpg"
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
              Experience the Pink City
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Voted regularly as one of the best student cities in France, Toulouse offers an 
                exceptional quality of life. Known as the "Pink City" for its terracotta architecture, 
                it combines historical charm with cutting-edge technology. From its vibrant cultural 
                scene to its world-famous gastronomy, living in Toulouse is an adventure in itself.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">The Toulouse Lifestyle:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rich historical heritage with the Capitole and Saint-Sernin Basilica.</li>
                <li>Dynamic student night-life around Place Saint-Pierre.</li>
                <li>Beautiful walks along the Garonne river and the Canal du Midi.</li>
                <li>A European hub for aeronautics and space industry.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Toulouse</h3>
              <p className="text-gray-600 mb-6">
                Discover the best spots, cultural events, and student discounts available in the 
                metropolis.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Student Life Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
