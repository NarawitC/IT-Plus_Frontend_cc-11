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
  };
  return (
    <div>
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
        <div className='flex flex-col'>
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
      <div className='gap-2  grid  mb-6 lg:grid-cols-2'>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='productName'
              className='block mb-2 text-sm font-bold text-gray-1200 '
            >
              ชื่อสินค้า
            </label>
            <p>{mockObj.productName}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='category'
              className='block mb-2 text-sm font-bold text-gray-1200 '
            >
              หมวดหมู่สินค้า
            </label>
            <p>{mockObj.category}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='subCategory'
              className='font-bold block mb-2 text-sm  text-gray-1200 '
            >
              หมวดหมู่สินค้าย่อย
            </label>
            <p>{mockObj.subCategory}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='price'
              className='block mb-2 text-sm font-bold text-gray-1200 '
            >
              ราคาสินค้า
            </label>
            <p>{mockObj.price}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='brand'
              className='block mb-2 text-sm font-bold text-gray-1200 '
            >
              แบรนด์สินค้า
            </label>
            <p>{mockObj.brand}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-center'>
            <label
              htmlFor='stock'
              className='block mb-2 text-sm font-bold text-gray-1200 '
            >
              จำนวน
            </label>
            <p>{mockObj.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicSelectedProductPage;
