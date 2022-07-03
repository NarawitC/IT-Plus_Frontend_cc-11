import { RiErrorWarningLine } from 'react-icons/ri';
import mainPicture from '../../productImg/item1.jpg';
import subPicture1 from '../../productImg/item1.jpg';
import subPicture2 from '../../productImg/item2.jpg';
import subPicture3 from '../../productImg/item3.jpg';
import subPicture4 from '../../productImg/item4.jpg';
import { AiOutlineNumber } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import { SupplierProductContext } from '../../contexts/Supplier/SupplierProductContext';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';
import defaultPic from '../../pictures/defaultPic.png';
import { getAllProductBySupplierId } from '../../apis/supplier/supplierProduct';
import { getProductById } from '../../apis/supplier/supplierProduct';
import { TiDeleteOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
function DynamicSelectedProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  // const mockObj = {
  //   stock: 2,
  //   price: 1149.0,
  //   productName: 'ลำโพง Edifier R1855DB Computer Speaker',
  //   status: 'PENDING',
  //   rejectReason: null,
  //   id: 101,
  //   brand: 'Edifier',
  //   category: 'computer-labtop',
  //   subCategory: 'จอคอม',
  //   description:
  //     'นอกจากไมค์คุณภาพสูงแล้วหูฟังเล่นเกม Logitech Pro X ยังมาพร้อมกับการปรับแต่งเสียงผ่าน Software ได้ในตัว ทำให้นอกจากใช้เล่นเกมแล้วยังสามารถเอาไปใช้ ดูหนังฟังเพลงได้อีกด้วย โดยการเซฟ Presets เอาไว้ อีกทั้งยังมี Sound Card มาช่วยดันคุณภาพเสียงให้สูงขึ้นได้อีกด้วย แถมบอดี้ของมันยังแข็งแรงด้วยวัสดุโลหะ และอลูมิเนียม ด้วยการผสมกันของวัสดุทั้งสองอย่างทำให้ได้หูฟังที่แข็งแรงและน้ำหนักเบาสุด ๆ ',
  // };
  const modalRef = useRef();

  const [openEditPrice, setOpenEditPrice] = useState(false);

  // const [openEditCategory, setOpenEditCategory] = useState(false);

  const [newPrice, setNewPrice] = useState((0.0).toFixed(2));
  const mockProperties = [
    { topic: 'ขนาดจอ', description: '24 นิ้ว' },
    { topic: 'ความละเอียด', description: '10M pixels' },
    { topic: 'สี', description: 'ดำ' },
  ];

  const { role } = useContext(SupplierAuthContext);
  const { supplierProducts, setSupplierProducts } = useContext(
    SupplierProductContext
  );
  const [selectedProductObj, setSelectedProductObj] = useState({
    Properties: [],
    Promotions: [],
    Category: {},
    SubCategory: {},
    brand: 'Test brand name',
    categoryId: 0,
    description: '',
    id: 0,
    mainPicture: '',
    price: 0,
    productName: '',
    stock: 999,
    subCategoryId: 2,
    subPicture1: '',
    subPicture2: '',
    subPicture3: '',
    subPicture4: '',
  });

  console.log(selectedProductObj);

  const handleGetSelectedProduct = async () => {
    try {
      const res = await getProductById(+params.productId);
      console.log(res.data);
      setSelectedProductObj(res.data.product);
      console.log(selectedProductObj.SubCategory.subCategoryName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetSelectedProduct();
  }, [params.productId, selectedProductObj?.SubCategory?.subCategoryName]);

  // const handleUpdateProductPriceByProductId = (newPrice, productId) => {
  //   try {
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleDeleteProductByProductId = (productId) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   handleUpdateProductPriceByProductId();
  // }, [openEditPrice]);

  return (
    <div className=''>
      {role === 'SUPPLIER' ? (
        <>
          <br />
          <div className='flex justify-between items-center'>
            <div className='flex flex-col p-7'>
              <h1 className='text-3xl font-bold'>
                {selectedProductObj?.productName || ''}
              </h1>
              <p className='text-2xl text-gray-600'>{`รหัสสินค้า: ${selectedProductObj?.id}`}</p>
            </div>
            <label
              htmlFor='my-modal-3'
              className='btn btn-secondary modal-button flex justify-center hover:scale-105'
            >
              {<TiDeleteOutline size={35} />}
              <p>ลบสินค้า</p>
            </label>
            <input
              type='checkbox'
              id='my-modal-3'
              className='modal-toggle'
              ref={modalRef}
            />
            <div className='modal'>
              <div className='modal-box'>
                <label className='flex  flex-col justify-center items-center '>
                  <div className=' pt-2'>
                    <label
                      htmlFor='my-modal-3'
                      className='btn btn-sm btn-circle absolute right-2 top-2 '
                    >
                      ✕
                    </label>
                  </div>
                  <h1>คุณยืนยันที่จะลบสินค้าชิ้นนี้ใช่หรือไม่?</h1>
                </label>
                <div className='modal-action flex justify-center'>
                  <button
                    type='button'
                    htmlFor='my-modal-3'
                    className='btn btn-primary w-24'
                    onClick={() => {
                      modalRef.current.click();
                    }}
                  >
                    ยกเลิก
                  </button>
                  <button
                    htmlFor='my-modal-3'
                    className='btn btn-secondary w-24'
                    onClick={() => {
                      handleDeleteProductByProductId(selectedProductObj.id);
                      modalRef.current.click();
                      navigate('/supplier/my-product');
                    }}
                  >
                    ลบสินค้า
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <div className=' border-2 hover:border-secondary  rounded-lg cursor-pointer'>
                <img
                  className='  h-80 w-auto object-contain p-8 '
                  src={selectedProductObj.mainPicture || defaultPic}
                  alt='mainPicture'
                />
                <div className=' flex justify-end gap-2 items-center  p-2 '>
                  <p>แก้ไขรูปภาพ</p>
                  {<BsCamera size={35} />}
                </div>
              </div>
              <br />
              <p className='text-center font-bold'>{`รูปหลัก`}</p>
            </div>
            <br />
          </div>
          <br />
          <br />
          <div className='flex gap-2 justify-center'>
            <div className='flex flex-col '>
              <div className='border-2 hover:border-primary  rounded-lg cursor-pointer'>
                <img
                  className='h-60 w-auto object-contain  p-4  '
                  src={selectedProductObj.subPicture1 || defaultPic}
                  alt='subPicture1'
                />
                <div className=' flex justify-end gap-2 items-center  p-2 '>
                  <p>แก้ไขรูปภาพ</p>
                  {<BsCamera size={35} />}
                </div>
              </div>
              <br />
              <p className='text-center font-bold'>{`รูป 1`}</p>
            </div>
            <div className='flex flex-col'>
              <div className='border-2 hover:border-primary  rounded-lg cursor-pointer'>
                <img
                  className='h-60 w-auto object-contain  p-4 '
                  src={selectedProductObj.subPicture2 || defaultPic}
                  alt='subPicture2'
                />
                <div className=' flex justify-end gap-2 items-center  p-2 '>
                  <p>แก้ไขรูปภาพ</p>
                  {<BsCamera size={35} />}
                </div>
              </div>
              <br />
              <p className='text-center font-bold'>{`รูป 2`}</p>
            </div>
            <div className='flex flex-col'>
              <div className='border-2 hover:border-primary  rounded-lg cursor-pointer'>
                <img
                  className='h-60 w-auto object-contain p-4 '
                  src={selectedProductObj.subPicture3 || defaultPic}
                  alt='subPicture3'
                />
                <div className=' flex justify-end gap-2 items-center  p-2 '>
                  <p>แก้ไขรูปภาพ</p>
                  {<BsCamera size={35} />}
                </div>
              </div>
              <br />
              <p className='text-center font-bold'>{`รูป 3`}</p>
            </div>
            <div className='flex flex-col'>
              <div className='border-2 hover:border-primary  rounded-lg cursor-pointer'>
                <img
                  className='h-60 w-auto object-contain  p-4  '
                  src={selectedProductObj.subPicture4 || defaultPic}
                  alt='subPicture4'
                />
                <div className=' flex justify-end gap-2 items-center  p-2 '>
                  <p>แก้ไขรูปภาพ</p>
                  {<BsCamera size={35} />}
                </div>
              </div>
              <br />
              <p className='text-center font-bold'>{`รูป 4`}</p>
            </div>
          </div>
          <br />
          <div className='gap-4  grid  mb-6 lg:grid-cols-2 p-4'>
            <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
              <label
                htmlFor='productName'
                className='block mb-2 text-sm font-bold text-gray-1200 '
              >
                ชื่อสินค้า
              </label>
              <p>{selectedProductObj.productName || ''}</p>
            </div>
            <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-bold text-gray-1200 '
              >
                หมวดหมู่สินค้า
              </label>
              <p>{selectedProductObj.Category.categoryName || ''}</p>
            </div>
            <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
              <label
                htmlFor='SubCategory'
                className='font-bold block mb-2 text-sm  text-gray-1200 '
              >
                หมวดหมู่สินค้าย่อย
              </label>
              <p>{selectedProductObj.SubCategory.subCategoryName || ''}</p>
            </div>
            <div className='flex justify-between border-2 hover:border-info rounded-lg p-2 items-center'>
              <div className='flex flex-col'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-bold text-gray-1200 '
                >
                  ราคาสินค้า
                </label>
                {openEditPrice === true ? (
                  <div className='flex gap-2'>
                    <input
                      type='number'
                      onChange={(event) => {
                        setNewPrice(+event.target.value);
                      }}
                      value={newPrice.toString()}
                      className='p-2 border-2 rounded-lg'
                    />
                    <button
                      type='button'
                      className='btn btn-success h-[44px] hover:scale-105'
                      onClick={() => {}}
                    >
                      ยืนยัน
                    </button>
                  </div>
                ) : (
                  <>
                    {/* <input
                      disabled
                      type='number'
                      value={
                        (+selectedProductObj.price).toFixed(2) ||
                        (0.0).toFixed(2)
                      }
                      className='p-2 border-2 rounded-lg'
                    /> */}
                    <p className=''>
                      {(+selectedProductObj.price).toFixed(2) ||
                        (0.0).toFixed(2)}
                    </p>
                  </>
                )}
              </div>
              <div
                className='flex items-center hover:scale-110 gap-2 cursor-pointer'
                onClick={() => {
                  setOpenEditPrice((openEditPrice) => !openEditPrice);
                }}
              >
                <p className='text '>แก้ไข</p>
                <div className=''>{<FiEdit size={35} />}</div>
              </div>
            </div>
            <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
              <label
                htmlFor='brand'
                className='block mb-2 text-sm font-bold text-gray-1200 '
              >
                แบรนด์สินค้า
              </label>
              <p>{selectedProductObj.brand || ''}</p>
            </div>
            <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg p-2'>
              <label
                htmlFor='stock'
                className='block mb-2 text-sm font-bold text-gray-1200 '
              >
                Stock
              </label>
              <p>{selectedProductObj.stock}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <table className='table'>
              <thead>
                <tr className=''>
                  <th className='w-[10px] '>ลำดับ</th>
                  <th className='w-[360px]'>คุณสมบัติ</th>
                  <th className='w-[450px]'>รายละเอียด</th>
                  <th className='w-[1px]'></th>
                </tr>
              </thead>
              <tbody>
                {selectedProductObj.Properties.map((el, index) => {
                  return (
                    <>
                      <tr className=''>
                        <td className='text-center'>{index + 1}</td>
                        <td className=''>
                          <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                            {el.topic || ''}
                          </div>
                        </td>
                        <td>
                          <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                            {el.description || ''}
                          </div>
                        </td>
                        <td></td>
                      </tr>
                      <br />
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
          <div className='flex flex-col justify-center border-2 hover:border-info rounded-lg m-4 p-2'>
            <label
              for='description'
              className='block mb-2 text-md font-bold text-gray-1200 '
            >
              รายละเอียดสินค้า
            </label>
            <p>{selectedProductObj.description || ''}</p>
            <br />
            <br />
          </div>
          <br />
          <br />
        </>
      ) : (
        <div className='flex gap-2 items-center'>
          <div className='text-warning'>{<RiErrorWarningLine size={25} />}</div>
          <h1 className='font-bold text-center text-xl'>
            กรุณาล็อคอินเพื่อตรวจสอบแก้ไขรายละเอียดสินค้าของท่าน
          </h1>
        </div>
      )}
    </div>
  );
}

export default DynamicSelectedProductPage;
