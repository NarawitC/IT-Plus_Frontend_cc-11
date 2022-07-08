import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/allpages/Footer';
import Header from '../components/Client/layout/Header/Header';
import SideDrawer from '../components/Client/layout/Header/SideDraver';
import DynamicAlerttoast from '../components/commonUtils/DynamicAlerttoast';
import LoadingPage from '../components/commonUtils/Loadingpage';
import AuthContextProvider from '../contexts/Client/AuthCcontexts';
import CountdownContextProvider from '../contexts/clountdownContext';
import { useErrorContext } from '../contexts/ErrorContext';
import { useLoading } from '../contexts/LoadingContext';
import CompletedModal from '../components/commonUtils/CompletedModal';
import { useCompletedActionContext } from '../contexts/Client/completedAction';

function Clientlayout() {
  const { isShowCompletedAction } = useCompletedActionContext();
  const eldrawer = useRef();
  const clicksidebar = () => {
    eldrawer.current.click();
  };
  return (
    <AuthContextProvider>
      <CountdownContextProvider>
        <div data-theme='winter'>
          {/* {error ? <DynamicAlerttoast /> : null} */}
          <SideDrawer eldrawer={eldrawer} />
          <div className=' min-h-screen max-w-[1200px] self-center m-auto'>
            <Header clicksidebar={clicksidebar} />
            {isShowCompletedAction ? <CompletedModal></CompletedModal> : null}
            {/* <CompletedModal></CompletedModal> */}
            <Outlet />
          </div>
          <Footer />
        </div>
      </CountdownContextProvider>
    </AuthContextProvider>
  );
}

export default Clientlayout;
