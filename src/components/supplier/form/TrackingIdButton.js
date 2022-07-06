import { updateStatusToClient } from '../../../apis/supplier/supplierShippingOrder';
import { ShippingOrderStatusContext } from '../../../contexts/Supplier/ShippingOrderStatusContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function TrackingIdButton({ modalRef, shippingOrderId }) {
  // const handlEdittirackingId = async () => {
  //   if (shippingOrderId && trackingId) {
  //     updateStatusToClient(shippingOrderId, trackingId);
  //   }
  // };
  const navigate = useNavigate();
  console.log(shippingOrderId);
  const { trackingId } = useContext(ShippingOrderStatusContext);
  console.log(trackingId);
  // const handleUpdateTrackingId = async () => {
  //   await updateStatusToClient(shippingOrderId, trackingId);
  //   modalRef.current.click();
  // };
  return (
    <button
      type='button'
      htmlFor='my-modal-4'
      className='btn btn-secondary w-24'
      onClick={async () => {
        await updateStatusToClient(trackingId.shippingOrderId, trackingId.idx);
        modalRef.current.click();
      }}
    >
      ยืนยัน
    </button>
  );
}

export default TrackingIdButton;
