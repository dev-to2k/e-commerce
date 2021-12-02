const initialState = {
  list: [],
};

export const cartReducer = (state = initialState, action) => {
  const { list } = state;

  switch (action.type) {
    case 'ADD_TO_CART':
      const id = action.payload.id;
      const isOld = list.map((item) => item.id).includes(id);
      let cartItems = null;
      if (isOld) {
        cartItems = list.map((item) => {
          if (item.id === id) {
            return {
              ...item,
            };
          }
          return item;
        });
      } else {
        cartItems = [...list, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        list: cartItems,
      };
    case 'REMOVE_FROM_CART':
      const newList = list.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        list: [...newList],
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
