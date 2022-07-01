import axios from '../../config/axios';

export const createPurchasedOrder = async (input) => {
  return await axios.post('/client/purchased-order/' + input.orderId, input);
};
