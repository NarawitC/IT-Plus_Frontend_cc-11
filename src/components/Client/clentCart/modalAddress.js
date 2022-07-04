import { useEffect, useState } from 'react';
import homeIcon from '../../../../src/pictures/home-icon.svg';
import { getProvince } from '../../../apis/openapis/location';
import location from '../../../apis/fakeapi/locationProvince.json';
import { useOrderContext } from '../../../contexts/Client/orderContext';
import axios from 'axios';

function ModalAddress({ user }) {
  const { setCheckoutAddress } = useOrderContext();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [postcode, setPostcode] = useState(null);
  const [textaddress, setTextaddress] = useState('');

  useEffect(() => {
    setProvince(location[0]);
  }, []);

  useEffect(() => {
    if (province.amphure) {
      setDistrict(province.amphure[0]);
    }
  }, [province]);

  useEffect(() => {
    if (district.tambon) {
      setSubDistrict(district.tambon[0]);
    }
  }, [district]);

  useEffect(() => {
    if (subDistrict.zip_code) {
      setPostcode(subDistrict.zip_code);
    }
  }, [subDistrict]);

  return (
    <div className='modal'>
      <div className='modal-box w-4/5 '>
        <h3 className='font-bold text-lg'>
          <div className='flex'>
            <img src={homeIcon} className='px-2' />
            <div className='text-left'>
              <p className='text-[20px]'>เพิ่มที่อยู่ใหม่</p>
              <p className='text-[14px] text-gray-500 opacity-50'>
                ที่อยู่จัดส่งสินค้า
              </p>
            </div>
          </div>
        </h3>
        <div className='py-4'>
          <form>
            <div className='grid grid-cols-2 col gap-8'></div>
            <div>
              <p className='text-left'>ที่อยู่</p>
              <textarea
                className='textarea textarea-primary w-full'
                placeholder='กรอกที่อยู่'
                name='textaddress'
                value={textaddress}
                onChange={(e) => setTextaddress(e.target.value)}
              ></textarea>
            </div>
            <div className='grid grid-cols-2 w-full gap-8'>
              {/* -------------------------------------------------------------- */}
              <div>
                <p className='text-left'>จังหวัด</p>
                <select
                  className='border-2 w-full'
                  placeholder='กรอกจังหวัด'
                  onChange={(e) => {
                    setProvince(() => {
                      const province = location.find(
                        (item) => item.id === +e.target.value
                      );
                      return province;
                    });
                  }}
                >
                  {location.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_th}
                    </option>
                  ))}
                </select>
              </div>
              {/* ----------------------------------------------------------- */}
              <div>
                <p className='text-left'>เขต</p>
                <select
                  className='border-2 w-full'
                  placeholder='กรอกเขต'
                  onChange={(e) => {
                    setDistrict(() => {
                      const district = province.amphure.find(
                        (item) => item.id === +e.target.value
                      );
                      return district;
                    });
                  }}
                >
                  {province.amphure?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_th}
                    </option>
                  ))}
                </select>
              </div>
              {/* ------------------------------------------------------------- */}
            </div>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <p className='text-left'>ตำบล</p>
                <select
                  className='border-2 w-full'
                  placeholder='กรอกตำบล'
                  onChange={(e) => {
                    setSubDistrict(() => {
                      const subDistrict = district.tambon.find(
                        (item) => item.id === +e.target.value
                      );
                      return subDistrict;
                    });
                  }}
                >
                  {district.tambon?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_th}
                    </option>
                  ))}
                </select>
              </div>
              {/* -------------------------------------------------------------- */}
              <div>
                <p className='text-left'>รหัสไปรษณี</p>
                <div className='border-2 w-full text-left'>{postcode}</div>
              </div>
              {/* ----------------------------------------------------------------- */}
            </div>
          </form>
        </div>
        <div className='flex justify-end gap-8 px-4'>
          <div className='modal-action'>
            <label
              htmlFor='my-modal-5'
              className='btn bg-white border-none rounded-3xl mx-4 w-40'
            >
              ยกเลิก
            </label>
          </div>
          <div className='modal-action'>
            <label
              htmlFor='my-modal-5'
              className='btn bg-gradient-to-b border-none from-blue-400 to-blue-700 rounded-3xl w-40'
              onClick={() =>
                setCheckoutAddress((prev) => ({
                  textaddress,
                  province: province.name_th,
                  district: district.name_th,
                  subDistrict: subDistrict.name_th,
                  postcode,
                }))
              }
            >
              บันทึก
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddress;
