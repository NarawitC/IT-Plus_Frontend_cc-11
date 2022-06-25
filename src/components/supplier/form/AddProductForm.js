import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import AddPropertyRow from '../form/AddPropertyRow';
function AddProductForm() {
  const inputElCover = useRef();
  const inputEl = useRef();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

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
  console.log(properties);
  const [index, setIndex] = useState(0);
  // const arr = [{ state: 'name', setState: 'setName', text: 'ชื่อ' }];

  useEffect(() => {
    if (image === null) {
      return;
    }
    const newImageURL = URL.createObjectURL(image);
    // console.log(newImageURL);
    setImageURL(newImageURL);
  }, [image]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });
  const onCoverImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (images === null) {
      return;
    }
    const newImageURLs = Array.from(images).map((file) => {
      return URL.createObjectURL(file);
    });
    // console.log(newImageURLs);
    setImageURLs(newImageURLs);
  }, [images]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURLs: imageURLs });
  const onImageChange = (event) => {
    //เวลามีการเลือก รูปภาพ, set ข้อมูล found ไปที่ state image
    // console.log(event.target.files);
    // setImage(event.target.files);
    if (event.target.files) {
      setImages(event.target.files);
    }
  };

  return (
    <>
      <form className='pl-64 pt-5'>
        <br />
        <h1 className='text-3xl'>เพิ่มสินค้า</h1>
        <div className=''>
          <br />
          <div className='flex justify-center flex-col'>
            <div
              className=' relative justify-center border-2  p-2 rounded-md 
                  '
              role='button'
              onClick={() => inputElCover.current.click()}
            >
              <div className='flex justify-center flex-col items-center'>
                <div className='flex flex-col justify-center'>
                  {imageURL ? (
                    <>
                      <img
                        className='w-60 h-60'
                        src={imageURL}
                        alt=''
                        // alt="imageURL"
                      />
                    </>
                  ) : (
                    <>
                      <div className='flex flex-col'>
                        <div className='border-2  hover:border-primary-focus w-60 h-60 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <p className='text-center'>Cover Photo</p>
                      </div>
                    </>
                  )}
                </div>
                <br />
                <p className='btn btn-primary rounded-lg  text-center'>
                  อัพโหลดรูป
                </p>
              </div>
              <div className='flex justify-center'>
                <input
                  type='file'
                  accept='image/*'
                  className='hidden w-[350px] '
                  ref={inputElCover}
                  onChange={onCoverImageChange}
                />
              </div>
            </div>
            <br />
            <div
              className=' flex flex-col relative justify-center border-2  p-2 rounded-md 
                  '
              role='button'
              onClick={() => inputEl.current.click()}
            >
              <div className='flex justify-center items-center gap-2'>
                {imageURLs.length > 0 ? (
                  imageURLs.map((el, index) => {
                    return (
                      <div className='flex flex-col'>
                        <div className='border-2  hover:border-primary-focus w-40 h-40 rounded-md flex justify-center items-center'>
                          <img
                            className='w-40 h-40 rounded-md object-fit p-2'
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
                    </div>
                  </div>
                )}
              </div>
              <br />
              <div className='flex flex-col justify-center'>
                <div className='flex justify-center'>
                  <input
                    type='file'
                    multiple
                    accept='image/*'
                    className='hidden w-[350px] '
                    ref={inputEl}
                    onChange={onImageChange}
                  />
                  <p className='btn btn-secondary'>กรุณาอัพโหลดรูปสินค้า</p>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
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
          <div className='flex gap-2 items-center '>
            {<TbListDetails />}
            <h1>กรุณากรอกคุณสมบัติสินค้า</h1>
          </div>
          <br />
          <table className='table w-[768px]'>
            <thead>
              <tr className=''>
                <th className='w-[40px]'>ลำดับ</th>
                <th className=''></th>
                <th className=''>คุณสมบัติ</th>
                <th className=''>รายละเอียด</th>
              </tr>
            </thead>
          </table>
          <tbody className=''>
            {properties.map((el, index) => {
              return (
                <div className=''>
                  <AddPropertyRow
                    property={el}
                    setProperties={setProperties}
                    order={el.order}
                    index={index}
                  />
                </div>
              );
            })}
          </tbody>

          <br />
          <div className='flex justify-center'>
            <button
              type='button'
              className='btn btn-info text-center hover:info-focus '
              onClick={() => {
                setIndex((index) => (index = index + 1));
                setProperties([
                  ...properties,
                  {
                    order: index + 1,
                    key: '',
                    value: '',
                  },
                ]);
              }}
            >
              เพิ่มรายการ
            </button>
          </div>
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
