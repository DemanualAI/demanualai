import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Process Automation",
    features: [
      "Workflow automation",
      "Document processing",
      "Data entry automation",
      "Custom automation solutions"
    ]
  },
  {
    title: "AI Integration",
    features: [
      "Machine learning solutions",
      "Natural language processing",
      "Predictive analytics",
      "AI-powered decision making"
    ]
  },
  {
    title: "Digital Transformation",
    features: [
      "Legacy system modernization",
      "Cloud migration",
      "Process digitization",
      "Digital workflow implementation"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

