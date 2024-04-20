import { createStore } from "redux"
import { reducer, reducerCounter } from "../reducer/ReducerProductCounter"
const store = createStore(reducerCounter)
export default store;
