import Image from 'next/image'
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            IN FLOWERS<br />WE TRUST
          </h1>
          <div className="w-full max-w-[600px] py-4">
            <Image
              src="/flower-in-glass.jpg"
              alt="Flower in a glass"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <p className="max-w-[600px] text-sm uppercase tracking-widest text-gray-500 md:text-base lg:text-lg">
            FLOWERS AS A VESSEL FOR CHANGE, FOR CONNECTION, AND FOR UNITY.
          </p>
        </div>
      </div>
    </section>
  )
}
