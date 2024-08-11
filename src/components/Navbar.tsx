import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.webp" alt={siteConfig.name} width={200} height={67} className="mr-4" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-red-500 font-bold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-red-500 font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-red-500 font-medium"
          >
            Residential & Commercial Services
          </Link>
          <Link
            href="/coverage-area"
            className="text-gray-700 hover:text-red-500 font-medium"
          >
            Coverage Area
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-red-500 font-medium"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-red-500 text-white px-6 py-3 rounded font-bold hover:bg-red-600 transition duration-300"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
