import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorContextProvider from './contexts/ErrorContext';
import ReRenderContextProvider from './contexts/ReRenderContext';
import SupplierAuthContextProvider from './contexts/Supplier/SupplierAuthContext';
import ShippingOrderStatusContextProvider from './contexts/Supplier/ShippingOrderStatusContext';
import OrderContextProvider from './contexts/Supplier/OrderContext';
import SupplierProductContextProvider from './contexts/Supplier/SupplierProductContext';
import GoogleMapContextProvider from './contexts/googleMap/googleMap';
import CompletedActionProvider from './contexts/Client/completedAction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <BrowserRouter>
        <ReRenderContextProvider>
          <CompletedActionProvider>
            <GoogleMapContextProvider>
              <SupplierAuthContextProvider>
                <SupplierProductContextProvider>
                  <OrderContextProvider>
                    <ShippingOrderStatusContextProvider>
                      <App />
                    </ShippingOrderStatusContextProvider>
                  </OrderContextProvider>
                </SupplierProductContextProvider>
              </SupplierAuthContextProvider>
            </GoogleMapContextProvider>
          </CompletedActionProvider>
        </ReRenderContextProvider>
      </BrowserRouter>
    </ErrorContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
