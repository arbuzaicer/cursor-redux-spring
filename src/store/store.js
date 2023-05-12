import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AuthReducer from "./reducers/auth.reducer";
import UsersReducer from "./reducers/users.reducer";
import CounterReducer from "./reducers/counter.reducer";

const reducers = {
  authReducer: AuthReducer,
  usersReducer: UsersReducer,
  counterReducer: CounterReducer,
};

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({});

const middlewares = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));

export default store;

// redux
// store - сховище даних
// reducer - це репрезентація даних для store
// reducer - функція яка повертає дані (об'єкт)

// reducer function is function that takes 2 args: state and action
// and return modified state
// reducer offenly has written using switch case approach
// actions - some actions that impact on reducers
// actions - це об'єкт в якому має бути обов'язкова властивість type action = {type: ""}
// dispatch - process that running with store changes

// selector - function that takes some specific data from global reducer
