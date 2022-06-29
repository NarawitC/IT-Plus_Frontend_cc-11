import chair from '../../pictures/chair.png';
import keyboard from '../../pictures/keyboard.png';
import speaker from '../../pictures/speaker.png';
import { MdOutlineEditNote } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
function DynamicProductPage() {
  // const colorArr = [
  //   { PRODUCT_STATUS: 'PENDING', color: 'waring' },
  //   { PRODUCT_STATUS: 'APPROVED', color: 'success' },
  //   { PRODUCT_STATUS: 'REJECTED', color: 'error' },
  //   { PRODUCT_STATUS: 'HIDDEN', color: 'base-content' },
  // ];

  const findColor = (text) => {
    if (text === 'PENDING') {
      return 'warning';
    }
    if (text === 'APPROVED') {
      return 'success';
    }
    if (text === 'REJECTED') {
      return 'error';
    }
    if (text === 'HIDDEN') {
      return 'base-content';
    }
  };
  const mockArr = [
    {
      mainPicture: speaker,
      stock: 2,
      price: 1149.0,
      productName: 'ลำโพง Edifier R1855DB Computer Speaker',
      status: 'PENDING',
      rejectReason: null,
      id: 101,
    },
    {
      mainPicture: chair,
      stock: 12,
      price: 3420.0,
      productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
      status: 'APPROVED',
      rejectReason: null,
      id: 202,
    },
    {
      mainPicture: keyboard,
      stock: 22,
      price: 8309.0,
      productName:
        'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
      status: 'REJECTED',
      rejectReason: 'สินค้าผิดกฎหมาย',
      id: 303,
    },
  ];
  return (
    <div className='flex flex-col mb-[160px] h-auto'>
      <div className='h-[185px]'>
        <div className='flex items-center m-4'>
          {<FiShoppingBag size={45} />}
          <h className='text-4xl pl-4 '>สินค้าทั้งหมด</h>
        </div>
        <br />
        <div className='w-[740px] flex p-2'>
          <div className='flex gap-4'>
            <div className='w-[360px]  h-[53px] flex items-center justify-center text-lg gap-4 '>
              <label for='searches' className=''>
                ค้นหาโดย:
              </label>
              <select
                name='searches'
                id='searches'
                className=' text-bold text-primary-focus border-2 h-[53px] w-[230px] rounded-lg '
              >
                <option value='productName'>ชื่อสินค้า</option>
                <option value='status'>สถานะสินค้า</option>
                <option value='id'>รหัสสินค้า</option>
                <option value='brand'>ยี่ห้อ</option>
                <option value='deliveryStatus'>สถานะการจัดส่ง</option>
              </select>
            </div>
            <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
              <input
                type='text'
                placeholder='ค้นหาสินค้า'
                className='input w-[395px] text-lg '
              />
            </div>
            <div className='btn btn-secondary w-[110px] h-[53px] text-lg'>
              ค้นหา
            </div>
            <button className='rounded-lg hover:bg-base-300 bg-base-200 w-[110px] h-[53px] text-lg text-black'>
              รีเซ็ต
            </button>
          </div>
        </div>
      </div>
      <div className='flex m-4  object-contain h-auto overflow-x-auto '>
        <table className='table'>
          <thead className=''>
            <tr className=''>
              <th>ลำดับ</th>
              <th>รหัสสินค้า</th>
              <th></th>
              <th className='text-center'>รายการ</th>
              <th className='flex justify-center'>stock</th>
              <th>ราคาต่อหน่วย</th>
              <th className='text-center'>สถานะ</th>
              <th className='text-center'>หมายเหตุ</th>
              <th className=''></th>
            </tr>
          </thead>
          <tbody className=''>
            {mockArr.map((el, index) => {
              let color = findColor(el.status);
              return (
                <>
                  <tr className='hover'>
                    <td className='text-center'>{index + 1}</td>
                    <td className='text-center '>{el.id}</td>
                    <td>
                      <div className='flex items-center space-x-3 justify-center'>
                        <img
                          className='object-contain h-16 w-[60px] '
                          src={el.mainPicture}
                          alt='mainPic'
                        />
                      </div>
                    </td>
                    <td>
                      <div className='font-bold w-[380px] flex overflow-x-auto h-12 items-center'>
                        {el.productName}
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center'>
                        <p className='text-ghost '>{el.stock}</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-end'>
                        <p className=''>{el.price.toFixed(2)}</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center'>
                        <p className={`text-center justify-end text-${color}`}>
                          {el.status}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p className=' text-xs w-[90px] flex overflow-x-auto justify-center'>
                        {el.rejectReason || '-'}
                      </p>
                    </td>
                    <td>
                      <div className='flex gap-2 items-center hover:scale-105  '>
                        <MdOutlineEditNote size={25} />
                        <p>แก้ไขสินค้า</p>
                      </div>
                    </td>
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

export default DynamicProductPage;
