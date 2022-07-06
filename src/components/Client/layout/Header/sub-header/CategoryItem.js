import React, { useEffect, useState } from 'react';

function CategoryItem({
  category,
  index,
  icons,
  handleCategoryButton,
  sethoverIcon,
}) {
  // const [hoverIcon, sethoverIcon] = useState(false);
  useEffect(() => {
    // console.log(icons.props);
    // icons.props.color = 'blue';
  }, []);
  return (
    <div
      key={index}
      className=' hover:ring-1 rounded-lg ring-blue-500 carousel-item hover:text-blue-500   duration-150  cursor-pointer w-1/8 min-w-[80px] max-w-md p-1 flex flex-col items-center text-mono mx-2'
      onClick={() => {
        handleCategoryButton(category.id);
      }}
      // onMouseOver={() => {
      //   sethoverIcon((prev) => {
      //     const narr = [...prev];
      //     narr[index] = true;
      //     return narr;
      //   });
      // }}
      // onMouseLeave={() => {
      //   sethoverIcon((prev) => {
      //     const narr = [...prev];
      //     narr[index] = false;
      //     return narr;
      //   });
      // }}
    >
      <>{icons}</>
      <span>{category.categoryName}</span>
    </div>
  );
}

export default CategoryItem;
