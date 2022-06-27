import { createContext, useContext, useEffect, useState } from 'react';

const CountdownContext = createContext();

function CountdownContextProvider({ children }) {
  const str = '2022-06-30T17:49:48.000Z';

  const [Countdownstr, setCountdownstr] = useState(null);
  const [Days, setDays] = useState(null);
  const [Hrs, setHrs] = useState(null);
  const [Mins, setMins] = useState(null);
  const [Secs, setSecs] = useState(null);
  const daysinmonths = async (Targetmonth, Nmonth) => {
    // = tM - nM;
    //   if (mdiff > 0) {
    //     const arrmonth.slick
    //     const mdiff2D = mdiff * 30;
    //     // console.log(mdiff2D);
    //   } else console.log(mdiff);
    //   const ddiff = tM - nM;
    //   if (mdiff < 0) {
    //     // console.log(mdiff);
    //   }
    const OrdersArr = [2, 3, 4];
    const dayslog = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      4: 31,
    };
    const arrday = Object.values(dayslog);
    const addmoredays = await OrdersArr.map((el) => arrday[el]).reduce(
      (a, b) => a + b,
      0
    );
    console.log(addmoredays);
  };

  // const str = '2022-06-30 17:44:43';
  const SetcountdownStrbydate = async (days) => {
    setHrs(null);
    setMins(null);
    setSecs(null);
    // const SetcountdownStrbydate = async (string) => {
    // console.log(string.split('T')[1]);
    // console.log(string.split('T')[0]);
    // console.log(new Date(string.split('T')[1]));
    // const date = new Date(string);

    // const tM = date.getMonth() + 1;
    // const tD = date.getDate();
    // const tH = date.getHours();
    // const tMin = date.getMinutes();

    // const tS = date.getSeconds();

    // const nowdate = new Date();
    // const nM = nowdate.getMonth() + 1;
    // const nD = nowdate.getDate();
    // const nH = nowdate.getHours();
    // const nMin = nowdate.getMinutes();
    // const nS = nowdate.getSeconds();

    // // const mdiff = daysinmonths(tM, nM);
    // const mdiffdays = daysinmonths(tM, nM);
    // const diffday = tD - nD;
    // const diffHrs = tH;
    // const diffMin = tMin - nMin;
    // const diffSec = tS - nS;

    // let i = 0;
    // // Setm
    // setDays(diffday);
    // if (diffday < 0) {
    //   setDays(mdiffdays - diffday);
    //   console.log(mdiffdays - diffday);
    // }

    // setHrs(diffHrs);
    // setMins(diffMin);
    // setSecs(diffSec);
    let fDay = days;
    setDays(fDay);
    let fHour = 0;
    if (days < 2) {
      setDays(0);
      let fHour = days * 24;
    }

    setHrs(0);
    setMins(0);
    setSecs(0);
    let fMin = 0;
    let fSec = 0;
    await setInterval(() => {
      if (fHour < 1) {
        fHour = +24;
        setHrs(fHour);
        fDay--;
        setDays(fDay);
      }
      if (fMin < 1) {
        fMin = +60;
        setMins(fMin);
        fHour--;
        setHrs(fHour);
      }
      if (fSec === 0) {
        fSec = +60;
        setSecs(fSec);
        fMin--;
        setMins(fMin);
      } else {
        fSec--;
        setSecs(fSec);
      }
      // setSecs(diffSec - i);
      // i++;
      // console.log(i);
      // setDays(tD - nD);
      // setHrs(tH);
      // setMins(tMin - nMin);
      // console.log(nS);
      // console.log('tick');
    }, 1000);
  };
  //next get them - now date
  // console.log(new Date(string));
  // setDays(string.5)
  useEffect(() => {
    // daysinmonths([1, 2, 3]);
    // SetcountdownStrbydate(1);
  }, []);
  return (
    <CountdownContext.Provider
      value={{
        Countdownstr,
        setCountdownstr,
        SetcountdownStrbydate,
        Days,
        Hrs,
        Mins,
        Secs,
      }}
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
