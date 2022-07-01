import AuthContextProvider from './contexts/Client/AuthCcontexts';
import LoadingContextProvider from './contexts/LoadingContext';

import Router from './Router/Router';

function App() {
  return (
    <>
      <AuthContextProvider>
        <LoadingContextProvider>
          <Router />
        </LoadingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
