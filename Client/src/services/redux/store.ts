import { configureStore } from '@reduxjs/toolkit';
import fakeBandsReducer from './reducer';

const store = configureStore({
  reducer: {
    fakeBands: fakeBandsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;