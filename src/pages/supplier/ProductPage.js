import chair from '../../pictures/chair.png';
import keyboard from '../../pictures/keyboard.png';
import speaker from '../../pictures/speaker.png';
import { MdOutlineEditNote } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/Supplier/OrderContext';
import { SupplierProductContext } from '../../contexts/Supplier/SupplierProductContext';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';
import { getAllProductBySupplierId } from '../../apis/supplier/supplierProduct';
import defaultPic from '../../pictures/defaultPic.png';
// const mockArr = [
//   {
//     mainPicture: speaker,
//     stock: 2,
//     price: 1149.0,
//     productName: 'ลำโพง Edifier R1855DB Computer Speaker',
//     status: 'PENDING',
//     rejectReason: null,
//     id: 101,
//     brand: 'Edifier',
//   },
//   {
//     mainPicture: chair,
//     stock: 12,
//     price: 3420.0,
//     productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
//     status: 'APPROVED',
//     rejectReason: null,
//     id: 202,
//     brand: 'Bewell',
//   },
//   {
//     mainPicture: keyboard,
//     stock: 22,
//     price: 8309.0,
//     productName:
//       'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
//     status: 'REJECTED',
//     rejectReason: 'สินค้าผิดกฎหมาย',
//     id: 303,
//     brand: 'Keychron',
//   },
// ];

