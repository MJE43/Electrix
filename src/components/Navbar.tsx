import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-[50px] w-[150px]">
            <Image
              src="/logo.webp"
              alt={siteConfig.name}
              fill
              style={{ objectFit: "contain" }}
              className="object-left"
            />
          </div>
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="font-bold text-red-500">
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium text-gray-700 hover:text-red-500"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-medium text-gray-700 hover:text-red-500"
          >
            Residential & Commercial Services
          </Link>
          <Link
            href="/coverage-area"
            className="font-medium text-gray-700 hover:text-red-500"
          >
            Coverage Area
          </Link>
          <Link
            href="/contact"
            className="font-medium text-gray-700 hover:text-red-500"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded bg-red-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-red-600"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
