import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Client/layout/Header/Header';

function Userlayout() {
  return (
    <div
      className=' min-h-screen max-w-[1200px] self-center m-auto'
      data-theme='winter'
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Userlayout;
