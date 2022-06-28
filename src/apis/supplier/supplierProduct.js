import axios from '../../config/axios';

export const getAllProductBySupplierId = async () => {
  return axios.get(`/supplier/product`);
};

export const createProduct = async (input) => {
  console.log(input);
  return axios.post(`/supplier/product`, input);
};

export const createProductPropertyByProductId = async (productId) => {
  return axios.post(`/supplier/property/${productId}`);
};
