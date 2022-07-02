import React from 'react';
import DevSidebarMenu from './DevSidebarMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAdminContext } from '../../contexts/Admin/AdminContext';

function DevSideBar() {
  const { signOut } = useAdminContext();
  return (
    <>
      <div className='drawer absolute hover:max-w-lg z-20'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
            Admin
            <GiHamburgerMenu className='ml-3' />
          </label>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            <DevSidebarMenu title='Client' path='/admin/client' />
            <DevSidebarMenu title='Orders' path='/admin/orders' />
            <DevSidebarMenu title='Products' path='/admin/product' />
            <DevSidebarMenu title='Create Promotion' path='/admin/promotion' />
            <DevSidebarMenu title='Logout' path='/admin/signIn' />
          </ul>
        </div>
      </div>
    </>
  );
}

export default DevSideBar;
