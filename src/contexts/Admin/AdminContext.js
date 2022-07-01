import { createContext, useState, useContext, useEffect } from 'react';
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from '../../services/localStorage';
// import { adminSignIn } from '../../apis/user/Admin';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../ErrorContext';
import { adminSignIn } from '../../apis/admin/authAdmin';
import { getAdminInfo } from '../../apis/admin/admin';
import { adminClient } from '../../apis/admin/clientAdmin';

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();
  const { setError } = useErrorContext();

  const adminLogin = async (input) => {
    const res = await adminSignIn(input);
    // console.log(res);
    setAccessToken(res.data.token);
    const resMe = await getAdminInfo();
    console.log(resMe);
    setAdmin(resMe.data.admin);
    return resMe.data.admin;
  };

  const signOut = () => {
    removeAccessTOken();
    setAdmin(null);
    navigate('');
  };

  const adminGetClient = async () => {
    return await adminClient();
  };
  return (
    <AdminContext.Provider
      value={{
        adminLogin,
        adminGetClient,
        signOut,
        admin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;

const useAdminContext = () => {
  const ctx = useContext(AdminContext);
  return ctx;
};
export { useAdminContext };
