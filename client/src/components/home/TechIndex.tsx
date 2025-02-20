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
  {
    title: "Our Mission",
    path: "/mission",
    description: "Empowering businesses through innovative digital solutions",
    texture: "url('https://www.transparenttextures.com/patterns/brick-wall.png')"
  },
  {
    title: "Our Vision",
    path: "/vision",
    description: "Leading the future of digital innovation and transformation",
    texture: "url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')"
  },
  {
    title: "Our Philosophy",
    path: "/philosophy",
    description: "Guided by principles that define who we are",
    texture: "url('https://www.transparenttextures.com/patterns/dark-geometric.png')"
  },
  {
    title: "Our Strategy",
    path: "/strategy",
    description: "Systematic approach to delivering excellence",
    texture: "url('https://www.transparenttextures.com/patterns/diagmonds.png')"
  },
];

const backgroundWords = [
  "Innovation",
  "Technology",
  "Excellence",
  "Development",
  "Design",
  "Animation",
  "Future",
  "Growth",
];

export default function TechIndex() {
  return (
    <section className="py-24 flex justify-center bg-black relative overflow-hidden">
      {/* Animated background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {backgroundWords.map((word, index) => (
          <motion.div
            key={index}
            className="absolute text-gray-800 text-8xl font-bold opacity-5"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
              x: [-20, 0, -20],
              y: [-20, 0, -20],
            }}
            transition={{
              duration: 8,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${(index % 4) * 25}%`,
              top: `${Math.floor(index / 4) * 33}%`,
              transform: `rotate(${index * 45}deg)`,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-10"
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
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
            className="relative z-10"
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative z-10"
          >
            {philosophies.map((item, index) => (
              <Link key={index} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer relative group"
                >
                  <Button
                    variant="outline"
                    className="w-full h-32 text-lg font-semibold text-white border-gray-800 group-hover:border-primary group-hover:bg-gray-900 transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundImage: item.texture,
                      backgroundSize: 'auto',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 space-y-2">
                      <span className="block">{item.title}</span>
                      <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </span>
                    </div>
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