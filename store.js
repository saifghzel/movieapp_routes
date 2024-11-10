import { combineReducers, createStore } from "redux";

import movieReducer from "./reducer";
import { userReducer } from "./userReducer";
import { FavMovReducer } from "./FavMovReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const movieStore = createStore(
  combineReducers({ userReducer, movieReducer, FavMovReducer }),
  devtools
);

export default movieStore;
