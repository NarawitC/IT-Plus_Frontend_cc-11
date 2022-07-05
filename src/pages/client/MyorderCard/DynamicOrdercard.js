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
    console.log(el);
    setDBorders([el]);
    navigate('/cart/checkout');
    // setQr(null);
    // console.log(el.id);
    // F(el.id);
  };
  return (
    <>
      <div className='flex justify-around w-full hover:text-orange-600 hover:bg-transparent lg:text-lg   hover:border-gray border bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-4 	focus:ring-blue rounded text-gray-700  py-1 sm:py-6  text-sm'>
        <div className=' cursor-default flex flex-col justify-strat text-left'>
          <strong className='block '>{`เลขที่คำสั่งซื้อ: 0x10${el.id}`}</strong>
          {/* <strong className="block">{`หมายเลขสลาก: ${}`}</strong> */}
          <strong className='block'>{`จำนวน: ${sumAm}`}</strong>
          <div></div>
          <span className='block'>{`สถานะ : ${
            el.PurchasedOrder ? 'ชำระแล้ว' : 'รอการชำระ'
          }`}</span>
        </div>
        <div className='flex flex-col justify-between'>
          <span className='block cursor-default'>{`รวมคำสั่งซื้อ: ${localsting(
            el.productPrice
          )} บาท`}</span>
          <div className='hover:-translate-y-1 hover:scale-120  duration-300'>
            {el.PurchasedOrder === null ? (
              <>
                <SmPillButton
                  text='ดำเนินการต่อ'
                  className={'border-spacing-5 gradeient1 text-white'}
                  onClick={handelCotinueCheckout}
                />
                {/* <span className='block cursor-default'>
                  {`ระยะเวลา : ${''}
                `}
                </span> */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicOrdercard;
