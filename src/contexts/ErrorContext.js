import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);
  return (
    <ErrorContext.Provider value={{ error, setError, trigger, setTrigger }}>
      {children}
    </ErrorContext.Provider>
  );
}

const useErrorContext = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};
export default ErrorContextProvider;
export { useErrorContext };
