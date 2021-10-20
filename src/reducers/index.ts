//import { AnyRecord } from 'dns';
import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';

const combinedReducers = combineReducers({
  cart,
  products,
});

const rootReducer = (state: any, action: any) =>
  combinedReducers(state, action);

export default rootReducer;
