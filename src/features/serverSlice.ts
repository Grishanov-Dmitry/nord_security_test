import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IServer } from '../types';
import { fetchToken } from './actions';

interface ServerState {
  servers: IServer[];
  token: string | null;
}

const initialState: ServerState = {
  servers: [],
  token: null,
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    saveServers: (state, action: PayloadAction<IServer[]>) => {
      state.servers = action.payload;
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
