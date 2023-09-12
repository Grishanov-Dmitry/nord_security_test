import { configureStore } from '@reduxjs/toolkit';

import serversReducer from './src/features/serverSlice';
import loginReducer from './src/features/loginSlice';

export const store = configureStore({
  reducer: {
    servers: serversReducer,
    login: loginReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;