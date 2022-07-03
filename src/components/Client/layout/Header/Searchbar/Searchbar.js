import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useProductfilter } from '../../../../../contexts/ProductContext';

function Searchbar() {
  const [searchText, setSearchText] = useState('');
  const { searchParams, setSearchParams } = useProductfilter();

  const handleSearchButton = (e) => {
    e.preventDefault();
    setSearchParams((prev) => ({ ...prev, searchText }));
  };

  return (
    <>
      <div className='form-control block w-full h-2/5 py-1 my-2 ml-2 self-center items-start'>
        <div className='w-2/3 h-12 flex p-1  border-2  rounded-full'>
          <div className='w-full  flex justify-center'>
            <input
              type='text'
              value={searchTextinp}
              placeholder='Search items with itplus'
              className=' input appearance-none self-center h-6 w-full align-middle focus:outline-none text-base text-slate-500'

              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}

            ></input>
          </div>
          <div className='w-1/10 relative block -mt-1 '>
            <button
              className='btn btn-circle gradeient1 border-0 -p-3 '

              onClick={handleSearchButton}

            >
              <FiSearch size={30} color={'white'} scale={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
