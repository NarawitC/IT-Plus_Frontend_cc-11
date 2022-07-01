import { OMISE_PUBLIC_KEY } from '../../../../config/constants';
import { omiseCheckoutCreditCard } from '../../../../apis/omise/omiseCheckout';
import { createPurchasedOrder } from '../../../../apis/client/purchasedOrder';

function OmisePaymentButton() {
  const totalPrice = 999;
  const displayName = 'Note shop';
  const profilePicture =
    'https://res.cloudinary.com/narawit/image/upload/v1656510181/IT_Shop/Default%20photo/defaultSupplierProfilePicture_zum06n.png';
  const clientId = 1;
  const orderId = 1;
  const omiseCard = window.OmiseCard;

  const handleClickCheckoutButton = (e) => {
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
      image: profilePicture,
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
          await createPurchasedOrder({
            orderId,
            paymentAt,
            transactionId,
          });
          alert(`Payment successful, order id: ${orderId}`);
        }
      },
      onFormClosed: () => {},
    });
  };

  return (
    <div>
      <form id="checkoutForm">
        <button
          id="checkoutButton"
          onClick={handleClickCheckoutButton}
        >{`Pay ${totalPrice} THB`}</button>
      </form>
    </div>
  );
}

export default OmisePaymentButton;
