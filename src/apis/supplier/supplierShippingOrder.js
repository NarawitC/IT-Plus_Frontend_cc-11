import axios from '../../config/axios';

export const createShippingOrder = async (input) => {
  return axios.post(`/supplier/shipping-order`, input);
};

export const updateStatusToClient = async (shippingOrderId, trackingId) => {
  return axios.patch(`/supplier/shipping-order/to-client/${shippingOrderId}`, {
    trackingId: trackingId,
  });
};

export const updateStatusToDelivered = async (shippingOrderId) => {
  return axios.patch(
    `/supplier/shipping-order/to-delivered/${shippingOrderId}`
  );
};
