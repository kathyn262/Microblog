import postReducer from './postReducer.js';
import titleReducer from './titleReducer.js';
import { combineReducers } from "../../node_modules/redux";

export default combineReducers({
  postReducer,
  titleReducer,
});