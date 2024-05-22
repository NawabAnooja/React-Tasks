const isValidName = (name) => {
    // No specific validation for name
    return true;
  };
 
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
 
  const isValidPhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };
 
  const isValidPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/.test(password);
  };
  export const isValidProductName = (name) => {
    return name.trim().length > 0;
  };
  
  export const isValidPrice = (price) => {
    return !isNaN(price) && parseFloat(price) > 0;
  };
  
 
  export { isValidName, isValidEmail, isValidPhoneNumber, isValidPassword };