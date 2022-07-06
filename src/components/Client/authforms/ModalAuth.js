import React, { useEffect, useRef, useState } from 'react';
// import parse from 'html-react-parser';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import SmPillButton from '../../commonUtils/SmPillButton';
import { FaSignInAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import CSignin from './signin';
import axios from 'axios';
import { setAccessToken } from '../../../services/localStorage';
import { useAuthContext } from '../../../contexts/Client/AuthCcontexts';

function ModalAny({ inputEmodal }) {
  const { user, setUser } = useAuthContext();
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
    // console.log(link);
    window.open(link);
    const { data } = await axios.get('/oauth/facebook/callback');
    console.log(data);

    // window.location.href = link;
  };

  const fbreacall = async () => {
    const link = await axios.get('/oauth/facebook', {
      headers: { 'Access-Control-Allow-Origin': true },
    });
    // const link = 'http://localhost:8000/oauth/facebook';
    // console.log(link);
  };

  const handleCallbackResponse = async (response) => {
    try {
      const obj = { googleData: response.credential };
      // const token = jwt_decode(response.credential);
      // console.log(token);

      const login = await axios.post('/client/auth/sign-in-google', obj);
      console.log(login.data);

      const token = login.data.token;
      setAccessToken(token);

      document.getElementById('signInDiv').hiden = true;

      setUser(login.data.user);
      inputEmodal.current.click();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        '590236640794-ksmfc2kfpjo39ggkja1uh4hid492g7iv.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
      width: '300px',
    });
  }, []);

  console.log(user);

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
                <div className='tab text-md font-bold'>SIGN IN </div>
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
                <div
                  id='singinFB'
                  className='fb-login-button btn'
                  data-width=''
                  data-size='large'
                  data-button-type='continue_with'
                  data-layout='rounded'
                  data-auto-logout-link='false'
                  data-use-continue-as='false'
                ></div>

                <div className=' '>
                  <div className=' z-50 absolute space-x-center opacity-[1%] '>
                    <button ref={inputEmodal} id='signInDiv'></button>
                  </div>
                  <SmPillButton
                    text={'Sign in with Google'}
                    className=' bg-[#fffff] hover:bg-transparent border-2 w-full text-gray-900 hover:text-gray-900 font-medium h-9'
                    icon={<FcGoogle size={25} className='absolute' />}
                    onClick={(e) => {
                      // googleBtn.current.click();
                      // console.log('Hi');
                    }}
                  ></SmPillButton>
                </div>

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
