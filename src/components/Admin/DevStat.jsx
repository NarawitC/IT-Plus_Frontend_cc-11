import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../config/axios';
import { localsting } from '../../services/LocalstringComma';

function DevStat() {
  const [AllOrder, setAllOrder] = useState();
  const [paidOrder, setpaidOrder] = useState(null);
  const [onDeleved, setonDeleved] = useState(null);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get('/admin/order');
        const orderList = res.data.orders;

        // console.log(res.data);
        // if (+orderId) {
        //   const order = orderList.find((el) => el.id === +orderId);
        //   if (order) {
        //     setAllOrder([order]);
        //   }
        const PaidorderValue = orderList
          .filter((el) => {
            if (el.PurchasedOrder && el.PurchasedOrder?.ShippingOrder?.status)
              return el;
          })
          .map((el) => el.productPrice);
        const Ondelivery = orderList
          .filter((el) => {
            if (
              el.PurchasedOrder &&
              el.PurchasedOrder?.ShippingOrder?.status === 'DELIVERED'
            )
              return el;
          })
          .map((el) => el.productPrice);
        // console.log(PaidorderValue);
        // } else {
        setonDeleved(Ondelivery);
        setpaidOrder(PaidorderValue);
        setAllOrder(orderList);
        // }
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchOrder();
  }, []);
  return (
    <div className='w-full flex justify-center items-center flex-col gap-6 '>
      <div className='stats shadow mt-6'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
          </div>
          <div className='stat-title'>Orders</div>
          <div className='stat-value'>{localsting(AllOrder?.length)}</div>
          <div className='stat-desc'>transactions</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              ></path>
            </svg>
          </div>
          <div className='stat-title'>Paid</div>
          <div className='stat-value'>
            {localsting(paidOrder?.reduce((a, b) => a + b, 0))}
          </div>
          <div className='stat-desc'>THB</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
              ></path>
            </svg>
          </div>
          <div className='stat-title'>On Delivered</div>
          <div className='stat-value'>
            {localsting(onDeleved?.reduce((a, b) => a + b, 0))}
          </div>
          <div className='stat-desc'>THB</div>
        </div>
      </div>
      {/* STEP */}
    </div>
  );
}

export default DevStat;
