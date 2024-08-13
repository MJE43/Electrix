import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  return (
    <section className="bg-jagger py-16 text-white">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <Image
            src="/Emergency.png"
            alt="24/7 Emergency Service"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="mb-4 text-3xl font-bold">24/7 Emergency Service</h2>
          <p className="mb-6">
            We're always here when you need us. Our expert electricians are
            available 24/7 to handle any electrical emergency, ensuring your
            safety and peace of mind.
          </p>
          <Button
            variant="secondary"
            className="bg-white text-jagger hover:bg-neutral hover:text-white"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
