import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    rocket: []
};

const rocketSlice = createSlice({
    name: 'rocket',
    initialState
})

export default rocketSlice.reducer;