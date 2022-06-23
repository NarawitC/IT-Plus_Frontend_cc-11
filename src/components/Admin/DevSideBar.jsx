import React from 'react';
import DevSidebarMenu from './DevSidebarMenu';

function DevSideBar() {
  return (
    <>
      <div class="drawer absolute z-10 w-1/12 max-w-md">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
