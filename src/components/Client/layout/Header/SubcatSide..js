import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategoryInfo } from '../../../../apis/client/category';
import { useProductfilter } from '../../../../contexts/ProductContext';
import headerlogo from '../../../../icons/IT_PLUS_smLOGO.png';
import SidebarComp from './SidebarComps/SidebarComp';

function SubcatSide({ elsubDraw }) {
  const { categorySelectd, setSearchParams } = useProductfilter();
  const [categories, setcategories] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSUBcat = async () => {};
    fetchSUBcat();
  }, []);
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isDraw, setisDraw] = useState(false);
  return (
    // <div>
    <div
      className={`drawer absolute ${isDraw ? 'z-20' : '-z-10'} duration-200 `}
    >
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        ref={elsubDraw}
        onClick={() => {
          // console.log('OPem');
          setisDraw((prev) => !prev);
        }}
      />
      <div className='drawer-content'>
        {/* <!-- Page content here --> */}
        <label
          htmlFor='my-drawer'
          className='btn btn-primary drawer-button hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          <img
            src={headerlogo}
            className={'mask w-48   ring-gray-700/20 duration-150 rounded-md'}
          />
          <p
            className='text-font-Kanit text-xl mt-8 cursor-pointer m-2'
            onClick={() => {
              navigate('/product');
              setSearchParams((prev) => ({ ...prev, categoryId: null }));
              eldrawer.current.click();
              // setisDraw((prev) => prev);

              // setSearchParams(el.id);
            }}
          >
            สินค้าทั้งหมด
          </p>
          {/* <!-- Sidebar content here --> */}
          {x?.map((el) => (
            <SidebarComp eldrawer={eldrawer} el={el} />
          ))}
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default SubcatSide;
