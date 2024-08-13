import Benefits from "@/components/Benefits"
import CTASection from "@/components/CTASection"
import FeaturesList from "@/components/FeaturesList"
import FeaturesSection from "@/components/FeaturesSection"
import { HeroSection } from "@/components/HeroSection"
import { ModeToggle } from "@/components/mode-toggle"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mt-4 flex justify-end">
        <ModeToggle />
      </div>
      <FeaturesSection />
      <FeaturesList />
      <Benefits />
      <Testimonials />
      <CTASection />
    </main>
  )
}
