import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full bg-eastBay py-12 text-white md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Left Column */}
          <div className="w-full space-y-6 text-center md:w-3/5 md:text-left">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Your Trusted Local Electricians
            </h1>
            <p className="font-subheading text-xl font-light uppercase tracking-widest md:text-2xl">
              In Power We Trust
            </p>
            <p className="max-w-xl font-sans text-base md:text-lg">
              With over 20 years of experience, we provide top-notch electrical
              services for residential and commercial properties. Our team of
              certified electricians ensures safety, reliability, and customer
              satisfaction in every project we undertake.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary text-white hover:bg-primary/90"
              )}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right Column */}
          <div className="mt-8 w-full md:mt-0 md:w-2/5">
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              <Image
                src="/outdoor-panel.png"
                alt="Electrician at work"
                fill
                sizes="(max-width: 400px) 100vw, 400px"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
