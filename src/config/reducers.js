import { combineReducers, createStore } from "redux";

/* my reducer */
import ducks from "../ducks/index";

const reducers = combineReducers({
  ...ducks
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
