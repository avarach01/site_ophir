export const validateContact = (data) => {
  const errors = {};
  
  if (!data.email || !data.email.includes('@')) {
    errors.email = 'Email invalide';
  }
  
  if (!data.message || data.message.length < 10) {
    errors.message = 'Message trop court';
  }
  
  return errors;
};
