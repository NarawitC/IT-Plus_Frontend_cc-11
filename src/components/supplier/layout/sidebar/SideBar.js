import { Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsShopWindow } from 'react-icons/bs';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { useState } from 'react';

const mockList = [
  {
    text: 'คำสั่งซื้อ',
    icon: <CgFileDocument />,
    sub: [{ name: 'คำสั่งซื้อทั่งหมด', page: 'order' }],
  },
  // {
  //   text: 'การจัดส่ง',
  //   icon: <TbTruckDelivery />,
  //   sub: [{ name: 'การจัดส่งของฉัน', page: 'tracking' }],
  // },
  {
    text: 'การเงิน',
    icon: <MdOutlineAccountBalanceWallet />,
    sub: [{ name: 'Seller Balance', page: 'balance-wallet' }],
  },
  {
    text: 'สินค้า',
    icon: <FiShoppingBag />,
    sub: [
      { name: 'สินค้าของฉัน', page: 'my-product' },
      { name: 'เพิ่มสินค้าใหม่', page: 'add-product' },
    ],
  },
  {
    text: 'ร้านค้า',
    icon: <BsShopWindow />,
    sub: [{ name: 'รายละเอียดร้านค้า', page: 'my-shop' }],
  },
];

function SideBar() {
  const [active, setActive] = useState('');

  return (
    <aside className='' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3 bg-gray-50  dark:bg-gray-800 h-screen w-[256px]'>
        <ul className='space-y-2'>
          {mockList.map((el, idx) => {
            return (
              <li key={idx}>
                <button
                  type='button'
                  className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  onClick={() => setActive(el.text)}
                >
                  {el.icon}
                  <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                    {el.text}
                  </span>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
                {active === el.text && (
                  <ul id='dropdown-example' className=' py-2 space-y-2'>
                    <li>
                      <>
                        {el.sub.map((elIn) => {
                          return (
                            <>
                              <Link
                                to={`/supplier/${elIn.page}`}
                                className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                              >
                                {elIn.name}
                              </Link>
                            </>
                          );
                        })}
                      </>
                      )
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
