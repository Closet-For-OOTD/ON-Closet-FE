const initialState = {
  clickClothId: 0,
  clothInfo: [],
};

const closetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLOTH_INFO":
      return {
        ...state,
        clothInfo: action.clothInfo,
      };

    case "CLICK_CLOTH":
      return {
        ...state,
        clickClothId: action.id,
      };
    default:
      return state;
  }
};

export { closetReducer };
