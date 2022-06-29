import chair from '../../pictures/chair.png';
import keyboard from '../../pictures/keyboard.png';
import speaker from '../../pictures/speaker.png';
function DynamicProductPage() {
  const mockArr = [
    {
      mainPicture: speaker,
      stock: 2,
      price: 1149.0,
      productName: 'ลำโพง Edifier R1855DB Computer Speaker',
      status: 'PENDING',
      rejectReason: null,
      id: 1,
    },
    {
      mainPicture: chair,
      stock: 12,
      price: 3420.0,
      productName: 'เก้าอี้เพื่อสุขภาพ Bewell Embrace Ergonomic Chair',
      status: 'APPROVED',
      rejectReason: null,
      id: 2,
    },
    {
      mainPicture: keyboard,
      stock: 22,
      price: 8309.0,
      productName:
        'คีย์บอร์ด Keychron Q2 Knob Hot Swappable Mechanical Keyboard (EN/TH)',
      status: 'APPROVED',
      rejectReason: 'REJECT',
      id: 3,
    },
  ];
  return (
    <div>
      {' '}
      <table className='table p-2'>
        <thead>
          <tr className=''>
            <th>ลำดับ</th>
            <th></th>
            <th className='text-center'>รายการ</th>
            <th className='flex justify-center'>stock</th>
            <th>ราคาต่อหน่วย</th>
            <th className='text-center'>สถานะ</th>
            <th className='text-center'>หมายเหตุ</th>
          </tr>
        </thead>
        <tbody>
          {mockArr.map((el, index) => {
            return (
              <>
                <tr className='hover'>
                  <td className='text-center'>{index + 1}</td>
                  <td className=''>
                    <div className='flex items-center space-x-3  justify-center '>
                      <img
                        className='object-contain h-16 '
                        src={el.mainPicture}
                        alt='mainPic'
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className='font-bold'>{el.productName}</div>
                    </div>
                  </td>
                  <td>
                    <div className='flex justify-center'>
                      <p className='text-ghost '>{el.quantity}</p>
                    </div>
                  </td>
                  <th>
                    <div className='flex justify-end'>
                      <p className=''>{el.price.toFixed(2)}</p>
                    </div>
                  </th>
                  <th>
                    <div className='flex justify-end'>
                      <p className='text-center justify-end'>
                        {(el.quantity * +el.price).toFixed(2)}
                      </p>
                    </div>
                  </th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicProductPage;
