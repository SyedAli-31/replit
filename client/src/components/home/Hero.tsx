import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11114-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block">Welcome to</span>
              <span className="block text-primary">Devillixart</span>
            </h1>
            <p className="text-2xl text-white/80 font-semibold mt-4 mb-8">
              Experience. Execution. Excellence.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Creating innovative digital experiences through cutting-edge technology and creative excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white/10">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}