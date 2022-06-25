import { useState, useEffect } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

function AddPropertyRow({ property, setProperties, order, index }) {
  console.log(property);

  //   const [name, setName] = useState("");
  //   const [unitPrice, setUnitPrice] = useState("");
  //   const [productCode, setProductCode] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [unitWeightKg, setUnitWeightKg] = useState("");
  //   const [categoryId, setCategoryId] = useState("");

  const handleDeleteNewProduct = (order) => {
    setProperties(property.filter((el) => el.order !== order));
  };

  //   key={el.order}
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
      <tr className=''>
        <td className='pl-6'>{order}</td>
        <td className='w-[40px] h-[40px] pl-6'>
          <button
            type='button'
            onClick={() => {
              handleDeleteNewProduct(order);
            }}
          >
            <HiOutlineTrash />
          </button>
        </td>
        <td className='w-[360px] '>
          <input
            className='p-4 w-[350px] h-10'
            onChange={(event) =>
              setProperties((property) => [
                ...property.slice(0, index),
                {
                  ...property[index],
                  key: event.target.value,
                },
                ...property.slice(index + 1),
              ])
            }
            value={property.key}
            type='text'
            placeholder='คุณสมบัติ'
          />
        </td>
        <td className='w-[360px] '>
          <input
            className='p-2 w-[350px] h-10 '
            onChange={(event) =>
              setProperties((property) => [
                ...property.slice(0, index),
                {
                  ...property[index],
                  value: event.target.value.trim(),
                },
                ...property.slice(index + 1),
              ])
            }
            value={property.value}
            type='text'
            placeholder='รายละเอียด'
          />
        </td>
      </tr>
    </>
  );
}

export default AddPropertyRow;
