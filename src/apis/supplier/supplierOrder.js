import axios from '../../config/axios';

export const getAllOrderItemsBySupplierId = async () => {
  return await axios.get('/supplier/order-item');
};

export const getOrderItemsById = async (orderItemId) => {
  return await axios.get(`/supplier/order-item/${orderItemId}`);
};
