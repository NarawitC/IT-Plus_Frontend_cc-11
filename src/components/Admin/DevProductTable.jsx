import React from 'react';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function DevProductTable() {
  const [AllProduct, setAllProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('/admin/product');
        const productList = res.data.products;
        console.log(productList);
        setAllProduct(productList);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchProduct();
  }, []);
  console.log(AllProduct);

  return (
    <div className='mx-auto my-5'>
      <table className='table w-full table-fixed'>
        <thead>
          <tr>
            <th>Product Title</th>
            <th> </th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {AllProduct?.map((el) => {
            return (
              <tr>
                <td>
                  <div className='flex items-center space-x-1 truncate'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-20 h-20'>
                        <img
                          className='overflow-auto truncate'
                          style={{
                            width: 100,
                            height: 100,
                          }}
                          src={el.mainPicture}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold overflow-auto truncate'>
                        {el.productName}
                      </div>
                    </div>
                    <div className='text-sm opacity-50'>{el.id}</div>
                  </div>
                </td>

                <td className='overflow-auto truncate'>
                  {el.description}
                  <span className='badge badge-ghost badge-sm'>{el.brand}</span>
                </td>
                <td>{el.price}</td>
                <td>{el.stock}</td>
                <td>{el.supplierId}</td>
                <td>{el.status}</td>
                <td>
                  <Link to='*' className='btn btn-accent'>
                    <FaEye />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th>Product Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DevProductTable;
