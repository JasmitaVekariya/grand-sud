import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      {/* Additional sections can be added here */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start your journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our programs and campus life at Grand Sud.
          </p>
        </div>
      </section>
    </main>
  );
}
