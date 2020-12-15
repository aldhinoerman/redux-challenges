import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  technology: 'React'
};

export default createStore(reducer, initialState);