const initialState = {
  modal_open: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal_open: action.open,
      };

    default:
      return state;
  }
};

export { modalReducer };
