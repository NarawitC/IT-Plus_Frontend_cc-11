import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';

function BalanceWalletPage() {
  return (
    <div>
      <div>
        <div>
          <h1 className='text-3xl text-center'>Seller Balance</h1>
          <p className='text-info text-center text-3xl'>฿ 24,000</p>
        </div>
        <br />
        <div>
          <div className='flex gap-10'>
            <div className='border-2 h-56 w-56 rounded flex flex-col items-center justify-center hover:border-warning'>
              <div className=' text-warning '>
                {<RiMoneyDollarBoxLine size={100} />}
              </div>
              <h2 className='text-ghost'>Withdrawals</h2>
            </div>
            <div className=' flex-col border-2 h-56 w-56 rounded flex items-center justify-center hover:border-info'>
              <div className='text-info'>{<TiDocumentText size={100} />}</div>
              <h2 className='text-ghost'>Transactions</h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default BalanceWalletPage;
