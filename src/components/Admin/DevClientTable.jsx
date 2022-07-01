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
        const res = await axios.get('/admin/client');
        const clientList = res.data.users;
        setAllClient(clientList);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchClient();
  }, []);
  console.log(AllClient);

  return (
    <>
      <div>
        <div className='w-[800px] mt-4 mx-auto'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {AllClient?.map((el) => {
                return (
                  <tr>
                    <th>{el.id}</th>
                    <td>
                      {el.firstName} {el.lastName}
                    </td>
                    <td>{el.phoneNumber}</td>
                    <td>{el.createAt}</td>

                    <Link to={`/admin/client/${el.id}`}>
                      <FaEye />
                    </Link>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Contact</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default DevClientTable;
