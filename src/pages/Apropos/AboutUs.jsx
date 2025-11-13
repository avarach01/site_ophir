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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-600">
              Distributeurs et intégration de solutions technologiques (matériels et logiciels) pour le secteur médical. Nous proposons aux professionnels de la santé les meilleures solutions pour améliorer la prise en charge de leurs patients.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notre Vision</h2>
            <p className="text-lg text-gray-600">
              Rendre les soins de santé de qualité accessibles géographiquement et économiquement, dans une approche durable et socialement responsable.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notre Approche</h2>
            <p className="text-lg text-gray-600">
              Une approche globale et socialement responsable. Des solutions qui ont fait leur preuve d'efficacité. Une équipe internationale, agile et expérimentée, capable de livrer un projet en quelques semaines. Des offres globales et personnalisées (Solution + Financement + Déploiement).
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
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Nos Atouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Solutions Éprouvées</h3>
              <p className="text-gray-600">Des solutions qui ont fait leur preuve d'efficacité dans le secteur médical.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Équipe Internationale</h3>
              <p className="text-gray-600">Une équipe agile et expérimentée, capable de livrer un projet en quelques semaines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Offres Globales</h3>
              <p className="text-gray-600">Solutions complètes : Solution + Financement + Déploiement personnalisés.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Réseau International</h3>
              <p className="text-gray-600">Nos solutions s'adaptent à tout type d'établissement, à chaque niveau de la pyramide sanitaire.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sécurité et Accréditations</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            OPHIR TECHNOLOGIES traite des informations concernant la santé des patients. Nous devons donc respecter des normes élevées de sécurité des données. Actuellement OPHIR TECHNOLOGIES dispose des accréditations nécessaires pour garantir la sécurité et la confidentialité des données médicales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
