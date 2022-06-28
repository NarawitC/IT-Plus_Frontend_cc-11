import { useState } from 'react';
import CartImg from '../../../src/pictures/cart-test-1.jpg';
import trash from '../../../src/pictures/trash.svg';
import sumCheck from '../../../src/pictures/check_sum.svg';

function CartItem() {
  const [count, setCount] = useState(0);
  return (
    <div className='grid grid-cols-4 gap-4 py-4 '>
      <div className='col-span-3'>
        <div className='grid grid-cols-10 '>
          <div className='w-[100px] h-[100px]  col-span-1   '>
            <img src={CartImg} />
          </div>
          <div className='col-span-3 my-auto pl-14'>
            <a href='#'>เก้าอี้สุขภาพ Bewell ENFOLD Ergonomic Chair</a>
          </div>
          <div className='col-span-3 m-auto '>
            <div className='flex pt-6 gap-4'>
              <div className='bg-red-500 text-white px-4 rounded-lg  h-10'>
                <div className='my-2'>- THB 500</div>
              </div>
              <div className='font-bold text-[24px]'>THB 8,888</div>
            </div>
            <div className='line-through text-gray-500 opacity-50'>
              THB 19,900
            </div>
          </div>
          <div className='flex col-span-3 justify-end pr-8 gap-12 '>
            <div className='col-span-1 flex my-auto border-2 rounded-lg   '>
              <button
                className='  w-[30px] h-[30px] text-black bg-white btn btn-primary border-none '
                onClick={() => {
                  if (count === 0) {
                    setCount(+count);
                  } else {
                    setCount(+count - 1);
                  }
                }}
              >
                -
              </button>
              {/* --------------------------------------- ใส่จำนวนได้---------------------------------- */}
              <p className='my-auto text-[20px] px-4 '>{count}</p>
              {/* ---------------------------------------ปุ่ม + ---------------------------------- */}

              <button
                className='  w-[30px] h-[30px] text-black  bg-white btn btn-primary border-none'
                onClick={() => {
                  setCount(+count + 1);
                }}
              >
                +
              </button>
            </div>
            <div className='col-span-1 my-auto'>
              <img src={trash} />
            </div>
          </div>
        </div>
      </div>
      <div className=' px-4 border-2 rounded-lg py-4'>
        <div className='flex gap-4'>
          <div>
            <img src={sumCheck} />
          </div>
          <div className='font-bold'>ตรวจสอบยอด</div>
        </div>
        {/* ------------------------------------------------------ */}
        <div className=' grid grid-row-2 space-y-5'>
          <div className='grid grid-row-2'>
            <div className='flex justify-between mt-4'>
              <div className='flex'>
                <div className='font-bold'>ยอดรวม</div>
                <div className='text-gray-500 opacity-50'>(2ชิ้น)</div>
              </div>
              <div>THB 18,788</div>
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
                THB 18,788
              </div>
            </div>
            <div className='text-[14px] text-gray-500 opacity-50 line-through'>
              (รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>
          <div className='btn btn-primary rounded-lg text-white '>
            ทำการสั่งซื้อ
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
