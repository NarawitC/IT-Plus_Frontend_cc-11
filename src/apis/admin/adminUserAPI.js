import axios from '../../config/axios';

export const adminGetClient = async () => {
  return await axios.get('/admin/client');
};
