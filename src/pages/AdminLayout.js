import React from 'react';
import DevSideBar from '../components/Admin/DevSideBar';
import DevStat from '../components/Admin/DevStat';

function DevHomePage() {
  return (
    <>
      <div className="w-screen flex flex-row">
        <DevSideBar />
        <div data-theme="luxury " className="w-full">
          <DevStat />
        </div>
      </div>
    </>
  );
}

export default DevHomePage;
