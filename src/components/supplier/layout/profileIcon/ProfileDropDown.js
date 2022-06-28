import { Link } from 'react-router-dom';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io';
import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import LogInForm from '../../form/LogInForm';
import { SupplierAuthContext } from '../../../../contexts/Supplier/SupplierAuthContext';
import { useNavigate } from 'react-router-dom';
function ProfileDropDown() {
  const navigate = useNavigate();
  const { signOut } = useContext(SupplierAuthContext);

  return (
    <>
      <div class='dropdown dropdown-end dropdown-hover'>
        <label tabIndex='0' className='btn m-1 gap-2 rounded-3xl  '>
          {<CgProfile />}
          <p className=''>Hirun</p>
        </label>
        <ul
          tabIndex='0'
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <Link to={`/supplier/my-shop`}>
              {<BsShopWindow />}
              <p>Shop Profile</p>
            </Link>
          </li>
          <li>
            <button
              type='button'
              onClick={() => {
                signOut();
                navigate('/supplier');
              }}
            >
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
