import { createContext, useState } from 'react';

const SupplierProductContext = createContext();

function SupplierProductContextProvider({ children }) {
  const [supplierProducts, setSupplierProducts] = useState([]);
  return (
    <SupplierProductContext.Provider
      value={{ supplierProducts, setSupplierProducts }}
    >
      {children}
    </SupplierProductContext.Provider>
  );
}

export default SupplierProductContextProvider;
export { SupplierProductContext };
