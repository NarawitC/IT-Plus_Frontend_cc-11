import { createContext, useContext, useEffect, useState } from 'react';

import itemImg1 from '../../src/productImg/item1.jpg';
import itemImg2 from '../../src/productImg/item2.jpg';
import itemImg3 from '../../src/productImg/item3.jpg';
import itemImg4 from '../../src/productImg/item4.jpg';
import {
  createCartbyClientId,
  createCartitems,
  createOrederswithItems,
  getCart,
} from '../apis/user/order';
import { getAllProductInfo, getProductById } from '../apis/user/product';

const ProductfilterContext = createContext();

function ProductfilterContextProvider({ children }) {
  //
  const [dbcart, setdbcart] = useState(null);
  const [tempCarts, settempCarts] = useState([]);
  const [totalCart, setTotalcart] = useState(0);
  const [totalCartAmount, settotalCartAmount] = useState(0);

  //   const [Productfilterstr, setProductfilterstr] = useState(null);
  const [priceRange, setPriceRange] = useState(['0, 3000']);
  const [product, setPoduct] = useState(null);
  useEffect(() => {
    PriceRangeFiler(priceRange);
    const sumPrice = () => {
      if (tempCarts?.length > 0) {
        const subtotal = tempCarts?.map((el) => el.price * el.amount);
        const total = subtotal.reduce((a, b) => a + b, 0);
        const totoalAmount = tempCarts
          .map((el) => el.amount)
          .reduce((a, b) => a + b, 0);
        setTotalcart(total);
        settotalCartAmount(totoalAmount);
      }
    };
    sumPrice();
    // console.log(product);
  }, [priceRange, tempCarts]);

  const PriceRangeFiler = async (productRange) => {
    const res = await getAllproduct();
    // console.log(res);
    // console.log(productRange);
    const { products } = res;
    const xxx = await products?.filter((product) => {
      return (
        product.price >= +productRange[0]?.split(',')[0] &&
        product.price <= +productRange[0]?.split(',')[1]
      );
    });
    // console.log(xxx);
    setPoduct(xxx);
    return xxx;
  };

  const getsinglepd = async (id) => {
    const { data } = await getProductById(id);
    return data.product;
    // console.log(product[id]);
    // return await products[id];
  };
  const getAllproduct = async () => {
    const { data } = await getAllProductInfo();
    return data;
    // console.log(product[id]);
    // return await products[id];
  };
  const createCarts = async (cart, userid) => {
    const res = await createCartbyClientId();
    // console.log(res.data);
    // id, quantity, created_at, updated_at, cart_id, product_id
    // console.log(cart);
    const cartItems = await cart?.map((el) => {
      return { quantity: el.amount, productId: el.id };
    });
    // const resitem = await createCartitems(2, cartItems);
    const resitem = await createCartitems(res.data.cart.id, cartItems);
    const cartId = res.data.cart.id;

    // setdbcart(cartId);
    // console.log(resitem.data);
    createOrderandOrderItems(cartId, 'palhome');
    return cartId;
  };
  const createOrderandOrderItems = async (cartId, adress) => {
    const rescart = await getCart(cartId);
    const allcart = rescart.data.carts;
    const mycart = await allcart.find((el) => el.id === cartId);
    // const orders = [];
    // console.log(cartId);
    console.log(mycart);
    const sipplierArr = await mycart.CartItems.map((el) => {
      // console.log(el.Product);
      return {
        supplierId: el.Product.supplierId,
        productPrice: 0,
        deliveryAddress: adress,
        deliveryPrice: 0,
        orderItems: [],
      };
    });
    const uniqueSupplier = [];
    await sipplierArr?.map((el) => {
      if (uniqueSupplier?.length > 0) {
        uniqueSupplier?.map((elnr) => {
          console.log(elnr);
          if (el.supplierId !== elnr.supplierId) {
            uniqueSupplier.push(el);
          }
        });
      } else {
        uniqueSupplier.push(el);
      }
    });
    console.log(uniqueSupplier);
    const orders = [...uniqueSupplier];
    //putin orderIrems
    mycart.CartItems.forEach((element) => {
      uniqueSupplier?.map((el) => {
        if (element.Product.supplierId === el.supplierId) {
          const supIndex = orders.findIndex(
            (tarel) => tarel.supplierId === el.supplierId
          );
          orders[supIndex].orderItems.push({
            id: element.Product.id,
            discount:
              element.Product.Promotions.length > 0
                ? element.Product.Promotions.discount
                : 0,
            quantity: element.quantity,
          });
          orders[supIndex].productPrice +=
            (element.Product.price -
              (element.Product.Promotions.length > 0
                ? element.Product.Promotions.discount
                : 0)) *
            element.quantity;
        }
        // if(element.)
      });
    });

    console.log(cartId);
    console.log(orders);
    const { data } = await createOrederswithItems(cartId, orders);
    // const uniqueSupplier = await sipplierArr.reduce((prev, next) => {
    //   if (prev.supplierId === next.supplierId) {
    //     return [...prev, next];
    //   }
    // }, []);
    // const uniqueSupplier = sipplierArr.filter((el, index, arr) => {
    //   console.log(el.supplierId);
    //   console.log(
    //     arr.find((eltofind) => el.supplierId === eltofind.supplierId)
    //   );
    //   if (arr.find((eltofind) => el.supplierId === eltofind.supplierId) < 0) {
    //     return el;
    //   }
    // });
    // console.log(uniqueSupplier);
    // const sipplierUniqueArr = Array.from(sipplierArr);

    // return items.filter(
    //   (item, index, array) =>
    //     index ===
    //     array.findIndex((foundItem) =>
    //       isPropValuesEqual(foundItem, item, propNamesArray)
    //     )
    // );

    // mycart.CartItems.foreach((el) => {});

    // {
    //   "orders": [
    //     {
    //       "supplierId": 1,
    //       "productPrice": 2997,
    //       "deliveryAddress": "Note home",
    //       "deliveryPrice": 50,
    //       "orderItems": [
    //         {
    //           "productId": 1,
    //           "discount": 0,
    //           "quantity": 1
    //         },
    //         {
    //           "productId": 2,
    //           "discount": 0,
    //           "quantity": 2
    //         }
    //       ]
    //     },
    //     {
    //       "supplierId": 2,
    //       "productPrice": 2997,
    //       "deliveryAddress": "Note home",
    //       "deliveryPrice": 50,
    //       "orderItems": [
    //         {
    //           "productId": 4,
    //           "discount": 0,
    //           "quantity": 1
    //         },
    //         {
    //           "productId": 5,
    //           "discount": 0,
    //           "quantity": 2
    //         }
    //       ]
    //     }
    //   ]
    // }
    // const { data } = await createOrederswithItems();
    // console.log(data);
    return data;
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
        totalCart,
        setTotalcart,
        totalCartAmount,
        createCarts,
        createOrderandOrderItems,
        dbcart,
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
