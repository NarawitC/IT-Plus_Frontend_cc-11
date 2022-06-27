import axios from '../../config/axios';

export const supplierSignIn = async (email, password) => {
  return await axios.post('/supplier/auth/sign-in', { email, password });
};

export const supplierSignUp = async (input) => {
  return await axios.post('/supplier/auth/sign-up', input);
};
