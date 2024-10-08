import { AboutCTA } from "@/components/AboutCTA"
import { AboutHeader } from "@/components/AboutHeader"
import { TeamSection } from "@/components/TeamSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function About() {
  return (
    <main>
      <AboutHeader />
      <TeamSection />
      <TestimonialsSection />
      <AboutCTA />
    </main>
  )
}
