import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header - Composant de navigation principal
 * 
 * Ce composant affiche le menu de navigation en haut de chaque page.
 * Il est responsive, s'adaptant aux écrans desktop et mobile.
 * 
 * Fonctionnalités :
 * - Menu déroulant pour les écrans mobiles
 * - Indication visuelle de la page active
 * - Animations fluides lors des interactions
 * 
 * Le composant utilise :
 * - useState pour gérer l'état d'ouverture/fermeture du menu mobile
 * - useLocation pour déterminer la page active
 * - Framer Motion pour les animations
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const handleProductsMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const productCategories = [
    { 
      name: 'Santé', 
      path: '/products?category=health',
      subcategories: [
        { name: 'Télémédecine', path: '/products?category=health&sub=telemedicine' },
        { name: 'Équipements médicaux', path: '/products?category=health&sub=medical-equipment' },
        { name: 'Diagnostic avancé', path: '/products?category=health&sub=diagnostic' },
        { name: 'Monitoring patient', path: '/products?category=health&sub=monitoring' }
      ]
    },
    { 
      name: 'Énergie Renouvelable', 
      path: '/products?category=renewable-energy',
      subcategories: [
        { name: 'Panneaux solaires', path: '/products?category=renewable-energy&sub=solar' },
        { name: 'Éoliennes', path: '/products?category=renewable-energy&sub=wind' },
        { name: 'Batteries de stockage', path: '/products?category=renewable-energy&sub=batteries' },
        { name: 'Systèmes hybrides', path: '/products?category=renewable-energy&sub=hybrid' }
      ]
    }
  ];

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Service', path: '/services' },
    { name: 'Produit', path: '/products', hasDropdown: true, dropdownItems: productCategories },
    { name: 'A propos', path: '/a-propos' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white text-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 font-roboto-mono" role="banner">
      <div className="h-1 bg-green-500 absolute top-0 left-0 right-0"></div>
      <nav className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            <Link to="/" className="hover:text-green-500 transition duration-300">
              <img src="/logo.png" alt="Logo" className="h-10 sm:h-12" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-5 sm:space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`transition duration-300 text-lg sm:text-xl font-semibold pb-2 flex items-center ${
                        location.pathname === item.path ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                        <div className="grid grid-cols-2 gap-6">
                          {item.dropdownItems?.map((category, index) => (
                            <div key={index} className="px-6">
                              <Link
                                to={category.path}
                                className="mb-4 text-gray-900 font-bold hover:text-blue-600 transition-colors text-lg"
                              >
                                {category.name}
                              </Link>
                              <div className="ml-0 space-y-3">
                                {category.subcategories?.map((subcategory, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subcategory.path}
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 px-2 rounded hover:bg-blue-50"
                                  >
                                    {subcategory.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t mt-4 pt-4 px-6">
                          <Link 
                            to="/products" 
                            className="text-center block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                            Voir tous les produits
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition duration-300 text-lg sm:text-xl font-semibold pb-2 ${
                      location.pathname === item.path ? 'text-black' : 'text-gray-800 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-all duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </motion.div>
            ))}
          </div>

          {/* Bouton Devis */}
          <div className="hidden lg:block ml-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/devis"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Demander un Devis
              </Link>
            </motion.div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2"
              aria-label="Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 text-sm sm:text-base transition duration-300 ${
                      location.pathname === item.path
                        ? 'text-yellow-400 font-semibold'
                        : 'text-gray-800 hover:text-yellow-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="h-0.5 bg-yellow-400 mx-4"></div>
                  )}
                </div>
              ))}
              
              {/* Bouton Devis Mobile */}
              <div className="px-4 py-4">
                <Link
                  to="/devis"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Demander un Devis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
