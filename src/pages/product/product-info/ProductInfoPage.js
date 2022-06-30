import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../../../components/Client/products/productInfo/BreadCrumbs';
import addCartIcon from '../../../../src/components/Client/products/productInfo/icons/add-to-cart.svg';
import Property from './Property';
import { useLoading } from '../../../contexts/LoadingContext';
import { useLocation } from 'react-router-dom';
import { useProductfilter } from '../../../contexts/ProductContext';
import LocalstringComma from '../../../services/LocalstringComma';

function ProductInfoPage() {
  const locate = useLocation();
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(1);
  const [singlepd, setsinglepd] = useState(null);
  const { getsinglepd, settempCarts, tempCarts } = useProductfilter();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // for (const param of params) {
    //   console.log(param);
    // }
    const fetchPd = async () => {
      setIsLoading(true);
      const pdid = locate.pathname.split('/')[2];
      const singlePD = await getsinglepd(pdid);
      // await console.log(singlePD);
      await setsinglepd(singlePD);
      await setIsLoading(false);
    };
    fetchPd();
  }, []);

  const Product = {
    mainPicture:
      'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/06/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-icon.jpg',

    sucPicture1:
      'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/06/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-icon.jpg',

    subPicture2:
      'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/03/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-front-side-view.jpg',

    subPicture3:
      'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/02/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-side-view.jpg',

    subPicture4:
      'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/02/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-back-view.jpg',
  };

  const ObjectJa = [
    {
      url: Product.sucPicture1,
    },
    {
      url: Product.subPicture2,
    },
    {
      url: Product.subPicture3,
    },
    {
      url: Product.subPicture4,
    },
  ];

  return (
    <div>
      <BreadCrumbs />
      <div className='  '>
        <div className=' flex mt-8 justify-center gap-8 '>
          <div className='flex'>
            <div className=''>
              {ObjectJa.map((el, idx) => {
                return (
                  <>
                    <div
                      key={idx}
                      className=' w-[60px] h-[60px] '
                      role='button'
                      onMouseEnter={() => setIdx(idx)}
                    >
                      <img
                        src={el.url}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </>
                );
              })}
            </div>
            <div className=' w-96 h-96'>
              <img
                src={ObjectJa[idx].url}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div>
            <div className='text-[10px] border-b-5'>
              <a href=''>BenQ</a>
            </div>
            <div>{singlepd?.productName}</div>
            <div className='text-[10px]'>รหัสสินค้า : {singlepd?.id}</div>
            <div className='text-[10px] text-gray-500 opacity-50 border-b-2 pb-2'>
              ราคาปกติ: {singlepd?.price} Bath
            </div>
            <div className='flex gap-4 mt-8'>
              {singlepd?.disount ? (
                <div className='text-[20px] bg-red-800 rounded-lg text-white text-center px-4 my-auto py-2'>
                  ส่วนลด {singlepd?.disount}-
                </div>
              ) : null}
              <div className='text-[30px]'>
                {!singlepd?.disount
                  ? singlepd?.price
                  : +singlepd?.price - +singlepd?.disount}{' '}
                Bath
              </div>
            </div>
            <div className='flex gap-4 mt-8'>
              <div className='flex gap-4'>
                จำนวน:
                {/* ---------------------------------------ปุ่ม - ---------------------------------- */}
                <div className='flex w-full justify-center items-center gap-2 border-2 rounded-lg '>
                  <button
                    className='  w-[30px] h-[30px]  bg-white btn btn-primary border-none text-black'
                    onClick={() => {
                      if (count === 0) {
                        setCount(+count);
                      } else {
                        setCount(+count - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  {/* --------------------------------------- ใส่จำนวนได้---------------------------------- */}
                  <p>{count}</p>
                  {/* ---------------------------------------ปุ่ม + ---------------------------------- */}

                  <button
                    className='  w-[30px] h-[30px]  bg-white btn btn-primary border-none text-black'
                    onClick={() => {
                      setCount(+count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='flex gap-4 mt-8'>
              <button
                className='bg-white flex btn btn-primary'
                onClick={() => {
                  settempCarts((prev) => [...prev, singlepd]);
                  console.log(tempCarts);
                }}
              >
                <img src={addCartIcon} className='mr-4 ' />
                ใส่รถเข็นเลย
              </button>
              <button className='btn btn-primary'>ซื้อเลย</button>
            </div>
          </div>
        </div>
        <Property />
      </div>
    </div>
  );
}

export default ProductInfoPage;
