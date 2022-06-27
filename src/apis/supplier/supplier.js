import axios from '../../config/axios';

export const getSupplierInfo = async () => {
  return await axios.get('/supplier/supplier');
};
