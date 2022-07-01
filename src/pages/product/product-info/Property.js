import { useState } from 'react';
import IconProperty from '../../../components/Client/products/productInfo/icons/product-spec.svg';

function Property({ singLepd }) {
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
          <div className='grid-cols-3 grid px-4 py-4 '>
            {singLepd?.map((el) => (
              <>
                <div>{el.topic}</div>
                <div className='col-span-2'>{el.discription}</div>
              </>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Property;
