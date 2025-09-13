import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const isActive = (path) => location.pathname === path;

  const productCategories = [
    { 
      name: 'Santé', 
      path: '/products?category=health', 
      icon: '🏥',
      subcategories: [
        { name: 'Téléconsultation', path: '/products?category=teleconsultation', icon: '🩺' },
        { name: 'Équipements Médicaux', path: '/products?category=medical-equipment', icon: '📊' },
        { name: 'Logiciels de Santé', path: '/products?category=health-software', icon: '💻' },
        { name: 'Dispositifs Connectés', path: '/products?category=connected-devices', icon: '📱' }
      ]
    },
    { 
      name: 'Énergie Renouvelable', 
      path: '/products?category=renewable-energy', 
      icon: '🌱',
      subcategories: [
        { name: 'Panneaux Solaires', path: '/products?category=solar-panels', icon: '☀️' },
        { name: 'Éoliennes', path: '/products?category=wind-turbines', icon: '💨' },
        { name: 'Systèmes de Stockage', path: '/products?category=energy-storage', icon: '🔋' },
        { name: 'Solutions Smart Grid', path: '/products?category=smart-grid', icon: '⚡' }
      ]
    }
  ];

  return (
    <header className="bg-white text-[#002626] shadow-lg font-roboto-mono fixed top-0 left-0 right-0 z-50">
      {/* Barre de statut */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800 w-full"></div>
      
      {/* Barre d'information */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@ophirtechnologies.com
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 1 23 45 67 89
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Support 24/7</span>
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">Ophir Technologies</div>
              <div className="text-xs text-gray-500 -mt-1">Solutions de Télémédecine</div>
            </div>
          </Link>
          
          {/* Menu pour les écrans moyens et grands */}
          <ul className="hidden lg:flex space-x-8">
            {[
              { path: '/', label: 'Accueil' },
              { 
                path: '/services', 
                label: 'Services',
                hasDropdown: false
              },
              { 
                path: '/products', 
                label: 'Produits',
                hasDropdown: true,
                dropdownItems: productCategories
              },
              { path: '/about', label: 'À propos' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`hover:text-blue-600 transition-colors text-sm lg:text-base font-medium pb-1 flex items-center ${
                        isActive(item.path) ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50 animate-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-2 gap-6">
                          {item.dropdownItems?.map((category, index) => (
                            <div key={index} className="px-6">
                              <Link
                                to={category.path}
                                className="flex items-center mb-4 text-gray-900 font-bold hover:text-blue-600 transition-colors text-lg"
                              >
                                <span className="text-3xl mr-3">{category.icon}</span>
                                {category.name}
                              </Link>
                              <div className="ml-10 space-y-3">
                                {category.subcategories?.map((subcategory, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subcategory.path}
                                    className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 px-2 rounded hover:bg-blue-50"
                                  >
                                    <span className="text-xl mr-3">{subcategory.icon}</span>
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
                    className={`hover:text-blue-600 transition-colors text-sm lg:text-base font-medium pb-1 ${
                      isActive(item.path) ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Boutons d'action */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Demander un Devis
            </Link>
            <button
              onClick={toggleDrawer}
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Bouton du menu mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-black hover:text-gray-700 transition-colors"
            aria-label="Menu mobile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Menu mobile */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 border-t border-gray-200 pt-4`}>
          <ul className="flex flex-col space-y-3">
            {[
              { path: '/', label: 'Accueil' },
              { path: '/services', label: 'Services' },
              { path: '/products', label: 'Produits' },
              { path: '/about', label: 'À propos' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link 
                to="/contact" 
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demander un Devis
              </Link>
            </li>
          </ul>
        </div>

        {/* Drawer */}
        <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Informations</h2>
              <button onClick={toggleDrawer} className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-700">+33 1 23 45 67 89</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-700">contact@ophirtechnologies.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">123 Rue de l'Innovation<br />75000 Paris, France</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Heures d'ouverture</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi : 10h00 - 16h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">Support technique 24/7</p>
                  <p className="text-gray-700">Formation incluse</p>
                  <p className="text-gray-700">Maintenance préventive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
