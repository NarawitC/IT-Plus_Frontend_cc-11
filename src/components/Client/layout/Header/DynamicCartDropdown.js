import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductfilter } from '../../../../contexts/ProductContext';
import { localsting } from '../../../../services/LocalstringComma';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
function DynamicCartDropdown({ inputEmodal }) {
  const navigate = useNavigate();
  const { totalCart, tempCarts } = useProductfilter();
  const { user } = useAuthContext();
  // useEffect(() => {
  //   // console.log(tempCarts);
  // }, []);

  const handleCreateCart = () => {
    navigate('/cart');
  };
  return (
    <div>
      <div
        className='flex-none'
        onClick={(e) => {
          if (!user) {
            e.preventDefault();
            e.stopPropagation();
            inputEmodal.current.click();
          }
        }}
      >
        <div className='dropdown dropdown-end'>
          <label tabIndex='0' className='btn btn-ghost btn-circle'>
            <div className={`${'indicator'}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              {tempCarts?.length > 0 ? (
                <span className='badge badge-sm indicator-item'>
                  {tempCarts?.length}
                </span>
              ) : null}
            </div>
          </label>

          <div
            tabIndex='0'
            className='mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='font-bold text-lg border-b-2'>รายการของฉัน</span>
              {tempCarts?.length > 0 ? (
                <>
                  {tempCarts?.map((el, index) => {
                    // console.log(el);
                    return (
                      <div key={index} className=' flex flex-col my-auto '>
                        <div className='flex flex-row  border-b-2 w-full h-24 py-1'>
                          <img src={el?.mainPicture} className='w-1/3' />
                          <div className='flex-col flex-1 mx-2 gap-1'>
                            {el?.Promotions?.length > 0 ? (
                              <>
                                <span className='text-sm p-[2px] font-bold m-2 rounded-sm bg-red-600 text-white'>
                                  {el?.Promotions[0].discount}
                                </span>
                                <span className='font-bold'>
                                  {localsting(
                                    el?.price - el?.Promotions[0].discount
                                  )}
                                </span>

                                <p className=' mx-2 text-[10px] mt-[2px] text-gray-600/50 line-through'>
                                  {localsting(el?.price)}
                                </p>
                              </>
                            ) : (
                              <span className='ml-2 font-bold'>
                                {`${localsting(el?.price)}`} THB
                              </span>
                            )}

                            <p className=' mx-2 text-sm'>{el?.productName}</p>
                            <p className='mx-2 text-[10px] text-gray-800/60 '>
                              จำนวน: {el?.amount + ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className=' flex flex-col my-auto '>
                <div className='flex flex-row  border-b-2 w-full h-24 py-1'>
                <img src='' className='w-1/3' />
                <div className='flex-col flex-1 mx-2 gap-1'>
                <span className='text-sm p-[2px] font-bold m-2 rounded-sm bg-red-600 text-white'>
                10%
                </span>
                <span>30000</span>
                <p className=' mx-2 text-[10px] mt-[2px] text-gray-600/50'>
                ifDshowoldprice
                </p>
                <p className=' mx-2 text-sm'>Hoalalalal</p>
                <p className='mx-2 text-[10px] '>amount: 1</p>
                </div>
                </div>
                </div>
                <div className=' flex flex-col my-auto '>
                <div className='flex flex-row  border-b-2 w-full h-24 py-1'>
                <img src='' className='w-1/3' />
                <div className='flex-col flex-1 mx-2 gap-1'>
                <span>30000</span>
                <p className=' mx-2 text-[10px] mt-[2px] text-gray-600/50'>
                ifDshowoldprice
                </p>
                <p className=' mx-2 text-sm'>Hoalalalal</p>
                <p className='mx-2 text-[10px] '>amount: 1</p>
                </div>
                </div>
              </div> */}

                  {/*  */}
                  <div className='bg-stone-500/10 w-full h-12 border-y-2 mb-2 px-2 flex justify-between items-center '>
                    <span className=' text-sm '>ยอดรวม </span>
                    <span className=' text-base text-primary font-bold '>
                      {' '}
                      {totalCart ? localsting(totalCart) : ''}บาท{' '}
                    </span>
                  </div>
                  <div className='card-actions'>
                    <button
                      className='btn btn-primary btn-block'
                      onClick={() => {
                        handleCreateCart();
                      }}
                    >
                      create cart
                    </button>
                  </div>
                </>
              ) : (
                <BsPlusSquareDotted
                  size={80}
                  color={'gray'}
                  className='mx-auto text-center my-20'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCartDropdown;
