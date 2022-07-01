import { createContext, useState } from 'react';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
export { ProductContext };
