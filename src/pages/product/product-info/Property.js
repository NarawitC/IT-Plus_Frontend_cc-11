import IconProperty from '../../../components/Client/products/productInfo/icons/product-spec.svg';

function Property() {
  const mockProperties = [
    { topic: 'ประเภทพาเนล', discription: 'IPS' },
    { topic: 'ขนาดหน้าจอ', discription: '42.5"' },
    { topic: 'รูปแบบหน้าจอ', discription: 'จอแบน' },
    { topic: 'อัตราส่วนจอ', discription: '16:9' },
    { topic: 'อัตรารีเฟรช', discription: '60Hz' },
    { topic: 'อัตราการตอบสนอง', discription: '5ms' },
    { topic: 'การเชื่อมต่อภาพ', discription: 'Display Port, HDMI' },
    {
      topic: 'การเชื่อมต่ออื่นๆ',
      discription: 'USB Passthrough, Aux, USB Type-C ',
    },
    { topic: 'แขนจับที่รองรับ', discription: 'VESA mount' },
    { topic: 'ฟีเจอร์เสริม', discription: 'Flicker Free, Low Blue Light' },
  ];

  return (
    <div
      className='w-2/3
    m-auto border-2 my-8  rounded-t-lg '
    >
      <div className='flex  bg-gray-300  h-10 px-6 rounded-lg gap-4 '>
        <div className='my-auto '>
          <img src={IconProperty} />
        </div>
        <div className='text-[20px] my-auto font-bold'>คุณสมบัติสินค้า</div>
      </div>
      <div className='px-8 '>
        <div>
          <div className='grid-cols-3 grid px-4 py-4 '>
            {mockProperties.map((el, idx) => (
              <>
                <div key={idx}>{el.topic}</div>
                <div className='col-span-2'>{el.discription}</div>
              </>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Property;
