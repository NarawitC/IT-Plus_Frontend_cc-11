import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
function AddProductForm() {
  const inputEl = useRef();
  const [images, setImages] = useState(null);
  const [imageURLs, setImageURLs] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [properties, setProperties] = useState([]);
  // const arr = [{ state: 'name', setState: 'setName', text: 'ชื่อ' }];

  useEffect(() => {
    if (images === null) {
      return;
    }
    const newImageURLs = Array.from(images).map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(newImageURLs);
    setImageURLs(newImageURLs);
  }, [images]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่

  const onImageChange = (event) => {
    //เวลามีการเลือก รูปภาพ, set ข้อมูล found ไปที่ state image
    // console.log(event.target.files);
    // setImage(event.target.files);
    if (event.target.files) {
      setImages(event.target.files);
    }
  };
  console.log({ imageURLs: imageURLs });
  return (
    <>
      <form className='pl-64 pt-5'>
        <br />

        <h1 className='text-3xl'>เพิ่มสินค้า</h1>
        <div>
          <div
            className=' relative  justify-center'
            role='button'
            onClick={() => inputEl.current.click()}
          >
            <br />
            <div className='flex justify-center'>
              <input
                type='file'
                multiple
                accept='image/*'
                className='w-[350px] '
                ref={inputEl}
                onChange={onImageChange}
              />
              <div className='flex justify-center items-center gap-2'>
                {imageURLs.length === 0 ? (
                  imageURLs.map((el, index) => {
                    return (
                      <div className='flex flex-col'>
                        <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                          <img
                            className='w-32 h-32 rounded-md object-fit'
                            src={el}
                            alt={index}
                          />
                        </div>
                        <p className='text-center'>{`Image ${index + 1}`}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className='flex gap-4'>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                      <p className='text-center'>Cover Photo</p>
                    </div>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                      <p className='text-center'>Image 1</p>
                    </div>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                      <p className='text-center'>Image 2</p>
                    </div>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                      <p className='text-center'>Image 3</p>
                    </div>
                    <div className='flex flex-col'>
                      <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                        {<MdAddAPhoto />}
                      </div>
                      <p className='text-center'>Image 4</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className='gap-2  grid  mb-6 lg:grid-cols-2'>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='address'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                ชื่อสินค้า
              </label>
              <input
                type='text'
                id='name'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='ชื่อสินค้า'
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='category'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                หมวดหมู่สินค้า
              </label>
              <input
                type='text'
                id='category'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='หมวดหมู่สินค้า'
                required
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='subCategory'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                หมวดหมู่สินค้าย่อย
              </label>
              <input
                type='text'
                id='subCategory'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='หมวดหมู่สินค้าย่อย'
                required
                value={subCategory}
                onChange={(event) => setSubCategory(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='price'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                ราคาสินค้า
              </label>
              <input
                type='text'
                id='price'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='ราคาสินค้า'
                required
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='brand'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                แบรนด์สินค้า
              </label>
              <input
                type='text'
                id='brand'
                className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='แบรนด์สินค้า'
                required
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center'>
              <label
                for='amount'
                className='block mb-2 text-sm font-medium text-gray-1200 '
              >
                จำนวน
              </label>
              <input
                type='text'
                id='amount'
                className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='จำนวน'
                required
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-2 items-center'>
            {<TbListDetails />}
            <h1>กรุณากรอกคุณสมบัติสินค้า</h1>
          </div>
          <table className=''>
            <thead>
              <tr className=''>
                <th className=''>คุณสมบัติ</th>
                <th className=''>รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>หน่วยความจำ</th>
                <th>16GB</th>
              </tr>
              <tr>
                <th>แบรนด์ซีพียู</th>
                <th>Intel</th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className=''>
          <label
            for='description'
            className='block mb-2 text-sm font-medium text-gray-1200 '
          >
            รายละเอียดสินค้า
          </label>
          <input
            type='text'
            id='description'
            className=' w-[768px] h-[150px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='รายละเอียดสินค้า'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <br />
        <div className='flex justify-center'>
          <button type='button' className='btn btn-secondary btn-md '>
            เพิ่มสินค้า
          </button>
        </div>
        <br />
      </form>
    </>
  );
}

export default AddProductForm;
