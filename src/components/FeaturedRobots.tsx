import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Settings, Cpu, Database, Wifi, Battery } from 'lucide-react';
import { useCart } from '../context/CartContext';

const featuredItems = [
  {
    id: 1,
    name: "Quantum Servo Motor",
    category: "Actuators",
    price: "299",
    image: "https://images.unsplash.com/photo-1631722670977-394e5cd9d730?auto=format&fit=crop&q=80&w=800",
    specs: {
      voltage: "12V DC",
      torque: "20kg/cm",
      speed: "0.12s/60°",
      weight: "150g"
    }
  },
  {
    id: 2,
    name: "Advanced IMU Sensor",
    category: "Sensors",
    price: "89",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    specs: {
      axes: "9-Axis",
      resolution: "16-bit",
      interface: "I2C/SPI",
      voltage: "3.3-5V"
    }
  },
  {
    id: 3,
    name: "AI Development Board",
    category: "Controllers",
    price: "199",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    specs: {
      processor: "Neural Core",
      memory: "8GB RAM",
      storage: "32GB",
      connectivity: "WiFi/BT"
    }
  }
];

export function FeaturedProducts() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
    setSelectedItem(null);
  };

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Components</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our selection of high-quality robotics components, from motors to sensors,
            perfect for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <React.Fragment key={item.id}>
              <motion.div
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedItem(item.id)}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-purple-500/50 transition-colors"
              >
                <motion.div layoutId={`image-${item.id}`} className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </motion.div>
                <div className="p-6">
                  <motion.h3 layoutId={`title-${item.id}`} className="text-xl font-semibold text-white mb-2">
                    {item.name}
                  </motion.h3>
                  <motion.p layoutId={`price-${item.id}`} className="text-2xl text-purple-500 font-bold">
                    ${item.price}
                  </motion.p>
                </div>
              </motion.div>

              <AnimatePresence>
                {selectedItem === item.id && (
                  <motion.div
                    layoutId={`card-${item.id}`}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div 
                      className="bg-gray-900/95 backdrop-blur-xl w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
                      layoutId={`card-content-${item.id}`}
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <div className="relative aspect-[16/9]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </div>
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setSelectedItem(null)}
                          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      </div>

                      <div className="p-6">
                        <motion.h3 
                          layout
                          className="text-2xl font-semibold text-white mb-2"
                        >
                          {item.name}
                        </motion.h3>
                        <motion.p 
                          layout
                          className="text-3xl text-purple-500 font-bold mb-6"
                        >
                          ${item.price}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="space-y-6"
                        >
                          <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400">
                              Experience the cutting-edge technology with our {item.name.toLowerCase()}. 
                              Designed for optimal performance and reliability, this {item.category.toLowerCase()} 
                              component is perfect for advanced robotics projects and automation systems.
                            </p>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {Object.entries(item.specs).map(([key, value], index) => (
                              <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="flex items-center gap-2 text-gray-400 bg-black/30 p-3 rounded-xl backdrop-blur-sm"
                              >
                                <span className="text-purple-500">
                                  {key === 'voltage' && <Zap className="w-4 h-4" />}
                                  {key === 'torque' && <Settings className="w-4 h-4" />}
                                  {key === 'processor' && <Cpu className="w-4 h-4" />}
                                  {key === 'memory' && <Database className="w-4 h-4" />}
                                  {key === 'axes' && <Settings className="w-4 h-4" />}
                                  {key === 'interface' && <Wifi className="w-4 h-4" />}
                                  {key === 'resolution' && <Cpu className="w-4 h-4" />}
                                  {key === 'storage' && <Database className="w-4 h-4" />}
                                  {key === 'connectivity' && <Wifi className="w-4 h-4" />}
                                  {key === 'speed' && <Zap className="w-4 h-4" />}
                                  {key === 'weight' && <Battery className="w-4 h-4" />}
                                </span>
                                <div>
                                  <p className="text-xs text-gray-500 capitalize">{key}</p>
                                  <p className="text-sm">{value}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex gap-3 p-6"
                          >
                            <button 
                              onClick={() => handleAddToCart(item)}
                              className="flex-1 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                            >
                              Add to Cart
                            </button>
                            <button 
                              onClick={() => setSelectedItem(null)}
                              className="flex-1 px-6 py-3 rounded-full border border-purple-600 text-purple-400 hover:bg-purple-600/10 transition-colors"
                            >
                              Close
                            </button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}