"use client"

import React from "react"
import Link from "next/link"
import { IconType } from "react-icons"
import { motion } from "framer-motion"
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
  <section className="bg-east-bay py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="mb-12 text-center font-heading text-5xl uppercase text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What We Offer
      </motion.h2>
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button
          asChild
          className="rounded-full bg-primary px-8 py-4 font-subheading text-subheading uppercase text-white transition-all duration-300 hover:bg-primary/90"
        >
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  </section>
)

export default ServicesSection