import { supplierSignIn } from '../../apis/supplier/supplierAuth';
import { supplierSignUp } from '../../apis/supplier/supplierAuth';
import { getSupplierInfo } from '../../apis/supplier/supplier';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from '../../services/localStorage';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import { ReRenderContext } from '../ReRenderContext';

const SupplierAuthContext = createContext();

function SupplierAuthContextProvider({ children }) {
  const { reRender, setReRender } = useContext(ReRenderContext);

  const [supplier, setSupplier] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  //url get myShop
  const fetchSupplier = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const resSupplier = await getSupplierInfo();
        setSupplier(resSupplier.data.user);
      }
    } catch (err) {
      removeAccessTOken();
      navigate('/supplier');
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
    //   setSupplier(resSupplier.data.supplier);
    // }
    console.log('--------------------');
    const resSupplier = await axios.get('/supplier/supplier');
    console.log('--------------------');
    console.log(resSupplier.data);
    fetchSupplier();
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
    console.log(response.data.message);
    // setAccessToken(response.data.token); //สมัครเสร็จ ลอคอินได้เลย
    // const resMe = await getSupplierInfo();
    // setSupplier(resMe.data.user);
    // navigate('/supplier/my-shop');
  };

  return (
    <SupplierAuthContext.Provider
      value={{ signUp, supplier, signIn, signOut, role, setRole }}
    >
      {children}
    </SupplierAuthContext.Provider>
  );
}

export default SupplierAuthContextProvider;
export { SupplierAuthContext };
