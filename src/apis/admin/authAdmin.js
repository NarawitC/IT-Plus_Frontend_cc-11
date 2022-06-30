import axios from '../../config/axios';

export const adminSignIn = async (input) => {
  console.log(input);
  return await axios.post('/admin/auth/sign-in', input);
};
