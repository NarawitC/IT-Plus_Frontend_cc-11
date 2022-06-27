import React, { useState } from 'react';
import CardItems from '../../../components/Client/layout/flashsale/CardItems';
import RangrPrice from '../../../components/Client/products/productbysupplierId/RangrPrice';
import BreadCrumbsSupplier from '../../../components/Client/products/productInfo/BreadCrumbsSupplier';
import CardItemsBySupplierId from './CardItemsBySupplierId';

function ProductByBrand() {
  return (
    <div>
      <BreadCrumbsSupplier />
      <div className='px-20'>
        <div className='border-2 h-40 pl-8 flex gap-4'>
          <div className='my-auto w-[90px] h-[90px] border-2 rounded-lg  gap-8 '>
            <div>รูปSupplier</div>
          </div>
          <div className='my-auto'>ชื่อSupplier</div>
        </div>
        <div className=' py-4 font-bold'>ดูสินค้าทั้งหมด</div>
        <div className='grid grid-cols-4 gap-8  py-8 border-y-2'>
          <div>
            <div className='font-bold'>ช่วงราคา</div>
          </div>
          <div className='col-span-3'>
            <div className='flex gap-4'>
              <p className='font-bold'>Bewell</p>
              <p className='text-[10px] my-auto'>(สินค้า 31 ชิ้น)</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 '>
          <RangrPrice />

          <div className='col-span-3  border-l-2'>
            <CardItemsBySupplierId />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductByBrand;
