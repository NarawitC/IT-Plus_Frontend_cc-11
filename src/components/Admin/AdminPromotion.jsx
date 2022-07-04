import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { createPromotion } from '../../apis/admin/promotionAdmin';
import { useNavigate } from 'react-router-dom';
function AdminPromotion() {
  const [inputs, setInputs] = useState({});
  const [productId, setProductId] = useState('');
  const navigate = useNavigate();
  const handleCreatePromotionButton = async () => {
    try {
      await createPromotion(productId, inputs);
      alert('Promotion created');
      navigate('/admin/order');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-full flex justify-center items-center flex-col gap-4 mt-5'>
      <h1 className='font-bold'>Product ID</h1>
      <input
        type='number'
        value={productId}
        placeholder='Product ID'
        className='input input-bordered input-lg w-full max-w-xs'
        onChange={(e) => setProductId(+e.target.value)}
      />
      Enter Discount
      <input
        type='number'
        placeholder='Discount'
        className='input input-bordered input-warning w-full max-w-xs'
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, discount: +e.target.value }))
        }
      />
      <div className='mx-auto'>
        <h1>Start Promotion Date</h1>
        <DatePicker
          selected={inputs?.startAt}
          minDate={new Date()}
          onChange={(e) => setInputs((prev) => ({ ...prev, startAt: e }))}
          className='mx-auto my-3 rounded-lg'
        />
        <h1>End Promotion Date</h1>
        <DatePicker
          selected={inputs?.endedAt}
          minDate={inputs?.startAt}
          onChange={(e) => setInputs((prev) => ({ ...prev, endedAt: e }))}
          className='mx-auto my-3 rounded-lg '
        />
      </div>
      <button className='btn btn-primary' onClick={handleCreatePromotionButton}>
        Create Promotion
      </button>
    </div>
  );
}

export default AdminPromotion;
