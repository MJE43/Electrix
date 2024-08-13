import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    image: "/images/john-doe.jpg",
    text: "K.P. Power Electrical Services did an amazing job upgrading our home's electrical system. Professional and efficient!",
  },
  {
    name: "Jane Smith",
    image: "/images/jane-smith.jpg",
    text: "I'm impressed with their 24/7 emergency service. They came quickly when we had an unexpected power issue and fixed it promptly.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-muted p-6">
              <div className="mb-4 flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="mr-4 rounded-full"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
              </div>
              <p className="italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
