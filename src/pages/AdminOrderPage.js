import React from 'react';
import DevStat from '../components/Admin/DevStat';
import DevClientTable from '../components/Admin/DevClientTable';
function AdminOrderPage() {
  return (
    <>
      <div data-theme='luxury'>
        <DevStat />
        <div>
          <DevClientTable />
        </div>
      </div>
    </>
  );
}

export default AdminOrderPage;
