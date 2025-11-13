import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ProductsHero from '../../components/productsHero/ProductsHero';

const Products = () => {
  console.log("Rendering Products component");

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les Produits', icon: '🔍' },
    { id: 'solutions', name: 'Solutions MedConnect', icon: '💼' },
    { id: 'equipments', name: 'Équipements Diagnostic', icon: '🩺' },
    { id: 'platform', name: 'Plateforme Logicielle', icon: '💻' }
  ];

  const subcategories = {
    solutions: [
      { id: 'mallette', name: 'Mallette MedConnect', icon: '💼' },
      { id: 'sac-dos', name: 'Sac à Dos Nomade', icon: '🎒' },
      { id: 'chariot', name: 'Chariot MedConnect', icon: '🛒' }
    ],
    equipments: [
      { id: 'diagnostic', name: 'Équipements Diagnostic', icon: '📊' },
      { id: 'teleaudiologie', name: 'Téléaudiologie', icon: '👂' },
      { id: 'ophtalmologie', name: 'Ophtalmologie', icon: '👁️' },
      { id: 'echographie', name: 'Échographie', icon: '🔬' }
    ],
    platform: [
      { id: 'dossier-patient', name: 'Dossier Patient', icon: '📋' },
      { id: 'teleconsultation', name: 'Téléconsultation', icon: '🩺' },
      { id: 'teleexpertise', name: 'Téléexpertise', icon: '👨‍⚕️' },
      { id: 'agenda', name: 'Agenda Partagé', icon: '📅' }
    ]
  };

  const products = [
    // SOLUTIONS MEDCONNECT 360°
    {
      id: 1,
      name: 'Mallette MedConnect 360°',
      description: 'Une révolution dans les soins aux patients. Conçue pour les professionnels de santé, cette solution portable intègre des équipements de diagnostic de pointe permettant des consultations à distance de haute qualité.',
      image: '/images/products/mallette-medconnect.jpg',
      category: 'mallette',
      mainCategory: 'solutions',
      features: ['Équipements de diagnostic de pointe', 'Consultations à distance haute qualité', 'Solution portable et complète', 'Améliore l\'accès aux soins'],
      inStock: true,
      specifications: {
        'Type': 'Mallette portable',
        'Équipements': 'Diagnostic complet',
        'Usage': 'Professionnels de santé',
        'Avantage': 'Consultations à distance'
      }
    },
    {
      id: 2,
      name: 'Sac à Dos Nomade MedConnect 360°',
      description: 'Portabilité et mobilité : notre sac est conçu pour être léger et facile à transporter. Accès aux soins dans les zones reculées avec équipement complet pour le diagnostic médical à distance.',
      image: '/images/products/sac-dos-medconnect.jpg',
      category: 'sac-dos',
      mainCategory: 'solutions',
      features: ['Léger et facile à transporter', 'Accès aux soins zones reculées', 'Équipement complet intégré', 'Mobilité optimale'],
      inStock: true,
      specifications: {
        'Type': 'Sac à dos nomade',
        'Poids': 'Léger',
        'Usage': 'Zones reculées',
        'Avantage': 'Mobilité maximale'
      }
    },
    {
      id: 3,
      name: 'Chariot MedConnect 360°',
      description: 'Combinant ergonomie, technologie avancée et facilité d\'utilisation, notre chariot est conçu pour transformer chaque espace en une station de télémédecine de pointe.',
      image: '/images/products/chariot-medconnect.jpg',
      category: 'chariot',
      mainCategory: 'solutions',
      features: ['Ergonomie optimale', 'Technologie avancée', 'Facilité d\'utilisation', 'Station télémédecine complète'],
      inStock: true,
      specifications: {
        'Type': 'Chariot mobile',
        'Usage': 'Station fixe/mobile',
        'Avantage': 'Transformation d\'espace',
        'Adaptabilité': 'Tous types d\'établissements'
      }
    },

    // ÉQUIPEMENTS DE DIAGNOSTIC
    {
      id: 4,
      name: 'Camera Riester RCS 100',
      description: 'Caméra médicale haute résolution pour examens et téléconsultations de qualité professionnelle.',
      image: '/images/products/camera-riester.jpg',
      category: 'diagnostic',
      mainCategory: 'equipments',
      features: ['Haute résolution', 'Qualité professionnelle', 'Examen détaillé', 'Téléconsultation optimale'],
      inStock: true,
      specifications: {
        'Marque': 'Riester',
        'Modèle': 'RCS 100',
        'Usage': 'Examens médicaux',
        'Qualité': 'Professionnelle'
      }
    },
    {
      id: 5,
      name: 'ECG Cardioline',
      description: 'Appareil ECG portable pour l\'électrocardiographie, essentiel dans le diagnostic cardiaque.',
      image: '/images/products/ecg-cardioline.jpg',
      category: 'diagnostic',
      mainCategory: 'equipments',
      features: ['Portable', 'Diagnostic cardiaque', 'Précision médicale', 'Facilité d\'utilisation'],
      inStock: true,
      specifications: {
        'Type': 'ECG portable',
        'Usage': 'Diagnostic cardiaque',
        'Précision': 'Médicale',
        'Portabilité': 'Oui'
      }
    },
    {
      id: 6,
      name: 'Glucomètre Multi-paramètres',
      description: 'Appareil de mesure de la glycémie et autres paramètres vitaux pour le suivi des patients diabétiques.',
      image: '/images/products/glucometre.jpg',
      category: 'diagnostic',
      mainCategory: 'equipments',
      features: ['Mesure glycémie', 'Multi-paramètres', 'Suivi diabétique', 'Résultats rapides'],
      inStock: true,
      specifications: {
        'Type': 'Glucomètre',
        'Paramètres': 'Multiples',
        'Usage': 'Suivi diabétique',
        'Rapidité': 'Résultats instantanés'
      }
    },
    {
      id: 7,
      name: 'Stéthoscope Riester',
      description: 'Stéthoscope électronique de qualité professionnelle pour auscultation précise.',
      image: '/images/products/stethoscope-riester.jpg',
      category: 'diagnostic',
      mainCategory: 'equipments',
      features: ['Électronique', 'Qualité professionnelle', 'Auscultation précise', 'Marque Riester'],
      inStock: true,
      specifications: {
        'Marque': 'Riester',
        'Type': 'Électronique',
        'Usage': 'Auscultation',
        'Qualité': 'Professionnelle'
      }
    },
    {
      id: 8,
      name: 'Moniteur de Signes Vitaux',
      description: 'Appareil de monitoring complet pour la surveillance en temps réel des signes vitaux des patients.',
      image: '/images/products/moniteur-signes-vitaux.jpg',
      category: 'diagnostic',
      mainCategory: 'equipments',
      features: ['Monitoring complet', 'Temps réel', 'Surveillance continue', 'Multi-paramètres'],
      inStock: true,
      specifications: {
        'Type': 'Moniteur',
        'Paramètres': 'Multiples',
        'Surveillance': 'Temps réel',
        'Usage': 'Soins intensifs'
      }
    },
    {
      id: 9,
      name: 'Échographe Portable',
      description: 'Échographe portable haute performance pour examens échographiques en mobilité.',
      image: '/images/products/echographe-portable.jpg',
      category: 'echographie',
      mainCategory: 'equipments',
      features: ['Portable', 'Haute performance', 'Examen mobile', 'Qualité image optimale'],
      inStock: true,
      specifications: {
        'Type': 'Échographe portable',
        'Performance': 'Haute',
        'Mobilité': 'Oui',
        'Qualité': 'Image optimale'
      }
    },

    // TÉLÉAUDIOLOGIE
    {
      id: 10,
      name: 'Audiomètre Luna USB Plug & Play',
      description: 'Audiomètre USB pour tests auditifs complets, facilement connectable et utilisable.',
      image: '/images/products/audiometre-luna.jpg',
      category: 'teleaudiologie',
      mainCategory: 'equipments',
      features: ['Plug & Play USB', 'Tests auditifs complets', 'Facile à utiliser', 'Connexion simple'],
      inStock: true,
      specifications: {
        'Type': 'Audiomètre USB',
        'Connexion': 'Plug & Play',
        'Usage': 'Tests auditifs',
        'Facilité': 'Installation simple'
      }
    },
    {
      id: 11,
      name: 'Tympanomètre Titan',
      description: 'Tympanomètre professionnel pour l\'évaluation de la fonction tympanique et de l\'oreille moyenne.',
      image: '/images/products/tympanometre-titan.jpg',
      category: 'teleaudiologie',
      mainCategory: 'equipments',
      features: ['Professionnel', 'Évaluation tympanique', 'Oreille moyenne', 'Précision médicale'],
      inStock: true,
      specifications: {
        'Type': 'Tympanomètre',
        'Modèle': 'Titan',
        'Usage': 'Évaluation auditive',
        'Qualité': 'Professionnelle'
      }
    },

    // OPHTALMOLOGIE
    {
      id: 12,
      name: 'Visionix VX 120+',
      description: 'Système d\'examen ophtalmologique complet pour diagnostics précis de la vision.',
      image: '/images/products/visionix-vx120.jpg',
      category: 'ophtalmologie',
      mainCategory: 'equipments',
      features: ['Examen complet', 'Diagnostic précis', 'Système intégré', 'Haute technologie'],
      inStock: true,
      specifications: {
        'Type': 'Système ophtalmologique',
        'Modèle': 'VX 120+',
        'Usage': 'Examen vision',
        'Technologie': 'Haute précision'
      }
    },

    // PLATEFORME LOGICIELLE
    {
      id: 13,
      name: 'Plateforme Logicielle Intégrée',
      description: 'Plateforme logicielle parfaitement intégrée avec modules Dossier Patient, Téléconsultation, Téléexpertise, Agenda Partagé et Mode Urgences.',
      image: '/images/products/plateforme-logicielle.jpg',
      category: 'dossier-patient',
      mainCategory: 'platform',
      features: ['Dossier Patient Informatisé', 'Téléconsultation en direct', 'Téléexpertise', 'Agenda Partagé', 'Mode Urgences', 'Logiciel Cloud'],
      inStock: true,
      specifications: {
        'Type': 'Plateforme Cloud',
        'Modules': 'Complets',
        'Sécurité': 'Normes élevées',
        'Intégration': 'Parfaite'
      }
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.mainCategory === selectedCategory);

  return (
    <div>
      <Helmet>
        <title>Nos Produits - Santé & Énergie Renouvelable | Ophir Technologies</title>
        <meta name="description" content="Découvrez notre gamme complète de produits : solutions de télémédecine, équipements médicaux connectés, panneaux solaires, éoliennes et systèmes de stockage d'énergie. Innovation et qualité." />
        <meta name="keywords" content="produits santé, télémédecine, énergie renouvelable, panneaux solaires, éoliennes, équipements médicaux, Ophir Technologies" />
      </Helmet>
      
      <ProductsHero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Filtres par catégorie */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Nos Produits</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Sous-catégories */}
          {selectedCategory !== 'all' && subcategories[selectedCategory] && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {subcategories[selectedCategory].map((subcategory) => (
                <span
                  key={subcategory.id}
                  className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                >
                  <span className="mr-2">{subcategory.icon}</span>
                  {subcategory.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.mainCategory === 'solutions' && 'Solution MedConnect'}
                  {product.mainCategory === 'equipments' && 'Équipement'}
                  {product.mainCategory === 'platform' && 'Plateforme'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques :</h4>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Spécifications techniques */}
                  <div className="border-t pt-3">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Spécifications :</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(product.specifications).slice(0, 4).map(([key, value], index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-500">{key}:</span>
                          <span className="text-gray-700 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Demander un devis' : 'Indisponible'}
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    ℹ️
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Besoin d'un Produit Personnalisé ?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts peut développer des solutions sur mesure adaptées à vos besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Demander une Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors">
              Télécharger le Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
