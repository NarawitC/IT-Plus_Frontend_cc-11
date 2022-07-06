import { updateStatusToClient } from '../../../apis/supplier/supplierShippingOrder';
import { ShippingOrderStatusContext } from '../../../contexts/Supplier/ShippingOrderStatusContext';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function TrackingIdButton() {
  // const handlEdittirackingId = async () => {
  //   if (shippingOrderId && trackingId) {
  //     updateStatusToClient(shippingOrderId, trackingId);
  //   }
  // };
  const modalRef = useRef();
  const navigate = useNavigate();

  const { trackingId } = useContext(ShippingOrderStatusContext);
  console.log(trackingId);
  // const handleUpdateTrackingId = async () => {
  //   await updateStatusToClient(shippingOrderId, trackingId);
  //   modalRef.current.click();
  // };
  return (
    <>
      <input
        type='checkbox'
        id='my-modal-4'
        className='modal-toggle'
        ref={modalRef}
      />
      <div className='modal'>
        <div className='modal-box'>
          <label className='flex  flex-col justify-center items-center '>
            <div className=' pt-2'>
              <label
                htmlFor='my-modal-4'
                className='btn btn-sm btn-circle absolute right-2 top-2 '
              >
                ✕
              </label>
            </div>
            <h1>คุณยืนยัน tracking id ของ order นี้ตามนี้ใช่หรือไม่?</h1>
          </label>
          <div className='modal-action flex justify-center'>
            <button
              type='button'
              htmlFor='my-modal-4'
              className='btn btn-primary w-24'
              onClick={() => {
                modalRef.current.click();
              }}
            >
              ยกเลิก
            </button>
            <button
              type='button'
              htmlFor='my-modal-4'
              className='btn btn-secondary w-24'
              onClick={async () => {
                await updateStatusToClient(
                  trackingId.shippingOrderId,
                  trackingId.idx
                );
                modalRef.current.click();
              }}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingIdButton;
