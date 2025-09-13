# Documentation API Ophir Technologies

## Points d'entrée (Endpoints)

### Produits
GET /api/products
- Liste tous les produits
- Pagination: ?page=1&limit=10
- Filtres: ?category=telemedicine

POST /api/products
- Ajoute un nouveau produit
- Requiert authentification admin

### Services
GET /api/services
- Liste tous les services
- Filtres disponibles: ?type=consultation

### Blog
GET /api/blog
- Liste les articles
- Pagination: ?page=1&limit=10

GET /api/blog/:id
- Détails d'un article

### Contact
POST /api/contact
- Envoie un message de contact
- Rate limiting: 5 requêtes/heure
