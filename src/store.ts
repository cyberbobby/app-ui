import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

/*const initialState = {
  products: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};*/

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.DEV_TOOLS === 'true',
});

export type Store = ReturnType<typeof rootReducer>;
export default store;
