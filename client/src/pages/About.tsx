import { motion } from "framer-motion";
const stats = [
  { number: "1500+", label: "Projects Done" },
  { number: "2K+", label: "Happy Customer" },
  { number: "28+", label: "Experienced Staff" },
  { number: "15+", label: "Countries Worldwide" },
];
export default function About() {
  return (
    <div className="py-16 flex justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl font-bold mb-6">About Devillixart</h2>
            <p className="text-gray-600 mb-6">
              We are a leading software development company with over 10 years of
              experience in delivering innovative solutions to businesses worldwide.
              Our team of expert developers, designers, and consultants work
              together to create exceptional digital experiences.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, OrientSoft has grown from a small team of developers
              to a full-service software development company. We've helped hundreds
              of businesses across the globe transform their digital presence and
              achieve their goals.
            </p>
            <p className="text-gray-600">
              Our mission is to deliver exceptional software solutions that drive
              business growth and innovation. We combine technical expertise with
              industry knowledge to create custom solutions that meet our clients'
              unique needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {stats.map((stats, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stats.number}
              </h3>
              <p className="text-white">{stats.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: "Our Vision",
      content:
        "To be the leading software development partner for businesses worldwide, driving digital innovation and success.",
    },
    {
      title: "Our Mission",
      content:
        "To deliver exceptional software solutions that empower businesses to achieve their full potential in the digital age.",
    },
    {
      title: "Our Values",
      content:
        "Excellence, Innovation, Integrity, and Client Success guide everything we do.",
    },
  ].map((section, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative text-center p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-red-700 text-white border  border-gray-700 group overflow-hidden"
    >
      {/* Glowing Border Effect */}
      <div className="absolute inset-0  bg-gradient-to-r from-black to-red-600 opacity-25 blur-xl group-hover:opacity-50 transition duration-500"></div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4  group-hover:text-red-400 transition duration-300">
        {section.title}
      </h3>
      <p className="text-white font-bold group-hover:text-white transition duration-300">
        {section.content}
      </p>

      {/* Hover Effect: Lift + Glow */}
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500"></div>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
}
