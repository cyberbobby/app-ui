import { ProductsState, Product } from '../constants/interfaces';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/actionTypes';

const initialState: ProductsState = {
  products: [] as Product[],
  loading: false,
  error: '',
};

export const products = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...initialState, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...initialState, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...initialState, loading: false, error: action.payload };
    default:
      return initialState;
  }
};
