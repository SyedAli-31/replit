import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 1500, label: "Projects Done" },
  { number: 2000, label: "Happy Customers" },
  { number: 28, label: "Experienced Staff" },
  { number: 15, label: "Countries Worldwide" },
];

export default function Statistics() {
  return (
    <section
      className="py-24 px-6 flex justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/stats.jpg')" }}
    >
      <div className="container max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12 bg-gray-900/80 p-8 rounded-lg">
        {/* Left Side - Business Impact Statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            We've helped businesses increase their revenue on average by{" "}
            <span className="text-blue-500">90%</span> in their first year with us!
          </h2>
        </motion.div>

        {/* Right Side - Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} value={stat.number} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
function AnimatedStat({ value, label, index }: { value: number; label: string; index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 3000; // 3 seconds
    const step = Math.ceil(end / (duration / 10)); // Faster counting

    const timer = setInterval(() => {
      start += step;
      setCount((prev) => (start <= end ? start : end));
      if (start >= end) clearInterval(timer);
    }, 10); // Update every 10ms for smoother and faster animation

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-red-600 to-black rounded-lg p-6 w-[180px] h-[120px] text-center flex flex-col justify-center shadow-lg"
    >
      <h3 className="text-4xl font-bold text-white mb-1">{count}+</h3>
      <p className="text-white text-sm">{label}</p>
    </motion.div>
  );
}
