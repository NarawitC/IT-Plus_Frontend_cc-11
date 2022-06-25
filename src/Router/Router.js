import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminLayout from '../pages/AdminLayout';
// import Clientlayout from '../pages/Clientlayout';
// import Landingpage from '../pages/Userpages/Landingpage';
// import ClientSignUpPage from '../pages/client/ClientSignUpPage';
// import CategoryPage from '../pages/client/CategoryPage';
// import ProductItemPage from '../pages/client/ProductItemPage';
// import CartPage from '../pages/client/CartPage';
// import PaymentPage from '../pages/client/PaymentPage';
// import SaleOrderPage from '../pages/client/SaleOrderPage';
// import MySpecPage from '../pages/client/MySpecPage';
// import BudgetMePage from '../pages/client/BudgetMePage';

import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import SupplierHomePage from '../pages/supplier/SupplierHomePage';
import SupplierSignUpPage from '../pages/supplier/SupplierSignUpPage';
import DynamicAddProductPage from '../pages/supplier/DynamicAddProductPage';
import MyShopPage from '../pages/supplier/MyShopPage';
import DynamicBalancePage from '../pages/supplier/DynamicBalancePage';
import DynamicOrderPage from '../pages/supplier/DynamicOrderPage';
import DynamicProductPage from '../pages/supplier/DynamicProductPage';
import TrackingPage from '../pages/supplier/TrackingPage';
import OrderDetailTrackingPage from '../pages/supplier/OrderDetailTrackingPage';
function Router() {
  return (
    <Routes>
      {/* todo wait for modify route */}
      {/* <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<Landingpage />} />
        <Route path='signup' element={<ClientSignUpPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='product-item/:productId' element={<ProductItemPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path='sale-order' element={<SaleOrderPage />} />
        <Route path='budget-me' element={<BudgetMePage />} />
        <Route path='my-spec' element={<MySpecPage />} />
      </Route> */}
      <Route path='/supplier' element={<SupplierLayout />}>
        <Route path='' element={<SupplierHomePage />} />
        <Route path='signup' element={<SupplierSignUpPage />} />
        <Route path='my-product' element={<DynamicProductPage />} />
        <Route path='add-product' element={<DynamicAddProductPage />} />
        <Route path='my-shop' element={<MyShopPage />} />
        <Route path='balance-wallet' element={<DynamicBalancePage />} />
        <Route path='order' element={<DynamicOrderPage />} />
        <Route path='order/:orderId' element={<OrderDetailTrackingPage />} />
        <Route path='tracking' element={<TrackingPage />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}></Route>
      <Route path='*' element={useNavigate('/')} />
    </Routes>
  );
}

export default Router;
