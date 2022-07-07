import { TbTruckDelivery } from 'react-icons/tb';
import { GiEmptyMetalBucket } from 'react-icons/gi';
import { useState, useEffect, useRef } from 'react';
import { ShippingOrderStatusContext } from '../../contexts/Supplier/ShippingOrderStatusContext';
import { useContext } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { RiTodoLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAllOrdersBySupplierId } from '../../apis/supplier/supplierOrder';
import { MdOutlineCancel } from 'react-icons/md';
import { OrderContext } from '../../contexts/Supplier/OrderContext';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';
import {
  createShippingOrder,
  updateStatusToClient,
  updateStatusToDelivered,
} from '../../apis/supplier/supplierShippingOrder';
import { FaRoad } from 'react-icons/fa';
import { getAllProductBySupplierId } from '../../apis/supplier/supplierProduct';
import { checkStatusOrder } from '../../services/checkstatusOrder';
import { FcCheckmark } from 'react-icons/fc';
import AddTrackingIdRow from '../../components/supplier/form/AddTrackingIdRow';
import TrackingIdButton from '../../components/supplier/form/TrackingIdButton';
import { BiListCheck } from 'react-icons/bi';
import { TbHourglassEmpty } from 'react-icons/tb';
// const mockArr = [
//   {
//     firstName: 'Panit Su',
//     id: 111,
//     productPrice: 11209.0,
//     purchasedOrderStatus: 'PENDING',
//     trackingId: '',
//     status: '',
//   },
//   {
//     firstName: 'Pal X',
//     id: 222,
//     productPrice: 34209.0,
//     purchasedOrderStatus: 'CONFIRMED',
//     trackingId: 'KER98900',
//     status: 'COMPLETED',
//   },
//   {
//     firstName: 'Node JS',
//     id: 333,
//     productPrice: 88209.0,
//     purchasedOrderStatus: 'CONFIRMED',
//     trackingId: 'SHOP12304',
//     status: 'TO_SHIPPING_COMPANY',
//   },
//   {
//     firstName: 'Gun Meta',
//     id: 444,
//     productPrice: 92209.0,
//     purchasedOrderStatus: 'CONFIRMED',
//     trackingId: 'FLASH12334',
//     status: 'TO_CLIENT',
//   },
//   {
//     firstName: 'J Next',
//     id: 555,
//     productPrice: 83229.0,
//     purchasedOrderStatus: 'PENDING',
//     trackingId: '',
//     status: '',
//   },
// ];
function OrderPage() {
  const [countOrder, setCountOrder] = useState(0);
  const [isEditTrackingId, setIsEditTrackingId] = useState(false);
  const { orders, setOrders } = useContext(OrderContext);
  console.log(orders);
  const [orderSearchTerm, setOrderSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('id');
  const modalRef = useRef();
  const navigate = useNavigate();
  // const { trackingId, setTrackingId } = useContext(ShippingOrderStatusContext);
  const [trackingIdObj, setTrackingIdObj] = useState({});
  const [hasTracking, setHasTracking] = useState(false);
  const [shippingDetails, setShippingDetails] = useState(orders);
  // console.log(shippingDetails);
  const { role } = useContext(SupplierAuthContext);
  // console.log(orders);
  let accuDate = [];

  const getDateArr = orders.map((el) => {
    return accuDate.push(el.createdAt);
  });
  const [products, setProducts] = useState([]);

  // console.log(getDateArr);

  useEffect(() => {
    const handleGetAllProductBySupplierId = async () => {
      try {
        const res = await getAllProductBySupplierId();
        console.log(res.data);

        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllProductBySupplierId();
  }, []);

  const filterByStockIsZero = () => {
    const resultArrByStockIsZero = products.filter((el) => +el.stock === 0);
    return resultArrByStockIsZero.length;
  };

  const handleGetAllOrdersBySupplierId = async () => {
    try {
      const res = await getAllOrdersBySupplierId();
      console.log(res.data);
      setOrders(res.data.orders);
      setCountOrder(orders.length);
      // setOrders(mockArr);
      setShippingDetails(res.data.orders);
      // setShippingDetails(mockArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetAllOrdersBySupplierId();
  }, [setOrders]);

  useEffect(() => {
    if (searchBy === 'id') {
      const filterByOrderId = (searchTerm) => {
        if (searchTerm.length === 1) {
          const resultArrByOrderId = orders.filter(
            (el) => String(el.id) === searchTerm.trim().replace(/\s/g, '')
          );
          setShippingDetails(resultArrByOrderId);
        } else {
          const resultArrByOrderId = orders.filter((el) =>
            String(el.id).includes(searchTerm.trim().replace(/\s/g, ''))
          );
          setShippingDetails(resultArrByOrderId);
        }
      };
      filterByOrderId(orderSearchTerm);
    }
    if (searchBy === 'firstName') {
      // let resultArrByName = [];
      const filterByName = (searchTerm) => {
        // let indiArr = [...searchTerm.trim().replace(/\s/g, '').toLowerCase()];
        // indiArr.forEach((el) => {
        //   const resultArrByName = mockArr.filter((elIn, idx) => {
        //     console.log(elIn.firstName.replace(/\s/g, '').toLowerCase());
        //     return elIn.firstName.replace(/\s/g, '').toLowerCase().includes(el);
        //   });
        const resultArrByName = orders.filter((elIn, idx) => {
          return elIn.Client.User.firstName
            .trim()
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(searchTerm.trim().replace(/\s/g, '').toLowerCase());
          // mockArr.forEach((elIn, idx) => {
          //   if (elIn.firstName.replace(/\s/g, '').toLowerCase().includes(el)) {
          //     resultArrByName = [...resultArrByName, elIn];
          //   }
          // });
        });
        console.log(resultArrByName);
        setShippingDetails(resultArrByName);
      };
      filterByName(orderSearchTerm);
    }
    if (searchBy === 'status') {
      const filterByStatus = (searchTerm) => {
        // console.log(searchTerm);
        const resultArrByStatus = orders.filter((el) =>
          // el?.status
          el.PurchasedOrder?.ShippingOrder?.status.includes(searchTerm)
        );
        setShippingDetails(resultArrByStatus);
      };
      filterByStatus(orderSearchTerm);
    }
    if (searchBy === 'paymentStatus') {
      const filterByStatus = (searchTerm) => {
        if (searchTerm === 'PENDING') {
          const resultArrByPaymentStatus = orders.filter(
            (el) => el?.PurchasedOrder === null
          );
          console.log(resultArrByPaymentStatus);
          setShippingDetails(resultArrByPaymentStatus);
        }
        if (searchTerm === 'CONFIRMED') {
          const resultArrByPaymentStatus = orders.filter(
            (el) => el?.PurchasedOrder !== null
          );
          console.log(resultArrByPaymentStatus);
          setShippingDetails(resultArrByPaymentStatus);
        }
      };
      filterByStatus(orderSearchTerm);
    }

    if (orderSearchTerm === 'CONFIRMED' && searchBy === 'paymentStatus') {
      const getTodoOrders = (searchTerm, hasTracking) => {
        if (searchTerm === 'CONFIRMED' && hasTracking === false) {
          const resultArrGetTodoOrders = orders.filter(
            (el) =>
              el?.PurchasedOrder !== null &&
              el.PurchasedOrder?.ShippingOrder?.trackingId === null
          );
          // console.log(resultArrGetTodoOrders);
          setShippingDetails(resultArrGetTodoOrders);
        }
      };
      getTodoOrders(orderSearchTerm);
    }
  }, [orderSearchTerm, orders, searchBy, hasTracking]);

  const filterByStatusNo = (searchTerm) => {
    if (searchTerm === 'PENDING') {
      const resultArrByPaymentStatus = orders.filter(
        (el) => el?.PurchasedOrder === null
      );
      return resultArrByPaymentStatus.length;
    }
  };
  const getTodoOrdersNo = () => {
    if (hasTracking === false) {
      const resultArrGetTodoOrders = orders.filter(
        (el) =>
          el?.PurchasedOrder !== null &&
          (el.PurchasedOrder?.ShippingOrder?.trackingId === null ||
            el.PurchasedOrder?.ShippingOrder?.trackingId === '')
      );
      return resultArrGetTodoOrders.length;
    }
  };

  const getAllShippingStatusIsToClientOrdersNumber = (searchTerm) => {
    const resultArrByStatus = orders.filter((el) =>
      // el?.status
      el.PurchasedOrder?.ShippingOrder?.status.includes(
        searchTerm.trim().replace(/\s/g, '')
      )
    );
    return resultArrByStatus.length;
  };
  getAllShippingStatusIsToClientOrdersNumber(orderSearchTerm);

  // const filterByUserId = (userId) => {};
  // const filterByStatus = (status) => {};

  // <option value='id'>หมายเลขคำสั่งซื้อ</option>
  // <option value='userId'>ชื่อลูกค้า</option>
  // <option value='status'>สถานะการจัดส่ง</option>

  return (
    <div className=''>
      <br />
      <div className=' grid grid-cols-2 gap-10'>
        <button
          onClick={() => {
            setSearchBy('paymentStatus');
            setOrderSearchTerm('PENDING');
          }}
          type='button'
          className='stat   flex justify-between items-center border-2 rounded-3xl hover:border-secondary '
        >
          <div className=''>
            <div className='stat-title'>รอชำระ</div>
            <div className='stat-value text-secondary'>
              {filterByStatusNo('PENDING')}
            </div>
          </div>
          <div className=' text-secondary '>
            {<TbHourglassEmpty size={45} />}
          </div>
        </button>
        <button
          onClick={() => {
            setSearchBy('status');
            setOrderSearchTerm('TO_SHIPPING_COMPANY');
          }}
          type='button'
          className='stat  border-2 rounded-3xl hover:border-warning flex justify-between'
        >
          <div className='w-[69px]'>
            <div className='stat-title'>ต้องส่ง</div>
            <div className='stat-value text-warning'>{getTodoOrdersNo()}</div>
          </div>
          <div className='stat-figure text-warning'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          </div>
        </button>
        <button
          onClick={() => {
            setSearchBy('status');
            setOrderSearchTerm('TO_CLIENT');
          }}
          type='button'
          className=' stat border-2 rounded-3xl hover:border-accent flex justify-between'
        >
          <div>
            <div className='stat-title'>กำลังส่ง</div>
            <div className='stat-value text-accent'>
              {getAllShippingStatusIsToClientOrdersNumber('TO_CLIENT')}
            </div>
          </div>
          <div className='stat-figure text-secondary '>
            <div className='stat-figure text-accent   '>
              {<TbTruckDelivery size={45} />}
            </div>
          </div>
        </button>
        <button
          onClick={() => {
            navigate({ pathname: '/supplier/my-product', search: '?stock=0' });
          }}
          type='button'
          className='flex justify-between stat border-2 rounded-3xl hover:border-info'
        >
          <div>
            <div className='stat-title'>สินค้าหมด</div>
            <div className='stat-value text-info'>{filterByStockIsZero()}</div>
          </div>
          <div className='stat-figure text-info'>
            {<GiEmptyMetalBucket size={45} />}
          </div>
        </button>
      </div>
      <br />
      <button
        onClick={() => {
          setSearchBy('');
          setOrderSearchTerm('');
          handleGetAllOrdersBySupplierId();
        }}
        type='button'
        className=' stat border-2 rounded-3xl hover:border-primary flex justify-between'
      >
        <div>
          <div className='stat-title'>ออเดอร์ทั้งหมด</div>
          <div className='stat-value  pr-10 text-primary '>{countOrder}</div>
        </div>
        <div className='stat-figure text-secondary '>
          <div className='stat-figure text-primary   '>
            {<RiTodoLine size={45} />}
          </div>
        </div>
      </button>
      <br />
      <br />
      <>
        <div className='h-auto'>
          <div className='flex items-center  '>
            {<CgFileDocument size={45} />}
            <h className='text-4xl pl-4 '>คำสั่งซื้อทั้งหมด</h>
          </div>
          <br />
          <div className='w-auto flex p-2 h-auto '>
            <div className='flex gap-4 items-center   '>
              <div className=' flex items-center justify-center text-lg gap-2 '>
                <label for='searches' className=''>
                  ค้นหาโดย:
                </label>
                <select
                  name='searches'
                  id='searches'
                  className=' text-bold text-primary-focus border-2 h-[53px] w-[230px] rounded-lg p-2 '
                  onChange={(e) => {
                    setSearchBy(e.target.value);
                    setOrderSearchTerm('');
                  }}
                  value={searchBy}
                >
                  <option value='id'>หมายเลขคำสั่งซื้อ</option>
                  <option value='firstName'>ชื่อลูกค้า</option>
                  <option value='status'>สถานะการจัดส่ง</option>
                  <option value='paymentStatus'>สถานะการชำระเงิน</option>
                </select>
              </div>
              <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
                {searchBy === 'status' ? (
                  <>
                    <select
                      type='text'
                      onChange={(event) => {
                        setOrderSearchTerm(event.target.value);
                      }}
                      value={orderSearchTerm}
                      className=' w-[395px] h-[50px] rounded-lg text-lg p-2'
                    >
                      {/* <option value=''>กรุณาเลือกสถานะการจัดส่ง</option> */}
                      <option value=''>กรุณาเลือกสถานะการจัดส่ง</option>
                      <option value='TO_SHIPPING_COMPANY'>ต้องส่ง</option>
                      <option value='TO_CLIENT'>กำลังส่ง</option>
                      <option value='DELIVERED'>ส่งเสร็จสิ้น</option>
                    </select>
                  </>
                ) : (
                  <>
                    {searchBy === 'paymentStatus' ? (
                      <>
                        <select
                          type='text'
                          onChange={(event) => {
                            setOrderSearchTerm(event.target.value);
                          }}
                          value={orderSearchTerm}
                          className=' w-[395px] h-[50px] rounded-lg text-lg p-2'
                        >
                          <option value=''>กรุณาเลือกสถานะการชำระเงิน</option>
                          <option value='CONFIRMED'>ชำระแล้ว</option>
                          <option value='PENDING'>รอชำระ</option>
                        </select>
                      </>
                    ) : (
                      <>
                        <input
                          type='text'
                          placeholder='ค้นหาคำสั่งซื้อ'
                          className='input w-[395px] text-lg'
                          onChange={(event) => {
                            setOrderSearchTerm(event.target.value);
                          }}
                          value={orderSearchTerm}
                        />
                      </>
                    )}
                  </>
                )}
              </div>
              <button
                onClick={() => setOrderSearchTerm('')}
                className='hover:scale-125'
              >
                {<MdOutlineCancel size={25} />}
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className='overflow-x-auto flex justify-center'>
          <table className='table p-2'>
            <thead>
              <tr className=''>
                <th className=''>ลำดับ</th>
                <th className='text-center'>วันที่</th>
                <th className=''>ชื่อลูกค้า</th>
                <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
                <th className='text-end'>ยอดคำสั่งซื้อ</th>
                <th className='text-center'>สถานะการชำระเงิน</th>
                <th className='flex justify-center'>Tracking Id</th>
                <th className='text-center'></th>
                <th className='text-center'>Shipping Order Status</th>
              </tr>
            </thead>
            {role === 'SUPPLIER' ? (
              <>
                <tbody>
                  {shippingDetails?.map((el, idx) => {
                    return (
                      <>
                        <tr className='hover cursor-pointer' key={idx}>
                          <td className='text-center  '>{idx + 1}</td>
                          <td className='font-bold'>{`${el.createdAt.slice(
                            8,
                            10
                          )}${el.createdAt.slice(4, 7)}-${el.createdAt.slice(
                            0,
                            4
                          )}`}</td>
                          <td>
                            <div class='flex items-center space-x-3'>
                              <div className='flex w-[40px] justify-center'>
                                <div class='font-bold'>
                                  {el.Client.User.firstName || ''}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              className='flex space-x-3 justify-center items-center font-bold'
                              onClick={() => {
                                navigate(`/supplier/order/${el.id}`);
                              }}
                            >
                              <p className='cursor-pointer border-2 hover:border-primary w-[90px] rounded-lg text-center p-2 h-14 flex items-center justify-center bg-white '>
                                {el.id}
                              </p>
                            </div>
                          </td>
                          <th>
                            <p className='flex justify-end '>
                              {el.productPrice.toFixed(2)}
                            </p>
                          </th>
                          <th>
                            <label className=''>
                              <div className=' text-warning text-center'>
                                {el.PurchasedOrder ? (
                                  <>
                                    <div className=' text-success text-center'>
                                      CONFIRMED
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className=' text-warning text-center'>
                                      PENDING
                                    </div>
                                  </>
                                )}
                              </div>
                            </label>
                          </th>
                          <th className=''>
                            {el.PurchasedOrder === null ||
                            el.PurchasedOrder?.ShippingOrder === null ? (
                              <>
                                <p className='text-ghost text-center items-center flex justify-center  w-[170px] h-14 rounded-lg   '>
                                  -
                                </p>
                              </>
                            ) : (
                              <>
                                {el.PurchasedOrder?.ShippingOrder
                                  ?.trackingId ? (
                                  <>
                                    <p className='text-ghost text-center items-center flex justify-center  w-[170px] h-14 rounded-lg   '>
                                      {el.PurchasedOrder?.ShippingOrder
                                        ?.trackingId || '-'}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <AddTrackingIdRow
                                      idx={idx}
                                      order={el}
                                      setTrackingIdObj={setTrackingIdObj}
                                      shippingOrderId={
                                        el.PurchasedOrder?.ShippingOrder?.id
                                      }
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </th>
                          <th className=''>
                            {el.PurchasedOrder === null ||
                            el.PurchasedOrder?.ShippingOrder === null ? (
                              <></>
                            ) : (
                              <>
                                {el.PurchasedOrder?.ShippingOrder
                                  ?.trackingId ? (
                                  <></>
                                ) : (
                                  <>
                                    <div className=' w-[50px]'>
                                      <label
                                        type='button'
                                        htmlFor='my-modal-4'
                                        className='text-center border-2 rounded-lg px-3  hover:scale-110 text-white border-success h-[56px] flex items-center '
                                      >
                                        {<FcCheckmark size={20} />}
                                      </label>
                                      <TrackingIdButton
                                        handleGetAllOrdersBySupplierId={
                                          handleGetAllOrdersBySupplierId
                                        }
                                      />
                                    </div>
                                  </>
                                )}
                              </>
                            )}
                          </th>
                          <th className=''>
                            {el.PurchasedOrder &&
                            el.PurchasedOrder?.ShippingOrder?.trackingId ===
                              null ? (
                              <p className='text-center'>TO_SHIPPING_COMPANY</p>
                            ) : (
                              <>
                                {el.PurchasedOrder?.ShippingOrder?.status ? (
                                  <>
                                    <p className='text-center'>
                                      {el.PurchasedOrder?.ShippingOrder?.status}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p className='text-center'>-</p>
                                  </>
                                )}
                              </>
                            )}
                          </th>
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
        <br />
      </>
    </div>
  );
  // <select
  //   className='p-2  h-14 rounded-lg border-2 hover:border-warning text-ghost text-center '
  //   onChange={(event) =>
  //     //
  //     setShippingDetails((prevShippingDetail) => [
  //       ...prevShippingDetail.slice(0, idx),
  //       {
  //         ...prevShippingDetail[idx],
  //         status: event.target.value.trim(),
  //         orderId: el.id,
  //       },
  //       ...prevShippingDetail.slice(idx + 1),
  //     ])
  //   }
  //   value={el.status}
  //   type='text'
  //   placeholder={el.status}
  // >
  //   <option value='TO_SHIPPING_COMPANY'>
  //     กำลังส่ง
  //   </option>
  //   <option value='TO_CLIENT'>กำลังส่ง</option>
  //   <option value='COMPLETED'>ส่งเสร็จสิ้น</option>
  // </select>
  // <p className='text-center'>ต้องส่ง</p>
}

export default OrderPage;
