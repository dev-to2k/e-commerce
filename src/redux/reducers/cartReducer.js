const initialState = {
  list: [],
};

export const cartReducer = (state = initialState, action) => {
  const { list } = state;
  switch (action.type) {
    case 'ADD_TO_CART':
      // if the item is already in the cart, we just group items together
      if (list.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          list: list.map((item) => {
            return item.id === action.payload.id ? item : state;
          }),
        };
      }

      // if the item is not in the cart, we add it to the cart
      return {
        ...state,
        list: [...list, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        list: list.filter((item) => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
