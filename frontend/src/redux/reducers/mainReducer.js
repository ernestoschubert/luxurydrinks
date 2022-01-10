import { combineReducers } from "redux";
import authReducer from './authReducers'
import productsReducer from "./productsReducer";

const mainReducer = combineReducers({
  authReducer,
  productsReducer
});

export default mainReducer;