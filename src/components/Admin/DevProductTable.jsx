import React from 'react';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

function DevProductTable() {
  const [AllProduct, setAllProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await axios.get('/admin/product');
        setAllProduct(product.data.products);
      } catch (err) {}
    };
    fetchProduct();
  }, []);
  console.log(AllProduct);

  return (
    <div className='mx-auto my-5'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Picture</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img
                      className='rounded-3'
                      style={{
                        width: 25,
                        height: 25,
                      }}
                      src='{Image}'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Hart Hagerty</div>
                  <div className='text-sm opacity-50'>United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <span className='badge badge-ghost badge-sm'>
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DevProductTable;
