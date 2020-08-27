import { createStore, combineReducers } from 'redux';
import text from './Reducers/text';

const reducer = combineReducers(text);
const store = createStore(todoApp);
