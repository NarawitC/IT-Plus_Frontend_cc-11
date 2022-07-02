import { useEffect, useState } from 'react';
import SmPillButton from '../../components/commonUtils/SmPillButton';
import { useProductfilter } from '../../contexts/ProductContext';
import DynamicOrdercard from './MyorderCard/DynamicOrdercard';

function SaleOrderPage() {
  const [orders, SetOrders] = useState([]);
  const { cilentgetAllOrders } = useProductfilter();
  useEffect(() => {
    const fetchOders = async () => {
      const orderlists = await cilentgetAllOrders();
      SetOrders(orderlists.orders);
      console.log(orderlists);
    };
    fetchOders();
  }, []);
  return (
    <>
      <div className='flex w-full justify-center   '>
        <div className='flex flex-col w-2/3 justify-center'>
          <div className=' mb-2  rounded-xl  mt-4   border-2'>
            <h3 className=' p-2 sm:p-4 text-lg rounded-t-xl font-medium bg-[#FAFAFA] mb-2 leading-6 text-gray-900'>
              รายการคำสั่งซื้อ
            </h3>
            <div className=' w-full flex flex-row bg-white'>
              <SmPillButton text='ทั้งหมด' />
              <SmPillButton text='ตะกร้าทั้งหมด' />
              <SmPillButton text='ชำระแล้ว' />
              <SmPillButton text='เสร็จสิ้น' />
            </div>
          </div>
          {orders?.map((el, idx) => {
            return <DynamicOrdercard key={idx} el={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SaleOrderPage;
