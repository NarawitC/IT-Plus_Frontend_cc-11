import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Client/layout/Header/Header';
import SideDrawer from '../components/Client/layout/Header/SideDrawer';
import LoadingPage from '../components/commonUtils/Loadingpage';
import AuthContextProvider from '../contexts/Client/AuthCcontexts';
import CountdownContextProvider from '../contexts/clountdownContext';
import { useLoading } from '../contexts/LoadingContext';

function Clientlayout() {
  const eldrawer = useRef();
  const { Isloading } = useLoading();
  const clicksidebar = () => {
    eldrawer.current.click();
  };
  return (
    <AuthContextProvider>
      <CountdownContextProvider>
        <div data-theme='winter'>
          {Isloading ? <LoadingPage /> : null}
          <SideDrawer eldrawer={eldrawer} />
          <div className=' min-h-screen max-w-[1200px] self-center m-auto'>
            <Header clicksidebar={clicksidebar} />
            <Outlet />
          </div>
        </div>
      </CountdownContextProvider>
    </AuthContextProvider>
  );
}

export default Clientlayout;
