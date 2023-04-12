import { configureStore } from '@reduxjs/toolkit';
import missions from './mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missions.reducer,
  },
});

export default store;
