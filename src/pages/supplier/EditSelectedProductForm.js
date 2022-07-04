import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineNumber } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import { SupplierProductContext } from '../../contexts/Supplier/SupplierProductContext';
import { SupplierAuthContext } from '../../contexts/Supplier/SupplierAuthContext';
import defaultPic from '../../pictures/defaultPic.png';
import { getProductById } from '../../apis/supplier/supplierProduct';
import { TiDeleteOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';
import { getAllCategoryInfo } from '../../apis/supplier/supplierCategory';
import { TbListDetails } from 'react-icons/tb';
import { MdAddAPhoto } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
function EditSelectedProductForm({ updateProductByProductId }) {
  const modalRef = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const { role } = useContext(SupplierAuthContext);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [stock, setStock] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [properties, setProperties] = useState([]);
  const [subCatOptions, setSubCatOptions] = useState([]);
  console.log(subCatOptions);
  const [categories, setCategories] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
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
    stock: 0,
    subCategoryId: 1,
    subPicture1: '',
    subPicture2: '',
    subPicture3: '',
    subPicture4: '',
  });

  const inputElMain = useRef();
  const [mainPicture, setMainPicture] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const inputEl1 = useRef();
  const [subPicture1, setSubPicture1] = useState(null);
  const [subPictureURL1, setSubPictureURL1] = useState('');
  console.log(subPictureURL1);

  const inputEl2 = useRef();
  const [subPicture2, setSubPicture2] = useState(null);
  const [subPictureURL2, setSubPictureURL2] = useState('');

  const inputEl3 = useRef();
  const [subPicture3, setSubPicture3] = useState(null);
  const [subPictureURL3, setSubPictureURL3] = useState('');

  const inputEl4 = useRef();
  const [subPicture4, setSubPicture4] = useState(null);
  const [subPictureURL4, setSubPictureURL4] = useState('');

  const handleGetSelectedProduct = async () => {
    try {
      const {
        data: { product },
      } = await getProductById(+params.productId);
      // console.log(res.data);
      console.log(product);
      setSelectedProductObj(product);
      console.log('BEFORE', product.mainPicture);
      setImageURL(product.mainPicture);
      setSubPictureURL1(product.subPicture1);
      setSubPictureURL2(product.subPicture2);
      setSubPictureURL3(product.subPicture3);
      setSubPictureURL4(product.subPicture4);
      console.log(product.subPicture4);
      setProductName(product.productName);
      setCategoryId(product.categoryId);
      setSubCategoryId(product.subCategoryId);
      setPrice(product.price);
      setBrand(product.brand);
      setStock(product.stock);
      setDescription(product.description);
      // console.log(selectedProductObj.SubCategory.subCategoryName);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   handleGetSelectedProduct();
  // }, [params.productId, selectedProductObj?.SubCategory?.subCategoryName]);
  useEffect(() => {
    handleGetSelectedProduct();
  }, []);

  const handleDeleteProductByProductId = (productId) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleGetAllCategory = async () => {
      try {
        const res = await getAllCategoryInfo();
        console.log(res.data);
        setCategories(res.data.categories);
        console.log(categoryId);
        const selectedSubCategoryArray = categories.find(
          (el) => el.id === +categoryId
        );
        if (selectedSubCategoryArray) {
          setSubCatOptions(selectedSubCategoryArray);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllCategory();
  }, [categoryId]);

  // useEffect(() => {
  //   if (mainPicture === null) {
  //     console.log('GGGGGGG');
  //     return;
  //   }
  //   // const newImageURL = URL.createObjectURL(mainPicture);
  //   // console.log('AFTER', newImageURL);
  //   // setImageURL(newImageURL);

  //   if (subPicture1 !== null) {
  //     return;
  //   }
  //   const newSubPicture1URL = URL.createObjectURL(subPicture1);
  //   console.log(newSubPicture1URL);
  //   setSubPictureURL1(newSubPicture1URL);

  //   if (subPicture2 === null) {
  //     return;
  //   }
  //   const newSubPicture2URL = URL.createObjectURL(subPicture2);
  //   console.log(newSubPicture2URL);
  //   setSubPictureURL2(newSubPicture2URL);

  //   if (subPicture3 === null) {
  //     return;
  //   }
  //   const newSubPicture3URL = URL.createObjectURL(subPicture3);
  //   // console.log(newSubPicture3URL);
  //   setSubPictureURL3(newSubPicture3URL);

  //   if (subPicture4 === null) {
  //     return;
  //   }
  //   const newSubPicture4URL = URL.createObjectURL(subPicture4);
  //   // console.log(newSubPicture4URL);
  //   setSubPictureURL4(newSubPicture4URL);
  // }, [subPicture1, subPicture2, subPicture3, subPicture4]); //ให้re render ทุกครั้งที่มีการอัพโหลดรูปภาพตัวใหม่
  // console.log({ imageURL: imageURL });

  const onMainPictureChange = (event) => {
    if (event.target.files.length !== 0) {
      // setMainPicture(event.target.files[0]);
      const newImageURL = URL.createObjectURL(event.target.files[0]);
      console.log(newImageURL);
      setImageURL(newImageURL);
      setMainPicture(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------

  const onSubPicture1Change = (event) => {
    if (event.target.files.length !== 0) {
      // setSubPicture1(event.target.files[0]);
      const newSubPicture1URL = URL.createObjectURL(event.target.files[0]);
      setSubPictureURL1(newSubPicture1URL);
      setSubPicture1(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------

  const onSubPicture2Change = (event) => {
    if (event.target.files.length !== 0) {
      const newSubPicture2URL = URL.createObjectURL(event.target.files[0]);
      setSubPictureURL2(newSubPicture2URL);
      setSubPicture2(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------

  const onSubPicture3Change = (event) => {
    if (event.target.files.length !== 0) {
      const newSubPicture3URL = URL.createObjectURL(event.target.files[0]);
      setSubPictureURL3(newSubPicture3URL);
      setSubPicture3(event.target.files[0]);
    }
  };
  //-------------------------------------------------------------------------------
  const onSubPicture4Change = (event) => {
    if (event.target.files.length !== 0) {
      const newSubPicture4URL = URL.createObjectURL(event.target.files[0]);
      setSubPictureURL4(newSubPicture4URL);
      setSubPicture3(event.target.files[0]);
    }
  };

  // const onSubPicture4Change = (event) => {
  //   if (event.target.files[0]) {
  //     const newSubPicture4URL = URL.createObjectURL(event.target.files[0]);
  //     setSubPicture4(newSubPicture4URL);
  //     console.log(newSubPicture4URL);
  //     console.log(event.target.files[0]);
  //   }
  // };

  return (
    <>
      {role === 'SUPPLIER' ? (
        <>
          <form className='pt-5'>
            <br />
            <div className='flex justify-around items-center'>
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
            <div className=''>
              <br />
              <div className='flex justify-center flex-col '>
                <div
                  className=' relative justify-center p-2 rounded-md cursor-pointer 
              '
                  role='button'
                  onClick={() => inputElMain.current.click()}
                >
                  <div className='flex justify-center flex-col items-center'>
                    <div className='flex flex-col justify-center'>
                      {imageURL ? (
                        <>
                          <div className='border-2 rounded-lg p-4 hover:border-secondary'>
                            <img
                              className='object-contain w-auto h-60'
                              src={imageURL}
                              alt='imageURL'
                            />
                            <div className=' flex justify-end gap-2 items-center  '>
                              <p>แก้ไขรูปภาพ</p>
                              {<BsCamera size={35} />}
                            </div>
                          </div>
                          <br />
                          <p className='text-center'>รูปหลัก</p>
                        </>
                      ) : (
                        <>
                          <div className='flex flex-col'>
                            <div className='border-2  hover:border-secondary w-60 h-60 rounded-md flex justify-center items-center '>
                              {<MdAddAPhoto />}
                            </div>
                            <p className='text-center'>รูปหลัก</p>
                          </div>
                        </>
                      )}
                    </div>
                    <br />
                  </div>
                  <div className='flex justify-center'>
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden w-[350px] '
                      ref={inputElMain}
                      onChange={onMainPictureChange}
                    />
                  </div>
                </div>
                <br />

                <div className='flex gap-2 justify-center'>
                  <div
                    className='relative flex flex-col justify-center   p-2 rounded-md 
              '
                    role='button'
                    onClick={() => inputEl1.current.click()}
                  >
                    {subPictureURL1 ? (
                      <>
                        <div className='border-2 rounded-lg p-4 hover:border-primary'>
                          <img
                            className='h-60 w-auto object-contain  p-4 '
                            src={subPictureURL1}
                            alt='subPictureURL1'
                          />
                          <div className=' flex justify-end gap-2 items-center  '>
                            <p>แก้ไขรูปภาพ</p>
                            {<BsCamera size={35} />}
                          </div>
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 1`}</p>
                      </>
                    ) : (
                      <>
                        <div className='border-2  hover:border-primary w-32 h-32 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 1`}</p>
                      </>
                    )}
                  </div>
                  <div className='flex justify-center'>
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden '
                      ref={inputEl1}
                      onChange={onSubPicture1Change}
                    />
                  </div>
                  <div
                    className=' flex flex-col relative justify-center   p-2 rounded-md 
              '
                    role='button'
                    onClick={() => inputEl2.current.click()}
                  >
                    {subPictureURL2 ? (
                      <>
                        <div className='border-2 rounded-lg p-4 hover:border-primary'>
                          <img
                            className='h-60 w-auto object-contain  p-4 '
                            src={subPictureURL2}
                            alt='subPictureURL2'
                          />
                          <div className=' flex justify-end gap-2 items-center  '>
                            <p>แก้ไขรูปภาพ</p>
                            {<BsCamera size={35} />}
                          </div>
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 2`}</p>
                      </>
                    ) : (
                      <>
                        <div className='border-2  hover:border-primary w-32 h-32 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 2`}</p>
                      </>
                    )}
                  </div>
                  <input
                    type='file'
                    accept='image/*'
                    className='hidden  '
                    ref={inputEl2}
                    onChange={onSubPicture2Change}
                  />
                  <div
                    className=' flex flex-col relative justify-center  p-2 rounded-md 
              '
                    role='button'
                    onClick={() => inputEl3.current.click()}
                  >
                    {subPictureURL3 ? (
                      <>
                        <div className='border-2 rounded-lg p-4 hover:border-primary'>
                          <img
                            className='h-60 w-auto object-contain  p-4 '
                            src={subPictureURL3}
                            alt='subPictureURL3'
                          />
                          <div className=' flex justify-end gap-2 items-center  '>
                            <p>แก้ไขรูปภาพ</p>
                            {<BsCamera size={35} />}
                          </div>
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 3`}</p>
                      </>
                    ) : (
                      <>
                        <div className='border-2  hover:border-primary w-32 h-32 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 3`}</p>
                      </>
                    )}
                  </div>
                  <input
                    type='file'
                    accept='image/*'
                    className='hidden  '
                    ref={inputEl3}
                    onChange={onSubPicture3Change}
                  />
                  <div
                    className=' flex flex-col relative justify-center  p-2 rounded-md hover:border-primary
              '
                    role='button'
                    onClick={() => inputEl4.current.click()}
                  >
                    {subPictureURL4 ? (
                      <>
                        <div className='border-2 rounded-lg p-4 hover:border-primary'>
                          <img
                            className='h-60 w-auto object-contain  p-4 '
                            src={subPictureURL4}
                            alt='subPictureURL4'
                          />
                          <div className=' flex justify-end gap-2 items-center  '>
                            <p>แก้ไขรูปภาพ</p>
                            {<BsCamera size={35} />}
                          </div>
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 4`}</p>
                      </>
                    ) : (
                      <>
                        <div className='border-2  hover:border-primary w-32 h-32 rounded-md flex justify-center items-center '>
                          {<MdAddAPhoto />}
                        </div>
                        <br />
                        <p className='text-center'>{`รูป 4`}</p>
                      </>
                    )}
                  </div>
                  <input
                    type='file'
                    accept='image/*'
                    className='hidden'
                    ref={inputEl4}
                    onChange={onSubPicture4Change}
                  />
                </div>

                {/* <div
          className=' flex flex-col relative justify-center border-2  p-2 rounded-md 
              '
          role='button'
          onClick={() => inputEl.current.click()}
        >
          <div className='flex justify-center items-center gap-2'>
            {imageURLs.length > 0 ? (
              imageURLs.map((el, index) => {
                return (
                  <div className='flex flex-col'>
                    <div className='border-2  hover:border-primary-focus w-40 h-40 rounded-md flex justify-center items-center'>
                      <img
                        className='w-40 h-40 rounded-md object-fit p-2'
                        src={el}
                        alt={index}
                      />
                    </div>
                    <p className='text-center'>{`Image ${index + 1}`}</p>
                  </div>
                );
              })
            ) : (
              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <div className='border-2  hover:border-primary-focus w-32 h-32 rounded-md flex justify-center items-center '>
                    {<MdAddAPhoto />}
                  </div>
                </div>
              </div>
            )}
          </div>
          <br />
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
              <input
                type='file'
                multiple
                accept='image/*'
                className='hidden w-[350px] '
                ref={inputEl}
                onChange={onImageChange}
              />
              <p className='btn btn-secondary'>กรุณาอัพโหลดรูปสินค้า</p>
            </div>
          </div>
        </div> */}
                <br />
              </div>
              <br />
            </div>
            <div
              className='flex justify-end items-center pr-4  gap-2 cursor-pointer  hover:text-info'
              onClick={() => {
                setIsEdit((isEdit) => !isEdit);
              }}
            >
              <div className=''>{<FiEdit size={35} />}</div>
              <p className='text '>แก้ไขรายละเอียดสินค้า</p>
            </div>
            <div className='gap-2 p-4 grid  mb-6 lg:grid-cols-2'>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='productName'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    ชื่อสินค้า
                  </label>
                  <input
                    disabled={isEdit ? false : true}
                    type='text'
                    id='productName'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='ชื่อสินค้า'
                    required
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                  />
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='category'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    หมวดหมู่สินค้า
                  </label>
                  <select
                    disabled={isEdit ? false : true}
                    id='category'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                    value={categoryId}
                    onChange={(event) => {
                      setCategoryId(event.target.value);
                      console.log(categoryId);
                      const selectedSubCategoryArray = categories.find(
                        (el) => el.id === +categoryId
                      );
                      console.log(selectedSubCategoryArray);
                      // setSubCatOptions();
                    }}
                  >
                    <option className=''>กรุณาเลือกหมวดหมู่สินค้า</option>
                    {categories?.map((el) => {
                      return (
                        <>
                          <option value={el.id || 0}>
                            {el.categoryName || ''}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='subCategory'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    หมวดหมู่สินค้าย่อย
                  </label>
                  <select
                    disabled={isEdit ? false : true}
                    id='subCategory'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                    value={subCategoryId}
                    onChange={(event) => setSubCategoryId(event.target.value)}
                  >
                    <option className=''>กรุณาเลือกหมวดหมู่สินค้าย่อย</option>
                    <option value={1}>อุปกรณ์ไอที</option>
                    {subCatOptions.SubCategories?.map((el) => {
                      return (
                        <>
                          <option value={el.id || 0}>
                            {el.subCategoryName || ''}
                          </option>
                        </>
                      );
                    })}
                    {/* <option value='computer-notebook'>
              คอมพิวเตอร์และโน๊ตบุ๊ค
            </option>
            <option value='it-accessories'>อุปกรณ์ไอที</option>
            <option value='music-movie'>ดูหนัง ฟังเพลง</option> */}
                  </select>
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='price'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    ราคาสินค้า
                  </label>
                  <input
                    disabled={isEdit ? false : true}
                    type='text'
                    id='price'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='ราคาสินค้า'
                    required
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='brand'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    แบรนด์สินค้า
                  </label>
                  <input
                    disabled={isEdit ? false : true}
                    type='text'
                    id='brand'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='แบรนด์สินค้า'
                    required
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                  />
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center'>
                  <label
                    htmlFor='amount'
                    className='block mb-2 text-sm font-medium text-gray-1200 '
                  >
                    stock
                  </label>
                  <input
                    disabled={isEdit ? false : true}
                    type='text'
                    id='amount'
                    className=' bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='stock'
                    required
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
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
                    {selectedProductObj?.Properties.map((el, index) => {
                      return (
                        <>
                          <tr className=''>
                            <td className='text-center'>{index + 1}</td>
                            <td className=''>
                              <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                                {el?.topic || ''}
                              </div>
                            </td>
                            <td>
                              <div className='border-2 hover:border-info rounded-lg h-10 p-2 flex items-center'>
                                {el?.description || ''}
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
            </div>
            <br />
            <div className=''>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex justify-start  w-[888px]'>
                  <label
                    for='description'
                    className='block mb-2 text-md font-medium text-gray-1200  '
                  >
                    รายละเอียดสินค้า
                  </label>
                </div>
                <textarea
                  disabled={isEdit ? false : true}
                  id='description'
                  className=' w-[888px] h-[150px] bg-gray-50 border border-gray-300 text-gray-1200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='รายละเอียดสินค้า'
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>
            <br />
            <div className='flex justify-center'>
              <div
                onClick={() => {
                  setIsEdit((isEdit) => !isEdit);
                }}
              >
                <label
                  htmlFor='my-modal-4'
                  className='btn btn-info modal-button flex gap-2 justify-center hover:scale-105 text-white'
                >
                  {<FiSave size={20} />}
                  <p className='font-bold'>บันทึก</p>
                </label>
              </div>
              <input
                type='checkbox'
                id='my-modal-4'
                className='modal-toggle'
                ref={modalRef}
              />
              <div className='modal'>
                <div className='modal-box'>
                  <label className='flex  flex-col justify-center items-center '>
                    <div className=' pt-2'>
                      <label
                        htmlFor='my-modal-4'
                        className='btn btn-sm btn-circle absolute right-2 top-2 '
                      >
                        ✕
                      </label>
                    </div>
                    <h1>
                      คุณยืนยันที่จะแก้ไขรายละเอียดสินค้าชิ้นนี้ตามนี้ใช่หรือไม่?
                    </h1>
                  </label>
                  <div className='modal-action flex justify-center'>
                    <button
                      type='button'
                      htmlFor='my-modal-4'
                      className='btn btn-primary w-24'
                      onClick={() => {
                        modalRef.current.click();
                      }}
                    >
                      ยกเลิก
                    </button>
                    <button
                      type='button'
                      htmlFor='my-modal-4'
                      className='btn btn-secondary w-24'
                      onClick={async () => {
                        await updateProductByProductId({
                          productId: selectedProductObj?.id,
                          productName,
                          description,
                          price,
                          brand,
                          stock,
                          categoryId,
                          subCategoryId,
                          mainPicture,
                          subPicture1,
                          subPicture2,
                          subPicture3,
                          subPicture4,
                          properties,
                        });
                        modalRef.current.click();
                      }}
                    >
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </form>
        </>
      ) : (
        <div className='flex gap-2 items-center'>
          <div className='text-warning'>{<RiErrorWarningLine size={25} />}</div>
          <h1 className='font-bold text-center text-xl'>
            กรุณาล็อคอินเพื่อตรวจสอบแก้ไขรายละเอียดสินค้าของท่าน
          </h1>
        </div>
      )}
    </>
  );
}

export default EditSelectedProductForm;
