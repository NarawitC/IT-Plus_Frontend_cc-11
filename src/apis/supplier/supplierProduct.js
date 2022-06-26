import axios from '../../config/axios';

export const getAllProductBySupplierId = async () => {
  return axios.get(`/supplier/product`);
};

export const createProduct = async () => {
  return axios.post(`/supplier/product`);
};

export const createProductPropertyByProductId = async (productId) => {
  return axios.post(`/supplier/property/${productId}`);
};
