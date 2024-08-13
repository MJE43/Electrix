import Benefits from "@/components/Benefits"
import CTASection from "@/components/CTASection"
import FeaturesSection from "@/components/FeaturesSection"
import { HeroSection } from "@/components/HeroSection"
import { ModeToggle } from "@/components/mode-toggle"
import ServicesSection from "@/components/ServicesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <Benefits />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
