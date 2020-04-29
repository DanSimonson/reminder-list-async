import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import ReminderReducer from "./ReminderReducer";

const Store = createStore(
  ReminderReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//console.log("store: ", Store.getState());
export default Store;
