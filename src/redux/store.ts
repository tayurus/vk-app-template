import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from "./rootReducer";


export interface IRootState {

}

let middleware = [];
if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, thunkMiddleware, loggerMiddleware];
} else {
  middleware = [...middleware, thunkMiddleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
