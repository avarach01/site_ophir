import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LandingPageHero from '../../components/landingPageHero/LandingPageHero';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const productCategories = [
    {
      title: "Solutions de Téléconsultation",
      description: "Plateformes sécurisées pour consultations médicales à distance",
      icon: "🩺",
      features: ["Vidéo HD", "Sécurité RGPD", "Dossier patient"]
    },
    {
      title: "Équipements Médicaux Connectés",
      description: "Dispositifs IoT pour le monitoring et diagnostic",
      icon: "📊",
      features: ["Capteurs avancés", "Transmission temps réel", "Analyse IA"]
    },
    {
      title: "Logiciels de Gestion Médicale",
      description: "Systèmes complets pour la gestion des établissements",
      icon: "💻",
      features: ["Planning intelligent", "Facturation automatique", "Rapports détaillés"]
    }
  ];

  const advantages = [
    {
      title: "Certification Médicale",
      description: "Tous nos produits sont certifiés CE et conformes aux normes médicales européennes",
      icon: "🏥"
    },
    {
      title: "Innovation Continue",
      description: "R&D permanente pour anticiper les besoins futurs de la télémédecine",
      icon: "🔬"
    },
    {
      title: "Support 24/7",
      description: "Assistance technique disponible en permanence pour vos équipes",
      icon: "🛠️"
    },
    {
      title: "Formation Incluse",
      description: "Formation complète de vos équipes pour une adoption optimale",
      icon: "🎓"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Marie Dubois",
      role: "Directrice, Hôpital Saint-Antoine",
      content: "Ophir Technologies a révolutionné notre approche de la télémédecine. Leur solution est intuitive et fiable.",
      rating: 5
    },
    {
      name: "Prof. Jean Martin",
      role: "Chef de service, CHU de Lyon",
      content: "La qualité des équipements et le support technique exceptionnel font d'Ophir notre partenaire de confiance.",
      rating: 5
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Médecin généraliste, Cabinet privé",
      content: "Grâce à Ophir, j'ai pu développer ma pratique de télémédecine et améliorer l'accès aux soins.",
      rating: 5
    }
  ];

  return (
    <div className="landing-page">
      <Helmet>
        <title>Ophir Technologies - Solutions de Télémédecine Innovantes</title>
        <meta name="description" content="Découvrez les solutions de télémédecine d'Ophir Technologies : équipements médicaux connectés, plateformes de téléconsultation et logiciels de gestion. Innovation et qualité au service de la santé." />
        <meta name="keywords" content="télémédecine, équipements médicaux, téléconsultation, santé connectée, Ophir Technologies, innovation médicale" />
        <meta property="og:title" content="Ophir Technologies - Solutions de Télémédecine Innovantes" />
        <meta property="og:description" content="Solutions complètes de télémédecine pour professionnels de santé. Équipements certifiés, plateformes sécurisées, formation incluse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com" />
      </Helmet>
      
      <LandingPageHero />
      
      {/* Section Catégories de Produits */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Solutions de Télémédecine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des équipements certifiés aux plateformes sécurisées, découvrez notre gamme complète de solutions pour la télémédecine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {productCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-6 text-center">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/products" 
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Découvrir
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Nos Avantages */}
      <motion.section 
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Ophir Technologies ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre engagement pour l'excellence font la différence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Témoignages */}
      <motion.section 
        className="py-20 bg-blue-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients est notre priorité</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Statistiques */}
      <motion.section 
        className="py-20 bg-[rgb(16,34,73)] text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4">Ophir Technologies en Chiffres</h2>
            <p className="text-xl text-gray-300">Notre impact dans le domaine de la télémédecine</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', text: 'Établissements Équipés', icon: '🏥' },
              { number: '50+', text: 'Pays Desservis', icon: '🌍' },
              { number: '24/7', text: 'Support Technique', icon: '🛠️' },
              { number: '15+', text: 'Années d\'Expertise', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2 text-blue-400">{stat.number}</div>
                <p className="text-gray-300">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Pratique Médicale ?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez comment nos solutions de télémédecine peuvent améliorer l'accès aux soins et optimiser votre pratique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Demander une Démonstration
              </Link>
              <Link 
                to="/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Voir Nos Produits
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
