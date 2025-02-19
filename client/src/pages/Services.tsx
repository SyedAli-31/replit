import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "End-to-end custom software development services tailored to your specific business needs and requirements.",
    features: ["Requirements Analysis", "Custom Solutions", "Quality Assurance", "Maintenance & Support"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Web Development",
    description: "Modern and responsive web applications built with the latest technologies and best practices.",
    features: ["Frontend Development", "Backend Development", "PWA Development", "Web Optimization"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["iOS Development", "Android Development", "Cross-platform Solutions", "Mobile UI/UX"],
    image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365"
  }
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software development services to help businesses thrive in the digital age
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-t-lg md:rounded-r-lg md:rounded-t-none"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
