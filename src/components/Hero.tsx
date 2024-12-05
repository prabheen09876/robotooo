import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.2)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <Bot className="w-16 h-16 text-purple-500" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
            RoboMarket
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            The future of robotics trading. Discover, buy, and sell cutting-edge robots and AI systems.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              Explore Marketplace
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800/50 transition-colors">
              List Your Robot
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}