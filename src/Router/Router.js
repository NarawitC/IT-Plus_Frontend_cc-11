import AdminLayout from '../pages/AdminLayout';
import Clientlayout from '../pages/Clientlayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import { Link, Route, Routes } from 'react-router-dom';

import Landingpage from '../pages/Userpages/Landingpage';
import DevStat from '../components/Admin/DevStat';
import AdminOrderPage from '../pages/AdminOrderPage';
import AdminProductPage from '../pages/AdminProductPage';
import AdminClientPage from '../pages/AdminOrderPage';
import CheckoutPage from '../../src/pages/client/CheckoutPage';
import DevLayout from '../components/Admin/DevLayout';
import { Navigate } from 'react-router-dom';

// import Clientlayout from '../pages/Clientlayout';
// import Landingpage from '../pages/Userpages/Landingpage';
// import ClientSignUpPage from '../pages/client/ClientSignUpPage';
// import CategoryPage from '../pages/client/CategoryPage';
// import ProductItemPage from '../pages/client/ProductItemPage';
// import CartPage from '../pages/client/CartPage';
// import PaymentPage from '../pages/client/PaymentPage';
// import SaleOrderPage from '../pages/client/SaleOrderPage';
// import MySpecPage from '../pages/client/MySpecPage';
// import BudgetMePage7 from '../pages/client/BudgetMePage';

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
import ClientProfilePage from '../pages/client/ClientProfilePage';
import ClientDynamicProductPage from '../pages/client/ClientDynamicProductPage';
import ProductfilterContextProvider from '../contexts/ProductContext';
import ProductByBrand from '../pages/product/productbySubplier/ProductBySupplier';
import CartPage from '../pages/client/CartPage';
import DynamicSelectedProductPage from '../pages/supplier/DynamicSelectedProductPage';
import AdminSignInPage from '../pages/AdminSignInPage';
import SaleOrderPage from '../pages/client/SaleOrderPage';

import { useAdminContext } from '../contexts/Admin/AdminContext';
import { useSupplierContext } from '../contexts/Supplier/SupplierAuthContext';
import ClientOrderPage from '../pages/client/orderPage';

function Router() {
  const { admin } = useAdminContext();
  const { supplier } = useSupplierContext();
  return (
    <Routes>
      {/* todo wait for modify route */}
      <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<Landingpage />} />
        <Route path='/product' element={<ClientDynamicProductPage />} />
        <Route path='/product/:productId' element={<ProductInfoPage />} />
        <Route path='/my-accout' element={<ClientProfilePage />} />
        <Route path='/order-history' element={<SaleOrderPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/cart/checkout' element={<CheckoutPage />} />
        <Route path='/order/:order' element={<ClientOrderPage />} />

        <Route
          path='/product/supplier/:subplierId'
          element={<ProductByBrand />}
        />
      </Route>
      {/* <Route path='signup' element={<ClientSignUpPage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path='sale-order' element={<SaleOrderPage />} />
        <Route path='budget-me' element={<BudgetMePage />} />
        <Route path='my-spec' element={<MySpecPage />} />
      </Route> */}

      {supplier && (
        <>
          <Route path='/supplier' element={<SupplierLayout />}>
            <Route path='' element={<DynamicOrderPage />} />
            <Route path='signup' element={<SupplierSignUpPage />} />
            <Route path='my-product' element={<ProductPage />} />
            <Route path='add-product' element={<DynamicAddProductPage />} />
            <Route path='my-shop' element={<MyShopPage />} />
            <Route path='balance-wallet' element={<BalanceWalletPage />} />
            <Route path='order' element={<DynamicOrderPage />} />
            {/* <Route path='order/:orderId' element={<DynamicSelectedOrderPage />} /> */}
            <Route
              path='order/selected'
              element={<DynamicSelectedOrderPage />}
            />
            {/* <Route path='product/:productId' element={<DynamicSelectedProductPage />} /> */}
            <Route
              path='product/selected'
              element={<DynamicSelectedProductPage />}
            />
            <Route path='tracking' element={<TrackingPage />} />
          </Route>
        </>
      )}

      {admin && (
        <>
          <Route path='/admin' element={<DevLayout />}>
            <Route path='client' element={<AdminClientPage />} />
            {/* admin page layout */}
            <Route path='order' element={<AdminOrderPage />} />
            {/* // Admin Client page */}
            <Route path='product' element={<AdminProductPage />} />
            <Route path='*' element={<Navigate to='/admin/order'></Navigate>} />
            <Route path='sign-in' element={<AdminSignInPage />} />
            <Route path='' element={<Navigate to='/admin/order'></Navigate>} />
          </Route>
        </>
      )}
      <Route path='/admin/sign-in' element={<AdminSignInPage />} />

      <Route path='/' element={<Navigate to='/admin/order'></Navigate>} />
    </Routes>
  );
}

export default Router;
