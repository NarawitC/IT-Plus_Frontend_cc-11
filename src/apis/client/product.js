import axios from '../../config/axios';

export const getAllProductInfo = async () => {
  return axios.get(`/user/product/`);
};

export const getProductById = async (id) => {
  return axios.get(`/user/product/${id}`);
};
