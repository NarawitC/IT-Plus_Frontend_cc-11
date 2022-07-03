import React, { useEffect } from 'react';
import Ficon from '../../../../src/icons/fs-1.svg';
import { useCountdown } from '../../../contexts/clountdownContext';
import { useProductfilter } from '../../../contexts/ProductContext';
import SmPillButton from '../../commonUtils/SmPillButton';
import DynamicClientProductCard from '../products/DynamicClientProductCard';

function FlashSaleCountdownbar() {
  const { SetcountdownStrbydate, Days, Hrs, Mins, Secs } = useCountdown();
  useEffect(() => {
    SetcountdownStrbydate(1);
  }, []);
  const { product } = useProductfilter();

  return (
    <div>
      <div className='max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 bg-yellow-400 flex justify-between mt-8 items-center rounded-xl py-4'>
        <div>
          <img src={Ficon} />
        </div>
        <div className='flex text-black'>
          <div>
            <div className='text-[20px] font-bold  '>Special Price!!</div>
            <div className='text-right'>Eleminated in</div>
            {/* <div className='text-[20px] font-bold '>ราคาพิเศษ</div> */}
            {/* <div>เหลือเวลาเพียง</div> */}
          </div>
          <div className='grid grid-cols-4 gap-2 items-center ml-4 mt-1'>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-4'>
                <div
                  className='font-bold    text-white max-w-fit mx-auto'
                  style={{ '--value': Days }}
                ></div>
              </div>
              <p className='text-center font-bold text-[14px]'>Days</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-4 '>
                <p
                  className=' font-bold   text-white max-w-fit mx-auto'
                  style={{ '--value': Hrs }}
                ></p>
              </div>
              <p className='text-center font-bold text-[14px]'>Hours</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-4'>
                <div
                  className=' font-bold  text-white max-w-fit mx-auto'
                  style={{ '--value': Mins }}
                ></div>
              </div>
              <p className='text-center font-bold text-[14px]'>Min</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-4'>
                <div
                  className=' font-bold  text-white  max-w-fit mx-auto'
                  style={{ '--value': Secs }}
                ></div>
              </div>
              <p className='text-center font-bold text-[14px]'>Sec</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
        {product?.map((el, idx) => (
          <DynamicClientProductCard el={el} key={idx} />
        ))}
      </div>
      <div
        className='w-full flex justify-center mt-4
      '
      >
        <SmPillButton
          text='See All FlashSales'
          className={
            'btn btn-primary mx-auto self-center  hover:bg-white hover:text-gray-700/50 duration-200'
          }
        />
      </div>
    </div>
  );
}

export default FlashSaleCountdownbar;
