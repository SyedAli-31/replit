import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <h2 className="text-3xl font-bold mb-6">About OrientSoft</h2>
            <p className="text-gray-600 mb-6">
              We are a leading software development company with over 10 years of
              experience in delivering innovative solutions to businesses worldwide.
              Our team of expert developers, designers, and consultants work
              together to create exceptional digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Expert Developers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
