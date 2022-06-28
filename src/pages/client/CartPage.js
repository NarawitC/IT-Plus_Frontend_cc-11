import BreadCrumbsCart from '../../components/Client/products/productInfo/BreadCrumbsCart';

import CartItem from '../../components/Client/CartItem';

function CartPage() {
  return (
    <div>
      <BreadCrumbsCart />
      <div className='grid grid-cols-4 gap-8  py-8 border-y-2'>
        <div className='col-span-3'>
          <div className='flex gap-4'>
            <p className='font-bold text-[24px]'>รถเข็นของฉัน</p>
            <p className='text-[16px] my-auto'>(สินค้า 1 ชิ้น)</p>
          </div>
        </div>
      </div>
      <CartItem />
    </div>
  );
}

export default CartPage;
