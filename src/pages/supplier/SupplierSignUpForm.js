import previewPic from '../../pictures/previewPic.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
function SupplierSignUpForm() {
  const inputEl = useRef();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    if (image === null) {
      return;
    }
    const newImageURL = URL.createObjectURL(image);
    console.log(newImageURL);
    setImageURL(newImageURL);
  }, [image]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่

  const onImageChange = (event) => {
    //เวลามีการเลือก รูปภาพ, set ข้อมูล found ไปที่ state image
    // console.log(event.target.files);
    // setImage(event.target.files);
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  return (
    <>
      <form className=''>
        <br />
        <h1 className='text-3xl text-center'>สมัครเป็นผู้ขาย</h1>

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
                accept='image/*'
                className='hidden w-[350px] '
                ref={inputEl}
                onChange={onImageChange}
              />
              <div className='flex flex-col justify-center items-center'>
                {imageURL ? (
                  <>
                    <img
                      className='w-[160px] h-[160px] rounded-full'
                      src={imageURL}
                      alt='imageURL'
                    />
                  </>
                ) : (
                  <>
                    <img
                      className='w-[160px] h-[160px] rounded-full object-fit'
                      src={previewPic}
                      alt='previewPic'
                    />
                  </>
                )}
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className='grid gap-6 mb-6 lg:grid-cols-2'>
          <div>
            <label
              for='firstName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ชื่อผู้ขาย
            </label>
            <input
              type='text'
              id='firstName'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ชื่อผู้ขาย'
              required
            />
          </div>
          <div>
            <label
              for='lastName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              นามสกุล
            </label>
            <input
              type='text'
              id='lastName'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='นามสกุล'
              required
            />
          </div>
          <div>
            <label
              for='line_id'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              Line ID
            </label>
            <input
              type='text'
              id='line_id'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Line ID'
              required
            />
          </div>
          <div>
            <label
              for='phone'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              เบอร์โทรศัพท์
            </label>
            <input
              type='tel'
              id='phone'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='080-xxx-xxxx'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
              required
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <div>
            <label
              for='bank_account'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              เลขที่บัญชีผู้ขาย
            </label>
            <input
              type='text'
              id='bank_account'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='เลขที่บัญชีผู้ขาย'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div>
            <label
              for='address'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ที่อยู่
            </label>
            <input
              type='text'
              id='address'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ที่อยู่'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div>
            <label
              for='supplier_detail'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              รายละเอียดผู้ขาย
            </label>
            <input
              type='text'
              id='supplier_detail'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='รายละเอียดผู้ขาย'
              required
            />
          </div>
        </div>
        <br />
        <div className=' flex justify-center flex-col items-center '>
          <div class='flex items-start mb-6'>
            <div class='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                class='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <label
              for='remember'
              class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              I agree with the
              <Link
                to='/supplier'
                class='text-blue-600 hover:underline dark:text-blue-500'
              >
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <button
            type='submit'
            class='btn text-white bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default SupplierSignUpForm;
