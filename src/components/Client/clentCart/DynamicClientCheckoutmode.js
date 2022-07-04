import React from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';
import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';
import { useOrderContext } from '../../../contexts/Client/orderContext';
import ModalAddress from './modalAddress';
import { motion } from 'framer-motion';

function DynamicClientCheckoutmode() {
  const { CheckoutAddress } = useOrderContext();
  // console.log(CheckoutAddress);
  const { user } = useAuthContext();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='w-full grid grid-cols-5 gap-8 mt-8 '>
        <div className='col-span-5'>
          <div className='flex gap-4 justify-between'>
            <p className='font-bold text-[24px]'>เลือกที่อยู่จัดส่งสินค้า</p>
            <div className='flex gap-8 text-primary px-8'>
              <label
                htmlFor='my-modal-5'
                className='font-bold text-[16px] text-primary my-auto btn btn-primary modal-button bg-white border-none'
              >
                {CheckoutAddress === null ? <p>เพิ่มที่อยู่</p> : null}
              </label>

              <p className='font-bold text-[16px] my-auto '>จัดการที่อยู่</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid col-span-5 grid-cols-5 gap-8'>
        <div className='col-span-5 text-center  rounded-xl my-4 '>
          {CheckoutAddress === null ? (
            <div className=' border-2 rounded-xl mx-4 mt-4 py-2 '>
              <div className='text-[20px] font-bold py-4'>
                <p>ที่อยู่จัดส่งสินค้า</p>
              </div>
              <div className='py-4  '>
                <div className=''>
                  <label
                    htmlFor='my-modal-5'
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='border-2 rounded-xl mx-4 mt-4 '>
                <div className='bg-gray-200  rounded-t-xl py-4'>
                  <p className='font-bold text-[20px]'>ที่อยู่่จัดส่งสินค้า</p>
                </div>
                <div className='grid grid-cols-5  text-left px-6 py-8'>
                  <div className='font-bold'>
                    <p>ที่อยู่</p>
                    <p>แขวง</p>
                    <p>เขต</p>
                    <p>จังหวัด</p>
                    <p>รหัสไปรษณีย์</p>
                  </div>
                  <div className='col-span-4  text-left'>
                    <p className='break-words overflow-x-auto '>
                      {CheckoutAddress?.textaddress}
                    </p>
                    <p>{CheckoutAddress?.subDistrict}</p>
                    <p>{CheckoutAddress?.district}</p>
                    <p>{CheckoutAddress?.province}</p>
                    <p>{CheckoutAddress?.postcode}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default DynamicClientCheckoutmode;
