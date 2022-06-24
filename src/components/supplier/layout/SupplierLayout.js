import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';
function SupplierLayout() {
  return (
    <div className='' data-theme='light'>
      <div className=''>
        <Header />
      </div>
      <div className='flex align-middle justify-between '>
        <div className=' bg-base-content'>
          <SideBar />
        </div>
        <div className='flex justify-center  w-[900px] items-center'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
