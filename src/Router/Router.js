import AdminLayout from '../pages/AdminLayout';
import Clientlayout from '../pages/Clientlayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Landingpage from '../pages/Userpages/Landingpage';
import DevStat from '../components/Admin/DevStat';
import AdminOrder from '../pages/AdminOrder';

import SupplierHomePage from '../pages/supplier/SupplierHomePage';
import SupplierSignUpPage from '../pages/supplier/SupplierSignUpPage';
import DynamicAddProductPage from '../pages/supplier/DynamicAddProductPage';
import MyShopPage from '../pages/supplier/MyShopPage';
import DynamicBalancePage from '../pages/supplier/DynamicBalancePage';
import DynamicOrderTrackingPage from '../pages/supplier/DynamicOrderTrackingPage';
import DynamicProductPage from '../pages/supplier/DynamicProductPage';
import { useLoading } from '../contexts/LoadingContext';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<Landingpage />} />
      </Route>
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
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='' element={<AdminOrder />} />
        <Route path='editProduct' element={<DevStat />} />
        <Route path='*' element={useNavigate('/admin')} />
      </Route>
      <Route path='*' element={useNavigate('/')} />
    </Routes>
  );
}

export default Router;
