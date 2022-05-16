import {combineReducers} from "redux";
import {weatherReducer as weather} from "./weatherReducer";

export const rootReducer = combineReducers({
    weather
})