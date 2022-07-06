import React from 'react';

import DevSearchBar from './DevSearchBar';
import DevSideBar from './DevSideBar';
import { Outlet } from 'react-router-dom';
import { checkLocation } from '../../services/checkLocation';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

function DevLayout() {
  const location = useLocation();
  const { isAdminProductPage, isAdminPromotionPage } = checkLocation(location);
  const [DarkonDark, setDarkonDark] = useState(false);
  const params = useParams();
  const isAdminSelectedProductPage =
    params.productId && isAdminProductPage ? true : false;
  return (
    <div
      data-theme={`${DarkonDark ? 'luxury' : 'dark'}`}
      className='w-full h-screen  '
    >
      <DevSideBar>
        <div className=' absolute w-full  z-10 my-2 mr-8 flex   justify-end'>
          <button
            className='btn mx-10 btn-active cursor-pointer '
            onClick={() => {
              setDarkonDark((prev) => !prev);
            }}
          >
            <MdOutlineDarkMode />. Dark
          </button>
        </div>
        {isAdminSelectedProductPage || isAdminPromotionPage || <DevSearchBar />}
        <Outlet />
      </DevSideBar>
      <div></div>
    </div>
  );
}

export default DevLayout;
