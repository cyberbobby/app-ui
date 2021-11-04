import rootReducer from './reducers';
import { combineReducers } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { userSigninReducer } from './reducers/userReducers';
import { products } from './reducers/products';
import { productDetails } from './reducers/productDetails';

/*const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  products: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};*/

/*const reducer = combineReducers({
  productList: products,
  productDetails: productDetails,
  cart: createReducer,
  userSignin: userSigninReducer,
});*/

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.DEV_TOOLS === 'true',
});

export type Store = ReturnType<typeof rootReducer>;
export default store;
