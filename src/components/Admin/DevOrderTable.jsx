import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

function DevOrderTable() {
  const ordermockup = [{}];
  const [AllOrder, setAllOrder] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // const client = await axios.get('/admin/order');
        // setAllOrder(order.data.orders);
      } catch (err) {}
    };
    fetchOrder();
  }, []);
  console.log(AllOrder);

  return (
    <>
      <div>
        <div className='w-[800px] mt-4 mx-auto'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Payment At</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {ordermockup?.map((el) => {
                return (
                  <tr>
                    <th>{el.id}</th>
                    <td>{el.payment}</td>
                    <td>{'odk'}</td>
                    <td>
                      <FaEye />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Client ID</th>
                <th>Payment At</th>
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
