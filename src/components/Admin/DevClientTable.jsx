import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DevClientTable() {
  const [AllClient, setAllClient] = useState();
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const client = await axios.get('/admin/client');
        setAllClient(client.data.clients);
      } catch (err) {}
    };
    fetchClient();
  }, []);
  console.log(AllClient);

  return (
    <>
      {AllClient?.map((el) => (
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
                  <th>112321</th>
                  <td>OD9292</td>
                  <td>22/33/44</td>
                  <td>
                    <Link to={`/admin/client/${el.id}`}>
                      <FaEye />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>{el.id}</th>
                  <td>{el.payment}</td>
                  <td>{el.createAt}</td>
                  <td>
                    <Link to={`/admin/client/${el.id}`}>
                      <FaEye />
                    </Link>
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
      ))}
    </>
  );
}

export default DevClientTable;
