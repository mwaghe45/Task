import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [reduxThunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
