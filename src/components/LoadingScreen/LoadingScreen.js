import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center"
    >
      <LoadingSpinner />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xl font-semibold text-gray-700"
      >
        Chargement...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
