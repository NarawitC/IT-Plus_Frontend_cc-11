import EditSelectedProductForm from '../../pages/supplier/EditSelectedProductForm';
import { ReRenderContext } from '../../contexts/ReRenderContext';
import { useContext } from 'react';
import axios from '../../config/axios';
import { updateProduct } from '../../apis/supplier/supplierProduct';
import { useNavigate } from 'react-router-dom';

function DynamicEditSelectedProductPage() {
  const navigate = useNavigate();
  const { setReRender } = useContext(ReRenderContext);

  const updateProductByProductId = async ({
    productId,
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
  }) => {
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

    const res = await updateProduct(productId, formData);
    console.log(res);
    navigate('/supplier/my-product');
    // await createProductPropertyByProductId(res.data.product.id, properties);
    // setReRender((reRender) => !reRender);
  };

  return (
    <div>
      <EditSelectedProductForm
        updateProductByProductId={updateProductByProductId}
      />
    </div>
  );
}

export default DynamicEditSelectedProductPage;
