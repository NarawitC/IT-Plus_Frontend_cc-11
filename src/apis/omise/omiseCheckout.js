import axios from '../../config/axios';

export const omiseCheckoutCreditCard = async (input) => {
  return await axios.post('/omise/checkout/credit-card', input, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
