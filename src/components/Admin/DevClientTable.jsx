import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

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
                  <th>{el.id}</th>
                  <td>{el.payment}</td>
                  <td>{el.createAt}</td>
                  <td>
                    <FaEye to={`/myblog/edit/${el.id}`} />
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
