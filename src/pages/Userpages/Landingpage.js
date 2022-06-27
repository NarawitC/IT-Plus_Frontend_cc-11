import React, { useEffect, useState } from 'react';
import FlashSaleCountdownbar from '../../components/Client/flashsalebar.js/FlashSaleCountdownbar';
import Carusel from '../../components/Client/layout/Carusel';
import CardItems from '../../components/Client/layout/flashsale/CardItems';
import SmPillButton from '../../components/commonUtils/SmPillButton';
import { useCountdown } from '../../contexts/clountdownContext';
function Landingpage() {
  const { SetcountdownStrbydate } = useCountdown();
  useEffect(() => {}, []);
  return (
    <>
      <Carusel />
      <button
        className='btn'
        onClick={() => {
          SetcountdownStrbydate('2022-06-30T17:49:48.000Z');
        }}
      ></button>
      <FlashSaleCountdownbar />
      <CardItems />
    </>
  );
}

export default Landingpage;
