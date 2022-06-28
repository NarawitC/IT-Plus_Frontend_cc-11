import React from 'react';
import DevProductTable from '../components/Admin/DevProductTable';
import DevStat from '../components/Admin/DevStat';
import DevStepProcess from '../components/Admin/DevStepProcess';
function AdminProductPage() {
  return (
    <div data-theme='luxury'>
      <DevStat />
      <DevStepProcess />
      <DevProductTable />
    </div>
  );
}

export default AdminProductPage;
