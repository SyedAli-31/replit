import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built to address your unique business challenges",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications with cutting-edge technologies",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Scalable enterprise-grade software systems",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software development services to help businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
