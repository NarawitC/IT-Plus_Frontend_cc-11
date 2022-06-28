import { createContext, useContext, useEffect, useState } from 'react';

import itemImg1 from '../../src/productImg/item1.jpg';
import itemImg2 from '../../src/productImg/item2.jpg';
import itemImg3 from '../../src/productImg/item3.jpg';
import itemImg4 from '../../src/productImg/item4.jpg';

const ProductfilterContext = createContext();

function ProductfilterContextProvider({ children }) {
  const products = [
    {
      id: 1,
      productName: 'จอคอม Acer Nitro VG240YAbmiix 23.8" VA Gaming',
      href: '#',
      price: 3990,
      discout: '400',
      imageSrc: itemImg1,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      productName: 'จอคอม Acer Nitro VG271Sbmiipx 27" IPS Gaming',
      href: '#',
      imageSrc: itemImg2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 6790,
      discout: '400',
    },
    {
      id: 3,
      productName: 'หูฟังไร้สาย Marshall Major IV Wireless Headphone',
      href: '#',
      imageSrc: itemImg3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 4940,
      discout: '400',
    },
    {
      id: 4,
      productName: 'โน๊ตบุ๊ค Acer Nitro AN515-45-R4U8 Gaming',
      href: '#',
      imageSrc: itemImg4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 39900,
      discout: null,
    },
  ];
  const [priceRange, setPriceRange] = useState([0, 3000]);

  //   const [Productfilterstr, setProductfilterstr] = useState(null);
  const [product, setPoduct] = useState(products);
  useEffect(() => {
    const filtered = PriceRangeFiler(products, priceRange);
    // setPoduct(filtered);
    // console.log(filtered);
  }, [priceRange]);
  const PriceRangeFiler = async (productArray, productRange) => {
    const xxx = await productArray.filter((product) => {
      console.log(product.price);
      console.log(productRange[0].split(',')[0]);
      return (
        product.price >= +productRange[0].split(',')[0] &&
        product.price <= +productRange[0].split(',')[1]
      );
    });
    setPoduct(xxx);
    return xxx;
  };
  return (
    <ProductfilterContext.Provider
      value={{
        PriceRangeFiler,
        product,
        setPriceRange,
        priceRange,
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
