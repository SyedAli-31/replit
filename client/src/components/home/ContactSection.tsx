import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our custom software solutions
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
