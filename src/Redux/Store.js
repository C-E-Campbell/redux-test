import { createStore } from 'redux';
import textReducer from './Reducers/text';

const store = createStore(textReducer);
export default store;
