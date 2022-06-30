import React from 'react';

import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';
import AdminContextProvider from '../../contexts/Admin/AdminContext';

function DevLayout() {
  return (
    <AdminContextProvider>
      <div data-theme='luxury' className='w-full h-screen '>
        <DevSearchBar />
        <DevSideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </AdminContextProvider>
  );
}

export default DevLayout;
