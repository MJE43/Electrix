import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

import { HeroSection } from "@/components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container flex justify-end mt-4">
        <ModeToggle />
      </div>
    </main>
  )
}
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Add more sections as needed */}
    </main>
  )
}
