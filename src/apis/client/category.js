import axios from '../../config/axios';

export const getAllCategoryInfo = async () => {
  return axios.get('/user/category');
};
export const getCategoryById = async (categoryId) => {
  return axios.get(`/user/category/${categoryId}`);
};
