import axios from '../../config/axios';

export const getUserPurchasedOrders = async () => {
  return axios.get('/user/purchased/orders');
};

export const getAdminInfo = async () => {
  return await axios.get('/admin');
};
