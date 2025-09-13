import React from 'react';
import AboutHero from '../../components/aboutHero/AboutHero';

const AboutUs = () => {
  console.log("Rendering About_us component");

  return (
    <div>
      <AboutHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Chez [Nom de l'entreprise], nous sommes passionnés par l'innovation et déterminés à créer des solutions technologiques qui transforment les entreprises et améliorent la vie des gens.
            </p>
            <p className="text-lg text-gray-600">
              Fondée en [année], notre équipe d'experts en technologie travaille sans relâche pour repousser les limites du possible dans le monde numérique.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Notre équipe" 
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovation', 'Intégrité', 'Excellence'].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{value}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
