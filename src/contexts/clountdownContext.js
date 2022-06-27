import { createContext, useContext, useState } from 'react';

const CountdownContext = createContext();

function CountdownContextProvider({ children }) {
  const [Countdownstr, setCountdownstr] = useState(null);
  const SetcountdownStrbydate = async () => {
    
  };
  return (
    <CountdownContext.Provider value={{ Countdownstr, setCountdownstr }}>
      {children}
    </CountdownContext.Provider>
  );
}

const useCountdown = () => {
  const ctx = useContext(CountdownContext);
  return ctx;
};
export default CountdownContextProvider;
export { useCountdown };
