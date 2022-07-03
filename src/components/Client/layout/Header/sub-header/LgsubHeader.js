import React, { useState, useEffect } from 'react';
import { TbMovie, TbSmartHome, TbBike } from 'react-icons/tb';
import { TiThSmallOutline } from 'react-icons/ti';
import { GiDesk } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { BsCameraReels, BsPlug, BsCamera, BsController } from 'react-icons/bs';
import { FaDumbbell } from 'react-icons/fa';
import { MdOutlineMonitorWeight } from 'react-icons/md';
import { HiOutlineMusicNote, HiOutlinePuzzle } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
// import { TbSmartHome } from 'react-icons/ts';
import { getAllCategoryInfo } from '../../../../../apis/client/category';
import { useProductfilter } from '../../../../../contexts/ProductContext';

function LgsubHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState(null);
  const { setSearchParams } = useProductfilter();
  const handleCategoryButton = (categoryId) => {
    setSearchParams((prev) => ({ ...prev, categoryId }));
  };
  const icons = {
    All: <TiThSmallOutline size={40} color={'gray'} />,
    Entertainment: <TbMovie size={40} color={'gray'} />,
    'Smart home': <TbSmartHome size={40} color={'gray'} />,
    Outdoor: <TbBike size={40} color={'gray'} />,
    Computer: <GoDeviceDesktop size={40} color={'gray'} />,
    Camera: <BsCamera size={40} color={'gray'} />,
    'Live Streaming': <BsCameraReels size={40} color={'gray'} />,
    Extensions: <BsPlug size={40} color={'gray'} />,
    Gaming: <BsController size={40} color={'gray'} />,
    Health: <FaDumbbell size={40} color={'gray'} />,
    'Smart gadgets': <MdOutlineMonitorWeight size={40} color={'gray'} />,
    Music: <HiOutlineMusicNote size={40} color={'gray'} />,
    'Toys collective': <HiOutlinePuzzle size={40} color={'gray'} />,
    'Desk Setup': <GiDesk size={40} color={'gray'} />,
    'Label with Internally Disabled Control': (
      <TbMovie size={40} color={'gray'} />
    ),
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const {
        data: { categories },
      } = await getAllCategoryInfo();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className='carousel rounded-box overflow-y-hidden h-full py-4 px-4 mx-4 gap-6'>
      {categories?.map((category, index) => (
        <div
          key={index}
          className='carousel-item cursor-pointer w-1/8 max-w-md p-1 flex flex-col items-center text-mono '
          onClick={() => {
            handleCategoryButton(category.id);
          }}
        >
          {icons[category.categoryName]}
          <span>{category.categoryName}</span>
        </div>
      ))}
    </div>
  );
}

export default LgsubHeader;
