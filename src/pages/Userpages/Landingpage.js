import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FlashSaleCountdownbar from '../../components/Client/flashsalebar.js/FlashSaleCountdownbar';
import Carusel from '../../components/Client/layout/Carusel';
import CardItems from '../../components/Client/layout/flashsale/CardItems';
import SmPillButton from '../../components/commonUtils/SmPillButton';
import { useCountdown } from '../../contexts/clountdownContext';
function Landingpage() {
  const { SetcountdownStrbydate } = useCountdown();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Carusel />
      <FlashSaleCountdownbar />
      <CardItems />
    </motion.div>
  );
}

export default Landingpage;
