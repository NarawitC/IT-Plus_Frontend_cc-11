import chair from '../../pictures/chair.png';
import keyboard from '../../pictures/keyboard.png';
import speaker from '../../pictures/speaker.png';
import { AiOutlineBorderlessTable } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { TiFlashOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import line from '../../pictures/line.png';
import StatusButton from '../../components/supplier/statusbutton/StatusButton';
import { OrderContext } from '../../contexts/Supplier/OrderContext';
import { useContext, useEffect, useState } from 'react';
import { getAllOrdersBySupplierId } from '../../apis/supplier/supplierOrder';
import { useParams } from 'react-router-dom';
import defaultPic from '../../pictures/defaultPic.png';
import { AdminContext } from '../../contexts/Admin/AdminContext';
import axios from '../../config/axios';
function DynamicSelectedOrderPage() {
  const { orders, setOrders } = useContext(OrderContext);
  // console.log(orders);
  const { admin } = useContext(AdminContext);

  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const [selectedOrderObj, setSelectedOrderObj] = useState({
    OrderItems: [],
    deliveryAddress: '',
    clientId: 0,
    id: 0,
    productPrice: 0,
    deliveryPrice: 0,
  });
  // const mockArr = [
  //   {
  //     mainPicture: speaker,
  //     quantity: 2,
  //     price: 1149.0,
  //     productName: 'ลำโพง Edifier R1855DB Computer Speaker',
  //     id: 1,
  //     brand: 'Edifier',
  //   },
  //   {
  //     mainPicture: chair,
  //     quantity: 12,
  //     price: 3420.0,
  //     productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
  //     id: 2,
  //     brand: 'Bewell',
  //   },
  //   {
  //     mainPicture: keyboard,
  //     quantity: 22,
  //     price: 8309.0,
  //     productName:
  //       'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
  //     id: 3,
  //     brand: 'Keychron',
  //   },
  // ];

  useEffect(() => {
    const handleGetSelectedOrder = async () => {
      try {
        if (admin) {
          const res = await axios.get(`/admin/order/${+params.orderId}`);
          console.log(res.data);
          setSelectedOrderObj(res.data.order);
        } else {
          const res = await getAllOrdersBySupplierId();
          // console.log(res.data);
          setOrders(res.data.orders);
          const selectedOrder = res.data.orders.find(
            (el) => +el.id === +params.orderId
          );
          if (selectedOrder) {
            setSelectedOrderObj(selectedOrder);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleGetSelectedOrder();
  }, [setOrders, params.orderId]);

  let sum = 0;
  selectedOrderObj?.OrderItems.forEach((el) => {
    sum = sum + +el.Product.price * +el.quantity;
    // console.log(sum);
  });
  const netPrice = sum.toFixed(2);
  console.log('selectedOrderObj');
  console.log(selectedOrderObj);

  return (
    <>
      <div className={`${admin ? 'px-10' : ''}  `} data-theme='light'>
        <br />
        <br />
        <div className='flex h-auto'>
          <div className=''>
            <div className='flex text-primary'>
              {<AiOutlineBorderlessTable size={35} />}
              <div>
                <h className='text-3xl pl-4 text-black '>หมายเลขคำสั่งซื้อ</h>
                <p className='text-2xl pl-4 text-gray-600'>
                  {+selectedOrderObj?.id || 0}
                </p>
              </div>
            </div>
            <br />
            <div className='flex '>
              <div className='flex text-secondary'>
                {<HiOutlineLocationMarker size={35} />}
              </div>
              <div>
                <h className='text-3xl pl-4 text-black '>ที่อยู่ในการจัดส่ง</h>
                <p className='text-2xl pl-4 text-gray-600 w-[680px] '>
                  {selectedOrderObj?.deliveryAddress || ''}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex'>
              <div
                className='flex text-warning
            '
              >
                {<TiFlashOutline size={35} />}
              </div>
              <div className=' flex flex-col'>
                <h className='text-3xl pl-4 text-black '>Tracking ID</h>
                <p className='text-2xl pl-4 text-gray-600'>
                  {selectedOrderObj?.PurchasedOrder?.ShippingOrder?.trackingId}
                </p>
              </div>
            </div>
            <br />
            <div className='flex '>
              <div
                className='flex
            '
              >
                {<HiOutlineStatusOnline size={35} />}
              </div>
              <div className='flex flex-col'>
                <h className='text-3xl pl-4 text-black '>สถานะการจัดส่ง</h>
                <p className='text-2xl pl-4 text-gray-600'>
                  {selectedOrderObj?.PurchasedOrder?.ShippingOrder?.status ||
                    '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <div className='text-[23px] flex flex-col items-center'>
            <div className='flex gap-3'>
              <h1 className='text-gray-600'>สถานะการจัดส่งสินค้า : </h1>
              <h1 className='text-yellow-500'>
                {selectedOrderObj?.PurchasedOrder?.ShippingOrder?.status || '-'}
              </h1>
            </div>
          </div>
          <br />
          <div className='flex justify-center h-auto  items-center '>
            <button className='' type='button'>
              <StatusButton
                status={
                  selectedOrderObj?.PurchasedOrder?.ShippingOrder?.status || '-'
                }
                option={'TO_SHIPPING_COMPANY'}
              />
            </button>
            <div className='pb-10'>
              <img src={line} alt='line' className='w-[180px] h-[70px] ' />
            </div>
            <button className='' type='button'>
              <StatusButton
                status={
                  selectedOrderObj?.PurchasedOrder?.ShippingOrder?.status || '-'
                }
                option={'TO_CLIENT'}
              />
            </button>
            <div className='pb-10'>
              <img src={line} alt='line' className='w-[180px] h-[70px]  ' />
            </div>
            <button className='' type='button'>
              <StatusButton
                status={
                  selectedOrderObj?.PurchasedOrder?.ShippingOrder?.status ||
                  'TO_SHIPPING_COMPANY'
                }
                option={'DELIVERED'}
              />
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className='overflow-x-auto flex justify-end flex-col'>
          <table className='table '>
            <thead>
              <tr className=''>
                <th>ลำดับ</th>
                <th></th>
                <th className='text-center'>รายการ</th>
                <th className='flex justify-center'>จำนวน</th>
                <th>ราคาต่อหน่วย</th>
                <th className='text-center'>จำนวนเงิน</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrderObj?.OrderItems.map((el, index) => {
                return (
                  <>
                    <tr
                      className='hover cursor-pointer border-b-2'
                      onClick={() => {
                        navigate(`/supplier/product/${el.Product?.id}`);
                      }}
                    >
                      <td className='text-center'>{index + 1}</td>
                      <td className=''>
                        <div className='flex items-center justify-center  '>
                          <img
                            className='object-contain h-16  '
                            src={el?.Product?.mainPicture || defaultPic}
                            alt='mainPic'
                          />
                        </div>
                      </td>
                      <td className=''>
                        <div className='font-bold  text-lg text-blue-900 '>
                          {el?.Product?.brand || ''}
                        </div>
                        <div className='font-bold overflow-x-auto w-[380px] h-12 '>
                          {el?.Product?.productName || ''}
                        </div>
                      </td>
                      <td>
                        <div className='flex justify-center'>
                          <p className='text-ghost font-bold '>
                            {+el?.quantity || 0}
                          </p>
                        </div>
                      </td>
                      <th>
                        <div className='flex justify-end'>
                          <p className=''>
                            {el?.Product?.price.toFixed(2) || 0}
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className='flex justify-end'>
                          <p className='text-center justify-end'>
                            {(+el?.quantity * +el?.Product?.price).toFixed(2) ||
                              (0.0).toFixed(2)}
                          </p>
                        </div>
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <br />
          <div className=' flex flex-col items-end  h-[112px] text-ghost'>
            <div className='w-[216.95px] flex flex-col  '>
              <div className='flex justify-between '>
                <p>ยอดรวมสุทธิ</p>
                <div className='flex  font-bold pr-4'>
                  {(+netPrice).toFixed(2) || 0}
                </div>
              </div>
              <div className='flex justify-between '>
                <p>ค่าขนส่ง</p>
                <div className='flex  font-bold pr-4'>
                  {selectedOrderObj?.deliveryPrice.toFixed(2) ||
                    (0.0).toFixed(2)}
                </div>
              </div>
              <div className='flex justify-between '>
                <p>รวม</p>
                <div className='flex font-bold pr-4 text-secondary '>
                  {(+selectedOrderObj?.deliveryPrice + +netPrice).toFixed(2) ||
                    0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DynamicSelectedOrderPage;
