import React from 'react';
// import { useAdmin } from '../../../context/AdminContext';
function DynamicSelectedOption({
  arr,
  selectarr,
  Setselectedarr,
  setRefreshOd,
}) {
  selectarr = [1, 2, 3, 4];
  // const { ModDelorders, ModFetchOrders, setallod } = useAdmin();
  const adminHandleDelorders = async (slarr) => {
    // console.log(slarr);
    const res = await 'ModDelorders(slarr)';
    console.log(res);
    setRefreshOd((prev) => !prev);
    Setselectedarr([]);
  };
  return (
    <div className="flex bg-neutral flex-row self-end pt-2 transition-opacity mx-10 rounded-sm p-1 ">
      <button
        type="button"
        className="text-white  focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
      >
        {`Selected: ${selectarr?.length}`}
      </button>
      <button
        type="button"
        className="border  focus:outline-none  focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
      >
        Confirm Payment
      </button>
      <button
        type="button"
        className="border  focus:outline-none  focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
        onClick={(e) => ' adminHandleDelorders(selectarr)'}
      >
        DELETE
      </button>
    </div>
  );
}

export default DynamicSelectedOption;
