import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8">
          Contact K.P. Power Electrical Services for a free consultation or to
          schedule a service.
        </p>
        <Button variant="secondary" size="lg">
          Contact Us Now
        </Button>
      </div>
    </section>
  )
}
