import { useState } from 'react';
import PicCur1 from '../../../../src/curImg/cur1.jpg';
import PicCur2 from '../../../../src/curImg/cur2.jpg';
import PicCur3 from '../../../../src/curImg/cur3.jpg';
import PicCur4 from '../../../../src/curImg/cur4.jpg';

function Carusel() {
  const [picarr, setPicarr] = useState([PicCur1, PicCur2, PicCur3, PicCur4]);
  const [caluseldileft, setcaluseldileft] = useState(false);
  const [caluseldiright, setcaluseldiright] = useState(false);
  // const [caluseltran, setcaluseltran] = useState(null);

  const handleCaluselleft = async () => {
    setcaluseldileft(true);
    setTimeout(() => {
      setcaluseldileft((prev) => !prev);
      setPicarr((prev) => {
        const newer = [...prev];
        const borrow = newer.pop();
        newer.unshift(borrow);
        setcaluseldileft(false);
        return newer;
      });
    }, 700);
  };

  const handleCaluselright = async () => {
    setcaluseldiright(true);
    await setTimeout(() => {
      setPicarr((prev) => {
        const newer = [...prev];
        const borrow = newer.shift();
        newer.push(borrow);
        setcaluseldiright(false);
        return newer;
      });
    }, 700);
  };
  return (
    <div className='carousel w-full'>
      {picarr.map((el, idx) => {
        return (
          <div
            key={idx}
            // id={`slide${idx + 1}`}
            className={`carousel-item relative w-full  transform   ${
              caluseldileft ? 'translate-x-full  duration-700' : null
            } 
            ${caluseldiright ? '-translate-x-full  duration-700 ' : null}
           `}
          >
            <img src={el} className='w-full' />
            <div
              className={`absolute flex justify-between transform  -translate-y-1/2 left-5 right-5 top-1/2`}
            >
              <div
                className='btn btn-circle bg-transparent border-0'
                onClick={() => {
                  handleCaluselleft();
                }}
              >
                ❮
              </div>
              <div
                // href='#slide2'
                className='btn btn-circle bg-transparent border-0'
                onClick={() => {
                  handleCaluselright();
                }}
              >
                ❯
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carusel;

{
  /* <div id='slide2' className='carousel-item relative w-full'>
<img src={PicCur2} className='w-full' />
<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
  <a
    // href='#slide1'
    className='btn btn-circle'
    data-carousel-slide-to='1'
  >
    ❮
  </a>
  <a href='#slide3' className='btn btn-circle'>
    ❯
  </a>
</div>
</div>
<div id='slide3' className='carousel-item relative w-full'>
<img src={PicCur3} className='w-full' />
<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
  <a href='#slide2' className='btn btn-circle'>
    ❮
  </a>
  <a href='#slide4' className='btn btn-circle'>
    ❯
  </a>
</div>
</div>
<div id='slide4' className='carousel-item relative w-full'>
<img src={PicCur4} className='w-full' />
<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
  <a href='#slide3' className='btn btn-circle'>
    ❮
  </a>
  <a href='#slide1' className='btn btn-circle'>
    ❯
  </a>
</div>
</div> */
}
