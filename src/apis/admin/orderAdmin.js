import axios from '../../config/axios';

export const adminOrder = async () => {
  return await axios.get('/admin/order');
};
