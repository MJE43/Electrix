import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-foreground"
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-foreground"
              )}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-foreground"
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
