import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import svgload from '../../icons/Vanilla-1s-280px.svg';
function LoadingPage() {
  const [Navbut, setNavbut] = useState(false);
  const handleShowNavigate = async () => {
    setNavbut(true);
    await setTimeout(() => {
      setNavbut(false);
    }, 2000);
  };
  const navigate = useNavigate();
  return (
    <div className='fixed w-screen h-screen z-50 bg-gray-800/70 flex flex-col justify-center items-center '>
      <div
        class='loadingio-spinner-dual-ring-i062bxvb9g absolute rounded-xl hover:scale-150 duration-1000 '
        onMouseOver={() => {
          handleShowNavigate();
        }}
      >
        <div class='ldio-qnh3rq90kpi'>
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <span
        className={`${
          Navbut ? '' : 'hidden'
        } text-primary-content  ease-in-out transition absolute  text-xl font-bold font-mono cursor-pointer `}
        onClick={() => {
          navigate('/');
        }}
      >
        {'< Home'}
      </span> */}
      <div className=' absolute pointer-events-none w-40 flex flex-row justify-center pl-8 mt-4'>
        <span className='text-primary-content hover:text-lg transition duration-200'>
          loanding{' '}
        </span>
        <div className='ping w-10'>
          <svg
            version='1.1'
            id='L4'
            xmlns='http://www.w3.org/2000/svg'
            // xmlns:xlink='http://www.w3.org/1999/xlink'
            x='0x'
            y='0px'
            viewBox='0 0 100 100'
            enable-background='new 0 0 0 0'
            // xml:space='preserve'
          >
            <circle fill='#fff' stroke='none' cx='6' cy='50' r='3'>
              <animate
                attributeName='opacity'
                dur='1s'
                values='0;1;0'
                repeatCount='indefinite'
                begin='0.1'
              />
            </circle>
            <circle fill='#fff' stroke='none' cx='26' cy='50' r='3'>
              <animate
                attributeName='opacity'
                dur='1s'
                values='0;1;0'
                repeatCount='indefinite'
                begin='0.2'
              />
            </circle>
            <circle fill='#fff' stroke='none' cx='46' cy='50' r='3'>
              <animate
                attributeName='opacity'
                dur='1s'
                values='0;1;0'
                repeatCount='indefinite'
                begin='0.3'
              />
            </circle>
          </svg>
        </div>
        {/* <img src={svgload}></img> */}
      </div>
    </div>
  );
}

export default LoadingPage;

// <div className='bg-white rounded-lg flex w-1/6 h-1/4  flex-col justify-center '>
//   {/* <ReactLoading
//     type={'spinningBubbles'}
//     color={'#ff6130'}
//     height={'25%'}
//     width={'15%'}
//   /> */}

//   {/* <div class='flex justify-center items-center'>
//     <div
//       class='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
//       role='status'
//     >
//       <span class=' bg-white z-10'></span>
//     </div>
//   </div> */}

// </div>
