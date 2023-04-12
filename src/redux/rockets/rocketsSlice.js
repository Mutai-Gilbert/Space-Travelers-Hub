import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';
export const getrocket = createAsyncThunk(
  'rocket/getrocket', async () => {
    const res = await axios.get(url);
    const response = res.data;
    return response;
  },
);

const initialState = {
  rocket: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducer: {
    toggleRocket: (state, { payload }) => {
      payload.toString();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getrocket.fulfilled, (state, action) => {
      const newRocket = action.map(
        ({
          id, rocketName, rocketDescription, rocketImage,
        }) => ({
          id,
          rocketName,
          rocketDescription,
          rocketImage,
          reserved: false,
        }),
      );
      return { ...state, rocketList: newRocket };
    });
  },
});

export const { toggleRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
