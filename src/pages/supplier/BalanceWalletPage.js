import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { useState } from 'react';

function BalanceWalletPage() {
  const [openTransactions, setOpenTransactions] = useState(false);

  const mockArr = [
    {
      date: '2022-06-19',
      type: 'รับ',
      description: 'รายรับจาก order 200425EAN',
      amount: 100.0,
      status: 'completed',
    },
    {
      date: '2022-06-18',
      type: 'รับ',
      description: 'รายรับจาก order 200325EAN',
      amount: 900.0,
      status: 'completed',
    },
    {
      date: '2022-06-17',
      type: 'รับ',
      description: 'รายรับจาก order 200435EAN',
      amount: 1000.0,
      status: 'completed',
    },
    {
      date: '2022-06-16',
      type: 'รับ',
      description: 'รายรับจาก order 200335EAN',
      amount: 1000.0,
      status: 'completed',
    },
    {
      date: '2022-06-15',
      type: 'ถอน',
      description: 'การถอนไปยังเลขที่บัญชี (*1234)',
      amount: 2000.0,
      status: 'In Progress',
    },
    {
      date: '2022-06-14',
      type: 'ถอน',
      description: 'การถอนไปยังเลขที่บัญชี (*1235)',
      amount: 1000.0,
      status: 'completed',
    },
  ];
  return (
    <div>
      <div className='mt-16'>
        <div className=''>
          <h1 className='text-4xl text-center font-bold'>Seller Balance</h1>
          <br />
          <p className='text-info text-center text-4xl font-bold'>
            ฿ 24,000.00
          </p>
        </div>
        <br />
        <br />
        <div className='flex justify-center'>
          <div className='flex gap-10'>
            <div className='hover:scale-105 border-2 h-56 w-56 rounded flex flex-col items-center justify-center hover:border-warning'>
              <div className=' text-warning '>
                {<RiMoneyDollarBoxLine size={100} />}
              </div>
              <h2 className='text-ghost text-bold text-xl'>Withdrawals</h2>
            </div>
            <div
              onClick={() =>
                setOpenTransactions((openTransactions) => !openTransactions)
              }
              className='hover:scale-105 flex-col border-2 h-56 w-56 rounded flex items-center justify-center hover:border-info'
            >
              <div className='text-info'>{<TiDocumentText size={100} />}</div>
              <h2 className='text-ghost text-bold text-xl'>Transactions</h2>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className=''>
        <table
          className={`${openTransactions === false ? 'hidden' : ''} table p-2`}
        >
          <thead>
            <tr className='text-center'>
              <th className=''>ลำดับ</th>
              <th className=''>วันที่</th>
              <th className=''>ประเภท</th>
              <th className=''>รายละเอียด</th>
              <th className=''>จำนวนเงิน</th>
              <th className=''>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {mockArr.map((el, idx) => {
              return (
                <>
                  <tr className='text-center hover' key={idx}>
                    <td className='text-center'>{idx + 1}</td>
                    <td>{el.date}</td>
                    {el.type === 'รับ' ? (
                      <>
                        <td className='text-success'>{el.type}</td>
                      </>
                    ) : (
                      <>
                        <td className='text-error'>{el.type}</td>
                      </>
                    )}
                    <td>
                      <button className='  text-ghost hover:text-blue-900 hover:scale-105'>
                        {el.description}
                      </button>
                    </td>

                    <td className='flex justify-end'>{el.amount.toFixed(2)}</td>
                    {el.status === 'completed' ? (
                      <>
                        <td className='text-success'>{el.status}</td>
                      </>
                    ) : (
                      <>
                        <td className='text-warning'>{el.status}</td>
                      </>
                    )}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

export default BalanceWalletPage;
