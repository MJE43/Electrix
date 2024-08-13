import { CheckCircle } from "lucide-react"

const features = [
  "Energy-efficient solutions",
  "Smart home systems",
  "Residential electrical work",
  "Commercial electrical services",
]

export default function FeaturesList() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="mr-4 text-primary" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
