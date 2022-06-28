import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorContextProvider from './contexts/ErrorContext';
import ReRenderContextProvider from './contexts/ReRenderContext';
import SupplierAuthContextProvider from './contexts/Supplier/SupplierAuthContext';
import ShippingOrderStatusContextProvider from './contexts/ShippingOrderStatusContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <BrowserRouter>
        <ReRenderContextProvider>
          <SupplierAuthContextProvider>
            <ShippingOrderStatusContextProvider>
              <App />
            </ShippingOrderStatusContextProvider>
          </SupplierAuthContextProvider>
        </ReRenderContextProvider>
      </BrowserRouter>
    </ErrorContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
