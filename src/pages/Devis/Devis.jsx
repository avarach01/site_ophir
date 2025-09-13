import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    typeProjet: '',
    budget: '',
    delai: '',
    description: '',
    produits: [],
    accepteNewsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProductChange = (product) => {
    setFormData(prev => ({
      ...prev,
      produits: prev.produits.includes(product)
        ? prev.produits.filter(p => p !== product)
        : [...prev.produits, product]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const productCategories = [
    {
      name: 'Santé',
      products: [
        'Télémédecine',
        'Équipements médicaux connectés',
        'Logiciels de diagnostic',
        'Systèmes de monitoring patient',
        'Plateformes de consultation à distance'
      ]
    },
    {
      name: 'Énergie Renouvelable',
      products: [
        'Panneaux solaires',
        'Éoliennes domestiques',
        'Batteries de stockage',
        'Systèmes hybrides',
        'Solutions de gestion d\'énergie'
      ]
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Demande envoyée avec succès !</h1>
              <p className="text-gray-600 mb-6">
                Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais 
                pour discuter de votre projet et vous proposer une solution personnalisée.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Prochaines étapes :</strong><br />
                  • Analyse de votre demande (24-48h)<br />
                  • Contact téléphonique pour clarifier vos besoins<br />
                  • Proposition de devis détaillé
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    nom: '', prenom: '', email: '', telephone: '', entreprise: '',
                    secteur: '', typeProjet: '', budget: '', delai: '', description: '',
                    produits: [], accepteNewsletter: false
                  });
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Faire une nouvelle demande
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Demande de Devis - Ophir Technologies</title>
        <meta name="description" content="Demandez un devis personnalisé pour vos projets en santé et énergie renouvelable. Solutions innovantes adaptées à vos besoins." />
        <meta name="keywords" content="devis, télémédecine, énergie renouvelable, solutions personnalisées, Ophir Technologies" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Demandez votre devis personnalisé
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Obtenez une solution sur mesure pour vos projets en santé et énergie renouvelable
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Informations sur votre projet
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous contacterons dans les 24h
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    Informations personnelles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Informations entreprise */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    Informations entreprise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'entreprise *
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité *
                      </label>
                      <select
                        name="secteur"
                        value={formData.secteur}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un secteur</option>
                        <option value="sante">Santé & Médical</option>
                        <option value="energie">Énergie & Environnement</option>
                        <option value="industrie">Industrie</option>
                        <option value="education">Éducation</option>
                        <option value="administration">Administration publique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Détails du projet */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    Détails du projet
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        name="typeProjet"
                        value={formData.typeProjet}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="nouveau">Nouveau projet</option>
                        <option value="amelioration">Amélioration existante</option>
                        <option value="migration">Migration</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget estimé
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        <option value="<10k">Moins de 10 000€</option>
                        <option value="10k-50k">10 000€ - 50 000€</option>
                        <option value="50k-100k">50 000€ - 100 000€</option>
                        <option value="100k-500k">100 000€ - 500 000€</option>
                        <option value=">500k">Plus de 500 000€</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        name="delai"
                        value={formData.delai}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un délai</option>
                        <option value="<1mois">Moins d'1 mois</option>
                        <option value="1-3mois">1-3 mois</option>
                        <option value="3-6mois">3-6 mois</option>
                        <option value="6-12mois">6-12 mois</option>
                        <option value=">12mois">Plus de 12 mois</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Produits d'intérêt */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    Produits d'intérêt
                  </h3>
                  <div className="space-y-6">
                    {productCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-medium text-gray-800 mb-3">
                          {category.name}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.products.map((product, productIndex) => (
                            <label key={productIndex} className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.produits.includes(product)}
                                onChange={() => handleProductChange(product)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">{product}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description du projet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description détaillée du projet *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes techniques, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Newsletter */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="accepteNewsletter"
                    checked={formData.accepteNewsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700">
                    J'accepte de recevoir des informations sur les nouvelles solutions et offres d'Ophir Technologies
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      'Envoyer ma demande de devis'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devis;
