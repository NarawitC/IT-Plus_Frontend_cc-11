import DynamicClientProductCard from '../../components/Client/products/DynamicClientProductCard';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useProductfilter } from '../../contexts/ProductContext';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BreadCrumbs />
      <div className='bg-white grid grid-cols-10'>
        {/* piceRangeilter */}
        <div className='px-4 pt-4 text-sm border-spacing-1 col-span-2'>
          <div className=' font-bold mt-2'>
            <span className='text-font-Kanits '>ช่วงราคา</span>
          </div>
          <RangrPrice />
        </div>
        {/* piceRangeilter */}

        <div className='w-full mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8  col-span-8'>
          <div className=' col-span-4 flex gap-2 w-full'>
            <FaRegThumbsUp className='block mt-1' size={20} />
            <p className=' font-bold text-lg text-zinc-600'>
              IT Plus Recommend
            </p>
          </div>
          <div className='flex flex-row'>
            <div className='mt-6 flex-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 '>
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
    </motion.div>
  );
}

export default ClientDynamicProductPage;
