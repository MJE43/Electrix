import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface FeatureProps {
  title: string
  description: string
  link: string
}

const Feature: React.FC<FeatureProps> = ({ title, description, link }) => (
  <div className="flex flex-col px-8 py-6">
    <h2 className="mb-2 font-heading text-lg uppercase text-white sm:text-xl">
      {title}
    </h2>
    <p className="mb-4 flex-1 font-sans text-base leading-relaxed text-white/70">
      {description}
    </p>
    <Link
      href={link}
      className="inline-flex items-center space-x-2 font-subheading text-sm uppercase text-primary transition-colors hover:text-primary/80"
    >
      <span>Learn More</span>
      <ChevronRight className="h-4 w-4" />
    </Link>
  </div>
)

const FeaturesSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Residential Services",
      description:
        "Comprehensive electrical solutions for homes, ensuring safety and efficiency.",
      link: "/services/residential",
    },
    {
      title: "Commercial Services",
      description:
        "Tailored electrical services for businesses, from installation to maintenance.",
      link: "/services/commercial",
    },
    {
      title: "Emergency Support",
      description:
        "24/7 emergency electrical services to address urgent issues promptly.",
      link: "/services/emergency",
    },
    {
      title: "Energy Solutions",
      description:
        "Innovative energy-saving solutions to reduce costs and environmental impact.",
      link: "/services/energy-solutions",
    },
  ]

  return (
    <section className="bg-eastBay py-16 text-white">
      <div className="container mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="font-heading text-3xl uppercase md:text-4xl">
            Our Electrical Services
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-base text-white/70">
            With over 20 years of experience, we provide top-notch electrical
            services for both residential and commercial properties. Our team of
            certified electricians ensures safety, reliability, and customer
            satisfaction in every project.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
