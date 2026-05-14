import Hero from "@/components/home/Hero";
import CampusSection from "@/components/home/CampusSection";
import EventsSection from "@/components/home/EventsSection";
import CalendarSection from "@/components/home/CalendarSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DreamSection from "@/components/home/DreamSection";
import ManagementSection from "@/components/home/ManagementSection";
import CurriculumSlider from "@/components/home/CurriculumSlider";
import SchoolValues from "@/components/home/SchoolValues";

export default function HomeEn() {
  return (
    <main className="flex-1">
      <Hero />
      <ManagementSection />
      <CurriculumSlider />
      <SchoolValues />
      <CampusSection />
      <EventsSection />
      <CalendarSection />
      <TestimonialsSection />
      <DreamSection />
    </main>
  );
}
