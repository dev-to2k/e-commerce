import { ActionType } from '../types/index';

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += 1;
      alreadyExists = true;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, quantity: 1 });
  }
  dispatch({
    type: ActionType.ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== productId);
  dispatch({ type: ActionType.REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: ActionType.CLEAR_CART,
    payload: { cartItems: [] },
  });

  localStorage.removeItem('cartItems');
};

export const incrementQuantity = (productId) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((item) => {
    if (item.id === productId) {
      item.quantity += 1;
    }
  });
  dispatch({ type: ActionType.INCREMENT_QUANTITY, payload: { cartItems } });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const decrementQuantity = (productId) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((item) => {
    if (item.id === productId) {
      item.quantity -= 1;
      if (item.quantity < 1) item.quantity = 1;
    }
  });
  dispatch({ type: ActionType.DECREMENT_QUANTITY, payload: { cartItems } });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
