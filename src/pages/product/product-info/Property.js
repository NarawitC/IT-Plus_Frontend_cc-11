import { useEffect, useState } from 'react';
import IconProperty from '../../../components/Client/products/productInfo/icons/product-spec.svg';
import { getProductById } from '../../../apis/client/product';

function Property({ productId, singlepd }) {
  return (
    <div
      className='w-2/3
    m-auto border-2 my-8  rounded-t-lg '
    >
      <div className='flex  bg-gray-300  h-10 px-6 rounded-lg gap-4 '>
        <div className='my-auto '>
          <img src={IconProperty} />
        </div>
        <div className='text-[20px] my-auto font-bold'>คุณสมบัติสินค้า</div>
      </div>
      <div className='px-8 '>
        <div>
          <div>
            {singlepd?.Properties.map((el, idx) => (
              <div key={idx} className='grid-cols-3 grid px-4 py-2'>
                <div>{el.topic}</div>
                <div className='col-span-2 font-bold'>{el.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
