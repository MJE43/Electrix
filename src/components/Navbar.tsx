import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[50px] w-[120px]">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              fill
              style={{ objectFit: "contain" }}
              className="object-left"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Navigation Links */}
        <nav
          className={cn(
            "absolute left-0 right-0 top-24 flex-col space-y-4 bg-white p-4 md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:p-0",
            isMenuOpen ? "flex" : "hidden md:flex"
          )}
        >
          <NavLink href="/" active>
            Home
          </NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Residential & Commercial Services</NavLink>
          <NavLink href="/coverage-area">Coverage Area</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="bg-primary font-sans text-xs uppercase text-white transition-colors duration-300 hover:bg-primary/90"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ href, children, active = false }) => (
  <Link
    href={href}
    className={cn(
      "font-subheading text-sm uppercase transition-colors duration-300",
      active
        ? "text-primary"
        : "text-neutral hover:text-primary focus:text-primary"
    )}
  >
    {children}
  </Link>
)

export default Navbar
