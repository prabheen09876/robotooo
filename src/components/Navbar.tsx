import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X, Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { totalItems } = useCart();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-800">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            RoboMarket
          </Link>

          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                placeholder="Search components..."
                className="w-full bg-black/30 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-800"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.div>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-4 top-24 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 p-6 md:hidden"
            >
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full bg-black/30 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-800"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <Link to="/cart" className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  <span>Cart {totalItems > 0 && `(${totalItems})`}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}