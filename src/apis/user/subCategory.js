import axios from '../../config/axios';

export const getSubCategoryById = async (subCategoryId) => {
  return axios.get(`/subCategory/${subCategoryId}`);
};

export const getSubCategoryByCategoryId = async (categoryId) => {
  return axios.get(`/subCategory/category/${categoryId}`);
};
