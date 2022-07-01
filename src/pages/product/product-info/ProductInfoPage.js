import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../../../components/Client/products/productInfo/BreadCrumbs';
import addCartIcon from '../../../../src/components/Client/products/productInfo/icons/add-to-cart.svg';
import Property from './Property';
import { useLoading } from '../../../contexts/LoadingContext';
import { useLocation } from 'react-router-dom';
import { useProductfilter } from '../../../contexts/ProductContext';
import LocalstringComma, {
  localsting,
} from '../../../services/LocalstringComma';

function ProductInfoPage() {
  const locate = useLocation();
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(0);
  const [Objecturl, setObjectJa] = useState([]);
  const [singlepd, setsinglepd] = useState(null);
  const { getsinglepd, settempCarts, tempCarts } = useProductfilter();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // for (const param of params) {
    //   console.log(param);
    // }
    const fetchPd = async () => {
      setsinglepd(null);
      setIsLoading(true);
      const pdid = locate.pathname.split('/')[2];
      const singlePD = await getsinglepd(pdid);
      // await console.log(singlePD);
      await setsinglepd(singlePD);
      await setCount(1);
      const ObjectJa = [
        {
          url: await singlePD.mainPicture,
        },
        {
          url: await singlePD.subPicture2,
        },
        {
          url: await singlePD.subPicture3,
        },
        {
          url: await singlePD.subPicture4,
        },
      ];
      await setObjectJa(ObjectJa);
      await setIsLoading(false);
    };
    fetchPd();
    // console.log(Objecturl);
  }, []);
  // console.log(singlepd);
  const HandleAddcart = async () => {
    const findAlredyCart = tempCarts.find((el) => {
      return el.id === singlepd.id;
    });
    // console.log(findAlredyCart);
    if (findAlredyCart !== undefined) {
      await settempCarts((prev) => {
        // console.log(prev);
        const newarr = prev.map((el) => {
          if (el.id === singlepd.id) {
            // console.log(el.id);
            // console.log(singlepd.id);
            el.amount += count;
            return el;
          } else return el;
        });
        // console.log(newarr);
        return newarr;
      });
      setCount(1);

      // await settempCarts((prev) => [...prev, singlepd]);
    } else {
      await setsinglepd((prevState) => {
        let newstage = Object.assign(prevState, prevState.amount); // creating copy of state variable jasper
        newstage.amount = count; // update the name property, assign a new value
        return newstage; // return new object jasper object
      });
      await settempCarts((prev) => [...prev, singlepd]);
      setCount(1);
    }
  };

  // const Product = {
  //   mainPicture: singlepd.mainPicture,

  //   sucPicture1:
  //     'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/06/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-icon.jpg',

  //   subPicture2:
  //     'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/03/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-front-side-view.jpg',

  //   subPicture3:
  //     'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/02/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-side-view.jpg',

  //   subPicture4:
  //     'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/02/Product/dell-s2422hg-23-6-va-curved-gaming-monitor-165hz-back-view.jpg',
  // };

  return (
    <div>
      <BreadCrumbs />
      <div className='  '>
        <div className=' flex mt-8 justify-center gap-8 '>
          <div className='flex'>
            <div className=''>
              {Objecturl
                ? Objecturl?.map((el, idx) => {
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
                  })
                : null}
            </div>
            <div className=' w-96 h-96'>
              <img
                src={Objecturl[idx]?.url}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div>
            <div className='text-[10px] border-b-5'>
              <a href=''>{singlepd?.Supplier.displayName}</a>
            </div>
            <div>{singlepd?.productName}</div>
            <div className='text-[10px]'>รหัสสินค้า : {singlepd?.id}</div>
            <div>
              {singlepd?.disount ? (
                <div className='text-[10px] text-gray-500 opacity-50 border-b-2 pb-2 line-through'>
                  ราคาปกติ: {localsting(+singlepd?.price)} Bath
                </div>
              ) : null}
            </div>
            <div className='flex gap-4 mt-8'>
              {singlepd?.disount ? (
                <div className='text-[20px] bg-red-800 rounded-lg text-white text-center px-4 my-auto py-2'>
                  ส่วนลด {singlepd?.disount}-
                </div>
              ) : null}
              <div className='text-[30px]'>
                {!singlepd?.disount
                  ? localsting(+singlepd?.price)
                  : localsting(+singlepd?.price - +singlepd?.disount)}{' '}
                Bath
              </div>
            </div>
            <div className='flex gap-4 mt-8'>
              <div className='flex gap-4'>
                จำนวน:
                {/* ---------------------------------------ปุ่ม - ---------------------------------- */}
                <div className='flex w-full justify-center items-center gap-2 border-2 rounded-lg '>
                  <button
                    className={`w-[30px] h-[30px]  bg-white btn btn-primary border-none  ${
                      count === 0
                        ? 'btn-disabled text-gray-500 opacity-50 '
                        : ' text-black'
                    }`}
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
                  <div className='px-4'>
                    <p className='w-4 text-center'>{count}</p>
                  </div>
                  {/* ---------------------------------------ปุ่ม + ---------------------------------- */}

                  <button
                    className={`w-[30px] h-[30px]  bg-white btn btn-primary border-none text-black ${
                      singlepd?.stock <= count ? 'btn-disabled' : ''
                    }`}
                    onClick={() => {
                      setCount(+count + 1);
                    }}
                  >
                    <div>+</div>
                  </button>
                </div>
                {singlepd?.stock <= count && (
                  <div className='text-red-500 my-auto w-4 text-[16px]'>
                    สินค้าหมด
                  </div>
                )}
              </div>
            </div>
            <div className='flex gap-4 mt-8'>
              <button
                className='bg-white flex btn btn-primary'
                onClick={() => {
                  HandleAddcart();
                }}
              >
                <img src={addCartIcon} className='mr-4 ' />
                ใส่รถเข็นเลย
              </button>
              <button
                className='btn btn-primary'
                onClick={() => {
                  HandleAddcart();
                }}
              >
                ซื้อเลย
              </button>
            </div>
          </div>
        </div>
        <Property singlepd={singlepd} />
      </div>
    </div>
  );
}

export default ProductInfoPage;
