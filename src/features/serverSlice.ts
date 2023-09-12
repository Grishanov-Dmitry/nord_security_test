import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IServer } from '../types';
import { fetchToken } from './actions';

interface ServerState {
  serverList: IServer[] | null;
  token: string | null;
}

const initialState: ServerState = {
  serverList: null,
  token: null,
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    saveServers: (state, action: PayloadAction<IServer[]>) => {
      state.serverList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    })
  },
})

export const { saveServers } = serverSlice.actions;

export default serverSlice.reducer;
