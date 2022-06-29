import axios from '../../config/axios';

export const createCartbyClientId = () => {
  return axios.post('/client/cart/');
};
export const createCartitems = (cartId, cartItems) => {
  return axios.post('/client/cart-item/', { cartId, cartItems });
};
export const getCart = (cartId) => {
  return axios.get('/client/cart/');
};
export const createOrederswithItems = (cartId, cartItems) => {
  return axios.post(`/client/order/${cartId}`, { orders: cartItems });
};

// export const createOrderAndDeleteInCartOrder = async () => {
//   return await axios.patch('/order/createOrder');
// };

// export const updateOrderToPending = async (formData) => {
//   return await axios.patch('/order/toPending', formData);
// };
