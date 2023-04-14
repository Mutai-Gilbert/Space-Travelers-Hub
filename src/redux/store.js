import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missions from './mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missions.reducer,
    rocket: rocketReducer,
  },
});

export default store;
