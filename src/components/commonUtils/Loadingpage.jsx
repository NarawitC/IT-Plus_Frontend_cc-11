import React from 'react';
import ReactLoading from 'react-loading';

function LoadingPage() {
  return (
    <div className='fixed w-screen h-screen z-50 bg-gray-800/50 flex flex-col justify-center items-center '>
      <ReactLoading
        type={'spinningBubbles'}
        color={'#ff6130'}
        height={'25%'}
        width={'15%'}
      />
      <div className='text-primary/80 cursor-default mt-20 text-xl font-bold font-mono'>
        ... LOADING
      </div>
    </div>
  );
}

export default LoadingPage;
