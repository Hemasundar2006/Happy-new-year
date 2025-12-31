import { motion } from 'framer-motion';

const FloatingElements = () => {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  const balloons = [
    { id: 1, emoji: '🎈', left: '10%', delay: 0 },
    { id: 2, emoji: '🎊', left: '25%', delay: 0.5 },
    { id: 3, emoji: '🎉', left: '75%', delay: 1 },
    { id: 4, emoji: '🎆', left: '90%', delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute text-gold"
          style={{
            left: star.left,
            top: star.top,
            fontSize: `${star.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Floating Balloons/Emojis */}
      {balloons.map((balloon) => (
        <motion.div
          key={`balloon-${balloon.id}`}
          className="absolute text-6xl"
          style={{
            left: balloon.left,
            bottom: '-100px',
          }}
          animate={{
            y: [-100, -window.innerHeight - 100],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {balloon.emoji}
        </motion.div>
      ))}

      {/* Sparkles around the edges */}
      <motion.div
        className="absolute top-10 right-10 text-4xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💫
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-4xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌟
      </motion.div>
    </div>
  );
};

export default FloatingElements;
