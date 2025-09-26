/**
 * Codes d'erreur attendus du backend :
 * 400: Bad Request - Données invalides
 * 401: Unauthorized - Non authentifié
 * 403: Forbidden - Non autorisé
 * 404: Not Found - Ressource non trouvée
 * 500: Internal Server Error - Erreur serveur
 */
export const handleApiError = (error) => {
  switch (error.status) {
    case 400:
      // Gérer les erreurs de validation
      break;
    case 401:
      // Rediriger vers la page de connexion
      break;
    // ... autres cas
  }
};
