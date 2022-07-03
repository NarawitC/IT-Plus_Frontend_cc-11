import { useEffect, useState } from 'react';
import CartImg from '../../../src/pictures/cart-test-1.jpg';
import trash from '../../../src/pictures/trash.svg';
import sumCheck from '../../../src/pictures/check_sum.svg';
import LGCartlist from './clentCart/LGCartlist';
import { useProductfilter } from '../../contexts/ProductContext';
import { localsting } from '../../services/LocalstringComma';
import { useAuthContext } from '../../contexts/Client/AuthCcontexts';
import { useNavigate } from 'react-router-dom';
import { CgChevronDoubleLeft } from 'react-icons/cg';
import { BsPlusSquareDotted } from 'react-icons/bs';
import DynamicClientCheckoutmode from './clentCart/DynamicClientCheckoutmode';

function CartItem() {
  const [cartOrder, setcartOrder] = useState(null);

  console.log(cartOrder);

  useEffect(() => {
    const fetchCartDb = async () => {
      if (dbcart) {
        const rescart = await GetCartsbyId(dbcart);
        // console.log(rescart);
        setcartOrder(rescart.CartItems);
        return rescart.CartItems;
      }
    };
    fetchCartDb();
  }, []);
  const { user } = useAuthContext();

  const {
    tempCarts,
    settempCarts,
    totalCart,
    totalCartAmount,
    createCarts,
    createOrderandOrderItems,
    dbcart,
    setdbcart,
    GetCartsbyId,
  } = useProductfilter();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleSubmitcart = async (tempCarts, userid) => {
    // console.log(userid);
    console.log(userid);
    const cartId = await createCarts(tempCarts, userid);
    setdbcart(cartId);

    // navigate('/cart/checkout');
    // console.log(reponse);
  };
  const handleCreateOrder = async () => {
    const res = await createOrderandOrderItems(dbcart, 'address is here');
    console.log(res.data);
    console.log('res.data');
    navigate('/cart/checkout');
  };
  const handleDelcartlist = async (id) => {
    await settempCarts((prev) => {
      const newarr = prev.filter((elc) => {
        if (elc.id !== id) {
          return elc;
        }
      });
      // console.log(newarr);
      return newarr;
    });
  };
  return (
    <div className='grid grid-cols-6 gap-4 py-4 '>
      {tempCarts?.map((el, idx) => (
        <LGCartlist el={el} key={idx} handleDelcartlist={handleDelcartlist} />
      ))}
      {dbcart ? (
        <div className=' col-span-4'>
          <DynamicClientCheckoutmode />
        </div>
      ) : null}
      <div className='col-start-5 col-span-2 px-4 border-2 rounded-lg py-4'>
        <div className='flex gap-4'>
          <div>
            <img src={sumCheck} />
          </div>
          <div className='font-bold'>ตรวจสอบยอด</div>
        </div>
        <div className=' grid grid-row-2 space-y-5'>
          <div className='grid grid-row-2'>
            <div className='flex justify-between mt-4'>
              <div className='flex'>
                <div className='font-bold'>ยอดรวม</div>
                <div className='text-gray-500 opacity-50'>
                  ({totalCartAmount}ชิ้น)
                </div>
              </div>
              <div>฿ {localsting(totalCart)}</div>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold '>ค่าจัดส่ง</p>
              <div>ฟรี</div>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between '>
              <div className='font-bold'>ยอดสุทธิ</div>
              <div className='text-primary font-bold text-[20px] '>
                ฿ {localsting(totalCart)}
              </div>
            </div>
            <div className='text-[14px] text-gray-500 opacity-50 line-through'>
              (รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>

          {!dbcart ? (
            <div
              className='btn btn-primary rounded-lg text-white '
              onClick={() => {
                handleSubmitcart(tempCarts, user.id);
              }}
            >
              ทำการสั่งซื้อ
            </div>
          ) : (
            <div
              className='btn btn-primary rounded-lg text-white '
              onClick={() => {
                handleCreateOrder(dbcart, 'address is here');
              }}
            >
              ยืนยันที่อยู่จัดส่ง
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
