export const actions = {
  SET_OPTIONS: "SET_OPTIONS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const alreadyExists = state.selectedOptions.filter((item) => item.id === action.payload.id).length > 0;
      if (!alreadyExists) {
        return { ...state, selectedOptions: [...state.selectedOptions, action.payload] };
      }
    }
    case actions.REMOVE_FROM_CART: {
      const newArray = state.selectedOptions.filter((item) => item.id !== action.payload.id);
      return { ...state, selectedOptions: newArray };
    }
    case actions.SET_OPTIONS: {
      return { ...state, loading: false, options: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
