import { createStore } from 'redux';
import allReducers from "./ReducersIndex";


export default function configureStore() {

    return createStore(allReducers);
}