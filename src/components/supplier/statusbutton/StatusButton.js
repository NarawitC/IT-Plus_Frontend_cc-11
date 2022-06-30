import circle from '../../../pictures/circle.png';

function StatusButton({ status, option }) {
  return (
    <div>
      {status === option ? (
        <div className='flex flex-col items-center w-auto h-auto '>
          <span className=' absolute animate-ping opacity-50 w-[60px] h-[60px] bg-yellow-300 rounded-full'>
            <img
              alt='circle'
              className=' bg-yellow-300 rounded-full'
              src={circle}
            />
          </span>
          <span className=' relative  w-[60px] h-[60px] bg-yellow-300 rounded-full '>
            <img alt='circle' className=' rounded-full' src={circle} />
          </span>
          <br />
          <p className='text-gray-600'>{`${option}`}</p>
        </div>
      ) : (
        <>
          <div className='flex flex-col items-center w-[103px] h-auto'>
            <img
              alt='circle'
              className='w-[60px] h-[60px] bg-white rounded-full '
              src={circle}
            />
            <br />
            <p className='text-gray-600'>{`${option}`}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default StatusButton;
