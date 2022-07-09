import { useState } from 'react';
import GoogleMapArea from '../../googleMap/GoogleMapArea';

function AddAddressSupplier({
  googleMapAddress,
  setConfirmAddress,
  toggleClickMap,
}) {
  const handelClickMap = () => {
    setConfirmAddress(googleMapAddress);
    toggleClickMap();
  };
  return (
    <div className='w-full py-4 '>
      <div className='border-2 pb-6'>
        <GoogleMapArea />
        <div className='flex gap-4 pt-4 justify-center'>
          <div
            className='btn btn-primary bg-red-500 border-none hover:bg-red-800'
            onClick={toggleClickMap}
          >
            ยกเลิก
          </div>
          <div className='btn btn-primary' onClick={() => handelClickMap()}>
            บันทึก
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddressSupplier;
