import axios from '../../config/axios';

export const getSubCategoryByCategoryId = async (categoryId) => {
  return axios.get(`/subCategory/category/${categoryId}`);
};
