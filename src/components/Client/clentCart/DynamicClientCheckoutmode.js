import React from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';

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
                <div className='modal'>
                  <div className='modal-box w-4/5 '>
                    <h3 className='font-bold text-lg'>
                      <div className='flex'>
                        <img src={homeIcon} className='px-2' />
                        <div className='text-left'>
                          <p className='text-[20px]'>เพิ่มที่อยู่ใหม่</p>
                          <p className='text-[14px] text-gray-500 opacity-50'>
                            ที่อยู่จัดส่งสินค้า
                          </p>
                        </div>
                      </div>
                    </h3>
                    <div className='py-4'>
                      <form>
                        <div className='grid grid-cols-2 col gap-8'>
                          <div className=''>
                            <p className='text-left'>ชื่อ-นามสกุล</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอก ชื่อ-นามสกุล'
                            ></input>
                          </div>
                          <div>
                            <p className='text-left'>หมายเลขโทรศัพท์</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอก หมายเลขโทรศัพท์'
                            ></input>
                          </div>
                        </div>
                        <div>
                          <p className='text-left'>ที่อยู่</p>
                          <textarea
                            className='textarea textarea-primary w-full'
                            placeholder='กรอกที่อยู่'
                          ></textarea>
                        </div>
                        <div className='grid grid-cols-2 w-full gap-8'>
                          <div>
                            <p className='text-left'>จังหวัด</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอกจังหวัด'
                            ></input>
                          </div>
                          <div>
                            <p className='text-left'>เขต</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอกเขต'
                            ></input>
                          </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                          <div>
                            <p className='text-left'>ตำบล</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอกตำบล'
                            ></input>
                          </div>
                          <div>
                            <p className='text-left'>รหัสไปรษณี</p>
                            <input
                              className='border-2 w-full'
                              placeholder='กรอก รหัสไปรษณี'
                            ></input>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className='flex justify-end gap-8 px-4'>
                      <div className='modal-action'>
                        <label
                          for='my-modal-5'
                          className='btn bg-white border-none rounded-3xl mx-4 w-40'
                        >
                          ยกเลิก
                        </label>
                      </div>
                      <div className='modal-action'>
                        <label
                          for='my-modal-5'
                          className='btn bg-gradient-to-b border-none from-blue-400 to-blue-700 rounded-3xl w-40'
                        >
                          บันทึก
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicClientCheckoutmode;