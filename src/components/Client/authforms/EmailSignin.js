import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../../components/commonUtils/SmPillButton';
import { FaSignInAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
function EmailSignin() {
  const [emailOrPhone, setemailOrPhone] = useState('');
  const [password, setpassword] = useState('');
  return (
    <>
      <form>
        <div className='mb-4'>
          Email
          <input
            type='text'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='อีเมล / เบอร์โทรศัพท์'
            value={emailOrPhone}
            onChange={(e) => {
              setemailOrPhone(e.target.value);
            }}
          />
        </div>
        <div className='mb-4'>
          Password
          <input
            type='password'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
      </form>
      <SmPillButton
        text={'SIGN IN'}
        className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
        // icon={<AiOutlineMail size={25} className='absolute' />}
        onClick={(e) => {
          // setauthOption(1);
        }}
      />
    </>
  );
}

export default EmailSignin;
