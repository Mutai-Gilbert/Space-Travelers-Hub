import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';
export const getrocket = createAsyncThunk(
  'rocket/getrocket', async () => {
    const res = await fetch(url);
    const response = await res.json();
    return response;
  },
);

const initialState = {
  rocket: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    toggleReserved: (state, action) => {
      const newState = state.rocket.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rocket: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getrocket.fulfilled, (state, action) => {
      if (state.rocket.length === 0) {
        const newRocket = action.payload.map(
          ({
            id, rocket_name: rocketName, description, flickr_images: Image,
          }) => ({
            id,
            rocketName,
            description,
            Image: Image[0],
            reserved: false,
          }),
        );
        return { ...state, rocket: newRocket };
      }
      return state;
    });
  },
});

export const rocketActions = rocketSlice.actions;
export default rocketSlice.reducer;
