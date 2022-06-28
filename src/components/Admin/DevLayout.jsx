import React from 'react';
import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';

function DevLayout() {
  return (
    <div>
      <DevSearchBar />
      <DevSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DevLayout;
