import React, { useEffect, useState } from 'react';
import { getAllCategoryInfo } from '../../../../apis/client/category';
import { useProductfilter } from '../../../../contexts/ProductContext';

function SideDrawer({ eldrawer }) {
  const { categorySelectd } = useProductfilter();
  const [categories, setcategories] = useState();
  useEffect(() => {
    const fetchCategories = async () => {
      if (1) {
        const {
          data: { categories },
        } = await getAllCategoryInfo();
        // const All = {
        //   SubCategories: [],
        //   categoryName: 'All',
        //   createdAt: '2022-07-01T11:28:48.000Z',
        //   id: null,
        // };
        // console.log(categories);
        setcategories(categories);
        // await categories.unshift(All);
        // const thecat = await categories.filter(
        //   (el) => el.id === categorySelectd
        // );
      }
    };
    fetchCategories();
  }, []);

  const [isDraw, setisDraw] = useState(false);
  return (
    // <div>
    <div
      className={`drawer absolute ${isDraw ? 'z-10' : '-z-10'} duration-200 `}
    >
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        ref={eldrawer}
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
          <img sec />
          สินค้าทั้งหมด
          {/* <!-- Sidebar content here --> */}
          {categories?.map((el, idx) => (
            <li key={idx}>
              <a>{el.categoryName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default SideDrawer;
