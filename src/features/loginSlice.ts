import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchToken } from './actions';
import { ITokenResponse } from '../types';

interface LoginState {
  token: string | null;
  isShowLoader: boolean;
}

const initialState: LoginState = {
  token: null,
  isShowLoader: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.token = null;
    },
    saveToken: (state, action: PayloadAction<ITokenResponse>) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.isShowLoader = true;
    }),
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isShowLoader = false;
    })
  },
})

export const { logoutUser, saveToken } = loginSlice.actions;

export default loginSlice.reducer;
