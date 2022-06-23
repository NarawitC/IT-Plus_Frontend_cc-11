import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../../components/commonUtils/SmPillButton';
import * as yup from 'yup';

import FormYup from '../../form/FormYup';
import InputYup from '../../form/InputYup';
import SubmitButtonYup from '../../form/SubmitButtonYup';
import TextAreaYup from '../../form/TextAreaYup';
function EmailSignup() {
  // const {signUp} =

  const schema = yup.object().shape({
    // firstName: yup.string().required('First name is required'),
    // lastName: yup.string().required('Last name is required'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid format'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm password is required'),
    // streetName: yup.string().trim().nullable(),
    // province: yup.string().trim().nullable(),
    // district: yup.string().trim().nullable(),
    // postalCode: yup.string().trim().nullable(),
    // addressDescription: yup.string().trim().nullable(),
  });

  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [procheck, setprocheck] = useState(false);
  const [termcheck, settermcheck] = useState(false);
  const handleSignUpSubmit = async (data, reset) => {
    try {
      // setIsLoading(true);
      // const { streetName, province, district, postalCode } = data;
      // data.address =
      // streetName + ' ' + province + ' ' + district + ' ' + postalCode;
      // await signUp(data);
      // navigate('/auth/signUpCompleted');
      reset();
      // setIsLoading(false);
    } catch (err) {
      // setError(err.response.data.message);
    }
  };
  return (
    <>
      <FormYup
        onSubmit={handleSignUpSubmit}
        defaultValues={{
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        schema={schema}
      >
        <div className='mb-4'>
          Email
          <InputYup
            type='email'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Input email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className='mb-4'>
          Phone Number
          <InputYup
            type='number'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Input phone number'
            value={phoneNumber}
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />
        </div>
        <div className='mb-4'>
          Password
          <InputYup
            type='password'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className='mb-4'>
          <InputYup
            type='password'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Confirm password'
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
          />
        </div>
        <label className='label cursor-pointer -mb-2 text-left'>
          <InputYup
            type='checkbox'
            className='checkbox'
            onClick={(e) => {
              // console.log(e.target.checked);
              settermcheck(e.target.checked);
            }}
          />
          <span className='label-text'>
            Receive promotion information form IT Plus
          </span>
        </label>
        {/* <label className='label cursor-pointer text-left'>
          <InputYup
            type='checkbox'
            className='checkbox'
            onClick={(e) => {
              // console.log(e.target.checked);
              settermcheck(e.target.checked);
            }}
          />
          <span className='text-left label-text'>accept terms of service</span>
        </label> */}
      </FormYup>
      <SmPillButton
        text={'SIGN UP'}
        className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
        // icon={<AiOutlineMail size={25} className='absolute' />}
        onClick={(e) => {
          // setauthOption(1);
        }}
      />
    </>
  );
}

export default EmailSignup;
