import { OMISE_PUBLIC_KEY } from '../config/constants';
import { omiseCheckoutCreditCard } from '../apis/omise/omiseCheckout';

function OmiseTestPage() {
  const totalPrice = 999;
  const displayName = 'Note shop';
  const profilePicture =
    'https://res.cloudinary.com/narawit/image/upload/v1656510181/IT_Shop/Default%20photo/defaultSupplierProfilePicture_zum06n.png';
  const clientId = 1;
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
      onCreateTokenSuccess: (token) => {
        // console.log(token);
        omiseCheckoutCreditCard({ clientId, totalPrice, token });
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

export default OmiseTestPage;
