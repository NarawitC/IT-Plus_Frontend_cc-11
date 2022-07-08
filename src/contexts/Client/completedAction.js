import { createContext, useContext, useState } from 'react';

const completedActionContext = createContext();
function CompletedActionProvider({ children }) {
  const [isShowCompletedAction, setIsShowCompletedAction] = useState(false);
  const [completedText, setCompletedText] = useState('');

  return (
    <completedActionContext.Provider
      value={{
        isShowCompletedAction,
        setIsShowCompletedAction,
        completedText,
        setCompletedText,
      }}
    >
      {children}
    </completedActionContext.Provider>
  );
}

export default CompletedActionProvider;

const useCompletedActionContext = () => {
  const ctx = useContext(completedActionContext);
  return ctx;
};
export { useCompletedActionContext };
