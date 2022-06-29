import React from 'react';
import { FaEye } from 'react-icons/fa';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DevClientTable() {
  const clientmockup = [
    {
      id: 'c1n/a',
      first_name: 'c1n/a',
      last_name: 'c1n/a',
      email: 'c1n/a',
      phone_number: 'c1n/a',
      address: 'c1n/a',
    },
    {
      id: 'c2n/a',
      first_name: 'c2n/a',
      last_name: 'c2n/a',
      email: 'c2n/a',
      phone_number: 'c2n/a',
      address: 'c2n/a',
    },
    {
      id: 'c2n/a',
      first_name: 'c2n/a',
      last_name: 'c2n/a',
      email: 'c2n/a',
      phone_number: 'c2n/a',
      address: 'c2n/a',
    },
  ];
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
              {clientmockup?.map((el) => {
                return (
                  <tr>
                    <th>{el.id}</th>
                    <td>{el.first_name}</td>
                    <td>{el.address}</td>
                    <td>
                      <Link to={`/admin/client/${'el'.id}`}>
                        <FaEye />
                      </Link>
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

export default DevClientTable;
