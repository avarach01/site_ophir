import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ProductsHero from '../../components/productsHero/ProductsHero';

const Products = () => {
  console.log("Rendering Products component");

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les Produits', icon: '🔍' },
    { id: 'health', name: 'Santé', icon: '🏥' },
    { id: 'renewable-energy', name: 'Énergie Renouvelable', icon: '🌱' }
  ];

  const subcategories = {
    health: [
      { id: 'teleconsultation', name: 'Téléconsultation', icon: '🩺' },
      { id: 'medical-equipment', name: 'Équipements Médicaux', icon: '📊' },
      { id: 'health-software', name: 'Logiciels de Santé', icon: '💻' },
      { id: 'connected-devices', name: 'Dispositifs Connectés', icon: '📱' }
    ],
    'renewable-energy': [
      { id: 'solar-panels', name: 'Panneaux Solaires', icon: '☀️' },
      { id: 'wind-turbines', name: 'Éoliennes', icon: '💨' },
      { id: 'energy-storage', name: 'Systèmes de Stockage', icon: '🔋' },
      { id: 'smart-grid', name: 'Solutions Smart Grid', icon: '⚡' }
    ]
  };

  const products = [
    // PRODUITS SANTÉ
    {
      id: 1,
      name: 'Station de Téléconsultation HD Pro',
      description: 'Station complète pour consultations vidéo haute définition avec caméra médicale intégrée et système de diagnostic avancé',
      price: '2,499€',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'teleconsultation',
      mainCategory: 'health',
      features: ['Vidéo 4K Ultra HD', 'Audio spatial 3D', 'Certification médicale CE', 'IA de diagnostic'],
      inStock: true,
      specifications: {
        'Résolution': '4K Ultra HD',
        'Connexion': '5G/WiFi 6',
        'Garantie': '3 ans',
        'Certification': 'CE médical'
      }
    },
    {
      id: 2,
      name: 'Moniteur de Signes Vitaux Connecté',
      description: 'Appareil de monitoring en temps réel avec transmission automatique des données et alertes intelligentes',
      price: '1,899€',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'medical-equipment',
      mainCategory: 'health',
      features: ['IoT intégré', 'Batterie 48h', 'Connexion 5G', 'Alertes automatiques'],
      inStock: true,
      specifications: {
        'Mesures': 'Pression, pouls, température',
        'Autonomie': '48 heures',
        'Connectivité': '5G, Bluetooth, WiFi',
        'Précision': '99.9%'
      }
    },
    {
      id: 3,
      name: 'Plateforme de Gestion Médicale Cloud',
      description: 'Logiciel complet pour la gestion des dossiers patients, planning des consultations et facturation automatique',
      price: '299€/mois',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'health-software',
      mainCategory: 'health',
      features: ['RGPD compliant', 'Sauvegarde automatique', 'Interface intuitive', 'Facturation intégrée'],
      inStock: true,
      specifications: {
        'Stockage': 'Illimité',
        'Sécurité': 'Chiffrement AES-256',
        'Support': '24/7',
        'Mise à jour': 'Automatique'
      }
    },
    {
      id: 4,
      name: 'Kit de Diagnostic à Distance',
      description: 'Ensemble d\'outils de diagnostic connectés pour consultations à distance avec IA intégrée',
      price: '899€',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'connected-devices',
      mainCategory: 'health',
      features: ['Stéthoscope digital', 'Oto-otoscope HD', 'Thermomètre connecté', 'IA de diagnostic'],
      inStock: true,
      specifications: {
        'Composants': 'Stéthoscope, otoscope, thermomètre',
        'Connectivité': 'Bluetooth 5.0',
        'Précision': 'Médicale grade',
        'Batterie': '8 heures'
      }
    },

    // PRODUITS ÉNERGIE RENOUVELABLE
    {
      id: 5,
      name: 'Panneaux Solaires Monocristallins Premium',
      description: 'Panneaux solaires haute efficacité avec technologie monocristalline et garantie 25 ans',
      price: '1,200€/kW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959b9eaf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'solar-panels',
      mainCategory: 'renewable-energy',
      features: ['Efficacité 22%', 'Garantie 25 ans', 'Résistant aux intempéries', 'Installation facile'],
      inStock: true,
      specifications: {
        'Puissance': '400W par panneau',
        'Efficacité': '22%',
        'Garantie': '25 ans',
        'Dimensions': '2m x 1m'
      }
    },
    {
      id: 6,
      name: 'Éolienne Domestique 5kW',
      description: 'Éolienne verticale silencieuse pour usage résidentiel avec système de contrôle intelligent',
      price: '8,500€',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'wind-turbines',
      mainCategory: 'renewable-energy',
      features: ['Silencieuse', 'Démarrage 2m/s', 'Contrôle intelligent', 'Installation simple'],
      inStock: true,
      specifications: {
        'Puissance': '5kW',
        'Vitesse démarrage': '2 m/s',
        'Vitesse nominale': '12 m/s',
        'Niveau sonore': '< 35 dB'
      }
    },
    {
      id: 7,
      name: 'Système de Stockage Lithium-Ion 10kWh',
      description: 'Batterie de stockage haute capacité avec gestion intelligente de l\'énergie et monitoring à distance',
      price: '4,500€',
      image: 'https://images.unsplash.com/photo-1591604129935-f4c4c57a0b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'energy-storage',
      mainCategory: 'renewable-energy',
      features: ['Capacité 10kWh', 'Gestion intelligente', 'Monitoring distant', 'Installation plug-and-play'],
      inStock: true,
      specifications: {
        'Capacité': '10 kWh',
        'Tension': '48V',
        'Cycles': '6000+',
        'Efficacité': '95%'
      }
    },
    {
      id: 8,
      name: 'Solution Smart Grid Complète',
      description: 'Système de gestion intelligente du réseau électrique avec IA pour optimiser la consommation et la production',
      price: '15,000€',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'smart-grid',
      mainCategory: 'renewable-energy',
      features: ['IA intégrée', 'Gestion automatique', 'Monitoring temps réel', 'Optimisation énergétique'],
      inStock: false,
      specifications: {
        'Gestion': 'Automatique',
        'IA': 'Machine Learning',
        'Monitoring': 'Temps réel',
        'Économies': 'Jusqu\'à 30%'
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
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Rupture de stock
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category === 'teleconsultation' && 'Téléconsultation'}
                  {product.category === 'equipments' && 'Équipement'}
                  {product.category === 'software' && 'Logiciel'}
                  {product.category === 'accessories' && 'Accessoire'}
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
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'En stock' : 'Rupture'}
                  </span>
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
