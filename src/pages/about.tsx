import { AboutCTA } from "@/components/AboutCTA"
import { AboutHeader } from "@/components/AboutHeader"
import AboutSection from "@/components/AboutKyle"
import { TeamSection } from "@/components/TeamSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function About() {
  return (
    <main>
      <AboutHeader />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <AboutCTA />
    </main>
  )
}
