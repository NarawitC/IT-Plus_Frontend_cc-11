import prodd from '../../pictures/prodd.png';
import proddd from '../../pictures/proddd.png';
function OrderPage() {
  const mockArr = [
    {
      clientFirstName: 'Panit Su',
      orderId: '200425EAN',
      netPrice: 11209.0,
      purchasedOrderStatus: 'PENDING',
      trackingNumber: '-',
      shipmentOrderStatus: '-',
    },
    {
      clientFirstName: 'Pal X',
      orderId: '200325EAN',
      netPrice: 34209.0,
      purchasedOrderStatus: 'CONFIRMED',
      trackingNumber: 'SHP50104',
      shipmentOrderStatus: 'To Shipping Company',
    },
    {
      clientFirstName: 'Node JS',
      orderId: '200435EAN',
      netPrice: 88209.0,
      purchasedOrderStatus: 'CONFIRMED',
      trackingNumber: 'KER50933',
      shipmentOrderStatus: 'To Client',
    },
    {
      clientFirstName: 'Gun Meta',
      orderId: '200335EAN',
      netPrice: 92209.0,
      purchasedOrderStatus: 'CONFIRMED',
      trackingNumber: 'KER50433',
      shipmentOrderStatus: 'To Client',
    },
    {
      clientFirstName: 'J Next',
      orderId: '222435EAN',
      netPrice: 83229.0,
      purchasedOrderStatus: 'PENDING',
      trackingNumber: '-',
      shipmentOrderStatus: '-',
    },
  ];
  return (
    <div className=''>
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
                className=' text-bold text-primary border-2 h-[53px] w-[230px] rounded-lg '
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
      <br />
      <div className='overflow-x-auto'>
        <table className='table p-2'>
          <thead>
            <tr className=''>
              <th className=' '>ชื่อลูกค้า</th>
              <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
              <th>ยอดคำสั่งซื้อ</th>
              <th>สถานะการชำระเงิน</th>
              <th className='flex justify-center'>Tracking Number</th>
              <th className='text-center'>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {mockArr.map((el, idx) => {
              return (
                <>
                  <tr className='hover' key={idx}>
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
                      <p className='btn btn-ghost btn-lg'>
                        {el.trackingNumber}
                      </p>
                    </th>
                    <th className=''>
                      <p className='text-ghost  text-center'>
                        {el.shipmentOrderStatus}
                      </p>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderPage;
