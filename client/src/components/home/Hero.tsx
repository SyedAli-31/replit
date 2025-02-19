import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We create innovative software solutions that drive business growth and digital transformation
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team working together"
            className="rounded-lg shadow-2xl w-full aspect-video object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
