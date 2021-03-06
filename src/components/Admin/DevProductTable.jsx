import React from 'react';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { useAdminSearchContext } from '../../contexts/Admin/AdminSearchContext';
import { localsting } from '../../services/LocalstringComma';

function DevProductTable() {
  const [AllProduct, setAllProduct] = useState();
  const { productId } = useAdminSearchContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('/admin/product');
        const productList = res.data.products;
        // console.log(productList);
        if (+productId) {
          const product = productList.find((el) => el.id === +productId);
          if (product) {
            setAllProduct([product]);
          }
        } else {
          setAllProduct(productList);
        }
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchProduct();
  }, [productId]);
  // console.log(AllProduct);

  return (
    <div className='mx-auto my-5'>
      <table className='table w-3/4 table-fixed mx-auto'>
        <thead>
          <tr>
            <th>Main Image</th>
            <th className='w-40'>Product Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier ID</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {AllProduct?.map((el, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <div className='flex items-center space-x-1 truncate'>
                    <div className='avatar'>
                      <div className='w-20 h-20'>
                        <img
                          className='overflow-auto truncate'
                          style={{
                            width: 100,
                            height: 100,
                          }}
                          src={el.mainPicture}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold overflow-auto truncate'></div>
                    </div>
                    <div className='text-sm opacity-50'>{el.id}</div>
                  </div>
                </td>

                <td className='overflow-auto truncate'>
                  {el.productName}
                  <span className='badge badge-ghost badge-sm'>{el.brand}</span>
                </td>
                <td>{localsting(el.price)}</td>
                <td>{el.stock}</td>
                <td>{el.supplierId}</td>
                <td>{el.status}</td>
                <td>
                  <Link
                    to={`/admin/product/${el.id}`}
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
            <th>Main Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier ID</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DevProductTable;
