import axios from '../../config/axios';

export const getAllOrderItemsBySupplierId = async () => {
  return await axios.get('/supplier/order-item');
};
export const getAllOrdersBySupplierId = async () => {
  return await axios.get('/supplier/order');
};

// export const getOrderItemsByOrderItemId = async (orderItemId) => {
//   return await axios.get(`/supplier/order-item/${orderItemId}`);
// };

export const getOrderByOrderId = async (orderId) => {
  return await axios.get(`/supplier/order/${orderId}`);
}