import React from 'react';
import DevOrderTable from '../components/Admin/DevOrderTable';
import DevStat from '../components/Admin/DevStat';
import DevStepProcess from '../components/Admin/DevStepProcess';

function AdminOrder() {
  return (
    <>
      <DevStat />
      <DevStepProcess />
      <DevOrderTable />
    </>
  );
}

export default AdminOrder;
