import { createStore, combineReducers } from 'redux';
import textReducer from './Reducers/text';

const reducer = combineReducers({ textReducer });
const store = createStore(reducer);
export default store;
