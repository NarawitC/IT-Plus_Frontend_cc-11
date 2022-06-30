import { TbTruckDelivery } from 'react-icons/tb';
import { GiEmptyMetalBucket } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { ShippingOrderStatusContext } from '../../contexts/ShippingOrderStatusContext';
import { useContext } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { RiTodoLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAllOrdersBySupplierId } from '../../apis/supplier/supplierOrder';
import { MdOutlineCancel } from 'react-icons/md';

const mockArr = [
  {
    firstName: 'Panit Su',
    id: 111,
    productPrice: 11209.0,
    purchasedOrderStatus: 'PENDING',
    trackingId: '',
    status: '',
  },
  {
    firstName: 'Pal X',
    id: 222,
    productPrice: 34209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: 'KER98900',
    status: 'COMPLETED',
  },
  {
    firstName: 'Node JS',
    id: 333,
    productPrice: 88209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: 'SHOP12304',
    status: 'TO_SHIPPING_COMPANY',
  },
  {
    firstName: 'Gun Meta',
    id: 444,
    productPrice: 92209.0,
    purchasedOrderStatus: 'CONFIRMED',
    trackingId: 'FLASH12334',
    status: 'TO_CLIENT',
  },
  {
    firstName: 'J Next',
    id: 555,
    productPrice: 83229.0,
    purchasedOrderStatus: 'PENDING',
    trackingId: '',
    status: '',
  },
];
function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [orderSearchTerm, setOrderSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('id');
  const navigate = useNavigate();
  const { trackingId, setTrackingId } = useContext(ShippingOrderStatusContext);
  const [shippingDetails, setShippingDetails] = useState(mockArr);
  useEffect(() => {
    const handleGetAllOrdersBySupplierId = async () => {
      try {
        const res = await getAllOrdersBySupplierId();
        console.log(res.data);
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllOrdersBySupplierId();
    if (searchBy === 'id') {
      const filterByOrderId = (searchTerm) => {
        const resultArrByOrderId = mockArr.filter((el) =>
          String(el.id).includes(searchTerm.trim().replace(/\s/g, ''))
        );
        setShippingDetails(resultArrByOrderId);
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
        const resultArrByName = mockArr.filter((elIn, idx) => {
          return elIn.firstName
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
        console.log(searchTerm.trim().replace(/\s/g, ''));
        const resultArrByStatus = mockArr.filter((el) =>
          el.status.toLowerCase().includes(searchTerm.trim().replace(/\s/g, ''))
        );
        setShippingDetails(resultArrByStatus);
      };
      filterByStatus(orderSearchTerm);
    }
  }, [orderSearchTerm]);

  // const filterByUserId = (userId) => {};
  // const filterByStatus = (status) => {};

  // <option value='id'>หมายเลขคำสั่งซื้อ</option>
  // <option value='userId'>ชื่อลูกค้า</option>
  // <option value='status'>สถานะการจัดส่ง</option>

  return (
    <div className=''>
      <br />
      <div className=' grid grid-cols-2 gap-10'>
        <div className='stat flex justify-between items-center border-2 rounded-3xl hover:border-secondary '>
          <div className=''>
            <div className='stat-title'>ที่ต้องชำระ</div>
            <div className='stat-value text-secondary'>2</div>
          </div>
          <div className=' text-secondary '>{<RiTodoLine size={45} />}</div>
        </div>
        <div className='stat  border-2 rounded-3xl hover:border-warning'>
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
          <div className='stat-title'>ที่ต้องจัดส่ง</div>
          <div className='stat-value text-warning'>12</div>
        </div>
        <div className='stat border-2 rounded-3xl hover:border-accent'>
          <div className='stat-figure text-secondary '>
            <div className='stat-figure text-accent   '>
              {<TbTruckDelivery size={45} />}
            </div>
          </div>
          <div className='stat-title'>กำลังจัดส่ง</div>
          <div className='stat-value'>15</div>
        </div>
        <div className='stat border-2 rounded-3xl hover:border-info'>
          <div className='stat-figure text-info'>
            {<GiEmptyMetalBucket size={45} />}
          </div>
          <div className='stat-title'>สินค้าหมด</div>
          <div className='stat-value'>4</div>
        </div>
      </div>
      <br />
      <br />
      <>
        <div className='h-auto'>
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
                  className=' text-bold text-primary-focus border-2 h-[53px] w-[230px] rounded-lg '
                  onChange={(e) => {
                    setSearchBy(e.target.value);
                  }}
                  value={searchBy}
                >
                  <option value='id'>หมายเลขคำสั่งซื้อ</option>
                  <option value='firstName'>ชื่อลูกค้า</option>
                  <option value='status'>สถานะการจัดส่ง</option>
                </select>
              </div>
              <div className='w-[400px] border-2 hover:border-primary rounded-lg'>
                <input
                  type='text'
                  placeholder='ค้นหาคำสั่งซื้อ'
                  className='input w-[395px] text-lg'
                  onChange={(event) => {
                    setOrderSearchTerm(event.target.value);
                  }}
                  value={orderSearchTerm}
                />
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
                <th className=''>ชื่อลูกค้า</th>
                <th className='flex justify-center'>หมายเลขคำสั่งซื้อ</th>
                <th>ยอดคำสั่งซื้อ</th>
                <th>สถานะการชำระเงิน</th>
                <th className='flex justify-center'>Tracking Id</th>
                <th className='text-center'>Shipping Order Status</th>
              </tr>
            </thead>
            <tbody>
              {shippingDetails.map((el, idx) => {
                return (
                  <>
                    {}
                    <tr className='hover' key={idx}>
                      <td className='text-center'>{idx + 1}</td>
                      <td>
                        <div class='flex items-center space-x-3'>
                          <div>
                            <div class='font-bold'>{el.firstName}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='flex space-x-3 justify-center'>
                          <button
                            className='btn btn-ghost btn-md'
                            onClick={() => {
                              navigate('/supplier/order/selected');
                            }}
                          >
                            {el.id}
                          </button>
                        </div>
                      </td>
                      <th>
                        <p className=''>{el.productPrice.toFixed(2)}</p>
                      </th>
                      <th>
                        <label class='swap'>
                          <input type='checkbox' />
                          {el.purchasedOrderStatus === 'CONFIRMED' ? (
                            <>
                              <div className='swap-off text-success  text-center'>
                                {el.purchasedOrderStatus}
                              </div>
                              <div className='swap-on text-warning text-center'>
                                PENDING
                              </div>
                            </>
                          ) : (
                            <>
                              <div className='swap-off text-warning text-center'>
                                {el.purchasedOrderStatus}
                              </div>
                              <div className='swap-on text-success text-center'>
                                CONFIRMED
                              </div>
                            </>
                          )}
                        </label>
                      </th>
                      <th className='flex justify-center'>
                        <input
                          className='text-ghost text-center w-[170px] h-14 rounded-lg border-2 hover:border-primary'
                          placeholder='Tracking Id'
                          onChange={(event) =>
                            setShippingDetails((prevShippingDetail) => [
                              ...prevShippingDetail.slice(0, idx),
                              {
                                ...prevShippingDetail[idx],
                                trackingId: event.target.value,
                              },
                              ...prevShippingDetail.slice(idx + 1),
                            ])
                          }
                          value={el.trackingId}
                        />
                      </th>
                      <th className=''>
                        {el.purchasedOrderStatus === 'CONFIRMED' ? (
                          <select
                            className='p-2  h-14 rounded-lg border-2 hover:border-warning text-ghost text-center '
                            onChange={(event) =>
                              //
                              setShippingDetails((prevShippingDetail) => [
                                ...prevShippingDetail.slice(0, idx),
                                {
                                  ...prevShippingDetail[idx],
                                  status: event.target.value.trim(),
                                },
                                ...prevShippingDetail.slice(idx + 1),
                              ])
                            }
                            value={el.status}
                            type='text'
                            placeholder={el.status}
                          >
                            <option value='TO_SHIPPING_COMPANY'>
                              กำลังดำเนินการ
                            </option>
                            <option value='TO_CLIENT'>กำลังจัดส่ง</option>
                            <option value='COMPLETED'>ส่งเสร็จสิ้น</option>
                          </select>
                        ) : (
                          <p className='text-center'>-</p>
                        )}
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
      </>
    </div>
  );
}

export default OrderPage;
