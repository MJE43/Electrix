import React from "react"
import { IconType } from "react-icons"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: IconType
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full"
  >
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg transition-all duration-300">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 font-heading text-xl uppercase text-jagger">{title}</h3>
      <p className="mt-auto font-body text-sm leading-relaxed text-neutral">{description}</p>
    </div>
  </motion.div>
)

export default ServiceCard