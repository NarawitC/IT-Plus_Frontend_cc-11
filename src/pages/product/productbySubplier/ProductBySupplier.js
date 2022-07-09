import React, { useEffect, useState } from 'react';

import RangrPrice from '../../../components/Client/products/productbysupplierId/RangrPrice';
import BreadCrumbsSupplier from '../../../components/Client/products/productInfo/BreadCrumbsSupplier';
import CardItemsBySupplierId from './CardItemsBySupplierId';
import { useProductfilter } from '../../../contexts/ProductContext';
import { getSupplierInfo } from '../../../apis/supplier/supplier';
// import axios, { Axios } from 'axios';
import axios from '../../../config/axios';
import { useLocation } from 'react-router-dom';

function ProductByBrand() {
  const { product, getAllproduct } = useProductfilter();
  const location = useLocation();
  const [supplier, setSupplier] = useState(null);
  // console.log(supplier);

  useEffect(() => {
    const fetchSupplier = async () => {
      // const {
      //   data,
      //   // :
      //   // {
      //   //   // user: { Supplier },
      //   // },
      // } = await axios.get('/client/supplier/approved-product-supplier-list');
      // await getSupplierInfo();
      // setSupplier(Supplier);
      //REAL DARK
      const id = location.pathname.split('/')[2];
      const allpd = await getAllproduct();
      const SupplierPd = allpd?.products?.filter((el) => el.supplierId == id);
      console.log(SupplierPd);

      const supplierOne = await SupplierPd[0].Supplier.id;
      // const supplierOne = await SupplierPd[0]?.Supplier[0];
      console.log(supplierOne);
      setSupplier(supplierOne);
    };

    // console.log(product);
    fetchSupplier();
  }, []);

  return (
    <>
      <div>
        <BreadCrumbsSupplier />
        <div className='px-20'>
          {/* <div className='btn'></div> */}
          <div className='border-2 h-40 pl-8 flex gap-4'>
            <div className='my-auto w-[90px] h-[90px] border-2 rounded-lg  gap-8 bg '>
              <img src={supplier?.profilePicture} />
            </div>
            <div className='my-auto'>{supplier?.displayName}</div>
          </div>
          <div className=' py-4 font-bold'>ดูสินค้าทั้งหมด</div>
          <div className='grid grid-cols-4 gap-8  py-8 border-y-2'>
            <div>
              <div className='font-bold'>ช่วงราคา</div>
            </div>
            <div className='col-span-3'>
              <div className='flex gap-4'>
                <p className='font-bold'>Bewell</p>
                <p className='text-[10px] my-auto'>
                  สินค้า {product?.length} ชิ้น
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-4 '>
            <RangrPrice />

            <div className='col-span-3  border-l-2'>
              <CardItemsBySupplierId supplierId={supplier} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductByBrand;
