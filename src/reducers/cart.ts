import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/actionTypes';
import { Product, CartState } from '../constants/interfaces';

const initialState: CartState = {
  products: [] as Product[],
};

export const cart = (state = initialState, action: any) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.products.find((x) => x === item.product);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) => (x === existItem ? item : x)),
        };
      } else {
        return { ...state, products: [...state.products, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((x) => x !== action.payload),
      };
    default:
      return initialState;
  }
};
