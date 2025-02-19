import { motion } from "framer-motion";

const stats = [
  { number: "1500+", label: "Projects Done" },
  { number: "2K+", label: "Happy Customer" },
  { number: "28+", label: "Experienced Staff" },
  { number: "15+", label: "Countries Worldwide" },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses worldwide for delivering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-black rounded-lg border border-gray-800"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
