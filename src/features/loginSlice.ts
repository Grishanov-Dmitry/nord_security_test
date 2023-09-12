import { createSlice } from '@reduxjs/toolkit';

import { fetchToken } from './actions';

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    })
  },
})

export const { logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
