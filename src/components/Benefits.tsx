import { Clock, Shield, ThumbsUp } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Count on our experienced team for dependable electrical services.",
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description:
      "We value your time and always strive to provide timely solutions.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We go above and beyond to exceed expectations.",
  },
]

export default function Benefits() {
  return (
    <section className="bg-jagger py-16 text-white">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
