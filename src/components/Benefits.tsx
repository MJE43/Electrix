import { Clock, Shield, ThumbsUp } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Count on our experienced team for dependable electrical services. We prioritize quality workmanship and long-lasting solutions.",
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description:
      "We value your time and always strive to provide timely solutions. Expect efficient service and quick response times.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We go above and beyond to exceed expectations and deliver exceptional results.",
  },
]

export default function Benefits() {
  return (
    <section className="bg-jagger py-20 text-white md:py-28 lg:py-36">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="mx-auto mb-6 text-primary" size={64} />
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
