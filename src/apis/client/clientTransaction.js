import axios from '../../config/axios';

export const createTransferTransaction = async (transferAmount) => {
  return axios.post('/admin/transfer', {
    transferAmount: transferAmount,
  });
};
