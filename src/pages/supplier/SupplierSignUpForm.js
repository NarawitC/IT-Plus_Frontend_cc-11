import previewPic from '../../pictures/previewPic.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormYup from '../../components/form/FormYup';
import InputYup from '../../components/form/InputYup';
import SubmitButtonYup from '../../components/form/SubmitButtonYup';
import TextAreaYup from '../../components/form/TextAreaYup';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';
import { useErrorContext } from '../../contexts/ErrorContext';
import { useSupplierContext } from '../../contexts/Supplier/SupplierAuthContext';
import { useGoogleMapContext } from '../../contexts/googleMap/googleMap';
import AddAddressSupplier from '../../components/supplier/form/addAddressSupplier';

function SupplierSignUpForm() {
  const { signIn } = useSupplierContext();
  const { setError } = useErrorContext();
  const [IsLoading, setIsLoading] = useState(false);
  const { googleMapAddress } = useGoogleMapContext();
  const [confirmAddress, setConfirmAddress] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();
  const inputEl = useRef();
  const [profilePicture, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const { signUp } = useContext(SupplierAuthContext);

  console.log(confirmAddress);

  useEffect(() => {
    if (profilePicture === null) {
      return;
    }
    const newImageURL = URL.createObjectURL(profilePicture);
    // console.log(newImageURL);
    setImageURL(newImageURL);
  }, [profilePicture]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่

  const onImageChange = (event) => {
    //เวลามีการเลือก รูปภาพ, set ข้อมูล found ไปที่ state profilePicture
    // console.log(event.target.files);
    // setImage(event.target.files);
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const elSubmit = useRef();
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
    displayName: yup.string().required('Shop name is required'),
    password: yup.string().required('Password is required'),
    lineId: yup.string().required('lineId is required'),
    description: yup.string(),
    bankName: yup.string().required('Bank account name is required'),
    bankAccount: yup
      .string()
      .required('description is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    confirmPassword: yup.string().required('Confirm password is required'),
    address: yup.string().trim().required(),
  });

  const toggleClickMap = () => {
    setShowMap((p) => !p);
  };

  const handleSignUpSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('phoneNumber', data.phoneNumber);
      formData.append('email', data.email);
      formData.append('displayName', data.displayName);
      formData.append('password', data.password);
      formData.append('lineId', data.lineId);
      formData.append('description', data.description);
      formData.append('bankName', data.bankName);
      formData.append('bankAccount', data.bankAccount);
      formData.append('confirmPassword', data.confirmPassword);
      formData.append('address', data.address);
      formData.append('profilePicture', profilePicture);
      const {
        data: { email, password },
      } = await signUp(formData);
      await signIn(email, password);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  console.log(confirmAddress);

  return (
    <div className=''>
      <FormYup
        onSubmit={handleSignUpSubmit}
        // className=''
        defaultValues={{
          firstName: '',
          lastName: '',
          lineId: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          bankName: '',
          bankAccount: '',
          description: '',
          address: 'confirmAddress',
        }}
        schema={schema}
      >
        <br />
        <div className='text-3xl text-center mx-40'>
          <h1>สมัครเป็นผู้ขาย</h1>
        </div>

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
                      className='w-[160px] h-[160px] rounded-full object-fit'
                      src={imageURL}
                      alt='imageURL'
                    />
                  </>
                ) : (
                  <>
                    <img
                      className='w-[160px] h-[160px] rounded-full object-fit '
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
              htmlFor='lineId'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              Line ID
            </label>
            <InputYup
              name='lineId'
              type='text'
              id='lineId'
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
              // pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
              required
            />
          </div>
          <div className=''>
            <label
              htmlFor='email'
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
              htmlFor='displayName'
              className='block mb-2 text-sm font-medium text-gray-1200'
            >
              ชื่อร้าน
            </label>
            <InputYup
              type='text'
              name='displayName'
              id='displayName'
              className='bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ชื่อร้าน'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
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
              htmlFor='confirmPassword'
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
          <div className='w-full'>
            <label
              htmlFor='bankName'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              ชื่อบัญชีผู้ขาย
            </label>
            <InputYup
              name='bankName'
              type='text'
              id='bankName'
              className='w-full bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='ชื่อบัญชีผู้ขาย'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          <div className='w-full'>
            <label
              htmlFor='bankAccount'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              เลขที่บัญชีผู้ขาย
            </label>
            <InputYup
              name='bankAccount'
              // text={'bankAccount'}
              type='text'
              id='bankAccount'
              className='w-full bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='เลขที่บัญชีผู้ขาย'
              required
            />
          </div>
        </div>

        <div className='flex  justify-center '>
          <div className='w-full'>
            <label
              htmlFor='address'
              className='block mb-2 text-sm font-medium text-gray-1200  '
            >
              ที่อยู่
            </label>

            {/* <InputYup
              name='address'
              // text={'adress'}
              type='text'
              value={confirmAddress}
              id='address'
              className='invisible w-0 h-0 bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ที่อยู่'
              required
            /> */}
            <TextAreaYup
              name='address'
              // text={'adress'}
              value={confirmAddress}
              type='text'
              id='address'
              className='w-full  bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='ที่อยู่'
              required
            />
            <div className='flex justify-center pb-4'>
              <div
                className='btn space-center w-1/2 btn-success border-none '
                onClick={() => toggleClickMap()}
              >
                เพิ่มที่อยู่ด้วยตำแหน่งของฉัน
              </div>
            </div>
            <div className=''>
              {showMap && (
                <AddAddressSupplier
                  confirmAddress={confirmAddress}
                  setConfirmAddress={setConfirmAddress}
                  googleMapAddress={googleMapAddress}
                  toggleClickMap={toggleClickMap}
                />
              )}
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-full'>
            <label
              htmlFor='description'
              className='block mb-2 text-sm font-medium text-gray-1200 '
            >
              รายละเอียดผู้ขาย
            </label>
            <TextAreaYup
              name='description'
              // text={'description'}
              type='textarea'
              id='description'
              className='w-full h-auto bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='รายละเอียดผู้ขาย'
            />
          </div>
        </div>
        <br />
        <div className=' flex justify-center flex-col items-center '>
          <SubmitButtonYup
            ref={elSubmit}
            // ref={elSubmit}
            className={
              'btn text-white bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full w-auto px-5 py-2.5 text-center hover:text-gray-900  h-9'
            }
          >
            Sign Up
          </SubmitButtonYup>
        </div>
        {/* <div className='btn '>wtf</div> */}
      </FormYup>
    </div>
  );
}

export default SupplierSignUpForm;
