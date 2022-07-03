import { createContext, useContext, useState } from 'react';

const orderContext = createContext();
function OrderContextProvider({ children }) {
  const [CheckoutAddress, setCheckoutAddress] = useState(null);
  // console.log(CheckoutAddress);
  return (
    <orderContext.Provider value={{ CheckoutAddress, setCheckoutAddress }}>
      {children}
    </orderContext.Provider>
  );
}

export default OrderContextProvider;

const useOrderContext = () => {
  const ctx = useContext(orderContext);
  return ctx;
};
export { useOrderContext };
