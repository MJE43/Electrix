import React from "react"
import { IconType } from "react-icons"

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
  <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-primary/20">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-neutral">{title}</h3>
    <p className="text-neutral">{description}</p>
  </div>
)

export default ServiceCard
