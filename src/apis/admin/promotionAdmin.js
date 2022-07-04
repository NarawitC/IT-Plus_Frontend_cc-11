import axios from '../../config/axios';

export const createPromotion = async (productId, input) => {
  return await axios.post('/admin/promotion/' + productId, input);
};
