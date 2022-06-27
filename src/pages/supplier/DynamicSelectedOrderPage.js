import chair from '../../pictures/chair.png';
import keyboard from '../../pictures/keyboard.png';
import speaker from '../../pictures/speaker.png';
import { AiOutlineBorderlessTable } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { warning } from 'daisyui/src/colors';
function DynamicSelectedOrderPage() {
  const mockArr = [
    {
      mainPicture: speaker,
      quantity: 2,
      price: 1149.0,
      productName: 'ลำโพง Edifier R1855DB Computer Speaker',
    },
    {
      mainPicture: chair,
      quantity: 12,
      price: 3420.0,
      productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
    },
    {
      mainPicture: keyboard,
      quantity: 22,
      price: 8309.0,
      productName:
        'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
    },
  ];
  return (
    <div className=''>
      <div className='h-[185px]'>
        <div className='flex text-primary'>
          {<AiOutlineBorderlessTable size={35} />}
          <div>
            <h className='text-3xl pl-4 text-black '>หมายเลขคำสั่งซื้อ</h>
            <p className='text-2xl pl-4 text-gray-600'>200425EAN</p>
          </div>
        </div>
        <br />
        <div className='flex '>
          <div className='flex text-warning'>
            {<HiOutlineLocationMarker size={35} />}
          </div>
          <div>
            <h className='text-3xl pl-4 text-black '>ที่อยู่ในการจัดส่ง</h>
            <p className='text-2xl pl-4 text-gray-600'>
              24/14 หมู่ 3 ตำบลคลองสี่ อำเภอคลองหลวง จังหวัดปทุมธานี 12120
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className='overflow-x-auto'>
        <table className='table p-2'>
          <thead>
            <tr className=''>
              <th>ลำดับ</th>
              <th className='text-center'>รายการ</th>
              <th className='flex justify-center'>จำนวน</th>
              <th>ราคาต่อหน่วย</th>
              <th className='text-center'>จำนวนเงิน</th>
            </tr>
          </thead>
          <tbody>
            {mockArr.map((el, index) => {
              return (
                <>
                  <tr className='hover'>
                    <td className='text-center'>{index + 1}</td>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className=' w-12 h-12'>
                            <img
                              src={el.mainPicture}
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>{el.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center'>
                        <p className='text-ghost '>{el.quantity}</p>
                      </div>
                    </td>
                    <th>
                      <div className='flex justify-end'>
                        <p className=''>{el.price.toFixed(2)}</p>
                      </div>
                    </th>
                    <th>
                      <div className='flex justify-end'>
                        <p className='text-center justify-end'>
                          {(el.quantity * +el.price).toFixed(2)}
                        </p>
                      </div>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className=' flex flex-col items-end  h-[112px] text-ghost '>
          <div className='w-[216.95px] flex flex-col '>
            <div className='flex justify-between '>
              <p>ยอดรวมสุทธิ</p>
              <div className='flex  font-bold pr-4'>{`12000.00`}</div>
            </div>
            <div className='flex justify-between '>
              <p>ค่าขนส่ง</p>
              <div className='flex  font-bold pr-4'>{`100.00`}</div>
            </div>
            <div className='flex justify-between '>
              <p>รวม</p>
              <div className='flex font-bold pr-4 text-secondary'>{`12100.00`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DynamicSelectedOrderPage;
