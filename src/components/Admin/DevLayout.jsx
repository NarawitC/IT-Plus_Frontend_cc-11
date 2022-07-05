import React from 'react';

import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';
import { checkLocation } from '../../services/checkLocation';
import { useLocation, useParams } from 'react-router-dom';

function DevLayout() {
  const location = useLocation();
  const { isAdminProductPage } = checkLocation(location);
  const params = useParams();
  const isAdminSelectedProductPage =
    params.productId && isAdminProductPage ? true : false;
  console.log(isAdminSelectedProductPage);
  return (
    <div data-theme='cupcake' className='w-full h-screen '>
      {isAdminSelectedProductPage || <DevSearchBar />}
      <DevSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DevLayout;
