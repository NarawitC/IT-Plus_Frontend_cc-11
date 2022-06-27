import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';

function Clientinfo() {
  const { signOut } = useAuthContext();
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src='https://api.lorem.space/image/face?hash=33791' />
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
          <a>My Orders</a>
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
