import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
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

        {/* Navigation Links */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="font-sans text-xs uppercase text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="font-sans text-xs uppercase text-neutral hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-sans text-xs uppercase text-neutral hover:text-primary"
          >
            Residential & Commercial Services
          </Link>
          <Link
            href="/coverage-area"
            className="font-sans text-xs uppercase text-neutral hover:text-primary"
          >
            Coverage Area
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs uppercase text-neutral hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "font-sans text-xs uppercase bg-primary text-white hover:bg-primary/90 px-6 py-3"
            )}
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
