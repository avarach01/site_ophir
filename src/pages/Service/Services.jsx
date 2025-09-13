import React from 'react';
import { motion } from 'framer-motion';

/**
 * @endpoint GET /api/services
 * @response {
 *   services: Array<{
 *     id: number,
 *     title: string,
 *     description: string,
 *     icon: string,
 *     color: string
 *   }>
 * }
 */

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et réactifs adaptés à vos besoins.",
      icon: "🌐",
      color: "bg-blue-100"
    },
    {
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles pour iOS et Android.",
      icon: "📱",
      color: "bg-green-100"
    },
    {
      title: "Conseil en Technologie",
      description: "Expertise et conseils pour optimiser vos solutions technologiques.",
      icon: "💡",
      color: "bg-yellow-100"
    },
    {
      title: "Maintenance et Support",
      description: "Support continu et maintenance pour vos projets existants.",
      icon: "🛠️",
      color: "bg-purple-100"
    }
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold mb-12 text-center text-gray-800" variants={itemVariants}>
        Nos Services
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants} 
            className={`${service.color} rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-colors">
              En savoir plus
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
