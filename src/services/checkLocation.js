export const checkLocation = (location) => {
  const isAdminPromotionPage = location.pathname.startsWith('/admin/promotion');
  const isAdminOrderPage = location.pathname.startsWith('/admin/order');
  const isAdminProductPage = location.pathname.startsWith('/admin/product');
  return { isAdminPromotionPage, isAdminOrderPage, isAdminProductPage };
};
