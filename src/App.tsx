import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedRobots } from './components/FeaturedRobots';
import { Stats } from './components/Stats';
import { CircuitBackground } from './components/CircuitBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <CircuitBackground />
      </div>
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <FeaturedRobots />
      </div>
    </div>
  );
}

export default App;