import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
];

const variants = {
  enter: (direction) => {
    return {
      z: 0,
      opacity: 0,
      scale: 1.2,
      rotateY: direction > 0 ? 15 : -15,
    };
  },
  center: {
    z: 1,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction) => {
    return {
      z: 0,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    };
  },
};

const LandingPageHero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage, prevDirection]) => [(prevPage + 1) % images.length, 1]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imageIndex = Math.abs(page % images.length);

  return (
    <div className="relative h-screen overflow-hidden perspective-1000">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1 },
            rotateY: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-roboto-mono">OPHIR Technologies</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-roboto-mono leading-relaxed">
            Révolutionnez vos services de santé avec notre plateforme de télémédecine de pointe. 
            Augmentez votre efficacité, réduisez vos coûts et améliorez la satisfaction de vos patients dès aujourd'hui !
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg lg:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-roboto-mono"
          >
            Demandez une démo gratuite
          </motion.button>
        </motion.div>
      </div>

      {/* Pagination améliorée */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
              className="group relative"
              aria-label={`Aller à l'image ${index + 1}`}
            >
              <span className={`block w-6 sm:w-7 lg:w-8 h-1 bg-white bg-opacity-30 rounded-full transition-all duration-300 group-hover:bg-opacity-50`}></span>
              <span className={`absolute bottom-0 left-0 h-1 bg-white rounded-full transition-all duration-500 ${
                index === imageIndex ? 'w-full' : 'w-0'
              }`}></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
