import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Box, 
  Globe, 
  Smartphone, 
  Code2, 
  Search
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions for your brand",
    longDescription: "From brand identity to marketing materials, we create stunning visuals that capture your brand's essence and message.",
    texture: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
    pattern: "radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
  {
    icon: Box, 
    title: "2D/3D Models & Animations",
    description: "Engaging characters and immersive environments",
    longDescription: "Bring your ideas to life with our cutting-edge 3D modeling and animation services, perfect for games and visualizations.",
    texture: "url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')",
    pattern: "radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern and responsive web solutions",
    longDescription: "Custom websites built with the latest technologies, ensuring optimal performance, security, and user experience.",
    texture: "url('https://www.transparenttextures.com/patterns/dark-geometric.png')",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile apps",
    longDescription: "Powerful mobile applications that work seamlessly across iOS and Android, delivering exceptional user experiences.",
    texture: "url('https://www.transparenttextures.com/patterns/diagmonds.png')",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions for your business",
    longDescription: "Tailored software solutions that automate processes, improve efficiency, and drive business growth.",
    texture: "url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')",
    pattern: "radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Optimize your digital presence",
    longDescription: "Comprehensive SEO strategies that improve your visibility online and drive organic traffic to your website.",
    texture: "url('https://www.transparenttextures.com/patterns/worn-dots.png')",
    pattern: "linear-gradient(45deg, rgba(255, 0, 0, 0.05) 0%, transparent 50%)"
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              We Offer a Wide Range of IT Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to execution, we deliver excellence in every digital solution
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card 
                className="bg-gray-900 border-gray-800 hover:border-primary transition-all duration-300 overflow-hidden relative h-full"
                style={{ 
                  backgroundImage: `${service.texture}, ${service.pattern}`,
                  backgroundSize: 'auto, 200% 200%',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 group-hover:opacity-0 transition-opacity duration-300"/>
                <div className="relative h-full">
                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-12 h-12 text-primary mb-4" />
                    </motion.div>
                    <CardTitle className="text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                        {service.description}
                      </p>
                      <p className="text-gray-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.longDescription}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}