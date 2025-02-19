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
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="text-center p-6 bg-black rounded-lg border border-gray-800 relative overflow-hidden group-hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}