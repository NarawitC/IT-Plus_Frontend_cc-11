import BreadCrumbsCart from '../../components/Client/products/productInfo/BreadCrumbsCart';
import { useProductfilter } from '../../contexts/ProductContext';
import CartItem from '../../components/Client/CartItem';
import { useEffect } from 'react';
import DynamicClientCheckoutmode from '../../components/Client/clentCart/DynamicClientCheckoutmode';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// useEffect(() => {}, []);

function CartPage() {
  const { tempCarts, totalCartAmount } = useProductfilter();
  return (
    <div>
      <BreadCrumbsCart />
      <div className='grid grid-cols-4 gap-8  py-8 border-y-2'>
        <div className='col-span-3'>
          <div className='flex gap-4'>
            <p className='font-bold text-[24px]'>รถเข็นของฉัน</p>
            <p className='text-[16px] my-auto'>
              (สินค้า {totalCartAmount} ชิ้น)
            </p>
          </div>
        </div>
      </div>
      {tempCarts?.length > 0 ? (
        <>
          <CartItem />
        </>
      ) : (
        <div className=' flex flex-col justify-center items-center'>
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
      )}
    </div>
  );
}

export default CartPage;
