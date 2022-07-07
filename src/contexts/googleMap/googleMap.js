// create context googleMap
import { createContext, useContext, useState } from 'react';

const googleMapContext = createContext();

function GoogleMapContextProvider({ children }) {
  const [googleMapAddress, setGoogleMapAddress] = useState('');
  return (
    <googleMapContext.Provider
      value={{ googleMapAddress, setGoogleMapAddress }}
    >
      {children}
    </googleMapContext.Provider>
  );
}

export default GoogleMapContextProvider;
const useGoogleMapContext = () => {
  const context = useContext(googleMapContext);
  if (context === undefined) {
    throw new Error(
      'useGoogleMapContext must be used within a GoogleMapContextProvider'
    );
  }
  return context;
};
export { useGoogleMapContext };
