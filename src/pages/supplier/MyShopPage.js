import { useContext } from 'react';
import previewPic from '../../pictures/previewPic.png';
import SupplierLayout from '../../components/supplier/layout/SupplierLayout';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';

function MyShopPage() {
  // const mockObj = {
  //   firstName: 'พณิช',
  //   lastName: 'สุวิมลเสถียร',
  //   phoneNumber: '0870802727',
  //   email: 'lgwamhmmams@gmail.com',
  //   address: '24/14 หมู่ 3 ตำบลคลองสี่ อำเภอคลองหลวง จังหวัดปทุมธานี 12120',
  //   displayName: 'บริษัท มาร์เวล จำกัด',
  //   description:
  //     'IT Plus เริ่มต้นทำธุรกิจ เกี่ยวกับลำโพง หูฟัง และเครื่องเสียง โดยมีจุดเริ่มต้นจากความรักในเสียงเพลง นำไปสู่ความสนใจในเครื่องเสียง ไม่ว่าจะเป็นลำโพงคอมพิวเตอร์ ลำโพงบ้าน หรือ หูฟังรูปแบบต่างๆ เมื่อได้เข้าไปมีส่วนร่วมกับสังคมคนรักเครื่องเสียง',
  //   lineId: 'panit.su',
  //   bankAccountName: 'บริษัท มาร์เวล จำกัด',
  //   bankAccount: '0011223344',
  // };
  const { supplier } = useContext(SupplierAuthContext);
  // console.log({ supplier: supplier });

  return (
    <div className='text-font-Kanit rounded-lg my-auto'>
      <div className='bg-white flex flex-col rounded-t-lg items-center  h-[320px] pt-6 '>
        <div className='image overflow-hidden flex flex-col  w-[266px] justify-center items-center pt-6 '>
          <img
            className='rounded-full w-52 h-52 bg-gradient-to-r p-[3px] from-info to-primary drop-shadow-xl hover:scale-110 object-fit '
            src={supplier?.Supplier?.profilePicture || previewPic}
            alt='profilePic'
          />
          <br />
          <h1 className='text-gray-900 text-center font-bold text-xl leading-8 my-1'>
            {supplier?.Supplier?.displayName}
          </h1>
        </div>
      </div>
      <div className='bg-white rounded-b-lg shadow-sm   p-10'>
        <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
          <span clas='text-green-500'>
            <svg
              className='h-5 text-primary'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              size={45}
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </span>
          <span className='tracking-wide text-xl'>เกี่ยวกับร้านค้า</span>
        </div>
        <br />
        <div className='text-gray-700 border-2 rounded-3xl p-4'>
          <div className='grid md:grid-cols-2 text-sm '>
            <div className='grid grid-cols-2 '>
              <div className='px-4 py-2 font-semibold'>ชื่อ:</div>
              <div className='px-4 py-2'>{supplier?.firstName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>นามสกุล:</div>
              <div className='px-4 py-2'>{supplier?.lastName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>เบอร์โทรศัพท์:</div>
              <div className='px-4 py-2'>{supplier?.phoneNumber}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>Line ID:</div>
              <div className='px-4 py-2'>{supplier?.Supplier?.lineId}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>ที่อยู่:</div>
              <div className='px-4 py-2'>{supplier?.address}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>รายละเอียดร้านค้า:</div>
              <div className='px-4 py-2'>{supplier?.Supplier?.description}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>E-mail:</div>
              <div className='px-4 py-2'>
                <a className='text-blue-800' href='mailto:jane@example.com'>
                  {supplier?.email}
                </a>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>ชื่อบัญชี:</div>
              <div className='px-4 py-2'>{supplier?.Supplier?.bankName}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>เลขที่บัญชี:</div>
              <div className='px-4 py-2'>{supplier?.Supplier?.bankAccount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyShopPage;
