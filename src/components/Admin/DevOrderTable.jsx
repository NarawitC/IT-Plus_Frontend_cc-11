import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../services/dateFormat';
import { useAdminSearchContext } from '../../contexts/Admin/AdminSearchContext';
import { TbTruckDelivery } from 'react-icons/tb';
import { CgFileDocument } from 'react-icons/cg';
import { RiTodoLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import Searchbar from '../Client/layout/Header/Searchbar/Searchbar';
import { MdOutlinePaid } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { localsting } from '../../services/LocalstringComma';
function DevOrderTable() {
  const [AllOrder, setAllOrder] = useState([]);
  const [initialAllOrderFilter, setInitialAllOrderFilter] = useState([]);
  const { orderId } = useAdminSearchContext();
  const [searchBy, setSearchBy] = useState('orderId');
  const [orderSearchTerm, setOrderSearchTerm] = useState('');
  const [noOrder, setNoOrder] = useState(0);
  const navigate = useNavigate();

  const fetchOrder = async () => {
    try {
      const res = await axios.get('/admin/order');
      const orderList = res.data.orders;

      console.log(res.data.orders);
      setInitialAllOrderFilter(orderList);
      setAllOrder(orderList);
      setNoOrder(orderList.length);

      // if (+orderId) {
      //   const order = orderList.find((el) => el.id === +orderId);
      //   if (order) {
      //     setAllOrder([order]);
      //   }
      // } else {
      //   setAllOrder(orderList);
      // }
    } catch (e) {
      console.log(e.response.data);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, [orderId]);
  // console.log(AllOrder);

  useEffect(() => {
    if (searchBy === 'orderId') {
      const filterByOrderId = (searchTerm) => {
        if (searchTerm.length === 1) {
          const resultArrByOrderId = initialAllOrderFilter.filter(
            (el) => String(el.id) === searchTerm.trim().replace(/\s/g, '')
          );
          setAllOrder(resultArrByOrderId);
        } else {
          const resultArrByOrderId = initialAllOrderFilter.filter((el) =>
            String(el.id).includes(searchTerm.trim().replace(/\s/g, ''))
          );
          setAllOrder(resultArrByOrderId);
        }
      };
      filterByOrderId(orderSearchTerm);
    }
    if (searchBy === 'paymentStatus') {
      const filterByPaymentStatus = (searchTerm) => {
        if (searchTerm === 'PENDING') {
          const resultArrByPaymentStatus = initialAllOrderFilter.filter(
            (el) => el?.PurchasedOrder === null
          );
          console.log(resultArrByPaymentStatus);
          setAllOrder(resultArrByPaymentStatus);
        }
        if (searchTerm === 'CONFIRMED') {
          const resultArrByPaymentStatus = initialAllOrderFilter.filter(
            (el) => el?.PurchasedOrder !== null
          );
          console.log(resultArrByPaymentStatus);
          setAllOrder(resultArrByPaymentStatus);
        }
      };
      filterByPaymentStatus(orderSearchTerm);
    }
    if (searchBy === 'status') {
      console.log('555555555');
      const filterByShippingStatus = (searchTerm) => {
        console.log(searchTerm.trim().replace(/\s/g, ''));
        const resultArrByStatus = initialAllOrderFilter.filter(
          (el) =>
            // el?.status
            el.PurchasedOrder?.ShippingOrder?.status === searchTerm
        );
        setAllOrder(resultArrByStatus);
      };
      filterByShippingStatus(orderSearchTerm);
    }
  }, [orderSearchTerm, searchBy]);

  const filterByStatusNo = (searchTerm) => {
    if (searchTerm === 'CONFIRMED') {
      const resultArrByPaymentStatus = initialAllOrderFilter.filter(
        (el) => el?.PurchasedOrder !== null
      );
      return resultArrByPaymentStatus.length;
    }
  };

  const getTodoOrdersNo = () => {
    const resultArrGetTodoOrders = initialAllOrderFilter.filter(
      (el) =>
        el?.PurchasedOrder !== null ||
        el.PurchasedOrder?.ShippingOrder?.trackingId === null
    );
    return resultArrGetTodoOrders.length;
  };

  const getAllShippingStatusIsDeliveredOrdersNumber = (searchTerm) => {
    const resultArrByStatus = initialAllOrderFilter.filter((el) =>
      // el?.status
      el.PurchasedOrder?.ShippingOrder?.status.includes(
        searchTerm.trim().replace(/\s/g, '')
      )
    );
    return resultArrByStatus.length;
  };
  getAllShippingStatusIsDeliveredOrdersNumber(orderSearchTerm);
  return (
    <>
      {/* <div>
        <div>
          <table className='table table-compact w-3/4 mx-auto'>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Client Id</th>
                <th>Total Price</th>
                <th>Delivery Address</th>
                <th>Delivery Price</th>
                <th>Update At</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {AllOrder?.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <th>{el.id}</th>
                    <td>{el.clientId}</td>
                    <td>{el.productPrice + el.deliveryPrice}</td>
                    <td>{el.deliveryAddress}</td>
                    <td>{el.deliveryPrice}</td>
                    <td>{dateFormat(el.createdAt)}</td>
                    <td>
                      <Link
                        to={`/admin/order/${el.id}`}
                        className='btn btn-accent'
                      >
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Order Id</th>
                <th>Client Id</th>
                <th>Total Price</th>
                <th>Delivery Address</th>
                <th>Delivery Price</th>
                <th>Update At</th>
                <th>Details</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div> */}
      <>
        <div className=' grid grid-cols-3 gap-10 px-32'>
          <button
            onClick={() => {
              setSearchBy('paymentStatus');
              setOrderSearchTerm('CONFIRMED');
            }}
            type='button'
            className='stat flex justify-between items-center border-2 rounded-3xl hover:border-secondary '
          >
            <div className=''>
              <div className='stat-title'>ชำระแล้ว</div>
              <div className='stat-value text-secondary'>
                {filterByStatusNo('CONFIRMED')}
              </div>
            </div>
            <div className=' text-secondary '>
              {<MdOutlinePaid size={45} />}
            </div>
          </button>
          <button
            onClick={() => {
              fetchOrder();
              // setSearchBy('paymentStatus');
              // setOrderSearchTerm('CONFIRMED');
              // setHasTracking((hasTracking) => !hasTracking);
            }}
            type='button'
            className='stat  border-2 rounded-3xl hover:border-warning flex justify-between items-center'
          >
            <div className='w-[69px]'>
              <div className='stat-title'>ออเดอร์ทั้งหมด</div>
              <div className='stat-value text-warning'>{noOrder}</div>
            </div>
            <div className='text-warning flex items-center'>
              {<RiTodoLine size={45} />}
            </div>
          </button>
          <button
            onClick={() => {
              setSearchBy('status');
              setOrderSearchTerm('DELIVERED');
            }}
            type='button'
            className=' stat border-2 rounded-3xl hover:border-accent flex justify-between'
          >
            <div>
              <div className='stat-title'>ส่งเสร็จสิ้น</div>
              <div className='stat-value'>
                {getAllShippingStatusIsDeliveredOrdersNumber('DELIVERED')}
              </div>
            </div>
            <div className='stat-figure text-secondary '>
              <div className='stat-figure text-accent   '>
                {<TbTruckDelivery size={45} />}
              </div>
            </div>
          </button>
        </div>
        <br />
        <br />
        <div className='h-auto pl-44'>
          <div className='flex items-center '>
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
                  <option value='orderId'>หมายเลขคำสั่งซื้อ</option>
                  <option value='firstName'>ชื่อร้านค้า</option>
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
                        console.log(event.target.value);
                        setOrderSearchTerm(event.target.value);
                      }}
                      value={orderSearchTerm}
                      className=' w-[395px] h-[50px] rounded-lg text-lg p-2'
                    >
                      <option value=''>กรุณาเลือกสถานะการจัดส่ง</option>
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
                <th className=''>ชื่อร้านค้า</th>
                <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
                <th className='text-end'>ยอดคำสั่งซื้อ</th>
                <th className='text-center'>สถานะการชำระเงิน</th>
                <th className='flex justify-center'>Tracking Id</th>
                <th className='text-center'></th>
                <th className='text-center'>Shipping Order Status</th>
                <th className='text-center'></th>
              </tr>
            </thead>
            <>
              <tbody>
                {AllOrder?.map((el, idx) => {
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
                                {/* {el.Client?.User?.firstName || ''} */}
                                {el.supplierId || ''}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            className='flex space-x-3 justify-center items-center font-bold text-primary'
                            onClick={() => {
                              navigate(`/admin/order/${el.id}`);
                            }}
                          >
                            <p className='cursor-pointer border-2 hover:border-primary w-[90px] rounded-lg text-center p-2 h-14 flex items-center justify-center bg-white '>
                              {el.id}
                            </p>
                          </div>
                        </td>
                        <th>
                          <p className='flex justify-end '>
                            {localsting(el.productPrice)}
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
                          <p className='text-ghost text-center items-center flex justify-center  w-[170px] h-14 rounded-lg   '>
                            {el.PurchasedOrder?.ShippingOrder?.trackingId ||
                              '-'}
                          </p>
                        </th>
                        <th className=''></th>
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
                        <th>
                          <div
                            className='flex gap-2 items-center hover:scale-105 hover:text-info'
                            onClick={() => {
                              navigate(`/admin/order/${el.id}`);
                            }}
                          >
                            {<BiDetail size={25} />}
                            <p>รายละเอียด</p>
                          </div>
                        </th>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </>
            <></>)
          </table>
        </div>
        <br />
      </>
    </>
  );
}

export default DevOrderTable;
