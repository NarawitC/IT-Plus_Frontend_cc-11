import AuthContextProvider from './contexts/Client/AuthCcontexts';
import Router from './Router/Router';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
