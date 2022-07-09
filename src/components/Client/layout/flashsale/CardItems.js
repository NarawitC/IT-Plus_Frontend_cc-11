import itemImg1 from '../../../../../src/productImg/item1.jpg';
import itemImg2 from '../../../../../src/productImg/item2.jpg';
import itemImg3 from '../../../../../src/productImg/item3.jpg';
import itemImg4 from '../../../../../src/productImg/item4.jpg';
import { useProductfilter } from '../../../../contexts/ProductContext';
import DynamicClientProductCard from '../../products/DynamicClientProductCard';
function CardItems() {
  const { product, totalPage, page, setPage } = useProductfilter();
  const totalPageArr = [];
  for (let i = 1; i <= totalPage; i++) {
    totalPageArr.push(i);
  }
  return (
    <>
      <div className='bg-white '>
        <div className='max-w-2xl mx-auto py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8 '>
          <div
            className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '
            id='PDCARD'
          >
            {product?.map((el, idx) => (
              <DynamicClientProductCard el={el} key={idx} />
            ))}
          </div>
        </div>

        {/*  */}
        <div className='btn-group py-4 justify-center mt-10'>
          {totalPageArr.length > 0
            ? totalPageArr.map((el, idx) => (
                <a
                  key={idx}
                  role='button'
                  href='#PDCARD'
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
        {/*  */}
      </div>
    </>
  );
}
export default CardItems;
