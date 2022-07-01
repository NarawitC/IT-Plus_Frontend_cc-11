import { ORDER_STATUS } from '../config/constants';
export const checkStatusOrder = (order) => {
  let status = ORDER_STATUS.pending;
  if (order) {
    if (order.PurchaseOrder) {
      status = ORDER_STATUS.confirmed;
      if (order.PurchaseOrder.ShippingOrder) {
        status = order.PurchaseOrder.ShippingOrder.status;
      }
    }
  }
};
