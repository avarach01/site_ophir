export const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  API_TIMEOUT: 5000,
  IMAGE_BASE_URL: process.env.REACT_APP_IMAGE_URL,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
};
