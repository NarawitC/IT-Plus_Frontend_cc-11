import React from 'react';
import DevSidebarMenu from './DevSidebarMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

function DevSideBar() {
  return (
    <>
      <div className="drawer absolute z-30">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Admin
            <GiHamburgerMenu className="ml-3" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <DevSidebarMenu title="Orders" path="" />
            <DevSidebarMenu title="Cart" path="" />
            <DevSidebarMenu title="Payment" path="" />
            <DevSidebarMenu title="Shipment" path="" />
            <DevSidebarMenu title="Products" path="" />
            <DevSidebarMenu title="Sellers" path="" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default DevSideBar;
