import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';
function SupplierLayout() {
  return (
    <div className='' data-theme='light'>
      <Header />

      <div className='flex align-middle '>
        <div className='bg-base-content'>
          <SideBar />
        </div>
        <div className='flex justify-center items-center box w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
