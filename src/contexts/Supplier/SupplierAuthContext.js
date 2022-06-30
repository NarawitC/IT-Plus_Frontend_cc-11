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
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  //url get myShop
  const location = useLocation();

  const fetchSupplier = async () => {
    try {
      const token = getAccessToken();
      const resSupplier = await getSupplierInfo();
      // console.log(resSupplier);
      if (resSupplier.data.supplier.role === 'SUPPLIER') {
        setUser(resSupplier.data.supplier);
        setRole(resSupplier.data.role);
      }
    } catch (err) {
      // console.log(location.pathname);
      if (location.pathname.startsWith('/supplier')) {
        removeAccessTOken();
        navigate('/supplier');
      }
    }
  };
  useEffect(() => {
    fetchSupplier();
  }, []);

  const signIn = async (email, password) => {
    console.log(email);
    console.log(password);
    const response = await supplierSignIn(email, password);
    console.log(response.data.token);
    setAccessToken(response.data.token); //
    // console.log(response.data);
    // setRole(response.data.role);
    // console.log({ role: role });
    // if (response.data.role === 'supplier') {
    //   const resSupplier = await axios.get('/suppliers/me');
    //   setUser(resSupplier.data.supplier);
    // }
    console.log('--------------------');
    const resSupplier = await axios.get('/supplier/supplier');
    console.log('--------------------');
    console.log(resSupplier.data);
    fetchSupplier();
    setUser(resSupplier.data.user);
    setRole(resSupplier.data.user.role);
    setReRender((reRender) => !reRender);
    navigate('/supplier');
    return response.data.token;
  };

  const signOut = () => {
    removeAccessTOken(); //
    setReRender((reRender) => !reRender);
    setUser(null);
    setRole('');
    navigate('/');
  };

  const signUp = async (input) => {
    const response = await supplierSignUp(input);
    console.log(response.data.message);
    // setAccessToken(response.data.token); //สมัครเสร็จ ลอคอินได้เลย
    // const resMe = await getSupplierInfo();
    // setUser(resMe.data.user);
    // navigate('/supplier/my-shop');
  };

  return (
    <SupplierAuthContext.Provider
      value={{ signUp, user, signIn, signOut, role, setRole }}
    >
      {children}
    </SupplierAuthContext.Provider>
  );
}

export default SupplierAuthContextProvider;
export { SupplierAuthContext };
