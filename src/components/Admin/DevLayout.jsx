import React from 'react';
import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';

function DevLayout() {
  return (
    <div data-theme='luxury' className='w-full h-screen '>
      <DevSearchBar />
      <DevSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DevLayout;
