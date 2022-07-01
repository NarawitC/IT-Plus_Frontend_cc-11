import AdminLayout from '../pages/AdminLayout';
import Clientlayout from '../pages/Clientlayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Landingpage from '../pages/Userpages/Landingpage';
import DevStat from '../components/Admin/DevStat';
import AdminOrder from '../pages/AdminOrder';

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

import SupplierHomePage from '../pages/supplier/SupplierHomePage';
import SupplierSignUpPage from '../pages/supplier/SupplierSignUpPage';
import DynamicAddProductPage from '../pages/supplier/DynamicAddProductPage';
import MyShopPage from '../pages/supplier/MyShopPage';
import BalanceWalletPage from '../pages/supplier/BalanceWalletPage';
import DynamicOrderPage from '../pages/supplier/DynamicOrderPage';
import ProductPage from '../pages/supplier/ProductPage';
import ProductInfoPage from '../pages/product/product-info/ProductInfoPage';
import { useLoading } from '../contexts/LoadingContext';

import TrackingPage from '../pages/supplier/TrackingPage';
import DynamicSelectedOrderPage from '../pages/supplier/DynamicSelectedOrderPage';
import DynamicSelectedProductPage from '../pages/supplier/DynamicSelectedProductPage';
import DynamicSelectedTransactionPage from '../pages/supplier/DynamicSelectedTransactionPage';
function Router() {
  return (
    <Routes>
      {/* todo wait for modify route */}
      <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<Landingpage />} />
        <Route path='/product/:productId' element={<ProductInfoPage />} />
      </Route>
      {/* <Route path='signup' element={<ClientSignUpPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='product-item/:productId' element={<ProductItemPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path='sale-order' element={<SaleOrderPage />} />
        <Route path='budget-me' element={<BudgetMePage />} />
        <Route path='my-spec' element={<MySpecPage />} />
      </Route> */}
      <Route path='/supplier' element={<SupplierLayout />}>
        <Route path='' element={<DynamicOrderPage />} />
        <Route path='signup' element={<SupplierSignUpPage />} />
        <Route path='my-product' element={<ProductPage />} />
        <Route path='add-product' element={<DynamicAddProductPage />} />
        <Route path='my-shop' element={<MyShopPage />} />
        <Route path='balance-wallet' element={<BalanceWalletPage />} />
        <Route path='order' element={<DynamicOrderPage />} />
        {/* <Route path='order/:orderId' element={<DynamicSelectedOrderPage />} /> */}
        <Route path='order/:orderId' element={<DynamicSelectedOrderPage />} />
        {/* <Route path='product/:productId' element={<DynamicSelectedProductPage />} /> */}
        <Route
          path='product/selected'
          element={<DynamicSelectedProductPage />}
        />
        {/* <Route path='tracking' element={<TrackingPage />} /> */}
        <Route
          path='transaction/selected'
          element={<DynamicSelectedTransactionPage />}
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
