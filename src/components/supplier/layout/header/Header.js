import Sidebar from '../sidebar/SideBar';
import ProfileIcon from '../profileIcon/ProfileIcon';
import NotiIcon from '../notiIcon/NotiIcon';
import { AiOutlineSmile } from 'react-icons/ai';
import { MdLogin } from 'react-icons/md';
import LogInForm from '../../form/LogInForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef, useContext, useState } from 'react';
import { SupplierAuthContext } from '../../../../contexts/Supplier/SupplierAuthContext';
function Header() {
  const navigate = useNavigate();
  const { signIn, role } = useContext(SupplierAuthContext);

  // console.log('first', useNavigate);
  // console.log(navigate);
  const modalRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className=' h-[80px] bg-gradient-to-r from-primary via-white to-warning  flex items-center '>
        <div className='flex justify-between  items-center w-screen'>
          <Link to={`/supplier/order`}>
            <button className='flex items-center text-warning text-3xl w-[150px] justify-center gap-1 animate-bounce'>
              {<AiOutlineSmile />}
              <h1 className=''>iT+</h1>
            </button>
          </Link>
          <div className='flex mr-12 gap-7 items-center justify-around'>
            <ProfileIcon />

            <label
              htmlFor='my-modal-2'
              className={`${
                role === 'SUPPLIER' ? 'hidden' : 'btn modal-button gap-2'
              } `}
            >
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
                  <div className=' pt-2'>
                    <label
                      htmlFor='my-modal-2'
                      className='btn btn-sm btn-circle absolute right-2 top-2 '
                    >
                      ✕
                    </label>
                    <br />
                    <label
                      htmlFor='e-mail'
                      className='block mb-2 text-sm font-medium text-gray-1200 '
                    >
                      E-mail
                    </label>
                    <input
                      type='text'
                      id='e-mail'
                      className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                  </div>
                  <br />
                  <br />
                  <div>
                    <label
                      htmlFor='password'
                      className='block mb-2 text-sm font-medium text-gray-1200 '
                    >
                      รหัสผ่าน
                    </label>
                    <input
                      type='password'
                      id='password'
                      className='w-[380px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='••••••••'
                      required
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                    />
                  </div>
                </label>
                <br />
                <div className='modal-action flex justify-center'>
                  <button
                    type='button'
                    htmlFor='my-modal-2'
                    className='btn btn-secondary'
                    onClick={() => {
                      modalRef.current.click();
                      navigate('/supplier/signup');
                    }}
                  >
                    สมัครเป็นผู้ขาย
                  </button>
                  <button
                    htmlFor='my-modal-2'
                    className='btn btn-primary'
                    onClick={() => {
                      signIn(email, password);
                      modalRef.current.click();
                      navigate('/supplier');
                    }}
                  >
                    เข้าสู่ระบบ
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
