import AddProductForm from '../../components/supplier/form/AddProductForm';
import { ReRenderContext } from '../../contexts/ReRenderContext';
import { useContext, useState } from 'react';
import axios from '../../config/axios';
import {
  createProduct,
  createProductPropertyByProductId,
} from '../../apis/supplier/supplierProduct';

function DynamicAddProductPage() {
  const { setReRender } = useContext(ReRenderContext);
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addNewProductSupplier = async ({
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
  }) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('stock', stock);
    formData.append('categoryId', categoryId);
    formData.append('subCategoryId', subCategoryId);
    formData.append('mainPicture', mainPicture); //parameter ตัวแรกเป็น key
    formData.append('subPicture1', subPicture1);
    formData.append('subPicture2', subPicture2);
    formData.append('subPicture3', subPicture3);
    formData.append('subPicture4', subPicture4);

    const res = await createProduct(formData);
    console.log(res.data.product);
    await createProductPropertyByProductId(res.data.product.id, properties);
    setReRender((reRender) => !reRender);
    setIsLoading(false);
  };

  return (
    <div>
      <AddProductForm addNewProductSupplier={addNewProductSupplier} />
    </div>
  );
}

export default DynamicAddProductPage;
