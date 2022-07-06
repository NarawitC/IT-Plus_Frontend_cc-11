import axios from '../../config/axios';

export const getUserInfo = async () => {
  return axios.get('/user/info');
};

export const updateUserInfo = async (data) => {
  return axios.patch('/user/update', data);
};

export const getUserPurchasedOrders = async () => {
  return axios.get('/user/purchased/orders');
};
