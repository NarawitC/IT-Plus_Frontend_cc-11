import BreadCrumbsCart from '../../components/Client/products/productInfo/BreadCrumbsCart';
import { useProductfilter } from '../../contexts/ProductContext';
import sumCheck from '../../../src/pictures/check_sum.svg';
import homeIcon from '../../../src/pictures/home-icon.svg';
import { useEffect, useState } from 'react';
import { getCart } from '../../apis/client/order';
import { localsting } from '../../services/LocalstringComma';
import { useLoading } from '../../contexts/LoadingContext';
import ModalAddress from '../../components/Client/clentCart/modalAddress';
import { useOrderContext } from '../../contexts/Client/orderContext';

function CheckoutPage() {
  const { checkoutAddress } = useOrderContext();
  const [subtotalCart, setsubtotalCart] = useState([]);
  const [TotaltoOdcart, setTotaltoOdcart] = useState(null);
  const [cartOrder, setcartOrder] = useState(null);
  const { dbcart, GetCartsbyId, createOrderandOrderItems } = useProductfilter();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    // console.log(dbcart);
    const fetchCartDb = async () => {
      if (dbcart) {
        const rescart = await GetCartsbyId(dbcart);
        setcartOrder(rescart.CartItems);
        return rescart.CartItems;
      }
    };
    const sumPrice = async () => {
      setIsLoading(true);
      const rescartCartitem = await fetchCartDb();
      if (rescartCartitem?.length > 0) {
        const subtotal = rescartCartitem?.map((el) => {
          // console.log(el);
          if (el.Product.Promotions?.length > 0) {
            return (
              (+el.Product.price - +el.Product.Promotions[0].discount) *
              el.quantity
            );
          } else return el.Product.price * el.quantity;
        });
        const total = subtotal.reduce((a, b) => a + b, 0);
        const totoalAmount = rescartCartitem
          .map((el) => el.amount)
          .reduce((a, b) => a + b, 0);
        // setTotalcart(total);
        setsubtotalCart(subtotal);
        setTotaltoOdcart(total);
        setIsLoading(false);
      }
    };
    sumPrice();
  }, []);

  const handleCreateOrder = async () => {
    const res = await createOrderandOrderItems(dbcart, checkoutAddress);
  };

  return (
    <div>
      <BreadCrumbsCart />

      <div className='border-2 rounded-lg py-4 my-4 col-span-2'>
        <>
          <div className='bg-black max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='flex flex-row gap-2'>
              <p className=' font-bold text-lg text-zinc-600'>
                IT Plus Recommend
              </p>
              <div className='grid grid-cols-4 gap-4 py-4 '></div>
            </div>
          </div>
        </>
        <div className='flex gap-4 border-b-2 pb-4 px-2'>
          <div>
            <img src={sumCheck} />
          </div>
          <div className='font-bold '>ตรวจสอบยอด</div>
        </div>
        {cartOrder?.map((el) => {
          console.log(cartOrder);
          return (
            <div className='border-b-2 pb-4 px-4'>
              <div className='flex justify-between mt-4 '>
                <div className=''>
                  <div className='font-bold'>{el?.Product.productName}</div>
                  <div className='text-gray-500 opacity-50'>
                    จำนวน : {el?.quantity}
                  </div>
                </div>
                <div>THB {localsting(subtotalCart)}</div>
                {/* <div>THB {TotaltoOdcart}</div> */}
              </div>
            </div>
          );
        })}

        <div className=' grid grid-row-2 space-y-5 px-4 mt-4'>
          <div className='grid grid-row-2'>
            <div className='flex justify-between '>
              <div className='flex'>
                <div className='font-bold'>ยอดรวม</div>
                <div className='text-gray-500 opacity-50'>(2ชิ้น)</div>
              </div>
              <div>THB {localsting(TotaltoOdcart)}</div>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold '>ค่าจัดส่ง</p>
              <div>{0 ? '' : 'ฟรี'}</div>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between '>
              <div className='font-bold'>ยอดสุทธิ</div>
              <div className='text-primary font-bold text-[20px] '>
                THB {localsting(TotaltoOdcart - 0)}
              </div>
            </div>
            <div className='text-[14px] text-gray-500 opacity-50 line-through'>
              (รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>
          <div
            className='btn bg-gradient-to-b border-none from-blue-400 to-blue-700 rounded-3xl text-white text-[24px] hover:from-blue-600 hover:to-blue-400'
            onClick={handleCreateOrder}
          >
            ชำระเงิน
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CheckoutPage;
