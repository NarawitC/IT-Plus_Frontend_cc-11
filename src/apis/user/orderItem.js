import axios from '../../config/axios';

export const createOrderItemByOrderId = async (
  orderId,
  product,
  inputQuantity
) => {
  return await axios.post(`/orderItem/createOrderItem/${orderId}`, {
    product,
    inputQuantity,
  });
};
