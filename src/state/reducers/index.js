import { combineReducers } from "redux";
 import {chatsReducers} from "./chatsreducers";

const reducers = combineReducers({
    conversation: chatsReducers
})


export default reducers
