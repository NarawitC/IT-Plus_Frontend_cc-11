import axios from '../../config/axios';

export const getAllCategoryInfo = async () => {
  return axios.get('/client/category');
};
