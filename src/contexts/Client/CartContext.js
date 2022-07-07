import { createContext, useState, useContext, useEffect } from 'react';
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from '../../services/localStorage';
// import { userSignIn, userSignUp } from '../../apis/user/auth';
// import { getUserInfo } from '../../apis/user/user';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../ErrorContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setError } = useErrorContext();

  useEffect(() => {
    const fetchMe = async () => {
      try {
      } catch (err) {}
    };
    fetchMe();
  }, []);

  // const signIn = async (input) => {
  //   const res = await userSignIn(input);
  //   // console.log(res);
  //   setAccessToken(res.data.token);
  //   const resMe = await getUserInfo();
  //   setUser(resMe.data.user);
  // };

  // const signOut = () => {
  //   removeAccessTOken();
  //   setUser(null);
  //   navigate('');
  // };
  return (
    <CartContext.Provider
      value={
        {
          // signIn,
          // user,
          // signUp,
          // signOut,
          // setUser,
        }
      }
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;

const useCartContext = () => {
  const ctx = useContext(CartContext);
  return ctx;
};
export { useCartContext };
