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

export function AboutCTA() {
  return (
    <section className="bg-eastBay py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 text-xl">
          Let K.P. Power Electrical Services bring expertise and reliability to
          your electrical projects.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/contact"
            className="rounded bg-white px-6 py-3 font-semibold text-eastBay transition duration-300 hover:bg-opacity-90"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="rounded border border-white px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-eastBay"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
