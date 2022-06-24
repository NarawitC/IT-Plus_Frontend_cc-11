import React from 'react';
import { TbMovie, TbSmartHome, TbBike } from 'react-icons/tb';
import { GrGamepad } from 'react-icons/gr';
import { GiDesk } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { BsCameraReels, BsPlug, BsCamera, BsController } from 'react-icons/bs';
import { BiPrinter } from 'react-icons/bi';
import { IoGameControllerOutline } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { MdOutlineMonitorWeight } from 'react-icons/md';
import { HiOutlineMusicNote, HiOutlinePuzzle } from 'react-icons/hi';
// import { TbSmartHome } from 'react-icons/ts';
function LgsubHeader() {
  let mockList = [
    {
      text: 'Entertainment',
      page: 'music-movie',
      icon: <TbMovie size={40} color={'gray'} />,
    },
    {
      text: 'Gaming',
      page: 'gaming',
      icon: <BsController size={40} color={'gray'} />,
    },
    {
      text: 'Desk Setup',
      page: 'hobby-work-station',
      icon: <GiDesk size={40} color={'gray'} />,
    },
    {
      text: 'Computer',
      page: 'computer-notebook',
      icon: <GoDeviceDesktop size={40} color={'gray'} />,
    },
    {
      text: 'Live Streaming',
      page: 'it_accessories',
      icon: <BsCameraReels size={40} color={'gray'} />,
    },
    {
      text: 'Extensions',
      page: 'it_accessories',
      icon: <BsPlug size={40} color={'gray'} />,
    },
    {
      text: 'Toys collective',
      page: 'it_accessories',
      icon: <HiOutlinePuzzle size={40} color={'gray'} />,
    },
    {
      text: 'Health',
      page: 'it_accessories',
      icon: <FaDumbbell size={40} color={'gray'} />,
    },
    {
      text: 'Music',
      page: 'it_accessories',
      icon: <HiOutlineMusicNote size={40} color={'gray'} />,
    },
    {
      text: 'Smart home',
      page: 'it_accessories',
      icon: <TbSmartHome size={40} color={'gray'} />,
    },
    {
      text: 'Camera',
      page: 'it_accessories',
      icon: <BsCamera size={40} color={'gray'} />,
    },
    {
      text: 'Outdoor',
      page: 'it_accessories',
      icon: <TbBike size={40} color={'gray'} />,
    },
    {
      text: 'Smart gadgets',
      page: 'it_accessories',
      icon: <MdOutlineMonitorWeight size={40} color={'gray'} />,
    },
  ];
  const mockarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <div className='carousel rounded-box overflow-y-hidden h-full py-4 gap-6'>
        {mockList.map((el) => (
          <div className='carousel-item w-1/8 max-w-md flex flex-col items-center '>
            {el.icon}
            <span>{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LgsubHeader;
