import { AboutCTA } from "@/components/AboutCTA"
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

export function AboutHeader() {
  return (
    <header className="bg-eastBay py-16 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-5xl font-bold">
          About K.P. Power Electrical Services
        </h1>
        <p className="mb-8 text-xl">
          Providing quality electrical services with a commitment to excellence
          since 1995.
        </p>
        <div className="flex space-x-4">
          <a
            href="#our-story"
            className="rounded bg-white px-4 py-2 font-semibold text-eastBay transition duration-300 hover:bg-opacity-90"
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="rounded border border-white px-4 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-eastBay"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}
