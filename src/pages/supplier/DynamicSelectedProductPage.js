import mainPicture from '../../productImg/item1.jpg';
import subPicture1 from '../../productImg/item1.jpg';
import subPicture2 from '../../productImg/item2.jpg';
import subPicture3 from '../../productImg/item3.jpg';
import subPicture4 from '../../productImg/item4.jpg';
import { AiOutlineNumber } from 'react-icons/ai';

function DynamicSelectedProductPage() {
  const mockObj = {
    stock: 2,
    price: 1149.0,
    productName: 'ลำโพง Edifier R1855DB Computer Speaker',
    status: 'PENDING',
    rejectReason: null,
    id: 101,
    brand: 'Edifier',
    category: 'computer-labtop',
    subCategory: 'จอคอม',
    description:
      'นอกจากไมค์คุณภาพสูงแล้วหูฟังเล่นเกม Logitech Pro X ยังมาพร้อมกับการปรับแต่งเสียงผ่าน Software ได้ในตัว ทำให้นอกจากใช้เล่นเกมแล้วยังสามารถเอาไปใช้ ดูหนังฟังเพลงได้อีกด้วย โดยการเซฟ Presets เอาไว้ อีกทั้งยังมี Sound Card มาช่วยดันคุณภาพเสียงให้สูงขึ้นได้อีกด้วย แถมบอดี้ของมันยังแข็งแรงด้วยวัสดุโลหะ และอลูมิเนียม ด้วยการผสมกันของวัสดุทั้งสองอย่างทำให้ได้หูฟังที่แข็งแรงและน้ำหนักเบาสุด ๆ ',
  };
  const mockProperties = [
    { topic: 'ขนาดจอ', description: '24 นิ้ว' },
    { topic: 'ความละเอียด', description: '10M pixels' },
    { topic: 'สี', description: 'ดำ' },
  ];
  return (
    <div className=''>
      <br />
      <br />
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <img
            className='h-80 w-auto object-contain border-2 p-4 rounded-lg hover:border-secondary'
            src={mainPicture}
            alt='mainPicture'
          />
          <br />
          <p className='text-center'>{`รูปหลัก`}</p>
        </div>
        <br />
      </div>
      <br />
      <div className='flex gap-2 justify-center'>
        <div className='flex flex-col '>
          <img
            className='h-60 w-auto object-contain border-2 p-4 rounded-lg hover:border-primary'
            src={subPicture1}
            alt='subPicture1'
          />
          <br />
          <p className='text-center'>{`รูป 1`}</p>
        </div>
        <div className='flex flex-col'>
          <img
            className='h-60 w-auto object-contain border-2 p-4 rounded-lg hover:border-primary'
            src={subPicture2}
            alt='subPicture2'
          />
          <br />
          <p className='text-center'>{`รูป 2`}</p>
        </div>
        <div className='flex flex-col'>
          <img
            className='h-60 w-auto object-contain border-2 p-4 rounded-lg hover:border-primary'
            src={subPicture3}
            alt='subPicture3'
          />
          <br />
          <p className='text-center'>{`รูป 3`}</p>
        </div>
        <div className='flex flex-col'>
          <img
            className='h-60 w-auto object-contain border-2 p-4 rounded-lg hover:border-primary'
            src={subPicture4}
            alt='subPicture4'
          />
          <br />
          <p className='text-center'>{`รูป 4`}</p>
        </div>
      </div>
      <br />
      <div className='gap-4  grid  mb-6 lg:grid-cols-2 p-4'>
        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='productName'
            className='block mb-2 text-sm font-bold text-gray-1200 '
          >
            ชื่อสินค้า
          </label>
          <p>{mockObj.productName}</p>
        </div>
        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='category'
            className='block mb-2 text-sm font-bold text-gray-1200 '
          >
            หมวดหมู่สินค้า
          </label>
          <p>{mockObj.category}</p>
        </div>
        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='subCategory'
            className='font-bold block mb-2 text-sm  text-gray-1200 '
          >
            หมวดหมู่สินค้าย่อย
          </label>
          <p>{mockObj.subCategory}</p>
        </div>

        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='price'
            className='block mb-2 text-sm font-bold text-gray-1200 '
          >
            ราคาสินค้า
          </label>
          <p>{mockObj.price.toFixed(2)}</p>
        </div>
        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='brand'
            className='block mb-2 text-sm font-bold text-gray-1200 '
          >
            แบรนด์สินค้า
          </label>
          <p>{mockObj.brand}</p>
        </div>
        <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
          <label
            htmlFor='stock'
            className='block mb-2 text-sm font-bold text-gray-1200 '
          >
            Stock
          </label>
          <p>{mockObj.stock}</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <table className='table'>
          <thead>
            <tr className=''>
              <th className='w-[10px] '>ลำดับ</th>
              <th className='w-[360px]'>คุณสมบัติ</th>
              <th className='w-[450px]'>รายละเอียด</th>
              <th className='w-[1px]'></th>
            </tr>
          </thead>
          <tbody>
            {mockProperties.map((el, index) => {
              return (
                <>
                  <tr className=''>
                    <td className='text-center'>{index + 1}</td>
                    <td className=''>
                      <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                        {el.topic}
                      </div>
                    </td>
                    <td>
                      <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                        {el.description}
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <br />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg m-4 p-2'>
        <label
          for='description'
          className='block mb-2 text-md font-bold text-gray-1200 '
        >
          รายละเอียดสินค้า
        </label>
        <p>{mockObj.description}</p>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}

export default DynamicSelectedProductPage;
