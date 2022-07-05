import AuthContextProvider from './contexts/Client/AuthCcontexts';
import OrderContextProvider from './contexts/Client/orderContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ProductfilterContextProvider from './contexts/ProductContext';
import AdminSearchContextProvider from './contexts/Admin/AdminSearchContext';
import { AnimatePresence } from 'framer-motion';
import Router from './Router/Router';
import AdminContextProvider from './contexts/Admin/AdminContext';

function App() {
  return (
    <>
      <AnimatePresence>
        <AuthContextProvider>
          {/* <LoadingContextProvider> */}
          <ProductfilterContextProvider>
            <OrderContextProvider>
              <AdminSearchContextProvider>
                <AdminContextProvider>
                  <Router />
                </AdminContextProvider>
              </AdminSearchContextProvider>
            </OrderContextProvider>
          </ProductfilterContextProvider>
          {/* </LoadingContextProvider> */}
        </AuthContextProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
