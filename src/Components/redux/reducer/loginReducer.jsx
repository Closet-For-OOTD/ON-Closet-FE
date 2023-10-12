const initialState = {
  userId: "",
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userId: action.userId,
        isLogin: action.isLog,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        isLogin: action.isLog,
      };
    default:
      return state;
  }
};

export { loginReducer };
