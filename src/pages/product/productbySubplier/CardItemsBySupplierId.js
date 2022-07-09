import { useEffect, useState } from 'react';
import { useProductfilter } from '../../../contexts/ProductContext';

function CardItemsBySupplierId({ supplierId }) {
  const { product } = useProductfilter();
  const [productBySupplier, setProductBySupplier] = useState(null);

  useEffect(() => {
    // console.log
    const result = product?.filter((item) => item.supplierId === supplierId);
    setProductBySupplier(result);
    // console.log(supplierId);
  }, [product, supplierId]);

  console.log(productBySupplier);
  return (
    <>
      <div className=' px-5 mt-6 grid grid-col-3 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 '>
        {productBySupplier?.map(
          ({ price, discout, productName, mainPicture, id, href }) => (
            <div></div>
            // <div
            //   key={id}
            //   className='group relative border-2 border-neutral-600 px-4 py-4 rounded-sm shadow-md'
            // >
            //   <div className='w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none'>
            //     <img
            //       src={mainPicture}
            //       className='w-full  object-center   lg:w-full  '
            //     />
            //   </div>
            //   <div className='mt-4 flex justify-between'>
            //     <div>
            //       <h3 className='text-sm text-gray-700'>
            //         <a href={href}>
            //           <span aria-hidden='true' className='absolute inset-0' />
            //           {productName}
            //         </a>
            //       </h3>
            //       <div>
            //         {discout ? (
            //           <div className='text-sm font-medium  py-2'>
            //             <p className='text-emerald-700 text-[20px] text-right'>
            //               ฿ {(price - discout).toLocaleString('en-US')}
            //             </p>
            //             <div className='flex pt-3'>
            //               {discout ? (
            //                 <p className='text-xs flex-1 text-red-600 opacity-50'>
            //                   Discount {discout} ฿
            //                 </p>
            //               ) : (
            //                 ''
            //               )}
            //               <p className='text-slate-800 line-through text-[10px] opacity-[0.5] text-right flex-1'>
            //                 ฿ {price.toLocaleString('en-US')}
            //               </p>
            //             </div>
            //           </div>
            //         ) : (
            //           <div className='text-sm font-medium  py-2'>
            //             <p className='text-emerald-700 text-[20px] text-right'>
            //               ฿ {price.toLocaleString('en-US')}
            //             </p>
            //           </div>
            // )}
            // </div>
            //     </div>
            //   </div>
            // </div>
          )
        )}
      </div>
    </>
  );
}
export default CardItemsBySupplierId;
