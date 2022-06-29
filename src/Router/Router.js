import AdminLayout from '../pages/AdminLayout';
import Clientlayout from '../pages/Clientlayout';
import SupplierLayout from '../components/supplier/layout/SupplierLayout';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Landingpage from '../pages/Userpages/Landingpage';
import DevStat from '../components/Admin/DevStat';
import AdminOrderPage from '../pages/AdminOrderPage';
import AdminProductPage from '../pages/AdminProductPage';
import AdminClientPage from '../pages/AdminOrderPage';
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
import DynamicProductPage from '../pages/supplier/DynamicProductPage';
import ProductInfoPage from '../pages/product/product-info/ProductInfoPage';
import { useLoading } from '../contexts/LoadingContext';

import TrackingPage from '../pages/supplier/TrackingPage';
import DynamicSelectedOrderPage from '../pages/supplier/DynamicSelectedOrderPage';
import ClientProfilePage from '../pages/client/ClientProfilePage';
import ClientDynamicProductPage from '../pages/client/ClientDynamicProductPage';
import ProductfilterContextProvider from '../contexts/ProductContext';
import ProductByBrand from '../pages/product/productbySubplier/ProductBySupplier';
import CartPage from '../pages/client/CartPage';

import OmiseTestPage from '../pages/OmiseTestPage';

function Router() {
  return (
    <ProductfilterContextProvider>
      <Routes>
        {/* todo wait for modify route */}
        <Route path="/omise" element={<OmiseTestPage />} />

        <Route path="/" element={<Clientlayout />}>
          <Route path="" element={<Landingpage />} />
          <Route path="/product" element={<ClientDynamicProductPage />} />
          <Route path="/product/:productId" element={<ProductInfoPage />} />
          <Route path="/my-accout" element={<ClientProfilePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route
            path="/product/supplier/:subplierId"
            element={<ProductByBrand />}
          />
        </Route>
        {/* <Route path='signup' element={<ClientSignUpPage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path='sale-order' element={<SaleOrderPage />} />
        <Route path='budget-me' element={<BudgetMePage />} />
        <Route path='my-spec' element={<MySpecPage />} />
      </Route> */}
        <Route path="/supplier" element={<SupplierLayout />}>
          <Route path="" element={<SupplierHomePage />} />
          <Route path="signup" element={<SupplierSignUpPage />} />
          <Route path="my-product" element={<DynamicProductPage />} />
          <Route path="add-product" element={<DynamicAddProductPage />} />
          <Route path="my-shop" element={<MyShopPage />} />
          <Route path="balance-wallet" element={<BalanceWalletPage />} />
          <Route path="order" element={<DynamicOrderPage />} />
          <Route path="order/:orderId" element={<DynamicSelectedOrderPage />} />
          <Route path="tracking" element={<TrackingPage />} />
        </Route>
        <Route path="/admin" element={<DevLayout />}>
          <Route path="client" element={<AdminClientPage />} />
          {/* admin page layout */}
          <Route path="order" element={<AdminOrderPage />} />
          {/* // Admin Client page */}
          <Route path="product" element={<AdminProductPage />} />
          <Route path="*" element={<Navigate to="/admin/order"></Navigate>} />
          <Route path="" element={<Navigate to="/admin/order"></Navigate>} />
        </Route>
        <Route path="/" element={<Navigate to="/admin/order"></Navigate>} />
        <Route path="*" element={<Navigate to="/admin/order"></Navigate>} />
      </Routes>
    </ProductfilterContextProvider>
  );
}

export default Router;
