import { createContext, useContext, useState } from 'react';

const ShippingOrderStatusContext = createContext();

function ShippingOrderStatusContextProvider({ children }) {
  const [trackingId, setTrackingId] = useState('');

  return (
    <ShippingOrderStatusContext.Provider value={{ trackingId, setTrackingId }}>
      {children}
    </ShippingOrderStatusContext.Provider>
  );
}

export default ShippingOrderStatusContextProvider;
export { ShippingOrderStatusContext };
