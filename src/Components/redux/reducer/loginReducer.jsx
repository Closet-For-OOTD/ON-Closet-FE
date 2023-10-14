const initialState = {
  userList: [],
  user: { userId: "" },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case "LOGIN":
      return {
        ...state,
        user: { userId: action.userId },
      };
    case "LOGOUT":
      return {
        ...state,
        user: { userId: null },
      };
    default:
      return state;
  }
};

export { loginReducer };
