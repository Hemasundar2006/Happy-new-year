import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wishes = [
  // 🌟 Short & Classic
  "Happy New Year! May 2026 be your best year yet.",
  "Wishing you peace, love, and laughter in the coming year.",
  "Out with the old, in with the new! Happy 2026.",
  "Cheers to a year of health, wealth, and happiness.",
  "May 2026 bring you endless opportunities.",
  "Happy New Year! Let's make every moment count.",
  "Sending you big hugs and best wishes for 2026.",
  "New year, new beginnings. Enjoy the journey!",
  "Wishing you a bright and prosperous 2026.",
  "May your 2026 be filled with sunshine and success.",
  
  // 😂 Funny & Lighthearted
  "May your resolution last longer than your leftovers.",
  "2026: The year I finally stop saying 'last year' when I mean 2024.",
  "I would quit all my bad habits for 2026, but nobody likes a quitter.",
  "Happy New Year! Let's eat, drink, and be merry—for tomorrow we diet.",
  "May your bank account grow faster than your waistline this year.",
  "New Year's resolution: To remember why I walked into the room.",
  "2026 is the year I'll be 'productive.' (Sending this from my couch).",
  "Cheers to another year of pretending we know what we're doing.",
  "May your neighbors be respectful and your WiFi be strong.",
  "Here's to 365 days of 'I'll start my diet on Monday.'",
  
  // ❤️ For Family & Friends
  "So grateful to have you by my side as we enter 2026.",
  "To my family: You are my rock. Let's make 2026 unforgettable.",
  "Friends like you make every year a celebration. Happy 2026!",
  "Wishing my favorite people a year of joy and togetherness.",
  "Can't wait to create more memories with you this year.",
  "May our bond grow even stronger in 2026.",
  "Sending love from our family to yours this New Year.",
  "To the friends who are family: Cheers to 2026!",
  "Thank you for being part of my story. Happy New Year.",
  "May your home be filled with love and laughter all year long.",
  
  // 💼 Professional & Respectful
  "Wishing you a successful and productive 2026.",
  "Happy New Year! Thank you for your hard work and dedication.",
  "May the coming year bring new milestones for our team.",
  "Wishing you and your family a prosperous 2026.",
  "Looking forward to another year of great collaboration.",
  "May 2026 be a year of growth and professional fulfillment.",
  "Cheers to a successful year ahead!",
  "Thank you for your partnership. Happy New Year 2026.",
  "Wishing you clarity, focus, and success in all your projects.",
  "May your career reach new heights in the coming year.",
  
  // ✨ Inspirational & Motivational
  "The best is yet to come. — Unknown",
  "2026 is your blank canvas. Paint a masterpiece.",
  "Don't just dream it in 2026—do it.",
  "Write it on your heart that every day is the best day in the year. — Ralph Waldo Emerson",
  "New year, new mindset, new results.",
  "Your potential is limitless. Make 2026 the year you prove it.",
  "Every end is a new beginning. Embrace 2026 with open arms.",
  "May you find the courage to chase your biggest goals this year.",
  "2026: 365 days of growth, 365 days of grace.",
  "Cheers to a new year and another chance for us to get it right. — Oprah Winfrey",
  
  // 🥂 Romantic Wishes
  "I can't wait to spend another year loving you.",
  "Every year with you is my favorite year. Happy 2026, my love.",
  "My New Year's resolution is just to keep making you smile.",
  "2026 is looking bright because you're in it.",
  "To the love of my life: Let's make this our best year yet.",
  "You are my today and all of my tomorrows. Happy New Year.",
  "I'm so lucky to start 2026 in your arms.",
  "Another year down, a lifetime to go. I love you.",
  "Wishing a magical 2026 to the person who makes my life magical.",
  "Cheers to us and the adventures we'll have this year!",
  
  // 🌈 Hopeful & Spiritual
  "May God bless you with peace and joy in 2026.",
  "Wishing you a year filled with faith and renewed hope.",
  "May the light of the new year guide your path.",
  "Praying for your health and happiness in the coming year.",
  "May you feel the warmth of love and the power of grace in 2026.",
  "Trust the journey and the timing of your life this year.",
  "May 2026 be a year of healing and restoration.",
  "Sending you blessings for a peaceful New Year.",
  "May your spirit be lifted and your heart be full.",
  "Wishing you divine favor in everything you do this year.",
  
  // 🌍 For Distance (Long Distance)
  "Miles apart, but close at heart. Happy 2026!",
  "Sending New Year hugs across the miles.",
  "I wish I could be there to toast with you. Happy New Year!",
  "Distance means so little when someone means so much. See you in 2026!",
  "Counting down the days until we can celebrate together.",
  "No matter how far away I am, I'm cheering for you this year.",
  "Across the ocean, I'm wishing you the happiest New Year.",
  "Let's make a plan to see each other soon in 2026!",
  "Even though we're apart, we're under the same New Year sky.",
  "Sending you all my love from afar.",
  
  // 🌠 Short & Sweet (One-Liners)
  "Cheers to 2026!",
  "Make it a year to remember.",
  "Sparkle your way through 2026.",
  "New year, same me—just better.",
  "2026: Let's go!",
  "Manifesting greatness in 2026.",
  "Keep it simple, make it significant.",
  "Hello, 2026!",
  "Good vibes only this year.",
  "Adventure awaits in 2026.",
  
  // 🎓 For Students & Youth
  "May your grades be high and your stress be low in 2026.",
  "Here's to a year of learning, growing, and thriving.",
  "Dream big, study hard, and enjoy the ride.",
  "Wishing you success in all your exams and adventures.",
  "2026 is the year you find your passion.",
  "Make new friends and great memories this year.",
  "Stay curious and stay bold. Happy New Year!",
  "You have the power to change your world in 2026.",
  "May your 2026 be as bright as your future.",
  "Cheers to the Class of 2026 and a brilliant year ahead!"
];

