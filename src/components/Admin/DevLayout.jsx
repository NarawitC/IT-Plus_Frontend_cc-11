import React from 'react';

import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';
import { checkLocation } from '../../services/checkLocation';
import { useLocation, useParams } from 'react-router-dom';

function DevLayout() {
  const location = useLocation();
  const { isAdminProductPage, isAdminPromotionPage } = checkLocation(location);
  const params = useParams();
  const isAdminSelectedProductPage =
    params.productId && isAdminProductPage ? true : false;
  return (
    <div data-theme='dark' className='w-full h-screen '>
      <DevSideBar>
        {isAdminSelectedProductPage || isAdminPromotionPage || <DevSearchBar />}
        <Outlet />
      </DevSideBar>
      <div></div>
    </div>
  );
}

export default DevLayout;
