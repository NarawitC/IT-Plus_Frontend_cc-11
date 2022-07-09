import React, { useEffect, useState } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import trash from '../../../../src/pictures/trash.svg';
import { useProductfilter } from '../../../contexts/ProductContext';
import { localsting } from '../../../services/LocalstringComma';
// import sumCheck from '../../../src/pictures/check_sum.svg';

function LGCartlist({ el, handleDelcartlist }) {
  const [count, setCount] = useState(el.amount || 1);
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
      return newarr;
    });
  };
  // console.log(el.id);

  useEffect(() => {
    handleChangeamount();
  }, [count]);
  return (
    <>
      <div className='col-span-4'>
        <div className='grid grid-cols-10  '>
          <div className='w-[100px] h-[100px]  col-span-1  overflow-hidden'>
            <img
              src={el.mainPicture}
              className='object-contain w-full h-full'
            />
          </div>
          <div className='col-span-3 my-auto pl-14'>
            <div href='#'>{el.productName}</div>
          </div>
          <div className='col-span-3 m-auto '>
            {/* {1 ? ( */}
            {el.Promotions?.length > 0 ? (
              <>
                <div className='flex pt-6 gap-4'>
                  <div className='bg-red-500 text-white px-4 rounded-lg  h-10'>
                    <div className='my-2'>- ฿ 500</div>
                  </div>
                  <div className='font-bold text-[24px]'>
                    ฿ {localsting(el.price - el.Promotions[0].discount)}
                  </div>
                </div>
                <div className='line-through text-gray-500 opacity-50'>
                  ฿ {localsting(el.price)}
                </div>
              </>
            ) : (
              <div className='font-bold text-[24px]'>
                ฿ {localsting(el.price)}
              </div>
            )}
          </div>
          <div className='flex col-span-3 justify-end pr-8 gap-12 '>
            <div className='col-span-1 flex my-auto border-2 rounded-lg   '>
              <button
                className={` w-[30px] h-[30px]  bg-white btn btn-primary border-none ${
                  count === 1
                    ? 'btn-disabled text-gray-500 opacity-50'
                    : 'text-black'
                }`}
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
              {/* --------------------------------------- จำนวน---------------------------------- */}
              <p className='my-auto text-[20px] px-4 '>{count}</p>
              {/* ---------------------------------------ปุ่ม + ---------------------------------- */}

              <button
                className={`w-[30px] h-[30px]   bg-white btn btn-primary border-none ${
                  el.stock <= count
                    ? 'btn-disabled text-gray-500 opacity-50'
                    : 'text-black'
                }`}
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
        <div className='flex justify-end'>
          {el.stock <= count && (
            <div className='flex text-red-500 gap-2 '>
              <BiErrorCircle />
              <p className=' text-[12px]'>
                ไม่สามารถเพิ่มจำนวนสินค้าได้ เนื่องจากเกินจำนวนคลังสินค้า
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LGCartlist;