const WishesCard = () => {
  const [currentWish, setCurrentWish] = useState(0);
  const [showCopied, setShowCopied] = useState(false);
  const [showShared, setShowShared] = useState(false);

  const generateRandomWish = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * wishes.length);
    } while (newIndex === currentWish && wishes.length > 1);
    setCurrentWish(newIndex);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(wishes[currentWish]);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareWish = async () => {
    const shareText = `${wishes[currentWish]}\n\nCelebrate New Year 2026 with me! 🎉\nhttps://happynewyear-gray.vercel.app/`;
    
    try {
      // Try using Web Share API if available (mobile devices)
      if (navigator.share) {
        await navigator.share({
          title: 'Happy New Year 2026!',
          text: shareText,
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareText);
        setShowShared(true);
        setTimeout(() => setShowShared(false), 2000);
      }
    } catch (err) {
      console.error('Failed to share:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="glass rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto shadow-2xl relative"
    >
      {/* Copy Notification Toast */}
      <AnimatePresence>
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10"
          >
            <span className="text-lg">✓</span>
            <span className="font-semibold">Wishes Copied!</span>
          </motion.div>
        )}
        
        {showShared && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10"
          >
            <span className="text-lg">🔗</span>
            <span className="font-semibold">Link Copied to Share!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={currentWish}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 font-['Playfair_Display']">
          New Year Wishes
        </h3>
        
        {/* Wish Text - Clickable to Copy */}
        <div 
          onClick={copyToClipboard}
          className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 min-h-[80px] sm:min-h-[100px] flex items-center justify-center cursor-pointer hover:text-white transition-colors px-2 sm:px-4"
          title="Click to copy"
        >
          {wishes[currentWish]}
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
          <button
            onClick={generateRandomWish}
            className="w-full sm:w-auto bg-gradient-to-r from-gold via-yellow-400 to-gold text-midnight px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Generate Random Wish
          </button>
          
          <button
            onClick={copyToClipboard}
            className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>📋</span>
            <span>Copy Wish</span>
          </button>
          
          <button
            onClick={shareWish}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>🔗</span>
            <span>Share</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WishesCard;
