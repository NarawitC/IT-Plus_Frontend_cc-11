import axios from '../../config/axios';

export const getBalanceBySupplierId = async () => {
  return await axios.get('/supplier/balance');
};
