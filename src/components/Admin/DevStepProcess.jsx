import React from 'react';

function DevStepProcess() {
  return (
    <div className='flex justify-center items-center mx-auto gap-2'>
      <ul className='steps steps-vertical lg:steps-horizontal'>
        <li className='step step-primary'>In Order</li>
        <li className='step step-primary'>Payment Submit</li>
        <li className='step'>Shipping</li>
        <li className='step'>Completed</li>
      </ul>
    </div>
  );
}

export default DevStepProcess;
