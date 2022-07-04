import axios from '../../config/axios';

export const createShippingOrder = async (input) => {
  return await axios.post('/supplier/shipping-order', input);
};
