import React from 'react';
import DevStat from '../components/Admin/DevStat';
import DevOrderTable from '../components/Admin/DevOrderTable';
function AdminOrderPage() {
  return (
    <>
      <div data-theme='cupcake'>
        <DevStat />
        <div>
          <DevOrderTable />
        </div>
      </div>
    </>
  );
}

export default AdminOrderPage;
