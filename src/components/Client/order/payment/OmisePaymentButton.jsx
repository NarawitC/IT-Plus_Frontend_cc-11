import { OMISE_PUBLIC_KEY } from '../../../../config/constants';
import { omiseCheckoutCreditCard } from '../../../../apis/omise/omiseCheckout';
import { createPurchasedOrder } from '../../../../apis/client/purchasedOrder';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
import { createShippingOrder } from '../../../../apis/supplier/supplierShippingOrder';
import { localsting } from '../../../../services/LocalstringComma';
import { useRef, useState } from 'react';
import { useErrorContext } from '../../../../contexts/ErrorContext';
import { useCompletedActionContext } from '../../../../contexts/Client/completedAction';

function OmisePaymentButton({ className, orders, totalPrice, setIsLoading }) {
  const { setIsShowCompletedAction, setCompletedText } =
    useCompletedActionContext();
  const { setError } = useErrorContext();
  const formElement = useRef();
  const displayName = 'IT Plus';
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const clientId = user?.Client.id;
  const orderIds = [];
  orders?.forEach((order) => {
    orderIds.push(order.id);
  });
  const omiseCard = window.OmiseCard;
  const handleClickCheckoutButton = (e) => {
    setIsLoading(true);
    e.preventDefault();
    omiseCard.configure({
      publicKey: OMISE_PUBLIC_KEY,
      defaultPaymentMethod: 'credit_card',
    });

    omiseCard.configureButton('#checkoutButton', {
      amount: totalPrice * 100,
      currency: 'THB',
      buttonLabel: `Pay ${totalPrice} THB`,
    });

    omiseCard.attach();

    omiseCard.open({
      amount: totalPrice * 100,
      frameLabel: displayName,
      submitFormTarget: '#checkoutForm',
      onCreateTokenSuccess: async (token) => {
        // console.log(token);
        const {
          data: { amount, paymentAt, status, transactionId },
        } = await omiseCheckoutCreditCard({
          clientId,
          totalPrice,
          token,
        });
        if (status !== 'successful') {
          setError({ text: 'Payment failed' });
        } else if (status === 'successful') {
          const {
            data: { purchasedOrders },
          } = await createPurchasedOrder({
            orderIds,
            paymentAt,
            transactionId,
          });
          const purchasedOrderIds = [];
          purchasedOrders.forEach((purchasedOrder) => {
            purchasedOrderIds.push({ purchasedOrderId: purchasedOrder.id });
          });

          await createShippingOrder({ purchasedOrderIds });
          setIsLoading(false);
          setCompletedText(
            `Payment successful, order id: ${orderIds.join(', ')}`
          );
          setIsShowCompletedAction(true);
        }
      },
      onFormClosed: () => {},
    });
  };

  return (
    <form id='checkoutForm' className='flex justify-center '>
      <button
        className={className}
        ref={formElement}
        id='checkoutButton'
        onClick={handleClickCheckoutButton}
      >{`Pay ${localsting(totalPrice)} THB`}</button>
    </form>
  );
}

export default OmisePaymentButton;
