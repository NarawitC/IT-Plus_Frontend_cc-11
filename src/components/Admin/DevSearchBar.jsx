import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { checkLocation } from '../../services/checkLocation';
import { useLocation } from 'react-router-dom';
import { useAdminSearchContext } from '../../contexts/Admin/AdminSearchContext';

function DevSearchBar() {
  const { setOrderId, setProductId } = useAdminSearchContext();
  const location = useLocation();
  const { isAdminOrderPage, isAdminProductPage } = checkLocation(location);

  const [searchValue, setSearchValue] = useState('');
  const dynamicPlaceholder = () => {
    if (isAdminOrderPage) {
      return 'Search Order ID';
    } else if (isAdminProductPage) {
      return 'Search Product ID';
    }
  };
  const handleSearchButton = () => {
    if (searchValue.trim() == +searchValue.trim()) {
      if (isAdminOrderPage) {
        setOrderId(searchValue);
      } else if (isAdminProductPage) {
        setProductId(searchValue);
      }
    }
  };

  return (
    <div
      data-theme='cupcake'
      className='flex justify-center items-center flex-row gap-5 '
    >
      {/* <input
        value={searchValue}
        placeholder={`${dynamicPlaceholder()}`}
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button
        className='btn btn-info btn-primary gap-1'
        onClick={handleSearchButton}
      >
        Find
        <BsSearch />
      </button> */}
    </div>
  );
}

export default DevSearchBar;
