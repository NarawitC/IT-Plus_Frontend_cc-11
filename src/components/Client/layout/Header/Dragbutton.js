import React from 'react';

function Dragbutton({ clicksidebar }) {
  return (
    <div
      className='btn bg-transparent border-0 hover:bg-transparent'
      onClick={() => {
        // console.log('clic');
        clicksidebar();
      }}
    >
      <label tabindex='0' className='btn btn-ghost btn-circle'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h7'
          />
        </svg>
      </label>
    </div>
  );
}

export default Dragbutton;
