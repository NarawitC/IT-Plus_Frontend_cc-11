function AddTrackingIdRow(trackingId, setTrackingId) {
  return (
    <div>
      <input
        // disabled={isEditTrackingId ? false : true}
        className='text-ghost text-center w-[170px] h-14 rounded-lg border-2 hover:border-primary '
        placeholder='Tracking Id'
        onChange={(event) => setTrackingId(event.target.value)}
        value={trackingId}
        type='text'
      />
    </div>
  );
}

export default AddTrackingIdRow;
