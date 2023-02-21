

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import TodoReducer from "../Reducers/TodoReducers";

//first we initialise state
const initialState = {};

//create Reducers
const allReducers = combineReducers({
    Todo: TodoReducer
});

//create middleware
const middleware = [thunk];

//finally, create the store
const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;