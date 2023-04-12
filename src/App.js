import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import SharedLayout from './pages/SharedLayout';

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default App;
