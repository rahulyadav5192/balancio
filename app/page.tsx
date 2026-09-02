import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GalleryPhotosSection } from "@/components/sections/GalleryPhotosSection";
import { Hero } from "@/components/sections/Hero";
import { HoursSection } from "@/components/sections/HoursSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { StorySection } from "@/components/sections/StorySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <AboutSection />
      <StorySection />
      <GalleryPhotosSection id="gallery" />
      <EventsSection />
      <HoursSection />
      <FeaturesSection />
      <MenuSection />
      <ContactSection />
      <TestimonialsSection />
    </>
  );
}
