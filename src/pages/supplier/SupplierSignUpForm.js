import previewPic from '../../pictures/previewPic.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as yup from 'yup';

import FormYup from '../../components/form/FormYup';
import InputYup from '../../components/form/InputYup';
import SubmitButtonYup from '../../components/form/SubmitButtonYup';

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

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid format'),
    shopName: yup.string().required('Shop name is required'),
    password: yup.string().required('Password is required'),
    line_id: yup.string().required('line_id is required'),
    supplierDetail: yup.string().required('supplierDetail is required'),
    bankAccountName: yup.string().required('Bank account name is required'),
    bankAccount: yup
      .string()
      .required('supplierDetail is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    confirmPassword: yup.string().required('Confirm password is required'),
    streetName: yup.string().trim().nullable(),
    province: yup.string().trim().nullable(),
    district: yup.string().trim().nullable(),
    postalCode: yup.string().trim().nullable(),
    addressDescription: yup.string().trim().nullable(),
  });
  return (
    <>
      <FormYup
        // className=''
        defaultValues={{
          firstName: '',
          lastName: '',
          line_id: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          bankAccountName: '',
          bankAccount: '',
          supplierDetail: '',
        }}
        schema={schema}
      >
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
        <div className='grid gap-4 gap-y-2  lg:grid-cols-2 '>
          <div className=''>
            <label
              htmlFor='firstName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ชื่อผู้ขาย
            </label>
            <InputYup
              name='firstName'
              type='text'
              id='firstName'
              className='bg-gray-50 border  border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ชื่อผู้ขาย'
              required
            />
          </div>
          <div>
            <label
              htmlFor='lastName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              นามสกุล
            </label>
            <InputYup
              name='lastName'
              type='text'
              id='lastName'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='นามสกุล'
              required
            />
          </div>
          <div>
            <label
              htmlFor='line_id'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              Line ID
            </label>
            <InputYup
              name='line_id'
              type='text'
              id='line_id'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Line ID'
              required
            />
          </div>
          <div className=''>
            <label
              htmlFor='phone'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              เบอร์โทรศัพท์
            </label>
            <InputYup
              name='phoneNumber'
              // text={'Phone number'}
              type='tel'
              id='phone'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='080-xxx-xxxx'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
              required
            />
          </div>
          <div className=''>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              E-mail
            </label>
            <InputYup
              name='email'
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='E-mail'
              required
            />
          </div>
          <div>
            <label
              for='shopName'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              ชื่อร้าน
            </label>
            <InputYup
              type='text'
              name='shopName'
              id='shopName'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ชื่อร้าน'
              required
            />
          </div>
          <div>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              รหัสผ่าน
            </label>
            <InputYup
              name='password'
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='รหัสผ่าน'
              required
            />
          </div>
          <div>
            <label
              for='confirmPassword'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              ยืนยันรหัสผ่าน
            </label>
            <InputYup
              name='confirmPassword'
              type='password'
              id='confirmPassword'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ยืนยันรหัสผ่าน'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div>
            <label
              for='bankAccountName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ชื่อบัญชีผู้ขาย
            </label>
            <InputYup
              name='bankAccountName'
              type='text'
              id='bankAccountName'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ชื่อบัญชีผู้ขาย'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div>
            <label
              for='bankAccount'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              เลขที่บัญชีผู้ขาย
            </label>
            <InputYup
              name='bankAccount'
              // text={'bankAccount'}
              type='text'
              id='bankAccount'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='เลขที่บัญชีผู้ขาย'
              required
            />
          </div>
        </div>

        <div className='flex  justify-center'>
          <div>
            <label
              htmlFor='addressDescription'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ที่อยู่
            </label>
            <InputYup
              name='addressDescription'
              // text={'adress'}
              type='text'
              id='addressDescription'
              className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ที่อยู่'
              required
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <div>
            <label
              htmlFor='supplierDetail'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              รายละเอียดผู้ขาย
            </label>
            <InputYup
              name='supplierDetail'
              // text={'supplierDetail'}
              type='text'
              id='supplierDetail'
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
              htmlFor='remember'
              class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              {`I agree with the `}
              <Link
                to='/supplier'
                class='text-blue-600 hover:underline dark:text-blue-500'
              >
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <SubmitButtonYup
            // ref={elSubmit}
            className={
              'btn text-white bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full w-auto px-5 py-2.5 text-center hover:text-gray-900  h-9'
            }
          >
            Sign Up
          </SubmitButtonYup>
        </div>
      </FormYup>
    </>
  );
}

export default SupplierSignUpForm;
