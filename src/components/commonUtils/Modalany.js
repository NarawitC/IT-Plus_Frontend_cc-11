import React, { useEffect, useRef, useState } from 'react';
// import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
function ModalAny({ inputEmodal }) {
  const [UserAuthmodal, setUserAuthmodal] = useState(false);
  const navigete = useNavigate();

  return (
    <div
      ref={inputEmodal}
      id='medium-modal'
      className={`${
        UserAuthmodal ? '' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen bg-gray-600/20 inset-0 md:inset-0 h-screen md:h-screen flex  justify-center`}
      onClick={() => {
        setUserAuthmodal((prev) => !prev);
      }}
    >
      <div className='text-slate-600 bg-white rounded-2xl p-4 w-full max-w-lg h-full md:h-auto items-center z-50'>
        <div
          className='flex flex-col rounded-lg h-2/3  my-40 shadow items-center'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='Header flex flex-initial flex-row w-full justify-between'></div>
        </div>
      </div>
    </div>
  );
}

export default ModalAny;
