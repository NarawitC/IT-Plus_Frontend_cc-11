import axios from '../../config/axios';

export const getAllProductInfo = async ({ searchParams }) => {
  return axios.get(`/user/product/`, { params: searchParams });
};

export const getProductById = async (id) => {
  return axios.get(`/user/product/${id}`);
};

export const getApprovedPromotionProduct = async () => {
  return axios.get(`/user/product/promotion`);
};
