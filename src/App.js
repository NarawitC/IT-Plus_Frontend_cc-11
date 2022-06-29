import AuthContextProvider from './contexts/Client/AuthCcontexts';
import LoadingContextProvider from './contexts/LoadingContext';
import ProductfilterContextProvider from './contexts/ProductContext';
import Router from './Router/Router';

function App() {
  return (
    <>
      <AuthContextProvider>
        <LoadingContextProvider>
          <ProductfilterContextProvider>
            <Router />
          </ProductfilterContextProvider>
        </LoadingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
