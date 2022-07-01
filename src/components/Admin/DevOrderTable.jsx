import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

function DevOrderTable() {
  const [AllOrder, setAllOrder] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get('/admin/order');
        const orderList = res.data.orders;
        console.log(res.data);
        setAllOrder(orderList);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchOrder();
  }, []);
  console.log(AllOrder);

  return (
    <>
      <div>
        <div className='w-[800px]'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {AllOrder?.map((el) => {
                return (
                  <tr>
                    <th>{el.id}</th>
                    <td>{el.productPrice}</td>
                    <td></td>
                    <td>{el.deliveryAddress}</td>``j
                    <td>{el.createdAt}</td>
                    <td>
                      <FaEye />
                      <button>Clear</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>OrderID</th>
                <th>Price</th>
                <th>Delivery Address</th>
                <th>CreateAt</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default DevOrderTable;
