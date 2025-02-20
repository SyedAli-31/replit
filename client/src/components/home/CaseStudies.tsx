import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-commerce Platform",
    client: "RetailTech Inc",
    description: "Built a scalable e-commerce solution handling millions of transactions",
    image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365",
  },
  {
    title: "Healthcare App",
    client: "MedCare Solutions",
    description: "Developed a patient management system for healthcare providers",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    title: "FinTech Solution",
    client: "Global Finance",
    description: "Created a secure financial transaction processing system",
    image: "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 flex justify-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <p className="text-sm text-primary">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
