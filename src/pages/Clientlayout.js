import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Client/layout/Header/Header';
import SideDrawer from '../components/Client/layout/Header/SideDrawer';

function Clientlayout() {
  const eldrawer = useRef();
  const clicksidebar = () => {
    eldrawer.current.click();
  };
  return (
    <div data-theme='winter'>
      <SideDrawer eldrawer={eldrawer} />
      <div className=' min-h-screen max-w-[1200px] self-center m-auto'>
        <Header clicksidebar={clicksidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default Clientlayout;
