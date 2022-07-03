import itemImg1 from '../../../../../src/productImg/item1.jpg';
import itemImg2 from '../../../../../src/productImg/item2.jpg';
import itemImg3 from '../../../../../src/productImg/item3.jpg';
import itemImg4 from '../../../../../src/productImg/item4.jpg';
import { useProductfilter } from '../../../../contexts/ProductContext';
import DynamicClientProductCard from '../../products/DynamicClientProductCard';
// const products = [
//   {
//     id: 1,
//     productName: 'จอคอม Acer Nitro VG240YAbmiix 23.8" VA Gaming',
//     href: '#',
//     price: 3990,
//     discout: '400',
//     imageSrc: itemImg1,
//     imageAlt: "Front of men's Basic Tee in black.",
//   },
//   {
//     id: 2,
//     productName: 'จอคอม Acer Nitro VG271Sbmiipx 27" IPS Gaming',
//     href: '#',
//     imageSrc: itemImg2,
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: 6790,
//     discout: '400',
//   },
//   {
//     id: 3,
//     productName: 'หูฟังไร้สาย Marshall Major IV Wireless Headphone',
//     href: '#',
//     imageSrc: itemImg3,
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: 4940,
//     discout: '400',
//   },
//   {
//     id: 4,
//     productName: 'โน๊ตบุ๊ค Acer Nitro AN515-45-R4U8 Gaming',
//     href: '#',
//     imageSrc: itemImg4,
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: 39900,
//     discout: null,
//   },
// ];
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
