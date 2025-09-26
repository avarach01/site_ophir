/**
 * Configuration des appels API
 * BASE_URL: URL de base de l'API backend
 * Endpoints disponibles pour chaque ressource
 */

const BASE_URL = 'http://localhost:5000/api'; // À modifier selon votre configuration

// Points d'entrée de l'API
export const ENDPOINTS = {
  PRODUCTS: '/products',
  BLOG: '/blog',
  CONTACT: '/contact',
  SERVICES: '/services'
};

// Configuration des headers pour les requêtes
const headers = {
  'Content-Type': 'application/json',
  // Ajouter ici d'autres headers si nécessaire (ex: Authorization)
};

// Méthodes d'appel API réutilisables
export const api = {
  get: async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
    return response.json();
  },

  post: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }
  // Ajouter d'autres méthodes selon les besoins (PUT, DELETE, etc.)
};
