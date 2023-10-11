import { combineReducers } from "redux";
import { closetReducer } from "./closetReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
  closetReducer,
  modalReducer,
});

export default rootReducer;
