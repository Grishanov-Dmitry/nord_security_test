import { configureStore } from '@reduxjs/toolkit';

import serversReducer from './src/features/serverSlice';

export const store = configureStore({
  reducer: {
    servers: serversReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;