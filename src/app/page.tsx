import { ModeToggle } from "@/components/mode-toggle"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container flex justify-end mt-4">
        <ModeToggle />
      </div>
      {/* Add more sections as needed */}
    </main>
  )
}
