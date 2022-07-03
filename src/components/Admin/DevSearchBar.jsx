import React from 'react';
import { BsSearch } from 'react-icons/bs';

function DevSearchBar() {
  return (
    <div
      data-theme='luxury'
      className='flex justify-center items-center flex-row gap-5 pt-8'
    >
      <input
        placeholder='Seeking any particular?'
        className='input input-bordered w-full max-w-xs '
      />

      <button className='btn btn-info btn-primary gap-1'>
        Find
        <BsSearch />
      </button>
    </div>
  );
}

export default DevSearchBar;
