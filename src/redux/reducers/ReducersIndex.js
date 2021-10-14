import {combineReducers} from "redux";
import iteratorReducer from "./IteratorReducer";

const allReducers=combineReducers(
    {
        iteratorReducer,
    }
);

export default allReducers;
