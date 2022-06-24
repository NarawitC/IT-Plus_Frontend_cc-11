import { Link } from 'react-router-dom';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io';

import { BiLogOut } from 'react-icons/bi';
import LogInForm from '../../form/LogInForm';

function ProfileDropDown() {
  return (
    <>
      <div class='dropdown dropdown-end dropdown-hover'>
        <label tabindex='0' className='btn m-1 gap-2 rounded-3xl  '>
          {<CgProfile />}
          <p className=''>Hirun</p>
        </label>
        <ul
          tabindex='0'
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <Link to={`/supplier/my-shop`}>
              {<BsShopWindow />}
              <p>Shop Profile</p>
            </Link>
          </li>
          <li>
            <button>
              {<BiLogOut />}
              <p>Logout</p>
            </button>
            <LogInForm />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfileDropDown;
