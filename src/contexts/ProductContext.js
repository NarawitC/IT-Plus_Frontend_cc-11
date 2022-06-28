import { createContext, useContext, useEffect, useState } from 'react';

import itemImg1 from '../../src/productImg/item1.jpg';
import itemImg2 from '../../src/productImg/item2.jpg';
import itemImg3 from '../../src/productImg/item3.jpg';
import itemImg4 from '../../src/productImg/item4.jpg';
import { getAllProductInfo, getProductById } from '../apis/user/product';

const ProductfilterContext = createContext();

function ProductfilterContextProvider({ children }) {
  //
  const [tempCarts, settempCarts] = useState([]);

  //   const [Productfilterstr, setProductfilterstr] = useState(null);
  const [priceRange, setPriceRange] = useState(['0, 3000']);
  const [product, setPoduct] = useState(null);
  useEffect(() => {
    PriceRangeFiler(priceRange);
    console.log(product);
  }, [priceRange]);

  const PriceRangeFiler = async (productRange) => {
    const res = await getAllproduct();
    console.log(res);
    console.log(productRange);
    const { products } = res;
    const xxx = await products?.filter((product) => {
      return (
        product.price >= +productRange[0]?.split(',')[0] &&
        product.price <= +productRange[0]?.split(',')[1]
      );
    });
    console.log(xxx);
    setPoduct(xxx);
    return xxx;
  };

  const getsinglepd = async (id) => {
    return await getProductById(id);
    // console.log(product[id]);
    // return await products[id];
  };
  const getAllproduct = async () => {
    const { data } = await getAllProductInfo();
    return data;
    // console.log(product[id]);
    // return await products[id];
  };
  return (
    <ProductfilterContext.Provider
      value={{
        PriceRangeFiler,
        product,
        setPriceRange,
        priceRange,
        getsinglepd,
        settempCarts,
        tempCarts,
      }}
    >
      {children}
    </ProductfilterContext.Provider>
  );
}

const useProductfilter = () => {
  const ctx = useContext(ProductfilterContext);
  return ctx;
};
export default ProductfilterContextProvider;
export { useProductfilter };
