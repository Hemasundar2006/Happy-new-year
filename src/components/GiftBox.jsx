import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftBox = () => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [showInput, setShowInput] = useState(true);

  const handleClaimGift = () => {
    if (!userName.trim()) {
      alert('Please enter your name first!');
      return;
    }

    setShowInput(false);
    setIsLoading(true);

    // Show loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsOpened(true);
    }, 2000);
  };

  const resetGift = () => {
    setUserName('');
    setIsOpened(false);
    setShowInput(true);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {showInput && !isLoading && !isOpened && (
          <motion.div
            key="input"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center font-['Playfair_Display']">
              🎁 Claim Your New Year Gift
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6 text-center">
              Enter your name to receive a special surprise!
            </p>
            
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleClaimGift()}
              placeholder="Enter your name..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-all duration-300 text-center text-base sm:text-lg mb-4"
            />
            
            <button
              onClick={handleClaimGift}
              className="w-full bg-gradient-to-r from-gold via-yellow-400 to-gold text-midnight px-6 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              🎁 Claim Your Gift
            </button>
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="glass rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center min-h-[300px]"
          >
            {/* Animated Gift Box */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl mb-6"
            >
              🎁
            </motion.div>
            
            {/* Loading Text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-xl font-semibold"
            >
              Opening your gift...
            </motion.p>
            
            {/* Loading Dots */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 bg-gold rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}

        {isOpened && (
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="glass rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Confetti Background Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, opacity: 1 }}
                  animate={{ y: 400, opacity: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    fontSize: '24px',
                  }}
                >
                  {['🎉', '✨', '🎊', '⭐'][Math.floor(Math.random() * 4)]}
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="text-6xl sm:text-7xl mb-4"
              >
                🎉
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-4 font-['Playfair_Display']"
              >
                Happy New Year!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl sm:text-2xl text-white/90 mb-6 font-semibold"
              >
                Dear {userName},
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-base sm:text-lg text-white/80 leading-relaxed mb-8"
              >
                May 2026 bring you endless joy, success, and unforgettable moments! 
                Wishing you a year filled with love, laughter, and amazing adventures! 🌟
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-sm sm:text-base text-white/60 italic mb-6"
              >
                - from Hemasundar
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                onClick={resetGift}
                className="bg-gradient-to-r from-neon-blue to-neon-pink text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Send to Another Friend
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBox;
