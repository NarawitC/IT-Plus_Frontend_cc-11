import { createContext, useState, useContext, useEffect } from 'react';
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from '../../services/localStorage';
import { userSignIn, userSignUp } from '../../apis/user/auth';
import { getUserInfo } from '../../apis/user/user';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../ErrorContext';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setError } = useErrorContext();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await getUserInfo();
          console.log(resMe.data.user);
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAccessTOken();
        // navigate('/auth/signIn');
      }
    };
    fetchMe();
  }, [navigate]);

  const signIn = async (input) => {
    const res = await userSignIn(input);
    console.log(res);
    setAccessToken(res.data.token);
    const resMe = await getUserInfo();
    setUser(resMe.data.user);
  };

  const signUp = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    address,
    addressDescription,
  }) => {
    // if (!address.trim()) {
    //   address = null;
    // }
    // if (!addressDescription.trim()) {
    //   addressDescription = null;
    // }

    // console.log('hi');
    // console.log(email);
    const res = await userSignUp({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      address,
      addressDescription,
    });
    console.log(res);
    return res;
  };

  const signOut = () => {
    removeAccessTOken();
    setUser(null);
    navigate('');
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        signUp,
        signOut,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
export { useAuthContext };
