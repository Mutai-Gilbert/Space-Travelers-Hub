import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../redux/rockets/rocketsSlice';


const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission
  },
});

export default store;
