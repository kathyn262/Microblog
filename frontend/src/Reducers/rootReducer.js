import posts from './postReducer';
import titles from './titleReducer';
import { combineReducers } from "../../node_modules/redux";

export default combineReducers({
  posts,
  titles,
});