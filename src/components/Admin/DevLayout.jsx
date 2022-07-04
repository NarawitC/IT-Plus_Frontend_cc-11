import React from 'react';

import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';
import { checkLocation } from '../../services/checkLocation';
import { useLocation } from 'react-router-dom';

function DevLayout() {
  const location = useLocation();
  const { isAdminPromotionPage } = checkLocation(location);
  return (
    <div data-theme='luxury' className='w-full h-screen '>
      {!isAdminPromotionPage && <DevSearchBar />}
      <DevSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DevLayout;
