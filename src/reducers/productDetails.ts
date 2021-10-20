import { ProductDetailsState, Product } from '../constants/interfaces';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/actionTypes';

const initialState: ProductDetailsState = {
  product: {} as Product,
  loading: false,
  error: '',
};

export const productDetails = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...initialState, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...initialState, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...initialState, loading: false, error: action.payload };
    default:
      return state;
  }
};
