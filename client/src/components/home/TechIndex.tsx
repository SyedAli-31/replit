import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const skills = [
  { name: "Mobile Development", percentage: 87 },
  { name: "Web Development", percentage: 90 },
  { name: "Software Development", percentage: 90 },
  { name: "Graphic Design", percentage: 95 },
  { name: "2D & 3D Animation", percentage: 87 },
  { name: "SEO", percentage: 83 },
];

const philosophies = [
  { title: "Our Mission", path: "/mission" },
  { title: "Our Vision", path: "/vision" },
  { title: "Our Philosophy", path: "/philosophy" },
  { title: "Our Strategy", path: "/strategy" },
];

export default function TechIndex() {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Improve and Innovate with the Tech Trends
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We hire and build your own remote dedicated development teams tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {philosophies.map((item, index) => (
              <Link key={index} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    className="w-full h-32 text-lg font-semibold text-white border-gray-800 hover:border-primary hover:bg-gray-900"
                  >
                    {item.title}
                  </Button>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
