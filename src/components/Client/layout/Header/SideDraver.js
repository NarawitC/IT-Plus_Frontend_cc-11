import React, { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategoryInfo } from '../../../../apis/client/category';
import { useProductfilter } from '../../../../contexts/ProductContext';
import headerlogo from '../../../../icons/IT_PLUS_smLOGO.png';

function SideDrawer({ eldrawer }) {
  const { categorySelectd, setSearchParams } = useProductfilter();
  const [categories, setcategories] = useState();
  const navigate = useNavigate();
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
  const timerAndDraw = async () => {
    if (isDraw) {
      setTimeout(() => {
        setisDraw((prev) => !prev);
      }, 400);
    } else setisDraw((prev) => !prev);
  };
  return (
    // <div>
    <div
      className={`drawer fixed  ${
        isDraw ? 'z-50' : '-z-10'
      } overflow-y-scroll  transition  duration-400 `}
    >
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        ref={eldrawer}
        onClick={() => {
          timerAndDraw();
          // console.log('OPem');
        }}
      />
      <div className='drawer-content sticky '>
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
        <ul className='menu p-4 overflow-y-hidden w-80 bg-base-100 text-base-content'>
          <div className=' hover:flip-diagonal-2-fwd'>
            <img
              src={headerlogo}
              className={'mask w-48   ring-gray-700/20 duration-150 rounded-md'}
            />
          </div>
          <p
            className='text-font-Kanit text-xl mt-8 cursor-pointer m-2'
            onClick={() => {
              navigate('/product');
              setSearchParams((prev) => ({ ...prev, categoryId: null }));
              eldrawer.current.click();
            }}
          >
            สินค้าทั้งหมด
          </p>
          {/* <!-- Sidebar content here --> */}

          {categories?.map((el) => (
            <li>
              <a
                onClick={() => {
                  navigate('/product');
                  setSearchParams((prev) => ({ ...prev, categoryId: el.id }));
                  eldrawer.current.click();
                }}
              >
                {el.categoryName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default SideDrawer;
