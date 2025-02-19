import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-commerce Platform",
    client: "RetailTech Inc",
    description: "Developed a scalable e-commerce platform handling millions of transactions annually. Implemented advanced features including real-time inventory management, AI-powered recommendations, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365",
    results: ["50% increase in sales", "30% reduction in cart abandonment", "99.9% uptime"]
  },
  {
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    description: "Built a comprehensive healthcare management system for streamlining patient care, appointment scheduling, and medical records management.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    results: ["40% reduction in wait times", "95% patient satisfaction", "HIPAA compliant"]
  },
  {
    title: "Financial Trading Platform",
    client: "Global Finance",
    description: "Created a high-performance trading platform with real-time market data integration, advanced analytics, and secure transaction processing.",
    image: "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d",
    results: ["Millisecond latency", "100% transaction accuracy", "Bank-grade security"]
  }
];

export default function CaseStudies() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve their digital transformation goals
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <p className="text-primary font-medium">{study.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="mt-8">Read Full Case Study</Button>
                    </CardContent>
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
