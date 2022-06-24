import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminLayout from '../pages/AdminLayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';

import SupplierHomePage from '../pages/supplier/SupplierHomePage';
import SupplierSignUpPage from '../pages/supplier/SupplierSignUpPage';
import DynamicAddProductPage from '../pages/supplier/DynamicAddProductPage';
import MyShopPage from '../pages/supplier/MyShopPage';
import DynamicBalancePage from '../pages/supplier/DynamicBalancePage';
import DynamicOrderTrackingPage from '../pages/supplier/DynamicOrderTrackingPage';
import DynamicProductPage from '../pages/supplier/DynamicProductPage';
function Router() {
  return (
    <Routes>
      <Route path='/user' element={<AdminLayout />}></Route>
      <Route path='/supplier' element={<SupplierLayout />}>
        <Route path='' element={<SupplierHomePage />} />
        <Route path='signup' element={<SupplierSignUpPage />} />
        <Route path='my-product' element={<DynamicProductPage />} />
        <Route path='add-product' element={<DynamicAddProductPage />} />
        <Route path='my-shop' element={<MyShopPage />} />
        <Route path='balance-page' element={<DynamicBalancePage />} />
        <Route
          path='order-tracking-page'
          element={<DynamicOrderTrackingPage />}
        />
      </Route>
      <Route path='/admin' element={<AdminLayout />}></Route>
      <Route path='*' element={useNavigate('/admin')} />
    </Routes>
  );
}
{
  /* <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ClientHeader />}>
        <Route path="" element={<HomePage />} />
        <Route path="friend" element={<FriendPage />} />
        <Route path="profile" element={<ProfilePage />} /> */
}

export default Router;
