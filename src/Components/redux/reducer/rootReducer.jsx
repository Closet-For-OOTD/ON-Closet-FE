import { combineReducers } from "redux";
import { closetReducer } from "./closetReducer";
import { modalReducer } from "./modalReducer";
import { outfitReducer } from "./outfitReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  closetReducer,
  modalReducer,
  outfitReducer,
  loginReducer,
});

export default rootReducer;
