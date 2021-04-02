import {combineReducers, createStore } from "redux";
import { countReducer } from "./count-reducer";

const RootReducers = combineReducers({
    count: countReducer
})
export type RootStateType = ReturnType<typeof RootReducers>

export const store = createStore(RootReducers)