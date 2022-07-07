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
        <div className=' absolute w-full  z-10 flex justify-end mt-4   '>
          <button
            className='btn  btn-active cursor-pointer '
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
