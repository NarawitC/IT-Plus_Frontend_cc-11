import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [IsLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ IsLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

const useLoading = () => {
  const ctx = useContext(LoadingContext);
  return ctx;
};
export default LoadingContextProvider;
export { useLoading };
