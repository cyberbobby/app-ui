import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.DEV_TOOLS === 'true',
});

export type Store = ReturnType<typeof rootReducer>;
export default store;
