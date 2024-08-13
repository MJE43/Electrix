"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-2 border-primary border-opacity-30 bg-muted backdrop-blur-sm transition-all duration-300"
      >
        <CardHeader>
          <div className="mb-4 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ rotate: 0 }}
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Star className="h-6 w-6 fill-current text-primary" />
              </motion.div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -left-4 -top-8 text-8xl text-primary opacity-30"
          >
            "
          </motion.div>
          <p className="relative z-10 mb-4 text-body italic leading-body text-foreground">
            {quote}
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-12 -right-4 text-8xl text-primary opacity-30"
          >
            "
          </motion.div>
          <CardTitle className="font-subheading text-primary">
            {author}
          </CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface Testimonial {
  id: string
  quote: string
  author: string
}

interface TestimonialsSectionProps {
  backgroundColor?: string
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "K.P. Power Electrical Services did an amazing job rewiring my home. Their team was professional, efficient, and left my house cleaner than when they arrived!",
    },
    {
      name: "Mike Thompson",
      text: "I've used K.P. Power for both my home and business. Their expertise in both residential and commercial work is impressive. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      text: "When we had an electrical emergency late at night, K.P. Power was there within an hour. Their 24/7 service is a lifesaver!",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-gray-100 p-6">
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
