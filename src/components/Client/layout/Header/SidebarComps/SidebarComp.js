import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductfilter } from '../../../../../contexts/ProductContext';
import SubcatSide from '../SubcatSide.';
function SidebarComp({ eldrawer, el }) {
  const elsubDraw = useRef();
  const navigate = useNavigate();
  const { setSearchParams } = useProductfilter();
  return (
    <>
      <SubcatSide elsubDraw={elsubDraw} />
      <li>
        <a
          onClick={() => {
            navigate('/product');
            setSearchParams((prev) => ({ ...prev, categoryId: el.id }));
            eldrawer.current.click();
            // setisDraw((prev) => prev);

            // setSearchParams(el.id);
          }}
          onMouseOver={() => {
            elsubDraw.current.click();
          }}
        >
          {el.categoryName}
        </a>
      </li>
    </>
  );
}

export default SidebarComp;
