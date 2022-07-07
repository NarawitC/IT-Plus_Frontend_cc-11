import Clientlayout from '../pages/Clientlayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import { Link, Route, Routes } from 'react-router-dom';

import Landingpage from '../pages/Userpages/Landingpage';
import AdminOrderPage from '../pages/AdminOrderPage';
import AdminProductPage from '../pages/AdminProductPage';
import AdminClientPage from '../pages/AdminOrderPage';
import AdminPromotion from '../components/Admin/AdminPromotion';
import CheckoutPage from '../../src/pages/client/CheckoutPage';
import DevLayout from '../components/Admin/DevLayout';
import { Navigate } from 'react-router-dom';

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
import SaleOrderPage from '../pages/client/ClientOrderLogPage';

import { useAdminContext } from '../contexts/Admin/AdminContext';
import { useSupplierContext } from '../contexts/Supplier/SupplierAuthContext';
import ClientOrderPage from '../pages/client/orderPage';

import DynamicSelectedTransactionPage from '../pages/supplier/DynamicSelectedTransactionPage';
import DynamicEditSelectedProductPage from '../pages/supplier/DynamicEditSelectedProductPage';

function Router() {
  const { admin } = useAdminContext();
  const { supplier } = useSupplierContext();
  return (
    <Routes>
      <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<ClientDynamicProductPage />} />
        <Route
          path='/auth/facebook'
          element={<Navigate to='/auth/facebook'></Navigate>}
        />
        <Route path='/product' element={<ClientDynamicProductPage />} />
        <Route path='/product/:productId' element={<ProductInfoPage />} />
        <Route path='/shop/:subplierId' element={<ProductByBrand />} />
        <Route path='/my-accout' element={<ClientProfilePage />} />
        <Route path='/order-history' element={<SaleOrderPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/cart/checkout' element={<CheckoutPage />} />
        <Route path='/order/:order' element={<ClientOrderPage />} />
      </Route>

      <>
        <Route path='/supplier' element={<SupplierLayout />}>
          {(supplier ? 1 : 0 || admin ? 1 : 0) && (
            <>
              <Route path='' element={<DynamicOrderPage />} />
              <Route path='signup' element={<SupplierSignUpPage />} />
              <Route path='my-product' element={<ProductPage />} />
              <Route path='add-product' element={<DynamicAddProductPage />} />
              <Route path='my-shop' element={<MyShopPage />} />
              <Route path='balance-wallet' element={<BalanceWalletPage />} />
              <Route path='order' element={<DynamicOrderPage />} />
              {/* <Route path='order/:orderId' element={<DynamicSelectedOrderPage />} /> */}
              <Route
                path='order/:orderId'
                element={<DynamicSelectedOrderPage />}
              />
              {/* <Route path='product/:productId' element={<DynamicSelectedProductPage />} /> */}
              {/* <Route
                path='product/selected'
                element={<DynamicSelectedProductPage />}
              />
              <Route path='tracking' element={<TrackingPage />} /> */}
              <Route
                path='product/:productId'
                element={<DynamicEditSelectedProductPage />}
              />
              {/* <Route path='tracking' element={<TrackingPage />} /> */}
              <Route
                path='transaction/selected'
                element={<DynamicSelectedTransactionPage />}
              />
            </>
          )}
          <Route path='' element={<SupplierSignUpPage />} />
          <Route path='*' element={<Navigate to='/supplier'></Navigate>} />
        </Route>
      </>
      <>
        <Route path='/admin/sign-in' element={<AdminSignInPage />} />
        {admin && (
          <>
            <Route path='/admin' element={<DevLayout />}>
              <Route path='client' element={<AdminClientPage />} />
              <Route path='order' element={<AdminOrderPage />} />
              <Route
                path='order/:orderId'
                element={<DynamicSelectedOrderPage />}
              />

              <Route path='product' element={<AdminProductPage />} />
              <Route path='product/:productId' element={<ProductInfoPage />} />
              {/* <Route path='sign-in' element={<AdminSignInPage />} /> */}
              <Route
                path='*'
                element={<Navigate to='/admin/order'></Navigate>}
              />
              <Route
                path=''
                element={<Navigate to='/admin/order'></Navigate>}
              />
              <Route path='promotion' element={<AdminPromotion />} />
            </Route>
          </>
        )}
      </>
      <Route path='*' element={<Navigate to='/'></Navigate>} />
    </Routes>
  );
}

export default Router;
