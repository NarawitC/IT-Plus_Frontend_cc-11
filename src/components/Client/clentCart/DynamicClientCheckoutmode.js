import React from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';
import ModalAddress from './modalAddress';

function DynamicClientCheckoutmode() {
  return (
    <>
      <div className='grid grid-cols-5 gap-8 mt-8'>
        <div className='col-span-3'>
          <div className='flex gap-4 justify-between'>
            <p className='font-bold text-[24px]'>ที่อยู่จัดส่งสินค้า</p>
            <div className='flex gap-8 text-primary px-8'>
              <label
                for='my-modal-5'
                className='font-bold text-[16px] text-primary my-auto btn btn-primary modal-button bg-white border-none'
              >
                เพิ่มที่อยู่
              </label>

              <p className='font-bold text-[16px] my-auto '>จัดการที่อยู่</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-3 text-center  rounded-xl my-4 '>
          <div className=' border-2 rounded-xl mx-4 mt-4 py-2'>
            <div className='text-[20px] font-bold py-4'>
              <p>ที่อยู่จัดส่งสินค้า</p>
            </div>

            <div className='py-4  '>
              <div className=''>
                <label
                  for='my-modal-5'
                  className='btn modal-button w-60 py-2 mx-auto rounded-xl border-2 text-[20px]  btn-primary text-white '
                >
                  + เพิ่มที่อยู่การจัดส่ง
                </label>

                <input
                  type='checkbox'
                  id='my-modal-5'
                  className='modal-toggle'
                />
                <ModalAddress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicClientCheckoutmode;
