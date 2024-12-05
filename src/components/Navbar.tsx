import { motion } from 'framer-motion';
import { Bot, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 mx-4 z-50 bg-black/50 backdrop-blur-lg border border-gray-800 rounded-full"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold text-white">RoboMarket</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div 
              className="relative mt-2 group"
              initial={{ width: "200px" }}
              whileHover={{ width: "250px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm bg-black/30 border border-gray-700 rounded-full 
                text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent
                transition-all duration-300 ease-in-out
                hover:bg-black/50 focus:bg-black/50"
                placeholder="Search robots..."
              />
            </motion.div>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Marketplace</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}