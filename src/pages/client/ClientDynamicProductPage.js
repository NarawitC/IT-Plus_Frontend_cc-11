import DynamicClientProductCard from '../../components/Client/products/DynamicClientProductCard';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useProductfilter } from '../../contexts/ProductContext';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import BreadCrumbs from '../../components/Client/products/productInfo/BreadCrumbs';
import RangrPrice from '../../components/Client/products/productbysupplierId/RangrPrice';

function ClientDynamicProductPage() {
  const locate = useLocation();
  const navigate = useNavigate();
  const { categorySelectd } = useProductfilter();

  const { product, totalPage, page, setPage, searchParams } =
    useProductfilter();
  const totalPageArr = [];
  for (let i = 1; i <= totalPage; i++) {
    totalPageArr.push(i);
  }
  return (
    <>
      <div className='bg-white'>
        <BreadCrumbs />
        {/* piceRangeilter */}
        {/* <div className='p-2 text-sm -ml-2  border-spacing-1 flex justify-start flex-col '>
          <span className='text-font-Kanits'>ช่วงราคา</span>
          <RangrPrice />
        </div> */}
        {/* piceRangeilter */}
        <div className=' col-span-4 flex gap-2 w-full'>
          <FaRegThumbsUp className='block mt-1' size={20} />
          <p className=' font-bold text-lg text-zinc-600'>IT Plus Recommend</p>
        </div>

        <div className='max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='flex flex-row'>
            <div className='mt-6 flex-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
              {product?.map((el, idx) => (
                <DynamicClientProductCard key={idx} el={el} />
              ))}
            </div>
          </div>

          <div className='btn-group py-4 justify-center mt-10'>
            {totalPageArr.length > 0
              ? totalPageArr.map((el, idx) => (
                  <a
                    key={idx}
                    role='button'
                    href='#top'
                    className={`btn btn-primary ${
                      +page === el || 'bg-white text-primary hover:text-white '
                    }`}
                    onClick={() => {
                      setPage(el);
                    }}
                  >
                    {el}
                  </a>
                ))
              : null}
          </div>
        </div>
      </div>

      {/* <CardItems /> */}
    </>
  );
}

export default ClientDynamicProductPage;
