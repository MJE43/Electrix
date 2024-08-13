import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-primary py-20 text-white md:py-28 lg:py-36">
      <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl">
          Contact K.P. Power Electrical Services for a free consultation or to
          schedule a service. Our friendly team is ready to assist you with all
          your electrical needs.
        </p>
        <Button
          variant="outline"
          className={cn(
            "border border-white bg-transparent text-white hover:bg-white hover:text-primary",
            "font-bold"
          )}
          size="lg"
        >
          Contact Us Now
        </Button>
      </div>
    </section>
  )
}
