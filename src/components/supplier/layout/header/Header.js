import Sidebar from '../sidebar/SideBar';
import ProfileIcon from '../profileIcon/ProfileIcon';
import NotiIcon from '../notiIcon/NotiIcon';
import { AiOutlineSmile } from 'react-icons/ai';
import { MdLogin } from 'react-icons/md';
import LogInForm from '../../form/LogInForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
function Header() {
  const navigate = useNavigate();
  // console.log('first', useNavigate);
  // console.log(navigate);
  const modalRef = useRef();
  return (
    <>
      <div className='w-full h-[80px] bg-primary flex items-center'>
        <div className='flex justify-between w-full '>
          <Link to={`/supplier`}>
            <button className='flex items-center text-white text-3xl w-[150px] justify-center gap-1'>
              {<AiOutlineSmile />}
              <h1>IT</h1>
            </button>
          </Link>
          <div className='flex mr-12 gap-7 items-center justify-around'>
            <ProfileIcon />

            <label for='my-modal-2' className='btn modal-button gap-2'>
              <MdLogin />
              <p>Login</p>
            </label>
            <input
              type='checkbox'
              id='my-modal-2'
              className='modal-toggle'
              ref={modalRef}
            />
            <div className='modal'>
              <div className='modal-box'>
                <label className='flex  flex-col justify-center items-center '>
                  <div>
                    <label
                      for='my-modal-2'
                      className='btn btn-sm btn-circle absolute right-2 top-2 '
                    >
                      ✕
                    </label>
                    <label
                      for='e-mail'
                      className='block mb-2 text-sm font-medium text-gray-1200 '
                    >
                      Your email
                    </label>
                    <input
                      type='text'
                      id='e-mail'
                      className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                      required
                    />
                  </div>
                  <br />
                  <div>
                    <label
                      for='password'
                      className='block mb-2 text-sm font-medium text-gray-1200 '
                    >
                      Your password
                    </label>
                    <input
                      type='text'
                      id='password'
                      className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='••••••••'
                      required
                    />
                  </div>
                </label>
                <div className='modal-action flex justify-center'>
                  <button
                    type='button'
                    for='my-modal-2'
                    className='btn btn-secondary'
                    onClick={() => {
                      console.log('first');
                      modalRef.current.click();
                      navigate('/supplier/signup');
                    }}
                  >
                    สมัครเป็นผู้ขาย
                  </button>
                  <button
                    for='my-modal-2'
                    className='btn btn-primary'
                    onClick={() => {}}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
            <NotiIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
