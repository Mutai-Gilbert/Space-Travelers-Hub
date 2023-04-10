import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () => (
  <main>
    <Navbar />
    <Outlet />
  </main>
);
export default SharedLayout;
