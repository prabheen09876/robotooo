import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Add some awesome robotics components to get started!</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-purple-400">${item.price}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-400" />
                </button>
                <span className="text-white w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 rounded-full hover:bg-red-500/10 text-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="h-px bg-gray-800"></div>
              <div className="flex justify-between text-white font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
