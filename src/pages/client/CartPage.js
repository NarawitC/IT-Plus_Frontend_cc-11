import BreadCrumbsCart from '../../components/Client/products/productInfo/BreadCrumbsCart';
import { useProductfilter } from '../../contexts/ProductContext';
import CartItem from '../../components/Client/CartItem';
import { motion } from 'framer-motion';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// useEffect(() => {}, []);

function CartPage() {
  const { tempCarts, totalCartAmount } = useProductfilter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BreadCrumbsCart />
      <div className='grid grid-cols-4 gap-8  py-8 border-y-2'>
        <div className='col-span-3'>
          <div className='flex gap-4'>
            <p className='font-bold text-[24px]'>รถเข็นของฉัน</p>
            <p className='text-[16px] my-auto'>
              (สินค้า {tempCarts.length} ชิ้น)
            </p>
          </div>
        </div>
      </div>
      {tempCarts?.length > 0 ? (
        <>
          <CartItem />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className=' flex flex-col justify-center items-center py-20'>
            <BsPlusSquareDotted
              size={200}
              color={'gray'}
              className='mx-auto flex  justify-center text-center'
            />
            <p className='font-bold my-2'> ไม่มีสินค้าในรถเข็น </p>
            <Link to='/' className='text-primary hover:text-blue-700'>
              กลับหน้าหลัก
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default CartPage;
