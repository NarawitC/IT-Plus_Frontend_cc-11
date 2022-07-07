import { createContext, useContext, useState } from 'react';

export const ShippingOrderStatusContext = createContext();

function ShippingOrderStatusContextProvider({ children }) {
  const [trackingId, setTrackingId] = useState({});

  return (
    <ShippingOrderStatusContext.Provider value={{ trackingId, setTrackingId }}>
      {children}
    </ShippingOrderStatusContext.Provider>
  );
}

export default ShippingOrderStatusContextProvider;
