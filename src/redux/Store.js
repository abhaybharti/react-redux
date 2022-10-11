import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  Window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
