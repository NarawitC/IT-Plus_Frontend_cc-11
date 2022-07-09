import { useState, useEffect } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

function AddPropertyRow({ property, properties, setProperties, order, index }) {
  console.log({ property: property });
  console.log({ order: order });

  //   const [name, setName] = useState("");
  //   const [unitPrice, setUnitPrice] = useState("");
  //   const [productCode, setProductCode] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [unitWeightKg, setUnitWeightKg] = useState("");
  //   const [categoryId, setCategoryId] = useState("");

  const handleDeleteNewProduct = (order) => {
    setProperties(properties.filter((el) => el.order !== order));
  };

  //   topic={el.order}
  // onChange={(e) =>
  //     setProducts((prev) => [
  //       ...prev.slice(0, index),
  //       {
  //         ...prev[index],
  //         productName: e.target.value,
  //       },
  //       ...prev.slice(index + 1),
  //     ])
  //   }

  return (
    <>
      <tr className='flex items-center gap-2'>
        <td className='pl-4 '>{index + 1}</td>
        <td className='w-[360px] '>
          <input
            className='p-4 w-[350px] h-10 border-2 hover:border-info rounded-lg '
            onChange={(event) =>
              setProperties((property) => [
                ...property.slice(0, index),
                {
                  ...property[index],
                  topic: event.target.value,
                },
                ...property.slice(index + 1),
              ])
            }
            value={property.topic}
            type='text'
            placeholder='คุณสมบัติ'
          />
        </td>
        <td className='w-[450px]'>
          <input
            className='p-2 w-[450px] h-10 border-2 hover:border-warning rounded-lg '
            onChange={(event) =>
              setProperties((property) => [
                ...property.slice(0, index),
                {
                  ...property[index],
                  description: event.target.value,
                },
                ...property.slice(index + 1),
              ])
            }
            value={property.description}
            type='text'
            placeholder='รายละเอียด'
          />
        </td>
        <td className='w-[40px] h-[40px] text-center flex items-center justify-center'>
          <button
            type='button'
            onClick={() => {
              handleDeleteNewProduct(order);
            }}
          >
            <div className='hover:text-error'>
              <HiOutlineTrash />
            </div>
          </button>
        </td>
      </tr>
    </>
  );
}

export default AddPropertyRow;
