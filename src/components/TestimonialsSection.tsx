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

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote:
        "Kyle did an amazing job upgrading our home's electrical system. Professional and efficient!",
      author: "Sarah J., Phoenix",
    },
    {
      id: "2",
      quote:
        "I highly recommend Kyle for any residential electrical needs. He's responsive and knowledgeable.",
      author: "Mark T., Scottsdale",
    },
    {
      id: "3",
      quote:
        "Kyle's attention to detail and commitment to safety impressed me. Great service at a fair price!",
      author: "Emily R., Tucson",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center font-heading text-heading text-foreground"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
