import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a team of passionate developers dedicated to creating innovative software solutions
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
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Expert Developers" },
            { number: "15+", label: "Countries Served" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
