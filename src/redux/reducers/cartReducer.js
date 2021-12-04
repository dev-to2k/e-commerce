const initialState = {
  list: [],
};

export const cartReducer = (state = initialState, action) => {
  const { list } = state;
  switch (action.type) {
    case 'ADD_TO_CART':
      // if the item is already in the cart, we just group items together
      if (list.find((item) => item.id === action.payload.id)) {
        const newList = list.map((item) =>
          item.id === action.payload.id ? item : state
        );
        return {
          ...state,
          list: [...newList],
        };
      }

      localStorage.setItem('cart', JSON.stringify(list.concat(action.payload)));

      return {
        ...state,
        list: [...list, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const newList = list.filter((item) => item.id !== action.payload.id);
      // localStorage.setItem('cart', JSON.stringify(newList));
      return {
        ...state,
        list: [...newList],
      };
    case 'CLEAR_CART':
      localStorage.setItem('cart', JSON.stringify([]));
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
