import axios from '../../config/axios';

export const getAllCategoryInfo = async () => {
  return axios.get('/category/allCategory');
};
export const getCategoryById = async (categoryId) => {
  return axios.get(`/category/${categoryId}`);
};
