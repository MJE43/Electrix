import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full bg-white py-20 text-neutral md:py-28 lg:py-36">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
          {/* Left Column */}
          <div className="w-full space-y-10 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-5xl text-heading font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
              Your Trusted Local <br />
              Electricians
            </h1>
            <p className="text-2xl text-subheading font-light uppercase tracking-widest md:text-3xl">
              In Power We Trust
            </p>
            <p className="mx-auto max-w-xl text-lg md:text-xl lg:mx-0">
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
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[600px] overflow-hidden rounded-lg shadow-lg">
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
