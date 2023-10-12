const initialState = [];

const outfitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOP_UPLOAD":
      return {
        ...state,
        top: action.top,
      };
    case "BOTTOM_UPLOAD":
      return {
        ...state,
        bottom: action.bottom,
      };
    case "OUTER_UPLOAD":
      return {
        ...state,
        outer: action.outer,
      };
    case "SHOIES_UPLOAD":
      return {
        ...state,
        shoes: action.shoes,
      };
    default:
      return state;
  }
};

export { outfitReducer };
