import itemImg1 from '../../../../../src/productImg/item1.jpg';
import itemImg2 from '../../../../../src/productImg/item2.jpg';
import itemImg3 from '../../../../../src/productImg/item3.jpg';
import itemImg4 from '../../../../../src/productImg/item4.jpg';
import { useProductfilter } from '../../../../contexts/ProductContext';
import DynamicClientProductCard from '../../products/DynamicClientProductCard';
function CardItems() {
  const { product } = useProductfilter();
  return (
    <>
      <div className='bg-white '>
        <div className='max-w-2xl mx-auto py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8 '>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
            {product?.map((el, idx) => (
              <DynamicClientProductCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardItems;
