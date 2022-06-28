import { TbTruckDelivery } from 'react-icons/tb';
import { GiEmptyMetalBucket } from 'react-icons/gi';
import { useState } from 'react';
import { ShippingOrderStatusContext } from '../../contexts/ShippingOrderStatusContext';
import { useContext } from 'react';
const mockArr = [
  {
    clientFirstName: 'Panit Su',
    orderId: '200425EAN',
    netPrice: 11209.0,
    purchasedOrderStatus: 'PENDING',

    trackingId: '',
    shippingOrderStatus: '',
  },
  {
    clientFirstName: 'Pal X',
    orderId: '200325EAN',
    netPrice: 34209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: '',
    shippingOrderStatus: '',
  },
  {
    clientFirstName: 'Node JS',
    orderId: '200435EAN',
    netPrice: 88209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: '',
    shippingOrderStatus: '',
  },
  {
    clientFirstName: 'Gun Meta',
    orderId: '200335EAN',
    netPrice: 92209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: '',
    shippingOrderStatus: '',
  },
  {
    clientFirstName: 'J Next',
    orderId: '222435EAN',
    netPrice: 83229.0,
    purchasedOrderStatus: 'PENDING',
    trackingId: '',
    shippingOrderStatus: '',
  },
];
function OrderPage() {
  const { trackingId, setTrackingId } = useContext(ShippingOrderStatusContext);
  const [shippingDetails, setShippingDetails] = useState(mockArr);
  console.log(shippingDetails);
  return (
    <div className=''>
      <br />
      <div className=' grid grid-cols-2 gap-10'>
        <div className='stat flex justify-between items-center border-2 rounded-3xl hover:border-primary '>
          <div className=''>
            <div className='stat-title'>ที่ต้องชำระ</div>
            <div className='stat-value text-primary'>4</div>
          </div>
          <div className=' text-primary '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
          </div>
        </div>
        <div className='stat  border-2 rounded-3xl hover:border-secondary'>
          <div className='stat-figure text-secondary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          </div>
          <div className='stat-title'>ที่ต้องจัดส่ง</div>
          <div className='stat-value text-secondary'>12</div>
        </div>

        <div className='stat border-2 rounded-3xl hover:border-warning'>
          <div className='stat-figure text-secondary '>
            <div className='stat-figure text-warning   '>
              {<TbTruckDelivery size={45} />}
            </div>
          </div>
          <div className='stat-title'>กำลังจัดส่ง</div>
          <div className='stat-value'>15</div>
        </div>
        <div className='stat border-2 rounded-3xl hover:border-info'>
          <div className='stat-figure text-info'>
            {<GiEmptyMetalBucket size={45} />}
          </div>
          <div className='stat-title'>สินค้าหมด</div>
          <div className='stat-value'>4</div>
        </div>
      </div>
      <br />
      <br />
      <>
        <div className='h-[185px]'>
          <div>
            <h className='text-4xl pl-4 '>คำสั่งซื้อทั้งหมด</h>
          </div>
          <br />
          <div className='w-[740px] flex p-2'>
            <div className='flex'>
              <div className='w-[360px]  h-[53px] flex items-center justify-center text-lg gap-4 '>
                <label for='searches' className=''>
                  ค้นหาโดย:
                </label>
                <select
                  name='searches'
                  id='searches'
                  className=' text-bold text-primary-focus border-2 h-[53px] w-[230px] rounded-lg '
                >
                  <option value='orderId'>หมายเลขคำสั่งซื้อ</option>
                  <option value='userId'>ชื่อลูกค้า</option>
                  <option value='product'>ชื่อสินค้า</option>
                  <option value='deliveryStatus'>สถานะการจัดส่ง</option>
                </select>
              </div>
              <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
                <input
                  type='text'
                  placeholder='ค้นหา...'
                  className='input w-[395px] text-lg '
                />
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='table p-2'>
            <thead>
              <tr className=''>
                <th className=' '>ลำดับ</th>
                <th className=' '>ชื่อลูกค้า</th>
                <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
                <th>ยอดคำสั่งซื้อ</th>
                <th>สถานะการชำระเงิน</th>
                <th className='flex justify-center'>Tracking Id</th>
                <th className='text-center'>Shipping Order Status</th>
              </tr>
            </thead>
            <tbody>
              {shippingDetails.map((el, idx) => {
                return (
                  <>
                    <tr className='hover' key={idx}>
                      <td className='text-center'>{idx + 1}</td>
                      <td>
                        <div class='flex items-center space-x-3'>
                          <div>
                            <div class='font-bold'>{el.clientFirstName}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='flex space-x-3'>
                          <button className='btn btn-ghost btn-md'>
                            {el.orderId}
                          </button>
                        </div>
                      </td>
                      <th>
                        <p className=''>{el.netPrice.toFixed(2)}</p>
                      </th>
                      <th>
                        <label class='swap'>
                          <input type='checkbox' />
                          {el.purchasedOrderStatus === 'CONFIRMED' ? (
                            <>
                              <div className='swap-off text-success  text-center'>
                                {el.purchasedOrderStatus}
                              </div>
                              <div className='swap-on text-warning text-center'>
                                PENDING
                              </div>
                            </>
                          ) : (
                            <>
                              <div className='swap-off text-warning text-center'>
                                {el.purchasedOrderStatus}
                              </div>
                              <div className='swap-on text-success text-center'>
                                CONFIRMED
                              </div>
                            </>
                          )}
                        </label>
                      </th>
                      <th className='flex justify-center'>
                        <input
                          className='text-ghost text-center w-[170px] h-14 rounded-lg border-2 hover:border-primary'
                          placeholder={'Tracking ID'}
                          onChange={(event) =>
                            setShippingDetails((prevShippingDetail) => [
                              ...prevShippingDetail.slice(0, idx),
                              {
                                ...prevShippingDetail[idx],
                                trackingId: event.target.value,
                              },
                              ...prevShippingDetail.slice(idx + 1),
                            ])
                          }
                          value={el.trackingId}
                        />
                      </th>
                      <th className=''>
                        {el.purchasedOrderStatus === 'CONFIRMED' ? (
                          <select
                            className='p-2  h-14 rounded-lg border-2 hover:border-warning text-ghost text-center '
                            onChange={(event) =>
                              //
                              setShippingDetails((prevShippingDetail) => [
                                ...prevShippingDetail.slice(0, idx),
                                {
                                  ...prevShippingDetail[idx],
                                  shippingOrderStatus:
                                    event.target.value.trim(),
                                },
                                ...prevShippingDetail.slice(idx + 1),
                              ])
                            }
                            value={el.shippingOrderStatus}
                            type='text'
                            placeholder='สถานะการจัดส่ง'
                          >
                            <option value='TO_SHIPPING_COMPANY'>
                              กำลังดำเนินการ
                            </option>
                            <option value='TO_CLIENT'>กำลังจัดส่ง</option>
                            <option value='COMPLETED'>ส่งเสร็จสิ้น</option>
                          </select>
                        ) : (
                          <></>
                        )}
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default OrderPage;
