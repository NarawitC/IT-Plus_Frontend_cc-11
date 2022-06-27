import { createContext, useContext, useEffect, useState } from 'react';

const CountdownContext = createContext();

function CountdownContextProvider({ children }) {
  const [Countdownstr, setCountdownstr] = useState(null);
  const [Days, setDays] = useState('');
  const [Hrs, setHrs] = useState('');
  const [Mins, setMins] = useState('');
  const [Secs, setSecs] = useState('');
  // const str = '2022-06-30 17:44:43';
  const str = '2022-06-30T17:49:48.000Z';
  const SetcountdownStrbydate = async (string) => {
    // console.log(string.split('T')[1]);
    // console.log(string.split('T')[0]);
    // console.log(new Date(string.split('T')[1]));
    const date = new Date(string);
    const nowdate = new Date();
    console.log(date);
    console.log(date.getMonth() + 1);
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(nowdate);

    //next get them - now date
    // console.log(new Date(string));
    // setDays(string.5)
  };
  useEffect(() => {
    setInterval(() => {}, 1000);
    // SetcountdownStrbydate(str);
  });
  return (
    <CountdownContext.Provider
      value={{ Countdownstr, setCountdownstr, SetcountdownStrbydate }}
    >
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
