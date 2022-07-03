import AuthContextProvider from './contexts/Client/AuthCcontexts';
import OrderContextProvider from './contexts/Client/orderContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ProductfilterContextProvider from './contexts/ProductContext';

import Router from './Router/Router';

function App() {
  return (
    <>
      <AuthContextProvider>
        <LoadingContextProvider>
          <ProductfilterContextProvider>
            <OrderContextProvider>
              <Router />
            </OrderContextProvider>
          </ProductfilterContextProvider>
        </LoadingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
