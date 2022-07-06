import axios from '../../config/axios';

export const getUserInfo = async () => {
  // console.log('Gettinguser');
  return axios.get('/client/client');
};
export const EdituserInfo = async (input) => {
  // console.log('Gettinguser');
  return axios.patch('/client/client', input);
};

// export const updateUserInfo = async (data) => {
//   return axios.patch('/user/update', data);
// };

// export const getUserPurchasedOrders = async () => {
//   return axios.get('/user/purchased/orders');
// };
