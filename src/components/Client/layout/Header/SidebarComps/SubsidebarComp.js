import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductfilter } from '../../../../../contexts/ProductContext';
import SubcatSide from '../SubcatSide.';
function SubSidebarComp({ eldrawer, el }) {
  const navigate = useNavigate();
  const { setSearchParams } = useProductfilter();
  return (
    <>
      <SubcatSide />
      <li>
        <a
          onClick={() => {
            navigate('/product');
            // setSearchParams((prev) => ({ ...prev, categoryId: el.id }));
            // eldrawer.current.click();
            // setisDraw((prev) => prev);

            // setSearchParams(el.id);
          }}
          onMouseOver={() => {}}
        >
          {'el.categoryName'}
        </a>
      </li>
    </>
  );
}

export default SubSidebarComp;
