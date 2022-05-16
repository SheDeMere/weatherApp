import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const logger = createLogger({
    diff: true,
    collapsed: true
})
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))