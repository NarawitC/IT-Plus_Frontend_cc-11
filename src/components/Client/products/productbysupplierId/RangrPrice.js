import { useState } from 'react';
import { useProductfilter } from '../../../../contexts/ProductContext';

function RangrPrice() {
  const { setProductfilterstr, setPriceRange, priceRange } = useProductfilter();
  return (
    <div className='space-y-3 mt-8'>
      <div className='flex gap-4 '>
        <input
          type='radio'
          name='range'
          value={[0, 3000]}
          className='checkbox checkbox-primary '
          onChange={(e) => {
            setPriceRange([e.target.value]);
          }}
        />
        <label>THB 0 - 3,000</label>
      </div>
      <div className='flex gap-4'>
        <input
          type='radio'
          name='range'
          value={[3000, 5000]}
          className='checkbox checkbox-primary '
          onChange={(e) => {
            setPriceRange([e.target.value]);
          }}
        />
        <label>THB 3,000 - 5,000</label>
      </div>
      <div className='flex gap-4'>
        <input
          type='radio'
          name='range'
          value={[5000, 10000]}
          className='checkbox checkbox-primary '
          onChange={(e) => {
            setPriceRange([e.target.value]);
          }}
        />
        <label>THB 5,000 - 10,000</label>
      </div>
      <div className='flex gap-4'>
        <input
          type='radio'
          name='range'
          value={[10000, 15000]}
          className='checkbox checkbox-primary '
          onChange={(e) => {
            setPriceRange([e.target.value]);
          }}
        />
        <label>THB 10,000 - 15,000</label>
      </div>

      <div className='flex gap-4'>
        <input
          type='radio'
          name='range'
          value={[15000, 1000000]}
          className='checkbox checkbox-primary '
          onChange={(e) => {
            setPriceRange([e.target.value]);
          }}
        />
        <label>THB 15,000 ขึ้นไป</label>
      </div>
    </div>
  );
}

export default RangrPrice;
