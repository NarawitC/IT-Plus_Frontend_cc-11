import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import FormYup from '../../form/FormYup';
import InputYup from '../../form/InputYup';
import SubmitButtonYup from '../../form/SubmitButtonYup';
import SmPillButton from '../../../components/commonUtils/SmPillButton';

import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';
function EmailSignup() {
  const [IsLoading, setIsLoading] = useState(false);
  const { signUp } = useAuthContext();
  const elSubmit = useRef();
  const schema = yup.object().shape({
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
  });

  const [procheck, setprocheck] = useState(false);
  // const [termcheck, settermcheck] = useState(false);
  const handleSignUpSubmit = async (data, reset) => {
    try {
      console.log(procheck);
      if (procheck) {
        setIsLoading(true);
        console.log(data);
        await signUp(data);
        // navigate('/auth/signUpCompleted');
        // reset();
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
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
        <InputYup
          name='email'
          text={'Email address'}
          placeholder='Email Address'
          className='form-control block w-full px-3 py-1.5 -mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          // type='email'
          // placeholder='Input email'
          // value={email}
          // onChange={(e) => {
          //   setemail(e.target.value);
          // }}
        />
        <InputYup
          name='phoneNumber'
          text={'Phone number'}
          placeholder='Phone number'
          type='phone'
          className='form-control block w-full px-3 py-1.5 -mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          // placeholder='Input phone number'
          // value={phoneNumber}
          // onChange={(e) => {
          //   setphoneNumber(e.target.value);
          // }}
        />
        <InputYup
          name='password'
          text={'Password'}
          placeholder='Password'
          className='form-control block w-full px-3 -mb-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          type='password'
        />
        <InputYup
          name='confirmPassword'
          text={'Confirm password'}
          placeholder='Confirm password'
          type='password'
          className='form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        />
        <label className='label cursor-pointer my-2 text-left'>
          <input
            type='checkbox'
            className='checkbox'
            onClick={(e) => {
              setprocheck(e.target.checked);
            }}
          />
          <span className={`label-text ${procheck ? '' : 'text-red-500'}`}>
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
        <SubmitButtonYup
          ref={elSubmit}
          className={
            'btn btn-primary bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
          }
        >
          Sign Up
        </SubmitButtonYup>

        {/* <SmPillButton
          text={'SIGN UP'}
          className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
          // icon={<AiOutlineMail size={25} className='absolute' />}
          onClick={(e) => {
            elSubmit.current.click();
            // setauthOption(1);
          }}
        /> */}
      </FormYup>
    </>
  );
}

export default EmailSignup;
