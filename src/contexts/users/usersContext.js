import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../ErrorContext';

const UsersContext = createContext();

function UsersContextProvider({ children }) {
  const [productlist, setproductlist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {});

  const fetchusersproduct = async () => {
    const res = await getAllProductInfo();
    console.log(res);
    setproductlist(res);
  };
  return (
    <UsersContext.Provider
      value={{
        productlist,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
export default UsersContextProvider;

const useUsersContext = () => {
  const ctx = useContext(UsersContext);
  return ctx;
};
export { useUsersContext };
