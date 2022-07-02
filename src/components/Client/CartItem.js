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

function CartItem() {
  // useEffect(() => {}, []);
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
  } = useProductfilter();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleSubmitorder = async (tempCarts, userid) => {
    // console.log(userid);
    console.log(userid);
    const cartId = await createCarts(tempCarts, userid);
    setdbcart(cartId);
    navigate('/cart/checkout');
    // console.log(reponse);
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
    <div className='grid grid-cols-4 gap-4 py-4 '>
      {tempCarts?.map((el, idx) => (
        <LGCartlist el={el} key={idx} handleDelcartlist={handleDelcartlist} />
      ))}

      <div className=' px-4 border-2 rounded-lg py-4'>
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
              <div>THB {localsting(totalCart)}</div>
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
                THB {localsting(totalCart)}
              </div>
            </div>
            <div className='text-[14px] text-gray-500 opacity-50 line-through'>
              (รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>
          <div
            className='btn btn-primary rounded-lg text-white '
            onClick={() => {
              handleSubmitorder(tempCarts, user.id);
            }}
          >
            ทำการสั่งซื้อ
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
