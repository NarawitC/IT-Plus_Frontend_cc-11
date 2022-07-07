import { useEffect, useState } from 'react';
import SmPillButton from '../../components/commonUtils/SmPillButton';
import { useProductfilter } from '../../contexts/ProductContext';
import DynamicOrdercard from './MyorderCard/DynamicOrdercard';

function SaleOrderPage() {
  const [orders, SetOrders] = useState([]);
  const { cilentgetAllOrders } = useProductfilter();
  const [CliOrderOpt, setCliOrderOpt] = useState(null);
  const functFilterOrders = {
    1: (el) => {
      if (!el.PurchasedOrder) return el;
    },
    2: (el) => {
      if (
        el?.PurchasedOrder &&
        el?.PurchasedOrder?.ShippingOrder?.status === 'TO_SHIPPING_COMPANY'
      )
        return el;
    },
    3: (el) => {
      if (
        el?.PurchasedOrder &&
        el?.PurchasedOrder?.ShippingOrder?.status === 'TO_CLIENT'
      )
        return el;
    },
    4: (el) => {
      if (
        el.PurchasedOrder &&
        el?.PurchasedOrder?.ShippingOrder?.status === 'DELIVERED'
      )
        return el;
    },
    5: 'COMPLETED',
  };

  useEffect(() => {
    const fetchOders = async () => {
      const orderlists = await cilentgetAllOrders();
      if (CliOrderOpt) {
        const arr = await orderlists.orders?.filter(
          functFilterOrders[CliOrderOpt]
        );
        // SetOrders(orderlists.orders);
        console.log(arr);
        SetOrders(arr);
      } else SetOrders(orderlists.orders);
    };
    fetchOders();
    console.log(orders);
  }, [CliOrderOpt]);
  return (
    <>
      <div className='flex w-full justify-center text-font-Kanit  '>
        <div className='flex flex-col w-2/3 justify-center'>
          <div className=' mb-2  rounded-xl  mt-4   border-2'>
            <h3 className=' p-2 sm:p-4 text-lg rounded-t-xl cursor-default font-medium bg-[#FAFAFA] mb-2 leading-6 text-gray-900'>
              รายการคำสั่งซื้อ
            </h3>
            <div className=' w-full flex flex-row bg-white'>
              <SmPillButton
                className={'hover:text-blue-500'}
                text='ทั้งหมด'
                onClick={() => {
                  setCliOrderOpt(null);
                }}
              />
              <SmPillButton
                text='อยู่ในตระกร้า'
                onClick={() => {
                  setCliOrderOpt(1);
                }}
              />
              <SmPillButton
                text='ชำระแล้ว'
                onClick={() => {
                  setCliOrderOpt(2);
                }}
              />
              <SmPillButton
                text='กำลังจัดส่ง'
                onClick={() => {
                  setCliOrderOpt(3);
                }}
              />
              <SmPillButton
                text='เสร็จสิ้น'
                onClick={() => {
                  setCliOrderOpt(4);
                }}
              />
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
