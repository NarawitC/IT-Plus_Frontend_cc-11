import { AiOutlineInfoCircle } from 'react-icons/ai';
function DynamicSelectedTransactionPage() {
  return (
    <div className=' p-10 rounded-3xl border-2 m-16'>
      <div className=''>
        <h1 className='text-4xl text-center font-bold'>
          Invoice หลักฐานการทำธุรกรรม
        </h1>
        <br />
        <p className='text-info text-center text-4xl font-bold'>฿ 10,000.00</p>
        <br />
        <p className=' text-center text-2xl text-gray-600'>IN PROGRESS</p>
      </div>
      <br />
      <div className='flex gap-2'>
        <div className='text-info'>{<AiOutlineInfoCircle size={30} />}</div>
        <p className='text-gray-600'>
          เงินถอนจะถูกจะถูกโอนไปยังบัญชีธนาคารที่ท่านผูกไว้กับเราภายใน 1-2
          วันทำการ
        </p>
      </div>
      <div className='text-gray-700'>
        <br />
        <div className='flex justify-between text-2xl'>
          <p className='flex items-center'>โอนไปยังบัญชี</p>
          <div className='flex flex-col'>
            <p>ธนาคาร ซิตี้</p>
            <p>120923****</p>
          </div>
        </div>
        <br />
        <div className='flex justify-between text-2xl'>
          <p>โอนจากบัญชี</p>
          <p>IT Plus</p>
        </div>
        <br />
        <div className='flex justify-between text-2xl'>
          <p>จำนวนเงินถอน</p>
          <p>10000.00</p>
        </div>
        <br />
        <div className='flex justify-between text-2xl'>
          <p>ค่าธรรมเนียม</p>
          <p>0.00</p>
        </div>
        <br />
        <div className='flex justify-between text-2xl'>
          <p>รวม</p>
          <p className=''>10000.00</p>
        </div>
        <br />
        <div className='flex justify-between text-2xl'>
          <p>Transaction ID</p>
          <p className=''>067897678856754321</p>
        </div>
      </div>
    </div>
  );
}

export default DynamicSelectedTransactionPage;
