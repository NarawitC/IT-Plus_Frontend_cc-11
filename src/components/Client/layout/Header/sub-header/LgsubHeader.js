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
import CategoryItem from './CategoryItem';

function LgsubHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState(null);
  const { setSearchParams } = useProductfilter();
  const handleCategoryButton = (categoryId) => {
    navigate('/product');

    setSearchParams((prev) => ({ ...prev, categoryId }));
  };

  const [hoverIcon, sethoverIcon] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const icons = {
    All: (
      <TiThSmallOutline
        size={40}
        color={`${hoverIcon[0] ? '#1497D4' : 'gray'}`}
      />
    ),
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
  // const advtiveicon = {};
  // for (let Ico in icons) {
  // icons[Ico].props.size = 50;
  // console.log(icons[Ico].props);
  // }
  useEffect(() => {
    const fetchCategories = async () => {
      const {
        data: { categories },
      } = await getAllCategoryInfo();
      const All = {
        SubCategories: [],
        categoryName: 'All',
        createdAt: '2022-07-01T11:28:48.000Z',
        id: null,
      };
      // console.log(categories);

      categories.unshift(All);
      // navigate('/product');
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className=' rounded-box  overflow-x-scroll overflow-displayNone overflow-y-hidden w-full h-full py-4 gap-6'>
      {categories?.map((category, index) => (
        <CategoryItem
          category={category}
          index={index}
          icons={icons[category.categoryName]}
          handleCategoryButton={handleCategoryButton}
          sethoverIcon={sethoverIcon}
        />
      ))}
    </div>
  );
}

export default LgsubHeader;

// const icons = {
//   All: (
//     <TiThSmallOutline
//       size={40}
//       color={`${hoverIcon[0] ? '#1497D4' : 'gray'}`}
//     />
//   ),
//   Entertainment: (
//     <TbMovie size={40} color={`${hoverIcon[1] ? '#1497D4' : 'gray'}`} />
//   ),
//   'Smart home': (
//     <TbSmartHome size={40} color={`${hoverIcon[2] ? '#1497D4' : 'gray'}`} />
//   ),
//   Outdoor: (
//     <TbBike size={40} color={`${hoverIcon[3] ? '#1497D4' : 'gray'}`} />
//   ),
//   Computer: (
//     <GoDeviceDesktop
//       size={40}
//       color={`${hoverIcon[4] ? '#1497D4' : 'gray'}`}
//     />
//   ),
//   Camera: (
//     <BsCamera size={40} color={`${hoverIcon[5] ? '#1497D4' : 'gray'}`} />
//   ),
//   'Live Streaming': (
//     <BsCameraReels size={40} color={`${hoverIcon[6] ? '#1497D4' : 'gray'}`} />
//   ),
//   Extensions: (
//     <BsPlug size={40} color={`${hoverIcon[7] ? '#1497D4' : 'gray'}`} />
//   ),
//   Gaming: (
//     <BsController size={40} color={`${hoverIcon[8] ? '#1497D4' : 'gray'}`} />
//   ),
//   Health: (
//     <FaDumbbell size={40} color={`${hoverIcon[9] ? '#1497D4' : 'gray'}`} />
//   ),
//   'Smart gadgets': (
//     <MdOutlineMonitorWeight
//       size={40}
//       color={`${hoverIcon[10] ? '#1497D4' : 'gray'}`}
//     />
//   ),
//   Music: (
//     <HiOutlineMusicNote
//       size={40}
//       color={`${hoverIcon[11] ? '#1497D4' : 'gray'}`}
//     />
//   ),
//   'Toys collective': (
//     <HiOutlinePuzzle
//       size={40}
//       color={`${hoverIcon[12] ? '#1497D4' : 'gray'}`}
//     />
//   ),
//   'Desk Setup': (
//     <GiDesk size={40} color={`${hoverIcon[13] ? '#1497D4' : 'gray'}`} />
//   ),
//   'Label with Internally Disabled Control': (
//     <TbMovie size={40} color={`${hoverIcon[14] ? '#1497D4' : 'gray'}`} />
//   ),
// };
