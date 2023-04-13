import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/mission/missionSlice';
import ErrorPage from './pages/ErrorPage';
import MissionsPage from './pages/MissionsPage';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import SharedLayout from './pages/SharedLayout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
