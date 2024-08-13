import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-eastBay text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl uppercase">KPP Electricians</h3>
            <p className="font-sans text-sm">
              Your trusted local electricians with over 20 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Coverage Area", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-sans text-sm transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg uppercase">Contact Us</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>123 Electrical Ave, Circuit City, EL 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@kppelectricians.com</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg uppercase">
              Stay Connected
            </h3>
            <p className="font-sans text-sm">
              Subscribe to our newsletter for updates and tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md bg-white px-3 py-2 text-neutral"
                required
              />
              <button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-primary font-sans text-sm uppercase text-white transition-colors hover:bg-primary/90"
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/20 pt-8 md:flex-row">
          <div className="flex space-x-4">
            <SocialIcon href="#" Icon={FaFacebookF} label="Facebook" />
            <SocialIcon href="#" Icon={FaInstagram} label="Instagram" />
            <SocialIcon href="#" Icon={FaTwitter} label="Twitter" />
          </div>
          <p className="mt-4 font-sans text-sm md:mt-0">
            © {new Date().getFullYear()} KPP Electricians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface SocialIconProps {
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, label }) => (
  <Link
    href={href}
    className="text-white transition-colors hover:text-primary"
    aria-label={label}
  >
    <Icon className="h-6 w-6" />
  </Link>
)

export default Footer
