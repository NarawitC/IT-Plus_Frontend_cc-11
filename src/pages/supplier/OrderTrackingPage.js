import prodd from '../../pictures/prodd.png';
import proddd from '../../pictures/proddd.png';
function OrderTrackingPage() {
  return (
    <div className=''>
      <div className='h-[185px]'>
        <div>
          <h className='text-4xl pl-4 '>การขายของฉัน</h>
        </div>
        <br />
        <div className='w-[740px] flex p-2'>
          <div className='flex '>
            <div className='w-[270px]  h-[53px] flex items-center justify-center text-lg'>
              <label for='searches' className=''>
                ค้นหาโดย:
              </label>
              <select
                name='searches'
                id='searches'
                className=' text-bold text-primary-focus border-2 h-[53px] rounded-lg p-2'
              >
                <option value='orderId'>หมายเลขคำสั่งซื้อ</option>
                <option value='userId'>ชื่อลูกค้า</option>
                <option value='product'>ชื่อสินค้า</option>
                <option value='trackingId'>Tracking Id</option>
              </select>
            </div>
            <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
              <input
                type='text'
                placeholder='ค้นหา...'
                className='input  w-[395px] text-lg '
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
              <th></th>
              <th className=' '>ชื่อลูกค้า</th>
              <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
              <th>ยอดคำสั่งซื้อ</th>
              <th>สถานะการชำระเงิน</th>
              <th className='flex justify-center'>Tracking Number</th>
              <th className='text-center'>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='hover'>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div class='flex items-center space-x-3'>
                  <div class='avatar'>
                    <div class='mask mask-squircle w-12 h-12'>
                      <img src={prodd} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div class='font-bold'>Panit Su</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex space-x-3'>
                  <button className='btn btn-ghost btn-md'>200425EAN</button>
                </div>
              </td>
              <th>
                <p className=''>11209.00</p>
              </th>
              <th>
                <label class='swap'>
                  <input type='checkbox' />
                  <div className='swap-on text-success '>CONFIRMED</div>
                  <div className='swap-off text-warning'>PENDING</div>
                </label>
              </th>
              <th className='flex justify-center'>
                <p className='btn btn-ghost btn-lg'>-</p>
              </th>
              <th className=''>
                <p className='text-ghost text-lg text-center'>-</p>
              </th>
            </tr>
            <tr className='hover'>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div class='flex items-center space-x-3'>
                  <div class='avatar'>
                    <div class='mask mask-squircle w-12 h-12'>
                      <img src={proddd} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div class='font-bold'>Pal Su</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className=''>
                    <button className='btn btn-ghost btn-md'>200425EAN</button>
                  </div>
                </div>
              </td>
              <th>
                <p className=''>33249.00</p>
              </th>
              <th>
                <label class='swap'>
                  <input type='checkbox' />
                  <div className='swap-on text-success  '>CONFIRMED</div>
                  <div className='swap-off text-warning '>PENDING</div>
                </label>
              </th>
              <th>
                <p className='btn btn-ghost btn-md'>SHP50104</p>
              </th>
              <th className='flex justify-center'>
                <p className='btn btn-ghost btn-md'>To Shipping Company</p>
              </th>
            </tr>
            <tr className='hover'>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div class='flex items-center space-x-3'>
                  <div class='avatar'>
                    <div class='mask mask-squircle w-12 h-12'>
                      <img src={proddd} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div class='font-bold'>Dom ui</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className=''>
                    <button className='btn btn-ghost btn-md'>200425EAN</button>
                  </div>
                </div>
              </td>
              <th>
                <p className=''>9249.00</p>
              </th>
              <th>
                <label class='swap'>
                  <input type='checkbox' />
                  <div className='swap-on text-success '>CONFIRMED</div>
                  <div className='swap-off text-warning'>PENDING</div>
                </label>
              </th>
              <th>
                <p className='btn btn-ghost btn-md'>KER50104</p>
              </th>
              <th className='flex justify-center'>
                <p className='btn btn-ghost text-md'>To Client</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTrackingPage;
