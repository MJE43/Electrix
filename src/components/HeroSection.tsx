import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full bg-eastBay py-16 text-white md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Column */}
          <div className="w-full space-y-8 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl text-heading font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
              YOUR TRUSTED LOCAL ELECTRICIANS
            </h1>
            <p className="text-subheading text-xl font-light uppercase tracking-widest md:text-2xl">
              IN POWER WE TRUST
            </p>
            <p className="mx-auto max-w-xl text-base md:text-lg lg:mx-0">
              With over 20 years of experience, we provide top-notch electrical
              services for residential and commercial properties. Our team of
              certified electricians ensures safety, reliability, and customer
              satisfaction in every project we undertake.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary font-bold text-white hover:bg-primary/90"
              )}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[600px] overflow-hidden rounded-lg">
              <Image
                src="/outdoor-panel.png"
                alt="Electrician at work"
                fill
                sizes="(max-width: 600px) 100vw, 600px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
