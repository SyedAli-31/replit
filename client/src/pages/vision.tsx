import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, Globe } from "lucide-react";

export default function Vision() {
  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Our Vision</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leading the future of digital innovation and transformation
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Lightbulb,
              title: "Innovation Leadership",
              description: "Setting new standards in digital solutions and creative technology",
            },
            {
              icon: Target,
              title: "Global Excellence",
              description: "Becoming the premier choice for businesses worldwide",
            },
            {
              icon: Rocket,
              title: "Future-Ready Solutions",
              description: "Pioneering tomorrow's technology solutions today",
            },
            {
              icon: Globe,
              title: "Worldwide Impact",
              description: "Creating positive change through digital transformation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            "We envision a future where every business, regardless of size, has access to
            world-class digital solutions that drive growth and innovation."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
