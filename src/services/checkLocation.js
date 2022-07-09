export const checkLocation = (location) => {
  const isAdminPromotionPage = location.pathname.startsWith('/admin/promotion');
  const isAdminOrderPage = location.pathname.startsWith('/admin/order');
  const isAdminProductPage = location.pathname.startsWith('/admin/product');
  const isAdminSelectedProductPage = location.pathname
  const isClientCartPage = location.pathname.startsWith('/cart');
  return {
    isAdminPromotionPage,
    isAdminOrderPage,
    isAdminProductPage,
    isClientCartPage,
  };
};
