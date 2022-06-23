import React from 'react';
import { TbMovie } from 'react-icons/tb';
import { GrGamepad } from 'react-icons/gr';
import { GiDesk } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { BsCameraReels } from 'react-icons/bs';
function LgsubHeader() {
  let mockList = [
    {
      text: 'Entertainment',
      page: 'music-movie',
      icon: <TbMovie size={55} />,
    },
    { text: 'Gaming', page: 'gaming', icon: <GrGamepad size={55} /> },
    {
      text: 'Desk Setup',
      page: 'hobby-work-station',
      icon: <GiDesk size={55} />,
    },
    {
      text: 'Computer',
      page: 'computer-notebook',
      icon: <GoDeviceDesktop size={55} />,
    },
    {
      text: 'Live Streaming',
      page: 'it_accessories',
      icon: <BsCameraReels size={55} />,
    },
    {
      text: 'IT Gedget',
      page: 'it_accessories',
      icon: <BsCameraReels size={55} />,
    },
  ];
  const mockarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <div className='carousel rounded-box gap-2 overflow-y-hidden h-full py-4'>
        {mockList.map((el) => (
          <div className='carousel-item w-1/8 max-w-md flex flex-col items-center'>
            {el.icon}
            <span>{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LgsubHeader;
