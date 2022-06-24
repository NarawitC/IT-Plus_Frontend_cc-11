import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import DevStat from '../components/Admin/DevStat';
import AdminLayout from '../pages/AdminLayout';
import AdminOrder from '../pages/AdminOrder';

function Router() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminOrder />} />
        <Route path="editProduct" element={<DevStat />} />
        <Route path="*" element={useNavigate('/admin')} />
      </Route>
    </Routes>
  );
}
{
  /* <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ClientHeader />}>
        <Route path="" element={<HomePage />} />
        <Route path="friend" element={<FriendPage />} />
        <Route path="profile" element={<ProfilePage />} /> */
}

export default Router;
