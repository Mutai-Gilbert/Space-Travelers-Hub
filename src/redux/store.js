import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