function ProductPage() {
  const navigate = useNavigate();
  const { supplierProducts, setSupplierProducts } = useContext(
    SupplierProductContext
  );
  const { role } = useContext(SupplierAuthContext);

  // const colorArr = [
  //   { PRODUCT_STATUS: 'PENDING', color: 'waring' },
  //   { PRODUCT_STATUS: 'APPROVED', color: 'success' },
  //   { PRODUCT_STATUS: 'REJECTED', color: 'error' },
  //   { PRODUCT_STATUS: 'HIDDEN', color: 'base-content' },
  // ];
  const [productSearchTerm, setProductSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('productName');

  const [products, setProducts] = useState([]);

  const findColor = (text) => {
    if (text === 'PENDING') {
      return 'warning';
    }
    if (text === 'APPROVED') {
      return 'success';
    }
    if (text === 'REJECTED') {
      return 'error';
    }
    if (text === 'HIDDEN') {
      return 'base-content';
    }
  };

  // useEffect(() => {
  //   const handleGetAllOrdersBySupplierId = async () => {
  //     try {
  //       const res = await getAllOrdersBySupplierId();
  //       console.log(res.data);
  //       // setOrders(res.data.orders);
  //       // setShippingDetails(res.data.orders);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handleGetAllOrdersBySupplierId();
  // }, []);

  // <option value='productName'>ชื่อสินค้า</option>
  // <option value='status'>สถานะสินค้า</option>
  // <option value='id'>รหัสสินค้า</option>
  // <option value='brand'>ยี่ห้อ</option>
  // <option value='deliveryStatus'>สถานะการจัดส่ง</option>

  useEffect(() => {
    const handleGetAllProductBySupplierId = async () => {
      try {
        const res = await getAllProductBySupplierId();
        console.log(res.data);
        setSupplierProducts(res.data.products);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllProductBySupplierId();
  }, [setSupplierProducts]);

  useEffect(() => {
    // console.log(searchBy);
    if (searchBy === 'productName') {
      const filterByProductName = (searchTerm) => {
        const resultArrByProductName = supplierProducts.filter((elIn, idx) => {
          return elIn.productName
            .trim()
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(searchTerm.trim().replace(/\s/g, '').toLowerCase());
        });
        setProducts(resultArrByProductName);
      };
      filterByProductName(productSearchTerm);
    }

    if (searchBy === 'status') {
      const filterByStatus = (searchTerm) => {
        console.log(searchTerm.trim().replace(/\s/g, ''));
        const resultArrByStatus = supplierProducts.filter((el) =>
          el.status
            .trim()
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(searchTerm.trim().replace(/\s/g, '').toLowerCase())
        );
        setProducts(resultArrByStatus);
      };
      filterByStatus(productSearchTerm);
    }
    if (searchBy === 'id') {
      const filterByProductId = (searchTerm) => {
        console.log(searchTerm.trim().replace(/\s/g, ''));
        const resultArrByProductId = supplierProducts.filter((el) =>
          String(el.id).includes(searchTerm.trim().replace(/\s/g, ''))
        );
        setProducts(resultArrByProductId);
      };
      filterByProductId(productSearchTerm);
    }
    if (searchBy === 'brand') {
      const filterByBrand = (searchTerm) => {
        console.log(searchTerm.trim().replace(/\s/g, ''));
        const resultArrByBrand = supplierProducts.filter((el) =>
          el.brand
            .trim()
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(searchTerm.trim().replace(/\s/g, '').toLowerCase())
        );
        setProducts(resultArrByBrand);
      };
      filterByBrand(productSearchTerm);
    }
  }, [productSearchTerm, searchBy, supplierProducts]);

  return (
    <div className='flex flex-col mb-[160px] h-auto'>
      <div className='h-[185px]'>
        <div className='flex items-center m-4'>
          {<FiShoppingBag size={45} />}
          <h className='text-4xl pl-4 '>สินค้าทั้งหมด</h>
        </div>
        <br />
        <div className='w-[740px] flex p-2'>
          <div className='flex gap-4'>
            <div className='w-[360px]  h-[53px] flex items-center justify-center text-lg gap-4 '>
              <label for='searches' className=''>
                ค้นหาโดย:
              </label>
              <select
                onChange={(e) => {
                  setSearchBy(e.target.value);
                  setProductSearchTerm('');
                }}
                value={searchBy}
                name='searches'
                id='searches'
                className=' text-bold text-primary-focus border-2 h-[53px] w-[230px] rounded-lg '
              >
                <option value='productName'>ชื่อสินค้า</option>
                <option value='status'>สถานะสินค้า</option>
                <option value='id'>รหัสสินค้า</option>
                <option value='brand'>ยี่ห้อ</option>
              </select>
            </div>
            <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
              {searchBy === 'status' ? (
                <>
                  <select
                    type='text'
                    onChange={(event) => {
                      setProductSearchTerm(event.target.value);
                    }}
                    value={productSearchTerm}
                    className=' w-[395px] h-[50px] rounded-lg text-lg p-2'
                  >
                    <option value=''>กรุณาเลือกสถานะสินค้า</option>
                    <option value='PENDING'>อยู่ระหว่างดำเนินการ</option>
                    <option value='APPROVED'>อนุมัติแล้ว</option>
                  </select>
                </>
              ) : (
                <>
                  <input
                    type='text'
                    placeholder='ค้นหาสินค้า'
                    className='input w-[395px] text-lg '
                    onChange={(event) => {
                      setProductSearchTerm(event.target.value);
                    }}
                    value={productSearchTerm}
                  />
                </>
              )}
            </div>
            <button
              onClick={() => setProductSearchTerm('')}
              className='hover:scale-125 '
            >
              {<MdOutlineCancel size={25} />}
            </button>
          </div>
        </div>
      </div>
      <div className='flex m-4  object-contain h-auto overflow-x-auto justify-center '>
        <table className='table'>
          <thead className=''>
            <tr className=''>
              <th>ลำดับ</th>
              <th>รหัสสินค้า</th>
              <th></th>
              <th className='text-center'>รายการ</th>
              <th className='flex justify-center'>stock</th>
              <th>ราคาต่อหน่วย</th>
              <th className='text-center'>สถานะ</th>
              <th className='text-center'>หมายเหตุ</th>
              <th className=''></th>
            </tr>
          </thead>
          {role === 'SUPPLIER' ? (
            <>
              <tbody className=''>
                {products?.map((el, index) => {
                  let color = findColor(el.status);
                  return (
                    <>
                      <tr
                        className='hover cursor-pointer'
                        onClick={() => {
                          navigate(`/supplier/product/${el.id}`);
                        }}
                      >
                        <td className='text-center font-bold'>{index + 1}</td>
                        <td className='text-center font-bold '>{el.id || 0}</td>
                        <td>
                          <div className='flex items-center space-x-3 justify-center'>
                            <img
                              className='object-contain h-16 w-[60px] '
                              src={el.mainPicture || defaultPic}
                              alt='mainPic'
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <div className='font-bold  text-lg text-blue-900'>
                              {el.brand}
                            </div>
                            <div className=' w-[380px] flex overflow-x-auto h-12 items-center font-bold'>
                              {el.productName}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='flex justify-center'>
                            <p className='text-ghost font-bold'>{el.stock}</p>
                          </div>
                        </td>
                        <td>
                          <div className='flex justify-end font-bold'>
                            <p className=''>{el.price.toFixed(2)}</p>
                          </div>
                        </td>
                        <td>
                          <div className='flex justify-center'>
                            <p
                              className={`text-center font-bold justify-end text-${color}`}
                            >
                              {el.status}
                            </p>
                          </div>
                        </td>
                        <td>
                          <p className=' text-xs w-[90px] flex overflow-x-auto justify-center'>
                            {el.rejectReason || '-'}
                          </p>
                        </td>
                        <td>
                          <button
                            className='flex gap-2 items-center hover:scale-105'
                            onClick={() => {
                              navigate('/supplier/product/selected');
                            }}
                          >
                            <MdOutlineEditNote size={25} />
                            <p>แก้ไขสินค้า</p>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </>
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
}

export default ProductPage;
