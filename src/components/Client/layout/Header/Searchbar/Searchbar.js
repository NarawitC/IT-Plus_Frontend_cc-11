import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { FiSearch } from 'react-icons/fi';
function Searchbar() {
  return (
    <>
      <div className='form-control block w-full h-2/3 self-center items-start'>
        <div className='w-2/3 h-13 flex p-1  border-2  rounded-full'>
          <div className='w-full  flex justify-center'>
            <input
              type='text'
              placeholder='Search items with itplus'
              className=' input appearance-none self-center h-6 w-full align-middle focus:outline-none text-base text-slate-500'
            ></input>
          </div>
          <div className='w-1/10 relative block -mt-1 '>
            <button className='btn btn-circle gradeient1 border-0 -p-3 '>
              <FiSearch size={30} color={'white'} scale={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
