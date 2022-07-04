import { OMISE_PUBLIC_KEY } from '../../../../config/constants';
import { omiseCheckoutCreditCard } from '../../../../apis/omise/omiseCheckout';
import { createPurchasedOrder } from '../../../../apis/client/purchasedOrder';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
import { createShippingOrder } from '../../../../apis/supplier/supplierShippingOrder';

function OmisePaymentButton({ className, orders, totalPrice }) {
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
    e.preventDefault();
    console.log('first');
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
          alert('Payment failed');
        } else if (status === 'successful') {
          const {
            data: { purchasedOrders },
          } = await createPurchasedOrder({
            orderIds,
            paymentAt,
            transactionId,
          });
          console.log(purchasedOrders);
          const purchasedOrderIds = [];
          purchasedOrders.forEach((purchasedOrder) => {
            purchasedOrderIds.push({ purchasedOrderId: purchasedOrder.id });
          });
          await createShippingOrder({ purchasedOrderIds });
          alert(`Payment successful, order id: ${orderIds.join(', ')}`);
          navigate('/');
        }
      },
      onFormClosed: () => {},
    });
  };

  return (
    <form
      id='checkoutForm'
      className={className}
      onSubmit={handleClickCheckoutButton}
    >
      <button
        type='submit'
        id='checkoutButton'
      >{`Pay ${totalPrice} THB`}</button>
    </form>
  );
}

export default OmisePaymentButton;
