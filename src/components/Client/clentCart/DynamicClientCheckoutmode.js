import React from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';
import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';
import { useOrderContext } from '../../../contexts/Client/orderContext';
import ModalAddress from './modalAddress';
import { motion } from 'framer-motion';

function DynamicClientCheckoutmode() {
  const { checkoutAddress, setCheckoutAddress } = useOrderContext();

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
              {checkoutAddress === null ? (
                <label
                  htmlFor='my-modal-5'
                  className='font-bold text-[16px] text-primary my-auto btn btn-primary modal-button bg-white border-none hover:text-white'
                >
                  {checkoutAddress === null ? <p>เพิ่มที่อยู่</p> : null}
                </label>
              ) : (
                <p
                  className='font-bold text-[16px] text-primary my-auto  btn btn-primary bg-white border-none hover:text-white'
                  onClick={(prev) => setCheckoutAddress(null)}
                >
                  ลบที่อยู่
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='grid  grid-cols-5 gap-8  '>
        <div className='col-span-5 text-center  rounded-xl my-2 '>
          {checkoutAddress === null ? (
            <div className=' border-2 rounded-xl mx-4  '>
              <div className='text-[20px] font-bold py-2'>
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
              <div className='border-2 rounded-xl mx-4  '>
                <div className='bg-gray-200  rounded-t-xl py-4'>
                  <p className='font-bold text-[20px]'>ที่อยู่่จัดส่งสินค้า</p>
                </div>
                <div className=' text-left px-6 py-8'>
                  <div className='col-span-4  text-left'>
                    <div>{checkoutAddress}</div>
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
