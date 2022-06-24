import React from 'react';
import { Outlet } from 'react-router-dom';
import DevSearchBar from '../components/Admin/DevSearchBar';
import DevSideBar from '../components/Admin/DevSideBar';
import DevStat from '../components/Admin/DevStat';

function DevHomePage() {
  return (
    <>
      <div data-theme="luxury">
        <DevSearchBar />
        <DevSideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DevHomePage;
