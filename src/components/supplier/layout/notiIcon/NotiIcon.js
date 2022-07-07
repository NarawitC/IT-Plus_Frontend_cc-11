import NotiDropDown from './NotiDropDown';
import { MdDarkMode } from 'react-icons/md';
function NotiIcon({ setDarkonDark }) {
  return (
    <div
      className='btn btn-active btn-circle'
      onClick={() => {
        setDarkonDark((prev) => !prev);
      }}
    >
      <MdDarkMode />
      {/* <NotiDropDown /> */}
    </div>
  );
}

export default NotiIcon;
