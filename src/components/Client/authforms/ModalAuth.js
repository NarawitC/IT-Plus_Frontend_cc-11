import React, { useEffect, useRef, useState } from 'react';
// import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../commonUtils/SmPillButton';
import { FaSignInAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import CSignin from './signin';
import axios from '../../../config/axios';

function ModalAny({ inputEmodal }) {
  const [UserAuthmodal, setUserAuthmodal] = useState(false);
  const [authOption, setauthOption] = useState(null);
  const navigate = useNavigate();

  const fbCall = async () => {
    // let headers = new Headers();
    // // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // const link = await axios.get('/oauth/facebook', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //   },
    // });
    const link = 'http://localhost:8000/oauth/facebook';
    console.log(link);
    // window.open(link);
    // window.location.href = link;
  };

  const fbreacall = async () => {
    const link = await axios.get('/oauth/facebook', {
      headers: { 'Access-Control-Allow-Origin': true },
    });
    // const link = 'http://localhost:8000/oauth/facebook';
    // console.log(link);
  };

  return (
    <div
      ref={inputEmodal}
      id='medium-modal'
      className={`${
        UserAuthmodal ? '' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen bg-gray-600/20 inset-0 md:inset-0 h-screen md:h-screen flex  justify-center`}
      onClick={() => {
        setUserAuthmodal((prev) => !prev);
      }}
    >
      <div className='text-slate-600  rounded-2xl p-4 w-full max-w-lg h-full md:h-full items-center z-50 duration-150'>
        <div
          className='flex flex-col rounded-lg h-auto bg-white my-48 shadow items-center'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {authOption ? (
            authOption === 1 ? (
              <CSignin
                setauthOption={setauthOption}
                setUserAuthmodal={setUserAuthmodal}
              />
            ) : authOption === 2 ? (
              ''
            ) : (
              ''
            )
          ) : (
            <>
              <div className='Header flex flex-row w-full justify-center my-4'>
                <FaSignInAlt
                  size={20}
                  strokeWidth={1}
                  className='mt-1'
                  color='gray'
                />
                <a className='tab text-md font-bold'>SIGN IN </a>
              </div>

              <div className='self-center  flex flex-col basis-5 w-4/6 mb-4'>
                <SmPillButton
                  text={'Sign in with Facebook'}
                  className=' bg-[#3983FC] hover:bg-[#3983FC] border-2 w-full text-white font-medium h-9'
                  icon={<BsFacebook size={25} className='absolute' />}
                  onClick={(e) => {
                    fbCall();
                    // navigete('/auth/facebook');
                    //                     navigate('/auth/facebook');
                    // axios
                    // setauthOption(1);
                  }}
                />
                {/* <div
                  className='fb-login-button btn'
                  data-width=''
                  data-size='large'
                  data-button-type='continue_with'
                  data-layout='rounded'
                  data-auto-logout-link='false'
                  data-use-continue-as='false'
                ></div> */}

                <SmPillButton
                  text={'Sign in with Google'}
                  className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
                  icon={<FcGoogle size={25} className='absolute' />}
                  onClick={(e) => {
                    // setauthOption(1);
                  }}
                />
                <SmPillButton
                  text={'Sign in with Email'}
                  className=' bg-[#9CC758] hover:bg-[#9CC758] w-full text-white font-medium'
                  icon={<AiOutlineMail size={25} className='absolute' />}
                  onClick={(e) => {
                    setauthOption(1);
                  }}
                />
              </div>
              <span className=' text-sm mb-4 cursor-default'>
                {' '}
                terms and conditions
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalAny;
