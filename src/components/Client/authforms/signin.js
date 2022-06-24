import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import EmailSignin from './EmailSignin';
import EmailSignup from './EmailSignup';
function CSignin() {
  const [isSignIn, setisSignIn] = useState(true);
  return (
    <>
      <div className='Header flex flex-row w-full justify-center my-4'>
        <AiOutlineMail
          size={22}
          strokeWidth={1}
          className='mt-1'
          color='gray'
        />
        <a className='tab text-md font-bold'>Signin with Email </a>
      </div>
      <div className='tabs'>
        <a
          className={`tab tab-lifted ${isSignIn ? 'tab-active' : ''} `}
          onClick={() => {
            setisSignIn(true);
          }}
        >
          Sign in
        </a>
        <a
          className={`tab tab-lifted ${isSignIn ? '' : 'tab-active'} `}
          onClick={() => {
            setisSignIn(false);
          }}
        >
          Sign up
        </a>
      </div>
      <div className='self-center  flex flex-col basis-5 w-4/6 mb-4 mt-2'>
        {isSignIn ? <EmailSignin /> : <EmailSignup />}
      </div>
    </>
  );
}

export default CSignin;
