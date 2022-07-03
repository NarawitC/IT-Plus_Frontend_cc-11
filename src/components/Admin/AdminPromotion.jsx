import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
function AdminPromotion() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className='w-full flex justify-center items-center flex-col gap-4 mt-5'>
      <h1 className='font-bold'>Product ID</h1>
      <input
        type='text'
        placeholder='Place ID'
        className='input input-bordered input-lg w-full max-w-xs'
      />
      Enter Discount
      <input
        type='number'
        placeholder='Discount'
        className='input input-bordered input-warning w-full max-w-xs'
      />
      <div className='mx-auto'>
        <h1>Start Promotion Date</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className='mx-auto my-3 rounded-lg'
        />
        <h1>End Promotion Date</h1>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className='mx-auto my-3 rounded-lg '
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </div>
  );
}

export default AdminPromotion;
