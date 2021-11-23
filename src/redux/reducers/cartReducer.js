const initialState = {
  list: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
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
