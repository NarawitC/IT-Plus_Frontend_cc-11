import React, { useEffect, useState } from 'react';
import Carusel from '../../components/Client/layout/Carusel';
import CardItems from '../../components/Client/layout/flashsale/CardItems';
import SmPillButton from '../../components/commonUtils/SmPillButton';
function Landingpage() {
  // Create a function for getting a variable value
  // const r = document.querySelector('.countdown');
  // function styleGet() {
  //   // Get the styles (properties and values) for the root
  //   const rs = getComputedStyle(r);
  //   // Alert the value of the --blue variable
  //   console.log(rs.getPropertyValue('--value'));
  //   // Create a function for setting a variable value
  // }
  // function styleSet(num) {
  //   // Set the value of variable --blue to another value (in this case "lightblue")
  //   // r.style.setProperty('--value', num);
  // }

  useEffect(() => {
    // styleGet();
  }, []);
  return (
    <>
      <Carusel />

      <CardItems />
    </>
  );
}

export default Landingpage;
