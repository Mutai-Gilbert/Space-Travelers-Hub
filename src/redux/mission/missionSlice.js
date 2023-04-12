import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  if (response.status !== 200) return [];
  const data = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return data;
});

const initialState = {
  missions: [],
};

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      return { missions: [...newState] };
    },
    leaveMissions(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      return { missions: [...newState] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
  },
});

export const { joinMissions, leaveMissions } = missions.actions;
export default missions;
