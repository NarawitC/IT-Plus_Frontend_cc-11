import React from 'react';
import DevSidebarMenu from './DevSidebarMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAdminContext } from '../../contexts/Admin/AdminContext';

function DevSideBar({ children }) {
  const { signOut } = useAdminContext();
  return (
    <>
      <div className='drawer sticky  z-20'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content mt-4 '>
          <label htmlFor='my-drawer' className=' btn btn-primary drawer-button'>
            Admin
            <GiHamburgerMenu className='ml-3' />
          </label>
          <div className='flex flex-col gap-5'>{children}</div>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer'
            className='drawer-overlay'
            style={{ backgroundColor: '#00000080' }}
          ></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content '>
            <DevSidebarMenu title='Orders' path='/admin/order' />
            <DevSidebarMenu title='Products' path='/admin/product' />
            <DevSidebarMenu title='Create Promotion' path='/admin/promotion' />
            <DevSidebarMenu title='Logout' path='/admin/sign-in' />
          </ul>
        </div>
      </div>
    </>
  );
}

export default DevSideBar;
