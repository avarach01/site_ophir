import React from 'react';
import ContactHero from '../../components/contactHero/ContactHero';

const Contact_us = () => {
  return (
    <div>
      <ContactHero />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Formulaire de contact</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-600">Nom</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-600">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Envoyer</button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Nos coordonnées</h2>
              <p className="text-gray-600">123 Rue de l'Example</p>
              <p className="text-gray-600">75000 Paris, France</p>
              <p className="text-gray-600">Téléphone : +33 1 23 45 67 89</p>
              <p className="text-gray-600">Email : contact@example.com</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Heures d'ouverture</h2>
              <p className="text-gray-600">Lundi - Vendredi : 9h00 - 18h00</p>
              <p className="text-gray-600">Samedi : 10h00 - 16h00</p>
              <p className="text-gray-600">Dimanche : Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Notre ici localisation</h2>
          {/* <iframe
            src="https://www.google.com/maps/dir/5.4125894,-3.9584955/5.4126855,-3.9578035/@5.4114181,-3.9621824,17z/data=!3m1!4b1!4m5!4m4!1m1!4e1!1m1!4e1?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="450"
            title="Notre localisation"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
