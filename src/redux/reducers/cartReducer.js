import { ActionType } from '../types';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case ActionType.REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case ActionType.CLEAR_CART:
      return { cartItems: action.payload.cartItems };
    case ActionType.INCREMENT_QUANTITY:
      return { cartItems: action.payload.cartItems };
    case ActionType.DECREMENT_QUANTITY:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
