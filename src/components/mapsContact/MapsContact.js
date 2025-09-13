import React from 'react';
import { motion } from 'framer-motion';

const MapsContact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="w-full h-96 overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.0074007812824!2d-3.958361619055739!3d5.412462213352558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc193002db7f63d%3A0xf701915e750c84fa!2sOphir-technologies%20Africa!5e0!3m2!1sfr!2sci!4v1730726595328!5m2!1sfr!2sci"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Carte de localisation"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default MapsContact;
