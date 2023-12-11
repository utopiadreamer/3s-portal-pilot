'use client';

import { configureStore} from '@reduxjs/toolkit';
//"Ducks" pattern or feature-based structure.
// Store

  const store = configureStore({
    reducer: {
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;