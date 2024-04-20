
import { reducerCounter } from "./ReducerProductCounter";
import { combineReducers } from "redux";
import { reducerCastomer } from "./ReducerCastomer";
import { composeWithDevTools } from 'redux-devtools-extension';


export const rootReduser = combineReducers(
      {
            counter: reducerCounter,
            castomer: reducerCastomer,
      }
)
export const store = createStore(rootReduser, composeWithDevTools())
