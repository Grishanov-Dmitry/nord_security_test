import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchToken } from './actions';
import { ITokenResponse } from '../api';

interface LoginState {
  token: string | null;
}

const initialState: LoginState = {
  token: null,
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
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    })
  },
})

export const { logoutUser, saveToken } = loginSlice.actions;

export default loginSlice.reducer;
