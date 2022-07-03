import React from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';
import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';
import ModalAddress from './modalAddress';

function DynamicClientCheckoutmode() {
  const { user } = useAuthContext();
  return (
    <>
      <div className='w-full grid grid-cols-5 gap-8 mt-8'>
        <div className='col-span-5'>
          <div className='flex gap-4 justify-between'>
            <p className='font-bold text-[24px]'>เลือกที่อยู่จัดส่งสินค้า</p>
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
      <div className='grid col-span-5 grid-cols-5 gap-8'>
        <div className='col-span-5 text-center  rounded-xl my-4 '>
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
                <ModalAddress user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicClientCheckoutmode;
