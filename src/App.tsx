import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedRobots';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedProducts />
              </>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;