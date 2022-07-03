import AuthContextProvider from './contexts/Client/AuthCcontexts';
import OrderContextProvider from './contexts/Client/orderContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ProductfilterContextProvider from './contexts/ProductContext';
import { AnimatePresence } from 'framer-motion';
import Router from './Router/Router';

function App() {
  return (
    <>
      <AnimatePresence>
        <AuthContextProvider>
          <LoadingContextProvider>
            <ProductfilterContextProvider>
              <OrderContextProvider>
                <Router />
              </OrderContextProvider>
            </ProductfilterContextProvider>
          </LoadingContextProvider>
        </AuthContextProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
