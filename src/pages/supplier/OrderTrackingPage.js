import prodd from '../../pictures/prodd.png';
import proddd from '../../pictures/proddd.png';
function OrderTrackingPage() {
  return (
    <div>
      <div className='overflow-x-auto w-full border-2 rounded-xl'>
        <table className='table w-full'>
          <thead>
            <tr className=''>
              <th></th>
              <th>ชื่อลูกค้า</th>
              <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
              <th>ยอดคำสั่งซื้อ</th>
              <th>สถานะการชำระเงิน</th>
              <th className='flex justify-center'>Tracking Number</th>
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
                <div className='flex items-center space-x-3'>
                  <div className=''>
                    <button className='btn btn-ghost btn-lg'>
                      200425EANVA8FT
                    </button>
                  </div>
                </div>
              </td>
              <th>
                <p className=''>11209.00</p>
              </th>
              <th>
                <p className='text-warning'>PENDING</p>
              </th>
              <th className='flex justify-center'>
                <p className='btn btn-ghost btn-lg'>-</p>
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
                    <button className='btn btn-ghost btn-lg'>
                      200425EANVA8FT
                    </button>
                  </div>
                </div>
              </td>
              <th>
                <p className=''>33249.00</p>
              </th>
              <th>
                <p className='text-success'>CONFIRMED</p>
              </th>
              <th>
                <p className='btn btn-ghost btn-lg'>SHP5010487787</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTrackingPage;
