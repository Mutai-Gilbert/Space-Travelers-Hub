import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  if (response.status !== 200) return [];
  const data = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return data;
});

const leaveMissions = createAsyncThunk('missions/leaveMissions', async (missionId) => {
  const response = await axios.delete(`https://api.spacexdata.com/v3/missions/${missionId}`);
  return response.data;
});

const joinMissions = createAsyncThunk('missions/joinMisions', async (missionId) => {
  const response = await axios.post(`https://api.spacexdata.com/v3/missions/${missionId}`);
  return response.data;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
    builder.addCase(leaveMissions.fulfilled, (state, action) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: [...state.missions, newMission],
      };
    });

    builder.addCase(joinMissions.fulfilled, (state, action) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: [...state.missions, newMission],
      };
    });
  },
});

export { getMissions, leaveMissions, joinMissions };
export default missionSlice.reducer;
