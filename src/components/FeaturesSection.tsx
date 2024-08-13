import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  return (
    <section className="bg-jagger py-20 text-white md:py-28 lg:py-36">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 md:flex-row lg:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/Emergency.png"
                alt="24/7 Emergency Service"
                fill
                sizes="(max-width: 500px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full space-y-8 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
              24/7 Emergency Service
            </h2>
            <p className="text-lg md:text-xl">
              We're always here when you need us. Our expert electricians are
              available 24/7 to handle any electrical emergency, ensuring your
              safety and peace of mind.
            </p>
            <Button
              variant="outline"
              className={cn(
                "border border-white bg-transparent text-white hover:bg-white hover:text-jagger",
                "font-bold"
              )}
              size="lg"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
