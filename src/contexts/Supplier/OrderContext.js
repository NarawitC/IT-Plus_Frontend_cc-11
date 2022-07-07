import { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;
export { OrderContext };
