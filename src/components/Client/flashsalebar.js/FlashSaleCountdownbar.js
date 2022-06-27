import React, { useEffect } from 'react';
import Ficon from '../../../../src/icons/fs-1.svg';
import { useCountdown } from '../../../contexts/clountdownContext';

function FlashSaleCountdownbar() {
  const { SetcountdownStrbydate, Days, Hrs, Mins, Secs } = useCountdown();
  useEffect(() => {
    SetcountdownStrbydate(1);
  }, []);
  return (
    <div>
      {/*
       <span
        className='countdown w-full bg-blue-50 h-2'
        onClick={() => {
          setcountdown((prev) => prev - 1);
        }}
      >
        <span style={{ '--value': countdown }}></span>
      </span>
      <SmPillButton
        text='hi'
        onClick={() => {
          console.log(countdown);
        }}
      /> */}

      <div className='max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 bg-yellow-400 flex justify-between mt-8 items-center rounded-xl py-4'>
        <div>
          <img src={Ficon} />
        </div>
        <div className='flex text-black'>
          <div>
            <div className='text-[20px] font-bold  '>Special Price!</div>
            <div className='text-right'>Eleminated in</div>
            {/* <div className='text-[20px] font-bold '>ราคาพิเศษ</div> */}
            {/* <div>เหลือเวลาเพียง</div> */}
          </div>
          <div className='flex gap-4 items-center ml-4 mt-1'>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-1'>
                <div
                  className='  font-bold  bg-black  text-white max-w-fit mx-auto'
                  style={{ '--value': Days }}
                ></div>
              </div>
              <p>Days</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-1 '>
                <p
                  className=' font-bold  bg-black text-white max-w-fit mx-auto'
                  style={{ '--value': Hrs }}
                ></p>
              </div>
              <p>Hours</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-1'>
                <div
                  className=' font-bold bg-black text-white max-w-fit mx-auto'
                  style={{ '--value': Mins }}
                ></div>
              </div>
              <p>Min</p>
            </div>
            <div className='flex flex-col'>
              <div className='countdown text-center bg-black py-1'>
                <div
                  className=' font-bold bg-black text-white max-w-fit mx-auto'
                  style={{ '--value': Secs }}
                ></div>
              </div>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleCountdownbar;
