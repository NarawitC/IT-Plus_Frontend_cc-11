import { createContext, useContext, useState } from 'react';

const AdminSearchContext = createContext();
function AdminSearchContextProvider({ children }) {
  const [orderId, setOrderId] = useState('');
  const [productId, setProductId] = useState('');
  return (
    <AdminSearchContext.Provider
      value={{ orderId, setOrderId, productId, setProductId }}
    >
      {children}
    </AdminSearchContext.Provider>
  );
}

export default AdminSearchContextProvider;

export const useAdminSearchContext = () => {
  const context = useContext(AdminSearchContext);
  if (!context) {
    throw new Error(
      'useAdminSearchContext must be used within a AdminSearchContextProvider'
    );
  }
  return context;
};
