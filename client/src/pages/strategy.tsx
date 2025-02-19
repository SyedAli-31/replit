import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    phase: "Discovery",
    steps: [
      "Understanding client needs",
      "Market research",
      "Technology assessment",
      "Opportunity identification",
    ],
  },
  {
    phase: "Planning",
    steps: [
      "Solution architecture",
      "Resource allocation",
      "Timeline development",
      "Risk assessment",
    ],
  },
  {
    phase: "Execution",
    steps: [
      "Agile development",
      "Quality assurance",
      "Regular client updates",
      "Continuous integration",
    ],
  },
  {
    phase: "Optimization",
    steps: [
      "Performance monitoring",
      "User feedback integration",
      "Continuous improvement",
      "Scale optimization",
    ],
  },
];

export default function Strategy() {
  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Our Strategy</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic approach to delivering excellence in every project
          </p>
        </motion.div>

        <div className="space-y-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"
                    >
                      <span className="text-xl font-bold text-primary">
                        {index + 1}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {strategy.phase}
                    </h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {strategy.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{step}</span>
                      </motion.div>
                    ))}
                  </div>
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
            "Our strategy is built on years of experience, continuous learning, and
            a commitment to delivering measurable results for our clients."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
