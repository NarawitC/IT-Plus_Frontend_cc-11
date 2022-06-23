import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AdminLayout from '../pages/AdminLayout';
import Clientlayout from '../pages/Clientlayout';
import Landingpage from '../pages/Userpages/Landingpage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Clientlayout />}>
        <Route path='' element={<Landingpage />} />
      </Route>
      <Route path='/seller' element={<AdminLayout />}></Route>
      <Route path='/admin' element={<AdminLayout />}></Route>
      <Route path='*' element={useNavigate('/')} />
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
