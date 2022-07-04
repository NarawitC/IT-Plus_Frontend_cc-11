import { createContext, useContext, useState } from 'react';

const orderContext = createContext();
function OrderContextProvider({ children }) {
  const [checkoutAddress, setCheckoutAddress] = useState(null);
  return (
    <orderContext.Provider value={{ checkoutAddress, setCheckoutAddress }}>
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
