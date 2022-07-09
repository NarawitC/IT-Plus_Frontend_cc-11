import axios from '../../config/axios';

export const userSignIn = async (input) => {
  return await axios.post('/client/auth/sign-in', input);
};

export const userSignUp = async (input) => {
  return await axios.post('/client/auth/sign-up', input);
};
