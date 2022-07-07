import axios from '../../config/axios';

export const adminApproveProduct = async (productId) => {
  return await axios.patch(`/admin/product/approve/${productId}`);
};

export const adminRejectProduct = async (productId, rejectReason) => {
  return await axios.patch(`/admin/product/reject/${productId}`, {
    rejectReason,
  });
};
