import { createStore } from 'redux';
import Reducer from './reducer/reducer';

let store = createStore(Reducer);

export default store;
