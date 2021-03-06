import React from 'react';
import DevClientTable from '../components/Admin/DevClientTable';
import DevLayout from '../components/Admin/DevLayout';
import DevProductTable from '../components/Admin/DevProductTable';
import DevStat from '../components/Admin/DevStat';

function DevClientPage() {
  return (
    <>
      <div data-theme='cupcake'>
        <div>
          <DevClientTable />
        </div>
      </div>
    </>
  );
}

export default DevClientPage;
