import React, { useState } from 'react';

function SideDrawer({ eldrawer }) {
  const [isDraw, setisDraw] = useState(false);
  return (
    // <div>
    <div
      className={`drawer absolute ${isDraw ? 'z-10' : '-z-10'} duration-200 `}
    >
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        ref={eldrawer}
        onClick={() => {
          // console.log('OPem');
          setisDraw((prev) => !prev);
        }}
      />
      <div className='drawer-content'>
        {/* <!-- Page content here --> */}
        <label
          htmlFor='my-drawer'
          className='btn btn-primary drawer-button hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default SideDrawer;
