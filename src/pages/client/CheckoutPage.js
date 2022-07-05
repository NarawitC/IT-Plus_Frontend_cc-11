import BreadCrumbsCart from '../../components/Client/products/productInfo/BreadCrumbsCart';
import { useProductfilter } from '../../contexts/ProductContext';
import sumCheck from '../../../src/pictures/check_sum.svg';
import homeIcon from '../../../src/pictures/home-icon.svg';
import { useEffect, useState } from 'react';
import { getAllOrders, getCart } from '../../apis/client/order';
import { localsting } from '../../services/LocalstringComma';
import { useLoading } from '../../contexts/LoadingContext';
import ModalAddress from '../../components/Client/clentCart/modalAddress';
import { useOrderContext } from '../../contexts/Client/orderContext';
import OmisePaymentButton from '../../components/Client/order/payment/OmisePaymentButton';

function CheckoutPage() {
  const { checkoutAddress } = useOrderContext();

  const [TotalPrice, setTotalPrice] = useState([]);
  const [Totalamount, setTotalamount] = useState(null);
  const [OrderArr, setOrderArr] = useState(null);

  const { dbcart } = useProductfilter();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    // console.log(dbcart);
    const fetchorderDb = async () => {
      // get thisorder by rescart
      if (dbcart) {
        const {
          data: { orders },
        } = await getAllOrders();
        const arrOrderid = await dbcart
          .map((el) => el.id)
          .map((elodid) => {
            for (let k of orders) {
              if (elodid == k.id) return k;
            }
          });
        return arrOrderid;
      }
    };
    const sumPrice = async () => {
      setIsLoading(true);
      const resOrderdb = await fetchorderDb();
      setOrderArr(resOrderdb);
      if (resOrderdb?.length > 0) {
        const subtotal = resOrderdb?.map((el) => {
          // console.log(el);
          const products = el.OrderItems.map((eloi) => {
            return {
              productId: eloi.Product.id,
              productName: eloi.Product.productName,
              pic: eloi.Product.mainPicture,
              amount: eloi.quantity,
            };
          });
          return {
            orderId: el.id,
            ordertotal: el.productPrice,
            products,
            amountoi: products
              .map((elAM) => elAM.amount)
              .reduce((a, b) => a + b, 0),
          };
          // if (el.Product.Promotions?.length > 0) {
          //   return (
          //     (+el.Product.price - +el.Product.Promotions[0].discount) *
          //     el.quantity
          //   );
          // } else return el.Product.price * el.quantity;
        });
        // console.log(subtotal);
        // console.log('subtotal');
        const total = subtotal
          .map((elOT) => elOT.ordertotal)
          .reduce((a, b) => +a + b, 0);
        // console.log(total);

        const totalAmount = subtotal
          .map((el) => el.amountoi)
          .reduce((a, b) => a + b, 0);
        setTotalamount(totalAmount);
        setTotalPrice(total);
        // setTotaltoOdcart(total);
        setIsLoading(false);
      }
    };
    sumPrice();
  }, []);
  // console.log(OrderArr);
  const handlePayment = async () => {
    console.log(OrderArr);
    // const res = await createOrderandOrderItems(dbcart, checkoutAddress);
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
        <div className='flex gap-4 border-b-2 pb-4 px-2 '>
          <div>
            <img src={sumCheck} />
          </div>
          <div className='font-bold '>ตรวจสอบยอด</div>
        </div>
        {OrderArr?.map((elOrder, idx) => {
          // console.log(elOrder);
          return (
            <div key={idx} className='border-b-2 pb-4 px-4'>
              <div className='flex justify-between mt-4 '>
                {elOrder.OrderItems?.map((elpds, idx) => {
                  //product OrderItem lists here
                  // console.log(elpds);
                  const { productName, price, mainPicture } = elpds.Product;
                  // console.log(elpds.discount);
                  // console.log(price);
                  // console.log(elpds.quantity);
                  return (
                    <div key={idx}>
                      <div className=''>
                        <div className='font-bold'>{productName}</div>
                        <div className='text-gray-500 opacity-50'>
                          จำนวน : {elpds?.quantity}
                        </div>
                      </div>
                      <div>
                        THB{' '}
                        {elpds.discount
                          ? localsting(
                              +elpds.quantity * +price - +elpds.discount
                            )
                          : localsting(+elpds.quantity * +price)}
                      </div>
                    </div>
                  );
                  //product OrderItem lists here
                })}
                {/* <div>THB {TotaltoOdcart}</div> */}
              </div>
            </div>
          );
        })}

        <div className=' grid grid-row-2 space-y-5 px-4 mt-4 '>
          <div className='grid grid-row-2'>
            <div className='flex justify-between '>
              <div className='flex'>
                <div className='font-bold'>ยอดรวม</div>
                <div className='text-gray-500 opacity-50'>
                  ({Totalamount}ชิ้น)
                </div>
              </div>
              <div>THB {localsting(TotalPrice)}</div>
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
                THB {localsting(TotalPrice - 0)}
              </div>
            </div>
            <div className='text-[14px] text-gray-500 opacity-50 line-through'>
              (รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>
          <OmisePaymentButton
            className='btn bg-gradient-to-b border-none from-blue-400 to-blue-700 rounded-3xl text-white text-[24px] hover:from-blue-600 hover:to-blue-400'
            orders={OrderArr}
            totalPrice={localsting(TotalPrice)}
          >
            ชำระเงิน
          </OmisePaymentButton>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CheckoutPage;
