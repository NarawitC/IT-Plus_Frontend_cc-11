import axios from '../../config/axios';

export const getAllTransactionsBySupplierId = async () => {
  return await axios.get('/supplier/transaction');
};
