import { motion } from 'framer-motion';
import { Cpu, Battery, Wifi, Zap } from 'lucide-react';

const robots = [
  {
    id: 1,
    name: "Atlas X-1",
    category: "Humanoid",
    price: "149,999",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    specs: {
      processor: "Quantum Core",
      battery: "1000h",
      connectivity: "6G",
      power: "5000W"
    }
  },
  {
    id: 2,
    name: "Nexus Bot",
    category: "Industrial",
    price: "89,999",
    image: "https://images.unsplash.com/photo-1625314887424-9f91e45c02cb?auto=format&fit=crop&q=80&w=800",
    specs: {
      processor: "Neural Engine",
      battery: "800h",
      connectivity: "5G",
      power: "3000W"
    }
  },
  {
    id: 3,
    name: "Cyber Guard",
    category: "Security",
    price: "129,999",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    specs: {
      processor: "AI Core",
      battery: "1200h",
      connectivity: "6G",
      power: "4000W"
    }
  }
];

export function FeaturedRobots() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Robots</h2>
          <p className="text-gray-400">Discover our most advanced and popular models</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robots.map((robot, index) => (
            <motion.div
              key={robot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <div className="relative aspect-square">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{robot.name}</h3>
                    <p className="text-purple-400">{robot.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Starting from</p>
                    <p className="text-xl font-bold text-white">${robot.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-sm">{robot.specs.processor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Battery className="w-4 h-4" />
                    <span className="text-sm">{robot.specs.battery}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Wifi className="w-4 h-4" />
                    <span className="text-sm">{robot.specs.connectivity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">{robot.specs.power}</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-600/50 hover:bg-purple-600/30 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}