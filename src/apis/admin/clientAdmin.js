import axios from '../../config/axios';

export const adminClient = async () => {
  return await axios.get('/admin/client');
};
