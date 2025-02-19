import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const animations = [
  {
    title: "2D and 3D Animation",
    description: "Engaging characters and stories that captivate audiences",
  },
  {
    title: "Immersive 3D Animation",
    description: "Realistic visuals and environments that bring ideas to life",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visuals to elevate your brand and message",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">What We Actually Do</h2>
          <p className="text-xl text-primary font-semibold">
            Experience. Execution. Excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {animations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
