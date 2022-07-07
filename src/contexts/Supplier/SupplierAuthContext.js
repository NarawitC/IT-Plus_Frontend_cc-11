import { supplierSignIn } from '../../apis/supplier/supplierAuth';
import { supplierSignUp } from '../../apis/supplier/supplierAuth';
import { getSupplierInfo } from '../../apis/supplier/supplier';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from '../../services/localStorage';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import { ReRenderContext } from '../ReRenderContext';

const SupplierAuthContext = createContext();

function SupplierAuthContextProvider({ children }) {
  const { reRender, setReRender } = useContext(ReRenderContext);

  const [supplier, setSupplier] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  //url get myShop
  const location = useLocation();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const getSup = async () => {
        const resSupplier = await getSupplierInfo();
        setSupplier(resSupplier.data.user);
        setRole(resSupplier.data.user.role);
      };
      getSup();
    }
  }, []);

  const fetchSupplier = async () => {
    try {
      if (location.pathname.startsWith('/supplier')) {
        const token = getAccessToken();
        const resSupplier = await getSupplierInfo();
        if (resSupplier.data.user.role === 'SUPPLIER') {
          setSupplier(resSupplier.data.user);
          setRole(resSupplier.data.user.role);
        }
      }
    } catch (err) {
      console.log(err);
      if (location.pathname.startsWith('/supplier')) {
        // removeAccessTOken();
        // navigate('/supplier');
      }
    }
  };

  const signIn = async (email, password) => {
    const response = await supplierSignIn(email, password);
    setAccessToken(response.data.token); //
    // console.log(response.data);
    // setRole(response.data.role);
    // console.log({ role: role });
    // if (response.data.role === 'supplier') {
    //   const resSupplier = await axios.get('/suppliers/me');
    //   setSupplier(resSupplier.data.supplier);
    // }
    const resSupplier = await axios.get('/supplier/supplier');
    // fetchSupplier();
    setSupplier(resSupplier.data.user);
    setRole(resSupplier.data.user.role);
    setReRender((reRender) => !reRender);
    navigate('/supplier');
    return response.data.token;
  };

  const signOut = () => {
    removeAccessTOken(); //
    setSupplier(null);
    setRole('');
    setReRender((reRender) => !reRender);
    navigate('/supplier');
  };

  const signUp = async (input) => {
    const response = await supplierSignUp(input);
    return response;
  };

  return (
    <SupplierAuthContext.Provider
      value={{ signUp, supplier, signIn, signOut, role, setRole }}
    >
      {children}
    </SupplierAuthContext.Provider>
  );
}
const useSupplierContext = () => {
  const ctx = useContext(SupplierAuthContext);
  return ctx;
};

export default SupplierAuthContextProvider;
export { SupplierAuthContext, useSupplierContext };
