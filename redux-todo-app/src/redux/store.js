import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

export default store;