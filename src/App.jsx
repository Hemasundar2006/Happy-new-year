import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Analytics } from '@vercel/analytics/react';
import Countdown from './components/Countdown';
import WishesCard from './components/WishesCard';
import GiftBox from './components/GiftBox';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import './index.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial confetti burst on page load
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffd700', '#ffed4e', '#00d4ff', '#ff006e'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffd700', '#ffed4e', '#00d4ff', '#ff006e'],
      });
    }, 250);

    // Fade in content
    setTimeout(() => setShowContent(true), 500);

    return () => clearInterval(interval);
  }, []);

  const triggerFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Fireworks from multiple positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffd700', '#ffed4e', '#00d4ff', '#ff006e', '#ffffff'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffd700', '#ffed4e', '#00d4ff', '#ff006e', '#ffffff'],
      });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-midnight-light to-midnight relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-gradient mb-3 sm:mb-4 font-['Playfair_Display'] animate-glow px-2"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Happy New Year
          </motion.h1>
          <motion.div
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-neon-gradient font-['Playfair_Display']"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            2026
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12 md:mb-16 w-full"
        >
          <Countdown />
        </motion.div>

        {/* Wishes Card */}
        <div className="mb-8 sm:mb-10 md:mb-12 w-full px-2 sm:px-0">
          <WishesCard />
        </div>

        {/* Gift Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 sm:mb-10 md:mb-12 w-full px-2 sm:px-0"
        >
          <GiftBox />
        </motion.div>

        {/* Fireworks Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerFireworks}
          className="bg-gradient-to-r from-neon-pink via-neon-blue to-gold text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,0,110,0.6)] transition-all duration-300 w-auto"
        >
          🎆 Launch Fireworks 🎆
        </motion.button>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 0.7 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/70 text-center mt-8 sm:mt-12 md:mt-16 text-sm sm:text-base md:text-lg max-w-2xl px-4"
        >
          May this year bring you endless joy, success, and unforgettable moments with your loved ones! 🥳
        </motion.p>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
