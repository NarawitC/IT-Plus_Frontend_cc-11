import React, { useState } from 'react';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../../components/commonUtils/SmPillButton';
import InputYup from '../../form/InputYup';
import FormYup from '../../form/FormYup';
import SubmitButtonYup from '../../form/SubmitButtonYup';
import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';

function EmailSignin() {
  const [IsLoading, setIsLoading] = useState(false);
  const { signIn } = useAuthContext();

  const schema = yup.object().shape({
    // phoneNumber: yup
    //   .string()
    //   .required('Phone number is required')
    //   .min(10, 'Phone number must be 10 characters')
    //   .max(10, 'Phone number must be 10 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid format'),
    password: yup.string().required('Password is required'),
  });

  const handleSignInSubmit = async (data, reset) => {
    try {
      setIsLoading(true);
      console.log(data);
      await signIn(data);
      // navigate('/auth/signUpCompleted');
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      // setError(err.response.data.message);
    }
  };
  return (
    <>
      <FormYup
        onSubmit={handleSignInSubmit}
        defaultValues={{
          email: '',
          password: '',
        }}
        schema={schema}
      >
        <InputYup
          name='email'
          text={'Email address'}
          placeholder='Email Address'
          className='form-control block w-full px-3 py-1.5 -mb-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        />
        <InputYup
          name='password'
          text={'Password'}
          placeholder='Password'
          className='form-control block w-full px-3 -mb-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          type='password'
        />
        <SubmitButtonYup
          className={
            'btn btn-primary bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
          }
        >
          Sign In
        </SubmitButtonYup>
      </FormYup>
      {/* <SmPillButton
        text={'SIGN IN'}
        className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
        // icon={<AiOutlineMail size={25} className='absolute' />}
        onClick={(e) => {
          // setauthOption(1);
        }}
      /> */}
    </>
  );
}

export default EmailSignin;
