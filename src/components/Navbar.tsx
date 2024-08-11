import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.webp" alt={siteConfig.name} width={150} height={50} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-red-500 font-semibold"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-gray-700 hover:text-red-500"
            )}
          >
            About
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-gray-700 hover:text-red-500"
            )}
          >
            Residential & Commercial Services
          </Link>
          <Link
            href="/coverage-area"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-gray-700 hover:text-red-500"
            )}
          >
            Coverage Area
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-gray-700 hover:text-red-500"
            )}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "hidden md:inline-flex border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          )}
        >
          CONTACT US TODAY
        </Link>
      </div>
    </header>
  )
}

export default Navbar
