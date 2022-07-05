import React from 'react';
import { CareateSubcat } from '../apis/admin/adminUserAPI';
import DevSignIn from '../components/Admin/DevSignIn';

function AdminSignInPage() {
  return (
    <div data-theme='luxury'>
      <DevSignIn />
      <button
        onClick={() => {
          CareateSubcat();
        }}
        className='btn bg-white'
      ></button>
    </div>
  );
}

export default AdminSignInPage;
