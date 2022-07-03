import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../services/dateFormat';

function DevOrderTable() {
  const [AllOrder, setAllOrder] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get('/admin/order');
        const orderList = res.data.orders;
        // console.log(res.data);
        setAllOrder(orderList);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchOrder();
  }, []);
  // console.log(AllOrder);

  return (
    <>
      <div>
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
              {AllOrder?.map((el) => {
                return (
                  <tr>
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
      </div>
    </>
  );
}

export default DevOrderTable;
