import { IoNotificationsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import img1 from '../../../../pictures/red.png';
import img2 from '../../../../pictures/blue.png';
function NotiDropDown() {
  return (
    <div className='dropdown dropdown-end dropdown-hover '>
      <label tabIndex='0' className='btn  m-1 gap-2 rounded-3xl text-xl '>
        {<IoNotificationsOutline />}
        <span className='absolute right-0 top-0 rounded-full bg-secondary w-4 h-4 top right p-0 m-0 text-white text-sm leading-4 text-center'>
          {'2'}
        </span>
      </label>
      <ul
        tabIndex='0'
        class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[300px]'
      >
        <li>
          <Link to={`/supplier`}>
            <div className='flex gap-3'>
              <img src={img1} alt='blue' className='w-16 h-16' />
              <div>
                <h1 className='text-bold text-lg'>Shipped Out</h1>
                <br />
                <p className='text-sm'>
                  Parcel for your order{' '}
                  <span className='text-secondary'>213313989348NSDUHD</span> has
                  been shipped out by Flash Express. Click here to see order
                  details and track your parcel.
                </p>
                <p className='text-xs'>02-12-64 16:20</p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/supplier`}>
            <div className='flex gap-3'>
              <img src={img2} alt='blue' className='w-16 h-16' />
              <div>
                <h1 className='text-bold text-lg'>Payment Confirmed</h1>
                <br />
                <p className='text-sm'>
                  Payment for order{' '}
                  <span className='text-secondary'>213313989348NSDUHD</span> has
                  been confirmed and we've notified the seller. Kindly wait for
                  your shipment.
                </p>
                <p className='text-xs'>02-12-64 16:20</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NotiDropDown;
