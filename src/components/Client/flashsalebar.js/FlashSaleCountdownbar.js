import React from 'react';

function FlashSaleCountdownbar() {
  return (
    <div>
      <span
        className='countdown w-full bg-blue-50 h-2'
        onClick={() => {
          setcountdown((prev) => prev - 1);
        }}
      >
        <span style={{ '--value': countdown }}></span>
      </span>
      <SmPillButton
        text='hi'
        onClick={() => {
          console.log(countdown);
        }}
      />

      
    </div>
  );
}

export default FlashSaleCountdownbar;
