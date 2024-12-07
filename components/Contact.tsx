import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <section id="contact-us" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let's Automate Your Business
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to take your business to the next level? Let's talk about how we can help you automate and optimize your processes.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          LET'S TALK
        </Button>
      </div>
    </section>
  )
}

export default Contact

