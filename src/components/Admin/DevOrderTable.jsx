import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

function DevOrderTable() {
  const [AllOrder, setAllOrder] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const client = await axios.get('/admin/client');
        setAllOrder(order.data.orders);
      } catch (err) {}
    };
    fetchOrder();
  }, []);
  console.log(AllOrder);

  return (
    // {AllClient?.map((el) => (
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
            <tr>
              <th>{}</th>
              <td>IP87171</td>
              <td>22/06/22</td>
              <td>
                <FaEye />
              </td>
            </tr>
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
    // ))}
  );
}

export default DevOrderTable;
