import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IServer } from '../types';

interface ServerState {
  serverList: IServer[] | null;
}

const initialState: ServerState = {
  serverList: null,
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    saveServers: (state, action: PayloadAction<IServer[]>) => {
      state.serverList = action.payload;
    }
  }
})

export const { saveServers } = serverSlice.actions;

export default serverSlice.reducer;
