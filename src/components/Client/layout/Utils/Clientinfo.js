import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
import { CgProfile } from 'react-icons/cg';
function Clientinfo({ inputProfileDrop }) {
  const { signOut } = useAuthContext();
  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex='0'
        className='btn btn-ghost btn-circle avatar '
        ref={inputProfileDrop}
      >
        <div
          className='w-10 rounded-full px-1 pt-1 flex justify-center items-center'
          onMouseOver={() => {
            inputProfileDrop.current.focus();
          }}
          onMouseLeave={() => {
            // inputProfileDrop.current.click();
          }}
        >
          <CgProfile size={30} />
          {/* <img src='https://api.lorem.space/image/face?hash=33791' /> */}
        </div>
      </label>
      <ul
        tabIndex='0'
        className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <Link to='/my-accout' className='justify-between'>
            My Profile
            <span className='badge'>New</span>
          </Link>
        </li>
        <li>
          <Link to='/order-history'>My Orders</Link>
        </li>
        <li>
          <a
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Clientinfo;
