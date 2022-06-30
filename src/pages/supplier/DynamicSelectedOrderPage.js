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
function DynamicSelectedOrderPage() {
  const navigate = useNavigate();
  const mockArr = [
    {
      mainPicture: speaker,
      quantity: 2,
      price: 1149.0,
      productName: 'ลำโพง Edifier R1855DB Computer Speaker',
      id: 1,
    },
    {
      mainPicture: chair,
      quantity: 12,
      price: 3420.0,
      productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
      id: 2,
    },
    {
      mainPicture: keyboard,
      quantity: 22,
      price: 8309.0,
      productName:
        'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
      id: 3,
    },
  ];
  return (
    <div className=''>
      <br />
      <br />
      <div className='flex h-auto'>
        <div className=''>
          <div className='flex text-primary'>
            {<AiOutlineBorderlessTable size={35} />}
            <div>
              <h className='text-3xl pl-4 text-black '>หมายเลขคำสั่งซื้อ</h>
              <p className='text-2xl pl-4 text-gray-600'>111</p>
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
                24/14 หมู่ 3 ตำบลคลองสี่ อำเภอคลองหลวง จังหวัดปทุมธานี
                รหัสไปรษณีย์ 12120
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
              <p className='text-2xl pl-4 text-gray-600'>KER98900</p>
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
              <p className='text-2xl pl-4 text-gray-600'>ส่งเสร็จสิ้น</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className='text-[23px] flex flex-col items-center'>
          <div className='flex gap-3'>
            <h1 className='text-gray-600'>สถานะการจัดส่งสินค้า : </h1>
            <h1 className='text-yellow-500'>{'กำลังดำเนินการ'}</h1>
          </div>
        </div>
        <br />
        <div className='flex justify-center h-auto  items-center '>
          <button className='' type='button'>
            <StatusButton status={'กำลังดำเนินการ'} option={'กำลังดำเนินการ'} />
          </button>
          <div className='pb-10'>
            <img src={line} alt='line' className='w-[180px] h-[70px] ' />
          </div>
          <button className='' type='button'>
            <StatusButton status={'กำลังดำเนินการ'} option={'ส่งแล้ว'} />
          </button>
          <div className='pb-10'>
            <img src={line} alt='line' className='w-[180px] h-[70px]  ' />
          </div>
          <button className='' type='button'>
            <StatusButton status={'กำลังดำเนินการ'} option={'ส่งเสร็จสิ้น'} />
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className='overflow-x-auto'>
        <table className='table p-2'>
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
            {mockArr.map((el, index) => {
              return (
                <>
                  <tr
                    className='hover cursor-pointer'
                    onClick={() => {
                      navigate(`/supplier/product/selected`);
                    }}
                  >
                    <td className='text-center'>{index + 1}</td>
                    <td className=''>
                      <div className='flex items-center space-x-3  justify-center '>
                        <img
                          className='object-contain h-16 '
                          src={el.mainPicture}
                          alt='mainPic'
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className='font-bold'>{el.productName}</div>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center'>
                        <p className='text-ghost font-bold '>{el.quantity}</p>
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
              <div className='flex font-bold pr-4 text-secondary '>{`12100.00`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DynamicSelectedOrderPage;
