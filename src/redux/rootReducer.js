import { combineReducers } from "redux";
import   todos from "./todoSlice"

export const rootReducer = combineReducers({
	todos
})