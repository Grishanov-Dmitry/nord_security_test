import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IServer } from '../types';

interface ServerState {
  servers: IServer[]
}

const initialState: ServerState = {
  servers: []
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    saveServers: (state, action: PayloadAction<IServer[]>) => {
      state.servers = action.payload;
    },
  },
})

export const { saveServers } = serverSlice.actions;

export default serverSlice.reducer;
