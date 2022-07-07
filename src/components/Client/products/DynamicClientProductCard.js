import React from 'react';
import { useNavigate } from 'react-router-dom';

function DynamicClientProductCard({ el }) {
  // console.log(el);
  const navigate = useNavigate();
  const {
    price,
    mainPicture,
    stock,
    Promotions,
    productName,

    id,
    href,
  } = el;
  return (
    <div
      key={id}
      className='group relative  border-2 border-neutral-600 px-4 py-4 rounded-sm shadow-md  hover:ring-1 ring-[#00CDF8]'
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className='w-full h-[200px] mt-4 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none '>
        <img
          src={mainPicture}
          alt={'imageAlt'}
          className='w-full lg:w-full  h-full object-contain'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div className=' w-full'>
          <h3 className='text-sm text-gray-700 '>
            <a href={href}>
              <span aria-hidden='true' className='absolute inset-0 ' />
              {productName}
            </a>
          </h3>
          <div>
            {Promotions?.length > 0 ? (
              <div className='text-sm font-medium  py-2  '>
                <p className='text-emerald-700 text-[20px] text-right'>
                  THB {(price - Promotions[0].discount).toLocaleString('en-US')}
                </p>
                <div className='flex pt-3'>
                  {Promotions?.length > 0 ? (
                    <p className='text-xs flex-1 text-red-600 opacity-50'>
                      Discount {Promotions[0].discount} THB
                    </p>
                  ) : (
                    <p className='text-xs flex-1 text-red-600 opacity-50'>
                      ------
                    </p>
                  )}
                  <p className='text-slate-800 line-through text-[10px] opacity-[0.5] text-right flex-1'>
                    ฿ {price.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            ) : (
              <div className='text-sm font-medium  py-2'>
                <p className='text-emerald-700 text-[20px] text-right'>
                  ฿ {price.toLocaleString('en-US')}
                </p>
              </div>
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicClientProductCard;
