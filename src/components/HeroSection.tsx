import Image from 'next/image'
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            IN FLOWERS<br />WE TRUST
          </h1>
          <div className="w-full max-w-[600px] py-4">
            <Image
              src="/placeholder.svg"
              alt="Flower in a glass"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            FLOWERS AS A VESSEL FOR CHANGE, FOR CONNECTION, AND FOR UNITY.
          </p>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-4"
            )}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
