import { Link } from 'react-router-dom';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io';
import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import LogInForm from '../../form/LogInForm';
import { SupplierAuthContext } from '../../../../contexts/Supplier/SupplierAuthContext';
import { useNavigate } from 'react-router-dom';
import defaultPic from '../../../../pictures/previewPic.png';

function ProfileDropDown() {
  const navigate = useNavigate();
  const { signOut, role, supplier } = useContext(SupplierAuthContext);
  console.log(role);

  return (
    <>
      <div className='dropdown dropdown-end dropdown-hover '>
        <label tabIndex='0' className='btn m-1 gap-2 rounded-3xl w-auto   '>
          {role === 'SUPPLIER' ? (
            <div className=' flex items-center gap-4  '>
              <img
                src={supplier.profilePicture || defaultPic}
                alt='profilePic'
                className='rounded-full h-8 w-8'
              />
              <p>{supplier.firstName}</p>
            </div>
          ) : (
            <>{<CgProfile />}</>
          )}
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
