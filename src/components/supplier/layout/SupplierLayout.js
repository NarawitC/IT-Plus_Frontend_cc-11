import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function SupplierLayout() {
  const [DarkonDark, setDarkonDark] = useState(false);

  return (
    <div className='h-full ' data-theme={DarkonDark ? 'dark' : `light`}>
      <Header setDarkonDark={setDarkonDark} />

      <div className=' flex  align-middle fixed'>
        <div className={` text-font-Kanit`}>
          <SideBar />
        </div>
        <div
          className={`flex ${
            DarkonDark ? ' bg-gray-700' : ' bg-gray-50 '
          } items-start justify-center pb-24  w-screen h-screen overflow-y-scroll`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
