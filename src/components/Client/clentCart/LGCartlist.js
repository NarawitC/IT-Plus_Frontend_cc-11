import React, { useEffect, useState } from 'react';
import CartImg from '../../../../src/pictures/cart-test-1.jpg';
import trash from '../../../../src/pictures/trash.svg';
import { useProductfilter } from '../../../contexts/ProductContext';
import { localsting } from '../../../services/LocalstringComma';
// import sumCheck from '../../../src/pictures/check_sum.svg';

function LGCartlist({ el, handleDelcartlist }) {
  const [count, setCount] = useState(el.amount || 0);
  const { settempCarts } = useProductfilter();
  const handleChangeamount = async () => {
    await settempCarts((prev) => {
      // console.log(prev);
      const newarr = prev.map((elc) => {
        if (elc.id === el.id) {
          // console.log(el.id);
          // console.log(singlepd.id);
          elc.amount = count;
          return elc;
        } else return elc;
      });
      // console.log(newarr);
      return newarr;
    });
  };

  useEffect(() => {
    handleChangeamount();
  }, [count]);
  return (
    <>
      <div className='col-span-4'>
        <div className='grid grid-cols-10 '>
          <div className='w-[100px] h-[100px]  col-span-1   '>
            <img src={el.mainPicture} />
          </div>
          <div className='col-span-3 my-auto pl-14'>
            <a href='#'>{el.productName}</a>
          </div>
          <div className='col-span-3 m-auto '>
            {/* {1 ? ( */}
            {el.Promotions?.length > 0 ? (
              <>
                <div className='flex pt-6 gap-4'>
                  <div className='bg-red-500 text-white px-4 rounded-lg  h-10'>
                    <div className='my-2'>- THB 500</div>
                  </div>
                  <div className='font-bold text-[24px]'>
                    THB {localsting(el.price - el.Promotions[0].discount)}
                  </div>
                </div>
                <div className='line-through text-gray-500 opacity-50'>
                  THB {localsting(el.price)}
                </div>
              </>
            ) : (
              <div className='font-bold text-[24px]'>THB {el.price}</div>
            )}
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
              <img
                src={trash}
                onClick={() => {
                  handleDelcartlist(el.id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LGCartlist;
