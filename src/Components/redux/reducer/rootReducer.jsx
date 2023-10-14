import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { closetReducer } from "./closetReducer";
import { modalReducer } from "./modalReducer";
import { outfitReducer } from "./outfitReducer";
import { loginReducer } from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
  // loginReducer만 localstorage에 저장
  whitelist: ["loginReducer"],
};

const rootReducer = combineReducers({
  closetReducer,
  modalReducer,
  outfitReducer,
  loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
