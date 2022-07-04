import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategoryInfo } from '../../../../apis/client/category';
import { useProductfilter } from '../../../../contexts/ProductContext';
function BreadCrumbs({ category, Productname }) {
  const [cat, setcat] = useState();
  const { categorySelectd } = useProductfilter();
  useEffect(() => {
    const fetchCategories = async () => {
      if (1) {
        const {
          data: { categories },
        } = await getAllCategoryInfo();
        const All = {
          SubCategories: [],
          categoryName: 'All',
          createdAt: '2022-07-01T11:28:48.000Z',
          id: null,
        };
        // console.log(categories);

        await categories.unshift(All);
        const thecat = await categories.filter(
          (el) => el.id === categorySelectd
        );
        setcat(thecat[0]);
        console.log(thecat);
      }
      // navigate('/product');
      // setCategories(categories);
      // console.log(cat);
    };
    fetchCategories();
  }, [categorySelectd]);
  // searchParams
  return (
    <div>
      <div className='text-sm breadcrumbs  border-b-2  opacity-50'>
        <ul>
          <li>
            <Link to='/'>หน้าหลัก</Link>
          </li>
          {cat?.categoryName ? (
            <li>
              <a>{cat?.categoryName}</a>
            </li>
          ) : null}
          {0 ? (
            <li>
              <a>จอคอมพิวเตอร์ (Monitor)</a>
            </li>
          ) : null}
          {Productname ? <li>{Productname}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumbs;
