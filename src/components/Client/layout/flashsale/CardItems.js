import itemImg1 from '../../../../../src/productImg/item1.jpg';
import itemImg2 from '../../../../../src/productImg/item2.jpg';
import itemImg3 from '../../../../../src/productImg/item3.jpg';
import itemImg4 from '../../../../../src/productImg/item4.jpg';
import Ficon from '../../../../../src/icons/fs-1.svg';

function CardItems() {
  const products = [
    {
      id: 1,
      productName: 'จอคอม Acer Nitro VG240YAbmiix 23.8" VA Gaming',
      href: '#',
      price: 3990,
      discout: '400',
      imageSrc: itemImg1,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      productName: 'จอคอม Acer Nitro VG271Sbmiipx 27" IPS Gaming',
      href: '#',
      imageSrc: itemImg2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 6790,
      discout: '400',
    },
    {
      id: 3,
      productName: 'หูฟังไร้สาย Marshall Major IV Wireless Headphone',
      href: '#',
      imageSrc: itemImg3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 4940,
      discout: '400',
    },
    {
      id: 4,
      productName: 'โน๊ตบุ๊ค Acer Nitro AN515-45-R4U8 Gaming',
      href: '#',
      imageSrc: itemImg4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: 39900,
      discout: null,
    },
  ];
  return (
    <>
      <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 bg-yellow-400 flex justify-between mt-8 items-center rounded-xl py-4">
        <div>
          <img src={Ficon} />
        </div>
        <div className="flex text-black">
          <div>
            <div className="text-[20px] font-bold ">ราคาพิเศษ</div>
            <div>เหลือเวลาเพียง</div>
          </div>
          <div className="flex gap-4 items-center ml-4 mt-1">
            <div className="text-center">
              <div className="text-[20px] font-bold">01</div>
              <p>วัน</p>
            </div>
            <div className="text-center">
              <div className="text-[20px] font-bold">01</div>
              <p>ชั่วโมง</p>
            </div>
            <div className="text-center">
              <div className="text-[20px] font-bold">01</div>
              <p>นาที</p>
            </div>
            <div className="text-center">
              <div className="text-[20px] font-bold">01</div>
              <p>วินาที</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="max-w-2xl mx-auto py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map(
              ({
                price,
                discout,
                productName,
                imageSrc,
                imageAlt,
                id,
                href,
              }) => (
                <div
                  key={id}
                  className="group relative border-2 border-neutral-600 px-4 py-4 rounded-sm shadow-md"
                >
                  <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full  object-center   lg:w-full  "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {productName}
                        </a>
                      </h3>
                      <div>
                        {discout ? (
                          <div className="text-sm font-medium  py-2">
                            <p className="text-emerald-700 text-[20px] text-right">
                              THB {(price - discout).toLocaleString('en-US')}
                            </p>
                            <div className="flex pt-3">
                              {discout ? (
                                <p className="text-xs flex-1 text-red-600 opacity-50">
                                  Discount {discout} THB
                                </p>
                              ) : (
                                ''
                              )}
                              <p className="text-slate-800 line-through text-[10px] opacity-[0.5] text-right flex-1">
                                THB {price.toLocaleString('en-US')}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm font-medium  py-2">
                            <p className="text-emerald-700 text-[20px] text-right">
                              THB {price.toLocaleString('en-US')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardItems;
