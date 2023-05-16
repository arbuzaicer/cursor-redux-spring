import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AuthReducer from "./reducers/auth.reducer";

const reducers = {
  authReducer: AuthReducer,
};

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({});

const middlewares = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));

export default store;
