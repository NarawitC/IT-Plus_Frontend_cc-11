import { useState, useContext } from 'react';
import { updateStatusToClient } from '../../../apis/supplier/supplierShippingOrder';
import { ShippingOrderStatusContext } from '../../../contexts/Supplier/ShippingOrderStatusContext';
function AddTrackingIdRow({ idx }) {
  const { trackingId, setTrackingId } = useContext(ShippingOrderStatusContext);
  console.log(trackingId);

  // const handleSetTrackingId = (e) => {
  //   console.log(e.target.value);
  //   setTrackingId(e.target.value);
  // };
  return (
    <div>
      <input
        // disabled={isEditTrackingId ? false : true}
        className='text-ghost text-center w-[170px] h-14 rounded-lg border-2 hover:border-primary '
        placeholder='Tracking Id'
        onChange={(e) =>
          setTrackingId((prev) => {
            return { idx: e.target.value };
          })
        }
        value={trackingId[idx]}
        type='text'
      />
    </div>
  );
}

export default AddTrackingIdRow;
