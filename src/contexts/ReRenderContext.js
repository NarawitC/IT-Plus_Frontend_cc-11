import { createContext, useState } from 'react';
const ReRenderContext = createContext();

function ReRenderContextProvider({ children }) {
  const [reRender, setReRender] = useState(false);
  return (
    <ReRenderContext.Provider value={{ reRender, setReRender }}>
      {children}
    </ReRenderContext.Provider>
  );
}

export default ReRenderContextProvider;
export { ReRenderContext };
