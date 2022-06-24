import React from 'react';

function DevOrderList() {
  return (
    <div className="flex justify-center items-center flex-row gap-5 mt-5">
      <div className="overflow-x-auto w-[600px]">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client ID</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>QE43128</th>
              <td>IP87171dkwokokfok</td>
              <td>22/06/22</td>
              <td className="">
                <FaEye className="mx-auto" />
              </td>
            </tr>
            <tr>
              <th>QE43128</th>
              <td>IP87171</td>
              <td>22/06/22</td>
              <td>
                <FaEye className="mx-auto" />
              </td>
            </tr>
            <tr>
              <th>QE43128</th>
              <td>IP87171</td>
              <td>22/06/22</td>
              <td>
                <FaEye className="mx-auto" />
              </td>
            </tr>
            <tr>
              <th>QE43128</th>
              <td>IP87171</td>
              <td>22/06/22</td>
              <td>
                <FaEye className="mx-auto" />
              </td>
            </tr>
            <tr>
              <th>QE43128</th>
              <td>IP87171</td>
              <td>22/06/22</td>
              <td>
                <FaEye className="mx-auto" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Order ID</th>
              <th>Client ID</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default DevOrderList;
