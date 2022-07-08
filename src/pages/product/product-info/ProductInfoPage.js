import React, { useEffect, useState } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useParams, useLocation } from 'react-router-dom';
import BreadCrumbs from '../../../components/Client/products/productInfo/BreadCrumbs';
import addCartIcon from '../../../../src/components/Client/products/productInfo/icons/add-to-cart.svg';
import Property from './Property';
// import { useLoading } from '../../../contexts/LoadingContext';
import { useProductfilter } from '../../../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import LocalstringComma, {
  localsting,
} from '../../../services/LocalstringComma';
import { useAdminContext } from '../../../contexts/Admin/AdminContext';
import {
  adminApproveProduct,
  adminRejectProduct,
} from '../../../apis/admin/productAdmin';
import { PRODUCT_STATUS } from '../../../config/constants';
import { BsCartCheck } from 'react-icons/bs';
import { useLoading } from '../../../contexts/LoadingContext';

function ProductInfoPage({}) {
  const locate = useLocation();
  const navigate = useNavigate();

  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(1);
  const [Objecturl, setObjectJa] = useState([]);
  const [singlepd, setsinglepd] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const { admin } = useAdminContext();
  const { getsinglepd, settempCarts, tempCarts } = useProductfilter();
  // const { setIsLoading } = useLoading();
  const { productId } = useParams();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(true);
    const fetchPd = async () => {
      setsinglepd(null);
      // setIsLoading(true);
      const singlePD = await getsinglepd(productId);

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
      // await setIsLoading(false);
    };
    fetchPd();
    setIsLoading(false);
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
        const newarr = prev.map((el, idx) => {
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

  const handleApproveButton = async () => {
    try {
      await adminApproveProduct(singlepd.id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleRejectButton = async () => {
    try {
      await adminRejectProduct(singlepd.id, rejectReason);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BreadCrumbs />

      <div className=' flex mt-8 justify-center gap-8 '>
        <div className='flex gap-4'>
          <div className=''>
            {Objecturl
              ? Objecturl?.map((el, idx) => {
                  return (
                    <div key={idx} className='pb-4'>
                      <div
                        className=' w-[60px] h-[60px] '
                        role='button'
                        onMouseEnter={() => setIdx(idx)}
                      >
                        <img
                          src={el.url}
                          className='w-full h-full object-contain'
                        />
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className=' w-96 h-96'>
            <img
              src={Objecturl[idx]?.url}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <div className='w-80'>
          <div className='text-[10px] border-b-5'>
            <a href={`/shop/${singlepd?.Supplier.id}`}>
              {singlepd?.Supplier.displayName}
            </a>
          </div>
          <div>{singlepd?.productName}</div>

          <div className='text-[10px]'>รหัสสินค้า : {singlepd?.id}</div>
          <div className='text-[10px] '>คลังสินค้า : {singlepd?.stock}</div>

          <div>
            {singlepd?.Promotions.length > 0 ? (
              <div className='text-[10px] text-gray-500 opacity-50 border-b-2 pb-2 line-through'>
                ราคาปกติ: {localsting(+singlepd?.price)} ฿
              </div>
            ) : null}
          </div>
          <div className='flex gap-4 mt-8'>
            {singlepd?.Promotions[0]?.discount ? (
              <div className='text-[20px] bg-red-800 rounded-lg text-white text-center px-4 my-auto py-2'>
                ส่วนลด -{singlepd?.Promotions[0]?.discount}
              </div>
            ) : null}
            <div className='text-[30px]'>
              {!singlepd?.Promotions[0]?.discount
                ? localsting(+singlepd?.price)
                : localsting(
                    +singlepd?.price - +singlepd?.Promotions[0]?.discount
                  )}{' '}
              ฿
            </div>
          </div>
          {admin ? (
            <div>Stock: {singlepd?.stock}</div>
          ) : (
            <>
              <div className='flex gap-4 mt-8'>
                <div className='flex gap-4'>
                  จำนวน:
                  {/* ---------------------------------------ปุ่ม - ---------------------------------- */}
                  <div className='flex w-full justify-center items-center gap-2 border-2 rounded-lg '>
                    <button
                      className={`w-[30px] h-[30px]  bg-white btn btn-primary border-none  ${
                        count === 1
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
                </div>
              </div>

              <div>
                {singlepd?.stock <= count && (
                  <div className='text-red-500  w-full flex gap-2 mt-4'>
                    <BiErrorCircle />
                    <p className='text-[12px] text-right'>
                      ไม่สามารถเพิ่มจำนวนสินค้าได้ เนื่องจากเกินจำนวนคลังสินค้า
                    </p>
                  </div>
                )}
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
                    navigate('/cart');
                  }}
                >
                  ซื้อเลย
                </button>
              </div>
            </>
          )}

          {admin && singlepd?.status === PRODUCT_STATUS.PENDING ? (
            <>
              <textarea
                onChange={(e) => {
                  setRejectReason(e.target.value);
                }}
                value={rejectReason}
                type='text-area'
                placeholder='Type here'
                className='input input-bordered input-primary w-full max-w-xs mt-5 ms-3'
              ></textarea>
              <div className='flex gap-2 justify-end mt-3'>
                <button
                  className='btn btn-success flex'
                  onClick={handleApproveButton}
                >
                  Approve
                </button>
                <button
                  className='btn btn-error flex'
                  onClick={handleRejectButton}
                >
                  Reject
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <Property singlepd={singlepd} />
    </motion.div>
  );
}

export default ProductInfoPage;
