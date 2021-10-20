//import { AnyRecord } from 'dns';
import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';
import { productDetails } from './productDetails';

const combinedReducers = combineReducers({
  cart,
  products,
  productDetails,
});

const rootReducer = (state: any, action: any) =>
  combinedReducers(state, action);

export default rootReducer;
