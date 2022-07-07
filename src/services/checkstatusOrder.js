import { ORDER_STATUS } from '../config/constants';

export const checkStatusOrder = (order) => {
  let status = ORDER_STATUS.pending;
  if (order) {
    if (order.PurchaseOrder) {
      status = ORDER_STATUS.confirmed;
      console.log(1, order.PurchaseOrder.ShippingOrder);
      if (order.PurchaseOrder.ShippingOrder) {
        console.log(2, order.PurchaseOrder.ShippingOrder.status);
        status = order.PurchaseOrder.ShippingOrder.status;
        console.log(3, status);
      }
    }
  }
  console.log(4, status);
  return status;
};
