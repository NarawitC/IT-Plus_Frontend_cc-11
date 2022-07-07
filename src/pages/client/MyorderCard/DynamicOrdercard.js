import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../../components/commonUtils/SmPillButton';
import { useProductfilter } from '../../../contexts/ProductContext';
import { localsting } from '../../../services/LocalstringComma';

function DynamicOrdercard({ el }) {
  const { setDBorders } = useProductfilter();
  useEffect(() => {
    // console.log(el);
    const sum = sumAmount();
    setSumAm(sum);
  });
  const [sumAm, setSumAm] = useState(0);
  const sumAmount = () => {
    return el.OrderItems.map((eloi) => eloi.quantity).reduce(
      (elp, eln) => +elp + +eln,
      0
    );
  };
  const navigate = useNavigate();

  const handelCotinueCheckout = async () => {
    // console.log(el);
    await setDBorders([el]);
    navigate('/cart/checkout');
    // setQr(null);
    // console.log(el.id);
    // F(el.id);
  };
  const handelConfirmAccept = async () => {
    // console.log(el);
    await setDBorders([el]);
    navigate('/cart/checkout');
    // setQr(null);
    // console.log(el.id);
    // F(el.id);
  };
  const handelConfirmReject = async () => {
    // console.log(el);
    await setDBorders([el]);
    navigate('/cart/checkout');
    // setQr(null);
    // console.log(el.id);
    // F(el.id);
  };
  return (
    <>
      <div className='flex justify-around w-full hover:text-blue-600/80 hover:bg-transparent lg:text-lg   hover:border-gray border bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-4 	focus:ring-blue rounded text-gray-700  py-1 sm:py-6  text-sm'>
        <div className=' cursor-default flex flex-col justify-strat text-left'>
          <strong className='block '>{`เลขที่คำสั่งซื้อ: 0x10${el.id}`}</strong>
          {/* <strong className="block">{`หมายเลขสลาก: ${}`}</strong> */}
          <strong className='block'>{`จำนวน: ${sumAm}`}</strong>
          <div></div>
          <span className='block'>{`สถานะ : ${
            // if(el.PurchasedOrder?.ShippingOrder.status === 'TO_SHIPPING_COMPANY')return{}
            el.PurchasedOrder && !el.PurchasedOrder.ShippingOrder
              ? 'ชำระแล้ว'
              : el.PurchasedOrder?.ShippingOrder.status ===
                'TO_SHIPPING_COMPANY'
              ? 'รอการจัดส่ง'
              : el?.PurchasedOrder?.ShippingOrder?.status === 'TO_CLIENT'
              ? 'จัดส่งแล้ว'
              : el?.PurchasedOrder?.ShippingOrder?.status === 'DELIVERED'
              ? 'เสร็จสิ้น'
              : 'รอการชำระ'
          }`}</span>

          {el?.PurchasedOrder?.ShippingOrder?.trackingId ? (
            <spam
              className='cursor-pointer hover:bg-slate-800/20 hover:text-primary rounded-lg duration-200 hover:ease-in-out'
              onClick={() => {
                window.open(
                  'https://emsbot.com/#/?s=' +
                    el?.PurchasedOrder?.ShippingOrder?.trackingId
                );
              }}
            >
              Tracking Id: {el?.PurchasedOrder?.ShippingOrder?.trackingId}
            </spam>
          ) : null}
        </div>
        <div className='flex flex-col justify-between'>
          <span className='block cursor-default'>{`รวมคำสั่งซื้อ: ${localsting(
            el.productPrice
          )} บาท`}</span>
          <div className='  duration-300'>
            {el.PurchasedOrder === null ? (
              <>
                <SmPillButton
                  text='ดำเนินการต่อ'
                  className={
                    'border-spacing-5 gradeient1 hover:-translate-y-1 mx-5 hover:scale-120 duration-300 transition text-white'
                  }
                  onClick={handelCotinueCheckout}
                />
              </>
            ) : null}
            {el?.PurchasedOrder?.ShippingOrder?.status === 'TO_CLIENT' ? (
              <div className='flex flex-row'>
                <SmPillButton
                  text='รับสินค้า'
                  className={'border-spacing-5 gradeient1  text-white'}
                  onClick={handelCotinueCheckout}
                />
                <SmPillButton
                  text='ขอคืนสินค้า'
                  className={
                    'border-spacing-5 bg-gray-600   hover:bg-gradient-to-r from-red-500 to-red-700 duration-300   text-white'
                  }
                  onClick={handelCotinueCheckout}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicOrdercard;
