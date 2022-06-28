import { Route, Routes } from 'react-router-dom';
import AdminOrderPage from '../pages/AdminOrderPage';
import AdminProductPage from '../pages/AdminProductPage';
import AdminClientPage from '../pages/AdminOrderPage';
import DevLayout from '../components/Admin/DevLayout';
import { Navigate } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path='/admin' element={<DevLayout></DevLayout>}>
        <Route path='client' element={<AdminClientPage />} />
        {/* admin page layout */}
        <Route path='order' element={<AdminOrderPage />} />
        {/* // Admin Client page */}
        <Route path='product' element={<AdminProductPage />} />
        <Route path='*' element={<Navigate to='/admin/order'></Navigate>} />
        <Route path='' element={<Navigate to='/admin/order'></Navigate>} />
      </Route>
      <Route path='/' element={<Navigate to='/admin/order'></Navigate>} />
      <Route path='*' element={<Navigate to='/admin/order'></Navigate>} />
    </Routes>
  );
}

export default Router;
