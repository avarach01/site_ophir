import React from 'react';
import { motion } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
  const flowElements = [
    { className: "flow-element blue", delay: 0 },
    { className: "flow-element yellow", delay: 0.5 },
    { className: "flow-element green", delay: 1 },
    { className: "flow-element purple", delay: 1.5 },
    { className: "flow-element orange", delay: 2 },
  ];

  return (
    <div className="bg-white text-[#1c3c98] py-20 relative overflow-hidden mt-16">
      {/* Animations de fond - éléments flottants */}
      {flowElements.map((element, index) => (
        <motion.div
          key={index}
          className={element.className}
          initial={{ x: "-100%", y: "100%" }}
          animate={{
            x: ["-100%", "100%"],
            y: ["100%", "-100%"],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
      
      {/* Animations de fond - blobs colorés */}
      <motion.div 
        className="color-blob blue"
        animate={{
          scale: [1, 1.2, 1.1, 1.3, 1],
          x: [0, 50, -30, 20, 0],
          y: [0, 30, -50, 40, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div 
        className="color-blob yellow"
        animate={{
          scale: [1, 1.1, 1.2, 1.3, 1],
          x: [0, -30, 50, -20, 0],
          y: [0, -50, 30, -40, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div 
        className="color-blob green"
        animate={{
          scale: [1, 1.3, 1.1, 1.2, 1],
          x: [0, 20, -40, 30, 0],
          y: [0, -20, 60, -30, 0],
          rotate: [0, 180, 360, 180, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      {/* Contenu principal - statique */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-8 md:mx-16 lg:mx-24">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              À Propos de Nous
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Découvrez notre histoire et notre mission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
