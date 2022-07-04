import axios from '../../config/axios';

export const getAllProductBySupplierId = async () => {
  return axios.get(`/supplier/product`);
};

export const createProduct = async (input) => {
  return axios.post(`/supplier/product`, input);
};

export const createProductPropertyByProductId = async (
  productId,
  properties
) => {
  return axios.post(`/supplier/property/${productId}`, {
    properties: properties,
  });
};

export const getProductById = async (productId) => {
  return axios.get(`/client/product/${productId}`);
};

export const updateProduct = async (productId, input) => {
  return axios.patch(`/supplier/product/${productId}`, input);
};
