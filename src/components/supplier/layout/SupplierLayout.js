import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';
function SupplierLayout() {
  return (
    <div className='' data-theme='light'>
      <div className=''>
        <Header />
      </div>
      <div className='flex align-middle gap-24  '>
        <div className=' bg-base-content'>
          <SideBar />
        </div>
        <div className='flex justify-start  w-[900px] items-center '>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
