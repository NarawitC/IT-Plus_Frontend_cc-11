import React from 'react';

function DynamicClientProductCard({ el }) {
  // console.log(el);
  const { price, discout, productName, imageSrc, imageAlt, id, href } = el;
  return (
    <div
      key={id}
      className='group relative border-2 border-neutral-600 px-4 py-4 rounded-sm shadow-md'
    >
      <div className='w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='w-full  object-center   lg:w-full  '
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a href={href}>
              <span aria-hidden='true' className='absolute inset-0' />
              {productName}
            </a>
          </h3>
          <div>
            {discout ? (
              <div className='text-sm font-medium  py-2'>
                <p className='text-emerald-700 text-[20px] text-right'>
                  THB {(price - discout).toLocaleString('en-US')}
                </p>
                <div className='flex pt-3'>
                  {discout ? (
                    <p className='text-xs flex-1 text-red-600 opacity-50'>
                      Discount {discout} THB
                    </p>
                  ) : (
                    ''
                  )}
                  <p className='text-slate-800 line-through text-[10px] opacity-[0.5] text-right flex-1'>
                    THB {price.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            ) : (
              <div className='text-sm font-medium  py-2'>
                <p className='text-emerald-700 text-[20px] text-right'>
                  THB {price.toLocaleString('en-US')}
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
