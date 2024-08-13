"use client"

import React from "react"
import Link from "next/link"
import { IconType } from "react-icons"
import {
  FaBolt,
  FaCar,
  FaHome,
  FaLightbulb,
  FaNetworkWired,
  FaPlug,
  FaRegLightbulb,
  FaVideo,
} from "react-icons/fa"

import { Button } from "@/components/ui/button"

import ServiceCard from "./ServiceCard"

interface Service {
  title: string
  description: string
  icon: IconType
}

const services: Service[] = [
  {
    title: "LED Downlight Upgrades",
    description:
      "Energy-efficient LED downlights for improved lighting and reduced costs.",
    icon: FaLightbulb,
  },
  {
    title: "Switchboard Upgrades",
    description: "Modernize your electrical system with professional upgrades.",
    icon: FaBolt,
  },
  {
    title: "Powerpoint Installations",
    description: "Strategically placed powerpoints for your convenience.",
    icon: FaPlug,
  },
  {
    title: "Lighting Design",
    description: "Custom lighting design for the perfect ambiance.",
    icon: FaRegLightbulb,
  },
  {
    title: "CCTV Installations",
    description: "State-of-the-art CCTV solutions for enhanced security.",
    icon: FaVideo,
  },
  {
    title: "Network Installations",
    description: "Professional network design and installation services.",
    icon: FaNetworkWired,
  },
  {
    title: "EV Charger Installations",
    description: "Future-ready electric vehicle charger installations.",
    icon: FaCar,
  },
  {
    title: "Smart Home Integration",
    description: "Cutting-edge smart home technology integration.",
    icon: FaHome,
  },
]

const ServicesSection: React.FC = () => (
  <section className="bg-muted py-20">
    <div className="container mx-auto px-4">
      <h3 className="mb-2 text-center font-subheading text-sm uppercase tracking-wider text-neutral">
        Our Services
      </h3>
      <h2 className="mb-12 text-center font-heading text-4xl text-neutral">
        What We Offer
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button
          asChild
          className="transform rounded-full bg-primary px-12 py-6 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
        >
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  </section>
)

export default ServicesSection
