import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const animations = [
  {
    title: "2D and 3D Animation",
    description: "Engaging characters and stories that captivate audiences",
    bgPattern: "radial-gradient(circle at 100% 100%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Immersive 3D Animation",
    description: "Realistic visuals and environments that bring ideas to life",
    bgPattern: "radial-gradient(circle at 0% 0%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visuals to elevate your brand and message",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)"
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-3xl" />
      </div>

      <div className="container relative">
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
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card 
                className="bg-black border-gray-800 h-full group-hover:border-primary transition-all duration-300 relative overflow-hidden"
                style={{ backgroundImage: item.bgPattern }}
              >
                <CardContent className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}