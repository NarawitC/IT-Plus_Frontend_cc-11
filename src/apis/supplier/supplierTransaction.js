import axios from '../../config/axios';

export const getAllTransactionsBySupplierId = async () => {
  return await axios.get('/supplier/transaction');
};

export const createWithdrawalTransaction = async (withdrawalAmount) => {
  return axios.post('/supplier/withdraw', {
    withdrawalAmount: withdrawalAmount,
  });
};
