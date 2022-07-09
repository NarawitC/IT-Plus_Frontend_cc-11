import React from 'react';
import Logo from '../../../../IT-Plus_Frontend_cc-11/src/icons/LOGO1.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='  mt-20 h-40 bg-gradient-to-b from-blue-900 to-blue-800   text-font-Kanit  pt-6 '>
      <div className=' flex justify-center  py-2'>
        {/* <svg width='100' height='100'>
        </svg> */}
        {/* <Logo className=' w-64 ' /> */}
        <img src={Logo} className='w-40 ' />
      </div>
      <div className='flex justify-center'>
        <div
          className='btn btn-primary flex justify-center w-40 rounded-3xl  bg-white text-primary border-none  hover:text-white '
          onClick={() => {
            navigate('/supplier');
          }}
        >
          ร่วมเป็นผู้ขายกับเรา
        </div>
      </div>
    </div>
  );
}

export default Footer;
